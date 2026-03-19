/**
 * Maatje Pop interactive playground — timeline + 4 sensors + camera labels (client-side demo).
 */
(function () {
    'use strict';

    var POINTS = [
        { t: 0, mic: 12, light: 38, radar: 8, motion: 5 },
        { t: 18, mic: 18, light: 40, radar: 14, motion: 11 },
        { t: 26, mic: 38, light: 52, radar: 82, motion: 58 },
        { t: 34, mic: 50, light: 60, radar: 96, motion: 86 },
        { t: 42, mic: 32, light: 50, radar: 52, motion: 32 },
        { t: 52, mic: 15, light: 39, radar: 11, motion: 9 },
        { t: 58, mic: 22, light: 41, radar: 24, motion: 36 },
        { t: 66, mic: 40, light: 50, radar: 55, motion: 96 },
        { t: 74, mic: 28, light: 44, radar: 38, motion: 44 },
        { t: 100, mic: 13, light: 38, radar: 9, motion: 8 }
    ];

    var TIME_MAX_S = 12;
    var PLAY_MS = 28000;

    function lerp(a, b, u) {
        return a + (b - a) * u;
    }

    function interp(t) {
        t = Math.max(0, Math.min(100, t));
        var i;
        for (i = 0; i < POINTS.length - 1; i++) {
            if (t <= POINTS[i + 1].t) break;
        }
        var p0 = POINTS[i];
        var p1 = POINTS[i + 1];
        var u = p1.t === p0.t ? 0 : (t - p0.t) / (p1.t - p0.t);
        return {
            mic: lerp(p0.mic, p1.mic, u),
            light: lerp(p0.light, p1.light, u),
            radar: lerp(p0.radar, p1.radar, u),
            motion: lerp(p0.motion, p1.motion, u)
        };
    }

    function labelKeyAt(t) {
        if (t >= 24 && t <= 44) return 'enter';
        if (t >= 56 && t <= 78) return 'pickup';
        return null;
    }

    function t(lang, key) {
        return window.AA_I18N ? AA_I18N.t(lang, key) : key;
    }

    function currentLang() {
        return window.AA_I18N ? AA_I18N.currentLang() : 'nl';
    }

    function labelText(lang, key) {
        if (!key) return t(lang, 'playground.labelNone');
        if (key === 'enter') return t(lang, 'playground.labelEnter');
        if (key === 'pickup') return t(lang, 'playground.labelPickup');
        return t(lang, 'playground.labelNone');
    }

    function buildSparkPoints(prop, w, h, steps) {
        var pts = [];
        var pad = 2;
        for (var i = 0; i <= steps; i++) {
            var tt = (i / steps) * 100;
            var v = interp(tt)[prop];
            var x = (i / steps) * w;
            var y = h - pad - (v / 100) * (h - pad * 2);
            pts.push({ x: x, y: y });
        }
        return pts;
    }

    function pointsToPathD(pts) {
        if (!pts.length) return '';
        var d = 'M ' + pts[0].x.toFixed(1) + ' ' + pts[0].y.toFixed(1);
        for (var i = 1; i < pts.length; i++) {
            d += ' L ' + pts[i].x.toFixed(1) + ' ' + pts[i].y.toFixed(1);
        }
        return d;
    }

    function init() {
        var root = document.getElementById('playground');
        if (!root) return;

        var slider = document.getElementById('playground-slider');
        var playBtn = document.getElementById('playground-play');
        var labelEl = document.getElementById('playground-label-text');
        var exportEl = document.getElementById('playground-export');
        var sensorsEl = document.getElementById('playground-sensors');
        var layerIdle = document.getElementById('pg-scene-idle');
        var layerEnter = document.getElementById('pg-scene-enter');
        var layerPickup = document.getElementById('pg-scene-pickup');

        var sensorDefs = [
            { prop: 'mic', i18n: 'playground.sensorMicrophone', color: '#FF8C42' },
            { prop: 'light', i18n: 'playground.sensorLight', color: '#FFB07A' },
            { prop: 'radar', i18n: 'playground.sensorRadar', color: '#E67A30' },
            { prop: 'motion', i18n: 'playground.sensorMotion', color: '#fff' }
        ];

        var sparkW = 220;
        var sparkH = 36;
        var steps = 60;

        var playheads = [];

        sensorDefs.forEach(function (def) {
            var row = document.createElement('div');
            row.className = 'playground-sensor-row';
            var name = document.createElement('span');
            name.className = 'playground-sensor-name';
            name.setAttribute('data-pg-i18n', def.i18n);
            var val = document.createElement('span');
            val.className = 'playground-sensor-val';
            val.id = 'pg-val-' + def.prop;
            var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('class', 'playground-spark');
            svg.setAttribute('viewBox', '0 0 ' + sparkW + ' ' + sparkH);
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', sparkH);
            svg.setAttribute('preserveAspectRatio', 'none');
            svg.setAttribute('aria-hidden', 'true');
            var pathBg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathBg.setAttribute('class', 'playground-spark-fill');
            pathBg.setAttribute('fill', 'rgba(255,255,255,0.06)');
            var pathLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathLine.setAttribute('fill', 'none');
            pathLine.setAttribute('stroke', def.color);
            pathLine.setAttribute('stroke-width', '2');
            pathLine.setAttribute('stroke-linecap', 'round');
            pathLine.setAttribute('stroke-linejoin', 'round');
            var playLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            playLine.setAttribute('stroke', 'rgba(255,255,255,0.5)');
            playLine.setAttribute('stroke-width', '1');
            playLine.setAttribute('y1', '0');
            playLine.setAttribute('y2', String(sparkH));
            var pts = buildSparkPoints(def.prop, sparkW, sparkH, steps);
            pathLine.setAttribute('d', pointsToPathD(pts));
            var areaD = pointsToPathD(pts) + ' L ' + sparkW + ' ' + sparkH + ' L 0 ' + sparkH + ' Z';
            pathBg.setAttribute('d', areaD);
            svg.appendChild(pathBg);
            svg.appendChild(pathLine);
            svg.appendChild(playLine);
            row.appendChild(name);
            row.appendChild(val);
            row.appendChild(svg);
            sensorsEl.appendChild(row);
            playheads.push(playLine);
        });

        function refreshI18nSensorNames() {
            var lang = currentLang();
            root.querySelectorAll('[data-pg-i18n]').forEach(function (el) {
                var key = el.getAttribute('data-pg-i18n');
                if (key) el.textContent = t(lang, key);
            });
        }

        function setScene(lk) {
            if (!layerIdle || !layerEnter || !layerPickup) return;
            if (lk === 'pickup') {
                layerIdle.setAttribute('opacity', '0');
                layerEnter.setAttribute('opacity', '0');
                layerPickup.setAttribute('opacity', '1');
            } else if (lk === 'enter') {
                layerIdle.setAttribute('opacity', '0.22');
                layerEnter.setAttribute('opacity', '1');
                layerPickup.setAttribute('opacity', '0');
            } else {
                layerIdle.setAttribute('opacity', '1');
                layerEnter.setAttribute('opacity', '0');
                layerPickup.setAttribute('opacity', '0');
            }
        }

        function updatePlayheads(tt) {
            var x = (tt / 100) * sparkW;
            playheads.forEach(function (line) {
                line.setAttribute('x1', x.toFixed(1));
                line.setAttribute('x2', x.toFixed(1));
            });
        }

        function update(tt) {
            var lang = currentLang();
            var v = interp(tt);
            var lk = labelKeyAt(tt);
            var timeS = (tt / 100) * TIME_MAX_S;

            document.getElementById('pg-val-mic').textContent = Math.round(v.mic) + '%';
            document.getElementById('pg-val-light').textContent = Math.round(v.light) + '%';
            document.getElementById('pg-val-radar').textContent = Math.round(v.radar) + '%';
            document.getElementById('pg-val-motion').textContent = Math.round(v.motion) + '%';

            labelEl.textContent = labelText(lang, lk);
            setScene(lk);

            var exportObj = {
                time_s: Math.round(timeS * 100) / 100,
                camera_label: labelText(lang, lk),
                microphone_norm: Math.round(v.mic),
                light_norm: Math.round(v.light),
                radar_norm: Math.round(v.radar),
                motion_norm: Math.round(v.motion)
            };
            exportEl.textContent = JSON.stringify(exportObj, null, 2);

            updatePlayheads(tt);

            if (slider) {
                slider.setAttribute('aria-valuenow', String(Math.round(tt * 10) / 10));
                var secStr = timeS.toFixed(1).replace('.', ',');
                if (lang === 'en') secStr = timeS.toFixed(1);
                slider.setAttribute('aria-valuetext', secStr + ' s');
            }
        }

        var playing = false;
        var playStart = 0;
        var playStartT = 0;
        var rafId = null;

        function tick(now) {
            if (!playing) return;
            var elapsed = now - playStart;
            var tt = playStartT + (elapsed / PLAY_MS) * 100;
            if (tt >= 100) {
                tt = 0;
                playStart = now;
                playStartT = 0;
            }
            if (slider) slider.value = String(tt);
            update(tt);
            rafId = requestAnimationFrame(tick);
        }

        function setPlaying(on) {
            playing = on;
            if (rafId) cancelAnimationFrame(rafId);
            rafId = null;
            var lang = currentLang();
            if (playBtn) {
                playBtn.textContent = on ? t(lang, 'playground.pause') : t(lang, 'playground.play');
                playBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
            }
            if (on) {
                playStartT = parseFloat(slider.value, 10) || 0;
                playStart = performance.now();
                rafId = requestAnimationFrame(tick);
            }
        }

        if (slider) {
            slider.addEventListener('input', function () {
                if (playing) setPlaying(false);
                update(parseFloat(slider.value, 10) || 0);
            });
        }

        if (playBtn) {
            playBtn.addEventListener('click', function () {
                setPlaying(!playing);
            });
        }

        window.addEventListener('aa-langchange', function () {
            refreshI18nSensorNames();
            if (playBtn && !playing) {
                playBtn.textContent = t(currentLang(), 'playground.play');
            }
            var tt = slider ? parseFloat(slider.value) || 0 : 0;
            update(tt);
            if (playing) {
                playBtn.textContent = t(currentLang(), 'playground.pause');
            }
        });

        refreshI18nSensorNames();
        update(0);
    }

    document.addEventListener('DOMContentLoaded', init);
})();
