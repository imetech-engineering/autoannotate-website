/**
 * AutoAnnotate – NL / EN translations (flat keys via data-i18n="key")
 */
(function () {
    'use strict';

    const STR = {
        nl: {
            'meta.title': 'AutoAnnotate – Maak AI training data snel, accuraat en schaalbaar.',
            'meta.desc': 'AutoAnnotate helpt teams om data te labelen, controleren en verbeteren met AI tools. Lokaal, privacy by design.',

            'nav.product': 'Product',
            'nav.why': 'Waarom wij',
            'nav.cases': 'Voorbeelden',
            'nav.contact': 'Contact',
            'nav.demo': 'Demo',
            'nav.probleem': 'Probleem',
            'nav.oplossing': 'Oplossing',
            'nav.voordelen': 'Voordelen',
            'nav.toepassingen': 'Toepassingen',
            'nav.team': 'Team',
            'nav.privacy': 'Privacy',
            'nav.bewijs': 'Bewijs',
            'nav.demoCta': 'Demo Aanvragen',
            'nav.contact': 'Contact',
            'nav.playground': 'Probeer het',

            'product.blockTitle': 'Wat AutoAnnotate doet',
            'product.lead': 'U hebt sensoren in een machine, robot of gebouw en wilt dat een slim systeem ervan leert. Daarvoor hebt u voorbeelden nodig: bij elk moment moet duidelijk zijn wat er gebeurde. Zonder die duidelijkheid leert het systeem niet. Zelf urenlang video zoeken en metingen erbij zoeken kost weken. AutoAnnotate levert de camera\'s: we zetten ze goed neer, nemen beeld en metingen tegelijk op en koppelen wat u op het beeld ziet aan uw sensoren. Zo krijgt u een nette verzameling voorbeelden die u kunt gebruiken om uw systeem te trainen.',
            'product.b1': 'Wij leveren de camera\'s naast uw sensoren',
            'product.b2': 'Beeld en metingen lopen gelijk op — de software zet er vanzelf labels bij',
            'product.b3': 'Zelf nog even controleren of bijsturen waar nodig',
            'product.b4': 'U haalt de data eruit zoals uw train-software het nodig heeft',

            'why.title': 'Handmatig vs AutoAnnotate',
            'why.intro': 'Handwerk kost vaak veel tijd en geld, en de ene persoon noteert net iets anders dan de andere. Hier ziet u het verschil met AutoAnnotate.',

            'privacy.title': 'Privacy by design — lokaal',
            'privacy.short': 'Beeld van onze camera\'s en uw meetgegevens blijven bij u. AutoAnnotate is gemaakt om bij u te draaien — u hoeft niets verplicht naar een cloud van een ander te sturen. U houdt zelf de regie over opslag en gebruik.',
            'market.inline': 'Goede voorbeelddata is steeds belangrijker; vaak is de kwaliteit van de data het echte struikelblok, niet alleen het slimme programma zelf.',

            'hero.title': 'Maak AI training data snel, accuraat en schaalbaar.',
            'hero.sub': 'AutoAnnotate helpt teams om data te labelen, controleren en verbeteren met AI tools.',
            'hero.cta1': 'Demo aanvragen',
            'hero.cta2': 'Hoe het werkt',
            'hero.privacyTagline': 'Lokaal · Privacy by design',

            'trust.line': 'Voor teams die metingen uit machines, robots of gebouwen gebruiken — van zorg tot winkel en robotica',
            'trust.clientsHeadline': 'Vertrouwd door teams bij:',

            'intro.title': 'Wat is AutoAnnotate?',
            'intro.p1': 'AutoAnnotate levert camera\'s en software om uw meetgegevens van duidelijke aantekeningen te voorzien. Beeld en metingen lopen tegelijk; het programma koppelt wat u ziet aan wat er gemeten wordt — zonder zelf elk beeldje handmatig te ordenen.',
            'intro.p2': 'In het kort: opnemen, herkennen wat er gebeurt, koppelen aan uw metingen, en daarna exporteren. Alles komt samen in één doorlopend geheel richting uw training.',

            'glossary.title': 'Woorden die u tegenkomt',
            'glossary.d1t': 'Dataset',
            'glossary.d1b': 'Een map met voorbeelden (beeld + korte omschrijving) waarmee u een slim systeem leert.',
            'glossary.d2t': 'Werkroute voor data',
            'glossary.d2b': 'Het pad van ruwe metingen tot een bestand dat uw train-software aankan.',
            'glossary.d3t': 'Labelen',
            'glossary.d3b': 'Kort opschrijven wat er op een moment gebeurde, bijvoorbeeld “aangeraakt” of “iemand in beeld”.',
            'glossary.d4t': 'Meetgegevens van sensoren',
            'glossary.d4b': 'Getallen van bijvoorbeeld versnelling, druk of afstand — vaak een rij cijfers zonder dat u meteen ziet wat het betekent.',

            'cap.title': 'Wat kunt u ermee?',
            'cap.li1': 'Camera\'s neerzetten en koppelen aan uw sensoren op één tijdlijn',
            'cap.li2': 'Gebeurtenissen op het beeld herkennen en koppelen aan uw metingen',
            'cap.li3': 'Zelf nog even corrigeren waar nodig',
            'cap.li4': 'Data exporteren in gangbare bestandsvormen',
            'cap.li5': 'Dezelfde voorbeelden opnieuw gebruiken voor een nieuwe versie van uw systeem',
            'cap.li6': 'Meer werk aankunnen zonder evenveel extra mensen aan te nemen',
            'cap.note': 'Zorgrobot, valalarm of drukte in de winkel: dezelfde werkwijze.',

            'problem.title': 'Handmatig labelen',
            'problem.titleSpan': 'houdt u tegen',
            'problem.headline': 'Handmatig labelen kost weken en fouten',
            'problem.intro': 'Slimme apparaten leren van voorbeelden. Sensoren geven alleen cijfers of trillingen; daaruit is niet meteen duidelijk wat er echt gebeurde. Daarvoor hebt u korte omschrijvingen (labels) nodig. Nu doen mensen dat vaak met de hand: dat gaat traag en groeit niet mee. AutoAnnotate levert camera\'s en koppelt het beeld automatisch aan uw metingen.',
            'problem.p1t': 'Tijd',
            'problem.p1b': 'Zelf alles invoeren kost weken tot maanden — uw mensen blijven hangen in herhaalwerk.',
            'problem.p2t': 'Kosten',
            'problem.p2b': 'U betaalt veel als u het uitbesteedt, of u moet eigen mensen fulltime laten doorwerken.',
            'problem.p3t': 'Kwaliteit',
            'problem.p3b': 'De ene medewerker noteert net iets anders dan de andere — dat maakt het resultaat minder betrouwbaar.',
            'counter.tijd': 'Tijdsbesparing',
            'counter.snel': 'Sneller itereren',
            'counter.100x': '100× sneller',
            'counter.nauw': 'Nauwkeurigheid',

            'solution.title': 'In vier stappen',
            'solution.headline': '4 simpele stappen',
            'solution.s1t': 'Opnemen',
            'solution.s1b': 'Wij leveren en installeren de camera\'s en koppelen ze aan uw sensoren. Beeld en metingen lopen tegelijk op één tijdlijn.',
            'solution.s2t': 'Herkennen',
            'solution.s2b': 'De software ziet op het beeld wat er gebeurt: mensen, voorwerpen en handelingen.',
            'solution.s3t': 'Koppelen',
            'solution.s3b': 'Wat er op het beeld gebeurt, wordt automatisch gekoppeld aan de metingen op hetzelfde moment.',
            'solution.s4t': 'Exporteren',
            'solution.s4b': 'U haalt de gelabelde data uit het systeem in gangbare vormen, klaar om uw systeem te trainen.',

            'benefits.title': 'Handmatig versus AutoAnnotate',
            'benefits.speed': 'Snelheid',
            'benefits.consistency': 'Consistentie',
            'benefits.scale': 'Schaal',
            'ben.s1m': 'Weken werk',
            'ben.s1a': 'Uren',
            'ben.s2m': 'Veel handmatig nakijken',
            'ben.s2a': 'Direct klaar',
            'ben.c1m': '5–15% fout',
            'ben.c1a': '99%+ nauwkeurig',
            'ben.c2m': 'Wisselende kwaliteit',
            'ben.c2a': 'Herhaalbaar',
            'ben.sc1m': 'Slechts zo groot als uw team',
            'ben.sc1a': 'Meer werk zonder evenveel extra mensen',
            'ben.sc2m': 'Kosten groeien met elk project',
            'ben.sc2a': 'Beter te overzien',
            'ben.bar1': 'Snelheid',
            'ben.bar2': 'Nauwkeurigheid',
            'ben.bar3': 'Opschalen',

            'privacy.lead': 'Veel aanbieders willen uw beelden en metingen op hun servers. Bij AutoAnnotate horen die gegevens bij u.',
            'privacy.p1': 'AutoAnnotate draait lokaal: de verwerking gebeurt in uw eigen omgeving, met oog voor privacy.',
            'privacy.p2': 'U hoeft niets verplicht naar een cloud van een ander te sturen. U bepaalt waar en hoe data wordt bewaard.',
            'privacy.li1': 'Lokaal verwerken',
            'privacy.li2': 'Zelf bepalen wie erbij mag en waar het staat',
            'privacy.li3': 'Geen vaste afhankelijkheid van externe label-diensten in de cloud',

            'market.title': 'Waarom dit nu urgent is',
            'market.p1': 'Er gaat steeds meer geld naar het klaarzetten van goede voorbeelddata. Tegelijk zegt de sector: de kwaliteit van die data is vaak het struikelblok — niet alleen het slimme programma zelf.',
            'market.p2': 'Automatisch labelen groeit sneller dan puur handwerk. Wie nu investeert in schaalbaar labelen, is de volgende ronde sneller klaar.',
            'market.stat1': 'Tijd die teams aan datavoorbereiding kwijt zijn (indicatief)',
            'market.stat2': 'Groei van automatisch labelen (indicatief)',
            'market.stat3': 'Bedrijven zoeken oplossingen met sterke privacy (indicatief)',
            'market.source': 'Cijfers gebaseerd op branche-analyses; exacte bronnen op aanvraag.',

            'apps.title': 'Toepassingen',
            'apps.a1t': 'Zorgrobots',
            'apps.a1b': 'Sensoren op de robot of in de kamer, plus onze camera\'s: zo krijgt u automatisch duidelijke voorbeelden van gebaren, houdingen en voorwerpen.',
            'apps.a2t': 'Draagbare sensoren & valdetectie',
            'apps.a2b': 'Sensoren om het lichaam, plus camera\'s van ons: automatische aantekeningen om valalarmen slimmer te maken.',
            'apps.a3t': 'Drukte en gedrag in de winkel',
            'apps.a3b': 'Sensoren in de winkel en onze camera\'s: zo ziet u automatisch hoe druk het is en hoe mensen lopen — handig voor planning.',
            'apps.a4t': 'Boerderij & gezonde koeien',
            'apps.a4b': 'Sensoren bij het vee en onze camera\'s: gedrag en signalen van gezondheid automatisch bij elkaar gezet.',

            'demo.title': 'In de praktijk',
            'demo.proofTitle': 'Bewezen bij SAR Maatje Pop',
            'demo.proofTitlePrefix': 'Bewezen bij',
            'demo.h': 'SAR Maatje Pop',
            'demo.p': 'Bij SAR Maatje Pop zetten wij camera\'s naast de bestaande sensoren en robot. Zo wordt contact automatisch van duidelijke aantekeningen voorzien — de robot leert sneller wanneer iemand aandacht wil of rust.',
            'demo.m1': 'Sneller labelen',
            'demo.m2': 'Beelden',
            'demo.m3': 'Nauwkeurigheid',

            'playground.title': 'Probeer het zelf — Maatje Pop',
            'playground.intro': 'Sleep langs de tijdlijn: microfoon, licht, radar en beweging lopen gelijk met het camerabeeld. Zo ziet u hoe “Binnenkomen persoon” en “Oppakken” aan uw sensordata worden gekoppeld.',
            'playground.disclaimer': 'Vereenvoudigde demo ter illustratie; geen live data van uw omgeving.',
            'playground.play': 'Afspelen',
            'playground.pause': 'Pauze',
            'playground.timelineLabel': 'Tijd op de opname',
            'playground.sensorsTitle': 'Sensoren (Maatje Pop)',
            'playground.exportTitle': 'Gekoppelde export (voorbeeld)',
            'playground.cameraSource': 'Label uit camera',
            'playground.labelNone': 'Geen actief label',
            'playground.labelEnter': 'Binnenkomen persoon',
            'playground.labelPickup': 'Oppakken',
            'playground.sensorMicrophone': 'Microfoon',
            'playground.sensorLight': 'Licht',
            'playground.sensorRadar': 'Radar',
            'playground.sensorMotion': 'Beweging',

            'quote1': 'We hebben weken handwerk uitgespaard; de dataset is een stuk consistenter geworden.',
            'cite1': '— Ivo Mengerink',
            'quote2': 'Exporteren paste direct in ons bestaande werkproces.',
            'cite2': '— R2R Engineering',
            'quote3': 'Wat maanden kostte, deden we in weken — met minder discussie over labels.',
            'cite3': '— Ontwikkelteam Maatje Pop',

            'team.title': 'Het team',
            'team.intro': 'AutoAnnotate is een initiatief van R2R Engineering en IMeTech Engineering — twee ingenieurs die productontwikkeling en zorg combineren met hands-on techniek.',
            'team.richard.role': 'Eigenaar R2R Engineering',
            'team.richard.bio': 'Al 25 jaar productontwikkeling en innovatie. Brengt technologie en zorg samen — integere ondernemer met oog voor wat er echt nodig is.',
            'team.ivo.role': 'Oprichter IMeTech Engineering',
            'team.ivo.bio': 'Engineer met mechatronica-achtergrond. Zet technische ideeën om in werkende producten — praktisch, doeltreffend en hands-on.',
            'team.richard.linkedinAria': 'LinkedIn-profiel van Richard Schaper (opent in nieuw tabblad)',
            'team.ivo.linkedinAria': 'LinkedIn-profiel van Ivo Mengerink (opent in nieuw tabblad)',

            'cta.title': 'Klaar om sneller te labelen?',
            'cta.p': 'Plan een gratis demo en ontdek hoe AutoAnnotate u sneller vooruithelpt met uw data.',
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
            'meta.title': 'Fast, accurate, scalable AI training data',
            'meta.desc': 'AutoAnnotate helps teams label, check, and improve data with AI tools. Local, privacy by design.',

            'nav.product': 'Product',
            'nav.why': 'Why us',
            'nav.cases': 'Examples',
            'nav.contact': 'Contact',
            'nav.demo': 'Demo',
            'nav.probleem': 'Problem',
            'nav.oplossing': 'Solution',
            'nav.voordelen': 'Benefits',
            'nav.toepassingen': 'Applications',
            'nav.team': 'Team',
            'nav.privacy': 'Privacy',
            'nav.bewijs': 'Proof',
            'nav.demoCta': 'Request Demo',
            'nav.playground': 'Try it',
            'nav.contact': 'Contact',

            'product.blockTitle': 'What AutoAnnotate does',
            'product.lead': 'You have sensors in a machine, robot, or building and want a smart system to learn from them. You need examples: at each moment it should be clear what happened. Without that clarity, the system cannot learn. Manually matching hours of video to readings takes weeks. AutoAnnotate supplies the cameras: we set them up, record video and readings together, and automatically link what you see to your sensors. You get a clean set of examples ready for training.',
            'product.b1': 'We supply cameras alongside your sensors',
            'product.b2': 'Video and readings stay in step — labels are added automatically',
            'product.b3': 'Spot-check or correct by hand where needed',
            'product.b4': 'Export data in the formats your training tools expect',

            'why.title': 'Manual vs AutoAnnotate',
            'why.intro': 'Manual work often means long hours, high cost when you outsource, and small differences between people. Here is how AutoAnnotate compares.',

            'privacy.title': 'Privacy by design — local',
            'privacy.short': 'Video from our cameras and your readings stay with you. AutoAnnotate is built to run on your own systems — nothing has to be sent to someone else’s cloud unless you want that. You stay in charge of storage and use.',
            'market.inline': 'Good training examples matter more and more; often data quality is the real hurdle, not only the smart program itself.',

            'hero.title': 'AutoAnnotate – fast, accurate, scalable AI training data',
            'hero.sub': 'AutoAnnotate helps teams label, check, and improve data with AI tools.',
            'hero.cta1': 'Request demo',
            'hero.cta2': 'How it works',
            'hero.privacyTagline': 'Local · Privacy by design',

            'trust.line': 'For teams using readings from machines, robots, or buildings — care, shops, robotics, and more',
            'trust.clientsHeadline': 'Trusted by teams at:',

            'intro.title': 'What is AutoAnnotate?',
            'intro.p1': 'AutoAnnotate supplies cameras and software to add clear notes to your measurements automatically. Video and readings stay in sync; the software links what you see to what was measured — without sorting every frame by hand.',
            'intro.p2': 'In short: record, spot what happens, link it to your readings, then export. Everything flows in one line toward training.',

            'glossary.title': 'Terms you will see',
            'glossary.d1t': 'Dataset',
            'glossary.d1b': 'A folder of examples (images + short notes) used to teach a smart system.',
            'glossary.d2t': 'Data workflow',
            'glossary.d2b': 'The path from raw measurements to files your training tools can use.',
            'glossary.d3t': 'Labelling',
            'glossary.d3b': 'Writing down what happened at a moment, e.g. “touched” or “person in view”.',
            'glossary.d4t': 'Sensor readings',
            'glossary.d4b': 'Numbers from things like movement, pressure, or distance — often a string of figures without obvious meaning.',

            'cap.title': 'What can you do with it?',
            'cap.li1': 'Set up cameras and tie them to your sensors on one timeline',
            'cap.li2': 'Spot events on video and link them to your readings',
            'cap.li3': 'Correct by hand where needed',
            'cap.li4': 'Export in common file formats',
            'cap.li5': 'Reuse the same examples for a new version of your system',
            'cap.li6': 'Handle more work without hiring as many extra people',
            'cap.note': 'Care robots, fall alerts, or busy shops — same approach.',

            'problem.title': 'Manual labelling',
            'problem.titleSpan': 'holds you back',
            'problem.headline': 'Manual labelling costs weeks and errors',
            'problem.intro': 'Smart devices learn from examples. Sensors only give numbers or vibrations; they do not spell out what really happened. You need short notes (labels) for that. Today people often do that by hand: slow and hard to grow. AutoAnnotate supplies cameras and links video to your readings automatically.',
            'problem.p1t': 'Time',
            'problem.p1b': 'Typing everything yourself takes weeks or months — your team stays stuck on repeat work.',
            'problem.p2t': 'Cost',
            'problem.p2b': 'Outsourcing costs a lot, or your own people work on it full time.',
            'problem.p3t': 'Quality',
            'problem.p3b': 'One person writes things slightly differently from another — that makes the result less reliable.',
            'counter.tijd': 'Time saved',
            'counter.snel': 'Faster iteration',
            'counter.100x': '100× faster',
            'counter.nauw': 'Accuracy',

            'solution.title': 'In four steps',
            'solution.headline': '4 simple steps',
            'solution.s1t': 'Record',
            'solution.s1b': 'We supply and install the cameras and connect them to your sensors. Video and readings run together on one timeline.',
            'solution.s2t': 'Spot',
            'solution.s2b': 'The software sees what happens on video: people, objects, and actions.',
            'solution.s3t': 'Link',
            'solution.s3b': 'What happens on video is automatically linked to the readings at the same moment.',
            'solution.s4t': 'Export',
            'solution.s4b': 'Pull the labelled data out in common formats, ready to train your system.',

            'benefits.title': 'Manual vs AutoAnnotate',
            'benefits.speed': 'Speed',
            'benefits.consistency': 'Consistency',
            'benefits.scale': 'Scale',
            'ben.s1m': 'Weeks of work',
            'ben.s1a': 'Hours',
            'ben.s2m': 'Lots of manual checking',
            'ben.s2a': 'Ready to go',
            'ben.c1m': '5–15% error',
            'ben.c1a': '99%+ accurate',
            'ben.c2m': 'Variable quality',
            'ben.c2a': 'Repeatable',
            'ben.sc1m': 'Only as big as your team',
            'ben.sc1a': 'More work without as many extra hires',
            'ben.sc2m': 'Costs grow with every project',
            'ben.sc2a': 'Easier to plan',
            'ben.bar1': 'Speed',
            'ben.bar2': 'Accuracy',
            'ben.bar3': 'Scaling up',

            'privacy.lead': 'Many providers want your video and readings on their servers. With AutoAnnotate, that data belongs with you.',
            'privacy.p1': 'AutoAnnotate runs locally: processing happens in your own environment, with privacy in mind.',
            'privacy.p2': 'Nothing has to be uploaded to someone else’s cloud. You choose where and how data is stored.',
            'privacy.li1': 'Process locally',
            'privacy.li2': 'You decide who has access and where it lives',
            'privacy.li3': 'No lock-in to outside labelling services in the cloud',

            'market.title': 'Why this matters now',
            'market.p1': 'More money goes into preparing good training examples. The industry agrees: data quality is often the hurdle — not only the smart program.',
            'market.p2': 'Automatic labelling is growing faster than pure hand work. Investing in scalable labelling speeds every next round.',
            'market.stat1': 'Time teams spend on data prep (indicative)',
            'market.stat2': 'Growth of automatic labelling (indicative)',
            'market.stat3': 'Companies want solutions with strong privacy (indicative)',
            'market.source': 'Figures based on industry analyses; sources available on request.',

            'apps.title': 'Applications',
            'apps.a1t': 'Care and assistive robots',
            'apps.a1b': 'Sensors on the robot or in the room, plus our cameras: clear examples of gestures, poses, and objects, added automatically.',
            'apps.a2t': 'Wearables & fall detection',
            'apps.a2b': 'Body-worn sensors plus our cameras: automatic notes to make fall alerts smarter.',
            'apps.a3t': 'Busy shops & customer flow',
            'apps.a3b': 'Sensors in the store and our cameras: see how busy it is and how people move — handy for planning.',
            'apps.a4t': 'Farms & healthy cattle',
            'apps.a4b': 'Sensors with the herd and our cameras: behaviour and health signals linked automatically.',

            'demo.title': 'In practice',
            'demo.proofTitle': 'Proven with SAR Maatje Pop',
            'demo.proofTitlePrefix': 'Proven with',
            'demo.h': 'SAR Maatje Pop',
            'demo.p': 'For SAR Maatje Pop we place cameras next to the existing sensors and robot. Contact is labelled automatically so the robot learns faster when someone wants attention or quiet.',
            'demo.m1': 'Faster labelling',
            'demo.m2': 'Images',
            'demo.m3': 'Accuracy',

            'playground.title': 'Try it yourself — Maatje Pop',
            'playground.intro': 'Scrub the timeline: microphone, light, radar, and motion stay aligned with the camera view. See how “Person entering” and “Picking up” link to your sensor readings.',
            'playground.disclaimer': 'Simplified illustration; not live data from your environment.',
            'playground.play': 'Play',
            'playground.pause': 'Pause',
            'playground.timelineLabel': 'Time on recording',
            'playground.sensorsTitle': 'Sensors (Maatje Pop)',
            'playground.exportTitle': 'Linked export (sample)',
            'playground.cameraSource': 'Label from camera',
            'playground.labelNone': 'No active label',
            'playground.labelEnter': 'Person entering',
            'playground.labelPickup': 'Picking up',
            'playground.sensorMicrophone': 'Microphone',
            'playground.sensorLight': 'Light',
            'playground.sensorRadar': 'Radar',
            'playground.sensorMotion': 'Motion',

            'quote1': 'We saved weeks of manual work; the dataset is much more consistent.',
            'cite1': '— Ivo Mengerink',
            'quote2': 'Export dropped straight into our existing workflow.',
            'cite2': '— R2R Engineering',
            'quote3': 'What took months we did in weeks — with less debate over labels.',
            'cite3': '— Maatje Pop dev team',

            'team.title': 'The team',
            'team.intro': 'AutoAnnotate is an initiative of R2R Engineering and IMeTech Engineering — two engineers combining product development and care with hands-on technology.',
            'team.richard.role': 'Owner R2R Engineering',
            'team.richard.bio': '25 years in product development and innovation. Brings technology and care together — with a focus on what is actually needed.',
            'team.ivo.role': 'Founder IMeTech Engineering',
            'team.ivo.bio': 'Engineer with a mechatronics background. Turns technical ideas into working products — practical, effective, and hands-on.',
            'team.richard.linkedinAria': 'Richard Schaper’s LinkedIn profile (opens in a new tab)',
            'team.ivo.linkedinAria': 'Ivo Mengerink’s LinkedIn profile (opens in a new tab)',

            'cta.title': 'Ready to label faster?',
            'cta.p': 'Book a free demo and see how AutoAnnotate helps you move faster with your data.',
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

        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-aria');
            if (key) el.setAttribute('aria-label', t(lang, key));
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

        window.dispatchEvent(new CustomEvent('aa-langchange', { detail: { lang: lang } }));
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
