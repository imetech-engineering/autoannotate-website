/**
 * AutoAnnotate – NL / EN translations (flat keys via data-i18n="key")
 */
(function () {
    'use strict';

    const STR = {
        nl: {
            'meta.title': 'AutoAnnotate – label sensor-data automatisch 100× sneller',
            'meta.desc': 'U heeft sensoren en wilt een ML-model trainen — daarvoor hebt u gelabelde data nodig. AutoAnnotate levert de camerasystemen en koppelt beeld automatisch aan uw sensordata. 100× sneller dan handmatig. Lokaal, privacy by design.',

            'nav.product': 'Product',
            'nav.why': 'Waarom wij',
            'nav.cases': 'Voorbeelden',
            'nav.contact': 'Contact',
            'nav.demo': 'Demo',
            'nav.probleem': 'Probleem',
            'nav.oplossing': 'Oplossing',
            'nav.voordelen': 'Voordelen',
            'nav.toepassingen': 'Toepassingen',
            'nav.privacy': 'Privacy',
            'nav.bewijs': 'Bewijs',
            'nav.demoCta': 'Demo Aanvragen',

            'product.blockTitle': 'Wat AutoAnnotate doet',
            'product.lead': 'U heeft installaties of producten met sensoren en wilt een machinelearning-model trainen. Daarvoor hebt u gelabelde data nodig: per moment moet duidelijk zijn wát er gebeurde terwijl de sensor mat — anders kan het model niet leren. Handmatig video zoeken en koppelen aan sensorstreams kost weken en schaalt niet. AutoAnnotate levert de camerasystemen: wij plaatsen en configureren de camera\'s bij uw setup, nemen beeld en sensordata synchroon op, en koppelen automatisch wat er in beeld gebeurt aan uw metingen. Zo ontstaat een gelabelde dataset die u exporteert (o.a. CSV, JSON, COCO, YOLO) naar uw trainingspipeline.',
            'product.b1': 'Wij leveren de camerasystemen naast uw sensoren',
            'product.b2': 'Beeld en sensordata synchroon — automatisch gelabeld',
            'product.b3': 'Handmatig bijsturen waar nodig',
            'product.b4': 'Export naar formaten die uw ML-stack gebruikt',

            'why.title': 'Handmatig vs AutoAnnotate',
            'why.intro': 'Zoals bij veel handmatig werk: weken kwijt, hoge kosten bij extern labelen, en 5–15% fout door menselijke variatie. Hier het verschil.',

            'privacy.title': 'Privacy by design — lokaal',
            'privacy.short': 'Beeld van onze camerasystemen en uw sensordata blijven bij voorkeur bij u. AutoAnnotate is gebouwd om lokaal in uw omgeving te draaien — geen verplichte upload naar externe cloud. Privacy by design; u houdt regie over opslag en verwerking.',
            'market.inline': 'De vraag naar goede trainingsdata groeit; vaak is datakwaliteit de echte bottleneck voor uw model.',

            'hero.title': 'AutoAnnotate – label sensor-data automatisch 100× sneller',
            'hero.sub': 'Sensordata alleen vertelt niet wat er gebeurde. Voor een ML-model hebt u gelabelde data nodig. Wij leveren de camera\'s en regelen automatische koppeling aan uw sensoren.',
            'hero.cta1': 'Demo aanvragen',
            'hero.cta2': 'Hoe het werkt',
            'hero.privacyTagline': 'Lokaal · Privacy by design',

            'trust.line': 'Voor teams met sensordata uit installaties of producten — van zorg tot retail en robotica',

            'intro.title': 'Wat is AutoAnnotate?',
            'intro.p1': 'AutoAnnotate levert camerasystemen en software om sensordata automatisch van betekenis te voorzien. Beeld en sensoren lopen synchroon; het systeem koppelt wat er gebeurt aan uw metingen — zonder handmatig frame voor frame uitlijnen.',
            'intro.p2': 'In het kort: opnemen (Capture), herkennen (Detect), koppelen aan sensoren (Annotate), en exporteren (Export). Dataset, pipeline en sensordata: het komt samen in één keten naar uw model.',

            'glossary.title': 'Woorden die u tegenkomt',
            'glossary.d1t': 'Dataset',
            'glossary.d1b': 'Een verzameling voorbeelden (beeld + labels) waarmee u een model traint.',
            'glossary.d2t': 'Data pipeline',
            'glossary.d2b': 'De keten van ruwe metingen tot bestand dat uw trainingspipeline accepteert.',
            'glossary.d3t': 'Labelen / annotatie',
            'glossary.d3b': 'Aangeven wat er op een moment gebeurde, bijv. “aanraking” of “persoon in beeld”.',
            'glossary.d4t': 'Sensordata',
            'glossary.d4b': 'Meetwaarden van accelerometers, IMU’s, druk, afstand — vaak getallenreeksen zonder directe betekenis.',

            'cap.title': 'Wat kunt u ermee?',
            'cap.li1': 'Camerasystemen leveren en koppelen aan uw sensoren op één tijdlijn',
            'cap.li2': 'Gebeurtenissen in beeld herkennen en koppelen aan sensorregels',
            'cap.li3': 'Handmatige correctie waar nodig',
            'cap.li4': 'Exporteren naar CSV, JSON, COCO, YOLO en vergelijkbare formaten',
            'cap.li5': 'Datasets hergebruiken voor nieuwe modelversies',
            'cap.li6': 'Schaal verhogen zonder lineair meer labelaars in te huren',
            'cap.note': 'Of u nu zorgrobot, valdetectie of winkelgedrag doet: dezelfde pijplijn.',

            'problem.title': 'Handmatig labelen',
            'problem.titleSpan': 'houdt u tegen',
            'problem.headline': 'Handmatig labelen kost weken en fouten',
            'problem.intro': 'Slimme systemen leren van voorbeelden. Sensoren leveren ruwe data; die zeggen niet wát er gebeurde. Labels geven betekenis. Meestal doet men dat met de hand: traag en niet schaalbaar. AutoAnnotate levert de camera\'s en koppelt beeld automatisch aan uw sensordata.',
            'problem.p1t': 'Tijd',
            'problem.p1b': 'Weken tot maanden per project — kostbare specialisten vast op repetitief werk.',
            'problem.p2t': 'Kosten',
            'problem.p2b': 'Extern labelen of interne FTE’s: snel tienduizenden euros per grote dataset.',
            'problem.p3t': 'Kwaliteit',
            'problem.p3b': 'Mensen verschillen van elkaar; inconsistente labels ondermijnen uw model.',
            'counter.tijd': 'Tijdsbesparing',
            'counter.snel': 'Sneller itereren',
            'counter.100x': '100× sneller',
            'counter.nauw': 'Nauwkeurigheid',

            'solution.title': 'In vier stappen',
            'solution.headline': '4 simpele stappen',
            'solution.s1t': 'Capture',
            'solution.s1b': 'Wij leveren en installeren de camerasystemen en koppelen ze aan uw sensoren. Beeld en sensorstreams lopen synchroon op één tijdlijn.',
            'solution.s2t': 'Detect',
            'solution.s2b': 'Op het camerabeeld herkent AI-visie objecten, personen en gebeurtenissen.',
            'solution.s3t': 'Annotate',
            'solution.s3b': 'Wat er in beeld gebeurt, wordt automatisch gekoppeld aan de sensorwaarden op hetzelfde tijdstip.',
            'solution.s4t': 'Export',
            'solution.s4b': 'U exporteert de gelabelde dataset in standaardformaten (o.a. COCO, YOLO, CSV) naar uw modeltraining.',

            'benefits.title': 'Handmatig versus AutoAnnotate',
            'benefits.speed': 'Snelheid',
            'benefits.consistency': 'Consistentie',
            'benefits.scale': 'Schaal',
            'ben.s1m': 'Weken werk',
            'ben.s1a': 'Uren',
            'ben.s2m': 'Handmatige reviews',
            'ben.s2a': 'Direct klaar',
            'ben.c1m': '5–15% fout',
            'ben.c1a': '99%+ nauwkeurig',
            'ben.c2m': 'Wisselende kwaliteit',
            'ben.c2a': 'Herhaalbaar',
            'ben.sc1m': 'Team als plafond',
            'ben.sc1a': 'Opschalen zonder lineaire kosten',
            'ben.sc2m': 'Lineaire kosten',
            'ben.sc2a': 'Voorspelbaar',
            'ben.bar1': 'Verwerkingssnelheid',
            'ben.bar2': 'Nauwkeurigheid',
            'ben.bar3': 'Schaalbaarheid',

            'privacy.lead': 'Veel platforms willen uw data naar externe servers sturen. Camerabeeld en sensordata horen bij u te blijven.',
            'privacy.p1': 'AutoAnnotate draait bij voorkeur lokaal: verwerking in uw eigen omgeving, privacy by design.',
            'privacy.p2': 'Geen verplichte cloud-upload. U bepaalt waar en hoe data wordt opgeslagen.',
            'privacy.li1': 'Lokaal verwerken',
            'privacy.li2': 'Controle over opslag en toegang',
            'privacy.li3': 'Geen afhankelijkheid van externe annotatie-clouds',

            'market.title': 'Waarom dit nu urgent is',
            'market.p1': 'De markt voor data-annotatie groeit sterk; steeds meer budget gaat naar het klaarzetten van trainingsdata. Tegelijk zegt de sector: de kwaliteit van data is vaak de bottleneck — niet alleen het model.',
            'market.p2': 'Automatische annotatie groeit sneller dan puur handmatig werk. Wie nu investeert in schaalbare labeling, versnelt elke volgende modelronde.',
            'market.stat1': 'ML-tijd naar datavoorbereiding (indicatief)',
            'market.stat2': 'Groei automatisering annotatie (CAGR, indicatief)',
            'market.stat3': 'Organisaties zoeken oplossingen met sterke privacy (indicatief)',
            'market.source': 'Cijfers gebaseerd op branche-analyses; exacte bronnen op aanvraag.',

            'apps.title': 'Toepassingen',
            'apps.a1t': 'Zorgrobots',
            'apps.a1b': 'Sensoren op de robot of in de omgeving + onze camera-setup: automatisch gelabelde interactiedata voor training. Gebaren, houdingen en objecten.',
            'apps.a2t': 'Wearables & valdetectie',
            'apps.a2b': 'Wearable-sensoren gekoppeld aan camerabeeld (door ons geleverd): automatische labels voor valdetectie-algoritmes.',
            'apps.a3t': 'Retail-gedragsanalyse',
            'apps.a3b': 'Sensoren in de winkel + camera\'s van AutoAnnotate: gedrag en stromen automatisch labelen voor planning.',
            'apps.a4t': 'Veehouderij & koeien-health',
            'apps.a4b': 'Sensoren bij het vee + onze camera-opstelling: gedrag en gezondheidssignalen automatisch koppelen aan metingen.',

            'demo.title': 'In de praktijk',
            'demo.proofTitle': 'Bewezen bij SAR Maatje Pop',
            'demo.proofTitlePrefix': 'Bewezen bij',
            'demo.h': 'SAR Maatje Pop',
            'demo.p': 'Bij SAR Maatje Pop leveren wij de camera-oplossing naast de bestaande sensoren en robot. Zo wordt interactie automatisch gelabeld — de robot leert sneller wanneer iemand aandacht zoekt of rust wil.',
            'demo.m1': 'Sneller labelen',
            'demo.m2': 'Frames',
            'demo.m3': 'Nauwkeurigheid',

            'quote1': 'We hebben weken handwerk uitgespaard; de dataset is een stuk consistenter geworden.',
            'cite1': '— Ivo Mengerink',
            'quote2': 'Exporteren naar COCO paste direct in onze bestaande pipeline.',
            'cite2': '— R2R Engineering',
            'quote3': 'Wat maanden kostte, deden we in weken — met minder discussie over labels.',
            'cite3': '— Ontwikkelteam Maatje Pop',

            'cta.title': 'Klaar om sneller te labelen?',
            'cta.p': 'Plan een gratis demo en ontdek hoe AutoAnnotate uw data-pipeline versnelt.',
            'cta.btn': 'Plan demo',

            'form.title': 'Neem contact op',
            'form.name': 'Naam',
            'form.email': 'E-mail',
            'form.company': 'Organisatie',
            'form.msg': 'Waarmee kunnen we helpen?',
            'form.submit': 'Versturen',
            'form.sending': 'Verzenden…',
            'form.ok': 'Bedankt — we reageren zo snel mogelijk.',
            'form.err': 'Verzenden mislukt. Probeer later opnieuw of mail direct.',
            'form.req': 'Vul naam en e-mail in.',
            'form.cfg': 'Formulier nog niet geconfigureerd (zie README).',

            'footer.loc': 'Arnhem, Nederland',
            'footer.by': 'Een initiatief van',
            'footer.privacy': 'Lokaal verwerken · Privacy by design',
            'footer.copy': '© 2026 AutoAnnotate',

            'slide1': 'Eerste testimonial',
            'slide2': 'Tweede testimonial',
            'slide3': 'Derde testimonial',
        },
        en: {
            'meta.title': 'AutoAnnotate – label sensor data 100× faster, automatically',
            'meta.desc': 'You have sensors and need labelled data to train an ML model. AutoAnnotate supplies the camera systems and automatically links video to your sensor data. 100× faster than manual. Local, privacy by design.',

            'nav.product': 'Product',
            'nav.why': 'Why us',
            'nav.cases': 'Examples',
            'nav.contact': 'Contact',
            'nav.demo': 'Demo',
            'nav.probleem': 'Problem',
            'nav.oplossing': 'Solution',
            'nav.voordelen': 'Benefits',
            'nav.toepassingen': 'Applications',
            'nav.privacy': 'Privacy',
            'nav.bewijs': 'Proof',
            'nav.demoCta': 'Request Demo',

            'product.blockTitle': 'What AutoAnnotate does',
            'product.lead': 'You run installations or products with sensors and want to train a machine-learning model. You need labelled data: at each moment it must be clear what happened while the sensor was recording — otherwise the model cannot learn. Manually lining up video with sensor streams takes weeks and does not scale. AutoAnnotate supplies the camera systems: we deploy and configure cameras alongside your setup, capture image and sensor data in sync, and automatically link what happens on video to your readings. You export a labelled dataset (e.g. CSV, JSON, COCO, YOLO) into your training pipeline.',
            'product.b1': 'We supply camera systems alongside your sensors',
            'product.b2': 'Video and sensor data in sync — labelled automatically',
            'product.b3': 'Manual corrections where needed',
            'product.b4': 'Export to the formats your ML stack uses',

            'why.title': 'Manual vs AutoAnnotate',
            'why.intro': 'Like much manual work: weeks lost, high cost when outsourcing labelling, and 5–15% error from human variation. Here is the difference.',

            'privacy.title': 'Privacy by design — local',
            'privacy.short': 'Video from our camera systems and your sensor data stay with you whenever possible. AutoAnnotate runs locally in your environment — no forced cloud upload. Privacy by design; you control storage and processing.',
            'market.inline': 'Demand for good training data is growing; often data quality is the real bottleneck for your model.',

            'hero.title': 'AutoAnnotate – label sensor data 100× faster, automatically',
            'hero.sub': 'Sensor data alone does not say what happened. For an ML model you need labelled data. We supply the cameras and automate the link to your sensors.',
            'hero.cta1': 'Request demo',
            'hero.cta2': 'How it works',
            'hero.privacyTagline': 'Local · Privacy by design',

            'trust.line': 'For teams with sensor data from installations or products — care, retail, robotics, and more',

            'intro.title': 'What is AutoAnnotate?',
            'intro.p1': 'AutoAnnotate supplies camera systems and software to label sensor data automatically. Video and sensors stay in sync; the system links events to readings — without hand-aligning every frame.',
            'intro.p2': 'In short: capture, detect, annotate against sensors, then export. Datasets, pipelines and sensor streams come together in one chain to your model.',

            'glossary.title': 'Terms you will see',
            'glossary.d1t': 'Dataset',
            'glossary.d1b': 'A set of examples (images + labels) used to train a model.',
            'glossary.d2t': 'Data pipeline',
            'glossary.d2b': 'The path from raw measurements to files your training stack accepts.',
            'glossary.d3t': 'Labelling / annotation',
            'glossary.d3b': 'Marking what happened at a moment, e.g. “touch” or “person in frame”.',
            'glossary.d4t': 'Sensor data',
            'glossary.d4b': 'Readings from IMUs, pressure, distance — often time series without inherent meaning.',

            'cap.title': 'What can you do with it?',
            'cap.li1': 'Deploy camera systems and tie them to your sensors on one timeline',
            'cap.li2': 'Detect events on video and tie them to sensor segments',
            'cap.li3': 'Correct manually where needed',
            'cap.li4': 'Export to CSV, JSON, COCO, YOLO and similar',
            'cap.li5': 'Reuse datasets for new model iterations',
            'cap.li6': 'Scale without linear growth in labelling headcount',
            'cap.note': 'Care robots, fall detection, or store analytics — same pipeline.',

            'problem.title': 'Manual labelling',
            'problem.titleSpan': 'holds you back',
            'problem.headline': 'Manual labelling costs weeks and errors',
            'problem.intro': 'Smart systems learn from examples. Sensors give raw data; they don\'t say what happened. Labels add meaning. Usually that\'s done by hand: slow and hard to scale. AutoAnnotate supplies the cameras and links video to your sensor data automatically.',
            'problem.p1t': 'Time',
            'problem.p1b': 'Weeks or months per project — senior people stuck on repetitive work.',
            'problem.p2t': 'Cost',
            'problem.p2b': 'Outsourced labelling or internal FTEs: large datasets add up quickly.',
            'problem.p3t': 'Quality',
            'problem.p3b': 'Humans disagree; inconsistent labels hurt the model.',
            'counter.tijd': 'Time saved',
            'counter.snel': 'Faster iteration',
            'counter.100x': '100× faster',
            'counter.nauw': 'Accuracy',

            'solution.title': 'In four steps',
            'solution.headline': '4 simple steps',
            'solution.s1t': 'Capture',
            'solution.s1b': 'We supply and install the camera systems and connect them to your sensors. Video and sensor streams run in sync on one timeline.',
            'solution.s2t': 'Detect',
            'solution.s2b': 'AI vision detects objects, people, and events in the camera feed.',
            'solution.s3t': 'Annotate',
            'solution.s3b': 'What happens on video is automatically linked to sensor values at the same time.',
            'solution.s4t': 'Export',
            'solution.s4b': 'Export the labelled dataset in standard formats (e.g. COCO, YOLO, CSV) for model training.',

            'benefits.title': 'Manual vs AutoAnnotate',
            'benefits.speed': 'Speed',
            'benefits.consistency': 'Consistency',
            'benefits.scale': 'Scale',
            'ben.s1m': 'Weeks of work',
            'ben.s1a': 'Hours',
            'ben.s2m': 'Manual reviews',
            'ben.s2a': 'Ready to go',
            'ben.c1m': '5–15% error',
            'ben.c1a': '99%+ accurate',
            'ben.c2m': 'Variable quality',
            'ben.c2a': 'Repeatable',
            'ben.sc1m': 'Team as ceiling',
            'ben.sc1a': 'Scale without linear hires',
            'ben.sc2m': 'Linear cost',
            'ben.sc2a': 'Predictable',
            'ben.bar1': 'Processing speed',
            'ben.bar2': 'Accuracy',
            'ben.bar3': 'Scalability',

            'privacy.lead': 'Many platforms want your data on their servers. Camera video and sensor data should stay with you.',
            'privacy.p1': 'AutoAnnotate runs preferably on-premises: processing in your own environment, privacy by design.',
            'privacy.p2': 'No mandatory cloud upload. You decide where and how data is stored.',
            'privacy.li1': 'Process locally',
            'privacy.li2': 'Control over storage and access',
            'privacy.li3': 'No dependency on external annotation clouds',

            'market.title': 'Why this matters now',
            'market.p1': 'The data-annotation market is growing fast; more ML effort goes into preparing training data. The industry agrees: data quality is often the bottleneck — not just the model.',
            'market.p2': 'Automated annotation is outpacing purely manual work. Investing in scalable labelling speeds every next model cycle.',
            'market.stat1': 'ML time on data prep (indicative)',
            'market.stat2': 'Growth of automated annotation (CAGR, indicative)',
            'market.stat3': 'Organisations want solutions with strong privacy (indicative)',
            'market.source': 'Figures based on industry analyses; sources available on request.',

            'apps.title': 'Applications',
            'apps.a1t': 'Care and assistive robots',
            'apps.a1b': 'Sensors on the robot or in the environment plus our camera setup: automatically labelled interaction data for training.',
            'apps.a2t': 'Wearables & fall detection',
            'apps.a2b': 'Wearable sensors plus camera hardware we provide: automatic labels for fall-detection models.',
            'apps.a3t': 'Retail behaviour',
            'apps.a3b': 'In-store sensors plus AutoAnnotate cameras: label behaviour and footfall for planning.',
            'apps.a4t': 'Dairy & livestock health',
            'apps.a4b': 'Herd sensors plus our camera rig: link behaviour and health signals to measurements automatically.',

            'demo.title': 'In practice',
            'demo.proofTitle': 'Proven with SAR Maatje Pop',
            'demo.proofTitlePrefix': 'Proven with',
            'demo.h': 'SAR Maatje Pop',
            'demo.p': 'For SAR Maatje Pop we supply the camera solution alongside existing sensors and the robot. Interaction is labelled automatically so the robot learns faster when someone wants attention or quiet.',
            'demo.m1': 'Faster labelling',
            'demo.m2': 'Frames',
            'demo.m3': 'Accuracy',

            'quote1': 'We saved weeks of manual work; the dataset is much more consistent.',
            'cite1': '— Ivo Mengerink',
            'quote2': 'COCO export dropped straight into our existing pipeline.',
            'cite2': '— R2R Engineering',
            'quote3': 'What took months we did in weeks — with less debate over labels.',
            'cite3': '— Maatje Pop dev team',

            'cta.title': 'Ready to label faster?',
            'cta.p': 'Book a free demo and see how AutoAnnotate can speed up your data pipeline.',
            'cta.btn': 'Book demo',

            'form.title': 'Get in touch',
            'form.name': 'Name',
            'form.email': 'Email',
            'form.company': 'Organisation',
            'form.msg': 'How can we help?',
            'form.submit': 'Send',
            'form.sending': 'Sending…',
            'form.ok': 'Thanks — we will get back to you shortly.',
            'form.err': 'Send failed. Try again later or email us directly.',
            'form.req': 'Please enter name and email.',
            'form.cfg': 'Form not configured (see README).',

            'footer.loc': 'Arnhem, Netherlands',
            'footer.by': 'An initiative by',
            'footer.privacy': 'Local processing · Privacy by design',
            'footer.copy': '© 2026 AutoAnnotate',

            'slide1': 'First testimonial',
            'slide2': 'Second testimonial',
            'slide3': 'Third testimonial',
        },
    };

    function t(lang, key) {
        return (STR[lang] && STR[lang][key]) || STR.nl[key] || key;
    }

    function applyLang(lang) {
        if (!STR[lang]) lang = 'nl';
        document.documentElement.lang = lang;
        localStorage.setItem('aa_lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (key) el.textContent = t(lang, key);
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (key) el.setAttribute('placeholder', t(lang, key));
        });

        var mt = document.getElementById('meta-title');
        var md = document.getElementById('meta-desc');
        if (mt) mt.textContent = t(lang, 'meta.title');
        if (md) md.setAttribute('content', t(lang, 'meta.desc'));
        document.title = t(lang, 'meta.title');

        var og = document.querySelector('meta[property="og:title"]');
        if (og) og.setAttribute('content', t(lang, 'meta.title'));
        var ogd = document.querySelector('meta[property="og:description"]');
        if (ogd) ogd.setAttribute('content', t(lang, 'meta.desc'));

        document.querySelectorAll('.lang-btn').forEach(function (b) {
            b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
            b.classList.toggle('active', b.getAttribute('data-lang') === lang);
        });
    }

    function currentLang() { return localStorage.getItem('aa_lang') || 'nl'; }
    window.AA_I18N = { applyLang: applyLang, t: t, currentLang: currentLang, STR: STR };

    document.addEventListener('DOMContentLoaded', function () {
        var saved = localStorage.getItem('aa_lang') || 'nl';
        applyLang(saved);

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                applyLang(btn.getAttribute('data-lang'));
            });
        });
    });
})();
