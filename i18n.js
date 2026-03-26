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

            'product.blockTitle': 'Wat AutoAnnotate doet',
            'product.lead': 'U hebt sensoren in een machine, robot of gebouw en wilt dat een slim systeem ervan leert. Daarvoor hebt u voorbeelden nodig: bij elk moment moet duidelijk zijn wat er gebeurde. Zonder die duidelijkheid leert het systeem niet. Zelf urenlang video zoeken en metingen erbij zoeken kost weken. AutoAnnotate werkt met behulp van camera\'s: we nemen beeld en metingen tegelijk op en koppelen wat u op het beeld ziet aan uw sensoren. Zo krijgt u een nette verzameling voorbeelden die u kunt gebruiken om uw systeem te trainen.',
            'product.b1': 'Met behulp van camera\'s naast uw sensoren',
            'product.b2': 'Beeld en metingen lopen gelijk op, de software zet er vanzelf labels bij',
            'product.b3': 'Zelf nog even controleren of bijsturen waar nodig',
            'product.b4': 'U haalt de data eruit zoals uw train-software het nodig heeft',

            'why.title': 'Handmatig vs AutoAnnotate',
            'why.intro': 'Wat levert AutoAnnotate concreet op ten opzichte van handmatig labelen?',

            'privacy.title': 'Privacy by design, lokaal',
            'privacy.short': 'Beeld uit camera\'s en uw meetgegevens blijven bij u. AutoAnnotate is gemaakt om bij u te draaien, u hoeft niets verplicht naar een cloud van een ander te sturen. U houdt zelf de regie over opslag en gebruik.',
            'privacy.compliance': 'Met persoonsgegevens en privacy gaan we om volgens de AVG en de GDPR (de Europese privacyregels). Onze oplossing en werkwijze zijn daarop ingericht.',
            'market.inline': 'Goede voorbeelddata is steeds belangrijker; vaak is de kwaliteit van de data het echte struikelblok, niet alleen het slimme programma zelf.',

            'hero.title': 'Maak AI training data snel, accuraat en schaalbaar.',
            'hero.sub': 'AutoAnnotate helpt teams om data te labelen, controleren en verbeteren met AI tools.',
            'hero.cta1': 'Demo aanvragen',
            'hero.cta2': 'Hoe het werkt',
            'hero.privacyTagline': 'Lokaal · Privacy by design',

            'trust.line': 'Voor teams die metingen uit machines, robots of gebouwen gebruiken, van zorg tot winkel en robotica',
            'trust.clientsHeadline': 'Vertrouwd door teams bij:',
            'basics.title': 'Hoe AI leert in 5 simpele stappen',
            'basics.intro': 'Klik op een stap en zie wat er gebeurt: van losse sensordata naar een model dat zelf labels kan voorspellen.',
            'basics.step.sensor': 'Sensor-data',
            'basics.step.labels': 'Labels',
            'basics.step.gelabeld': 'Samen brengen',
            'basics.step.training': 'Model trainen',
            'basics.step.uitkomst': 'Model voorspelt',
            'basics.map.sensor': 'Sensordata',
            'basics.map.labels': 'Labels',
            'basics.map.gelabeld': 'Gelabelde data',
            'basics.map.training': 'Training',
            'basics.map.model': 'Model',
            'basics.map.inferTitle': 'Voorspelling',
            'basics.map.newSignal': 'Nieuw signaal',
            'basics.map.labelOut': 'Label',
            'basics.sensor.title': 'Stap 1: Sensordata komt binnen',
            'basics.sensor.body': 'Denk aan losse cijfers zoals beweging, druk of afstand. Op zichzelf zegt dat nog niet duidelijk wat er echt gebeurt.',
            'basics.sensor.note': 'Voorbeeld: 0.43, 0.51, 0.49... alleen getallen, nog geen betekenis.',
            'basics.labels.title': 'Stap 2: Labels beschrijven wat er gebeurt',
            'basics.labels.body': 'Een label is een kort tekstje dat bij een moment hoort, zoals "persoon loopt", "persoon valt" of "deur open". Zo krijgen de kale getallen betekenis.',
            'basics.labels.note': 'Zonder labels weet het model niet wat de data voorstelt.',
            'basics.gelabeld.title': 'Stap 3: Sensordata + labels worden samengevoegd',
            'basics.gelabeld.body': 'De ruwe meetgegevens en de bijbehorende labels worden aan elkaar gekoppeld. Dit noemen we gelabelde data: elk meetmoment heeft nu een duidelijke omschrijving.',
            'basics.gelabeld.note': 'Hoe meer goede voorbeelden, hoe beter het model straks leert.',
            'basics.training.title': 'Stap 4: Het model leert van veel voorbeelden',
            'basics.training.body': 'Het model krijgt duizenden gelabelde momenten te zien. Daardoor leert het patronen herkennen in de sensordata.',
            'basics.training.note': 'Zoals oefenen met veel voorbeeldvragen en antwoorden.',
            'basics.uitkomst.title': 'Stap 5: Nieuw signaal erin, label eruit',
            'basics.uitkomst.body': 'Later krijgt het model nieuwe, onbekende sensordata. Dan kan het zelf voorspellen welk label erbij hoort, zonder dat iemand het handmatig hoeft te doen.',
            'basics.uitkomst.note': 'Dat is het doel: sneller herkennen zonder alles handmatig te labelen.',
            'basics.facts.heading': 'Goed om te weten',
            'basics.explain.model.title': 'Modellen: wat zijn het en waar kom je ze tegen?',
            'basics.explain.model.body': 'Een AI-model is een rekenprogramma dat patronen leert uit voorbeelden. Denk aan spraakherkenning in je telefoon, spamfilters in je mail, navigatie-apps die files voorspellen, of slimme camera\'s die inbrekers herkennen. Al die toepassingen draaien op zo\'n model. Er bestaan er wereldwijd miljoenen, ook met sensordata, zoals AutoAnnotate doet.',
            'basics.explain.labels.title': 'Waarom labels zo belangrijk zijn',
            'basics.explain.labels.body': 'Misschien kent u ChatGPT: dat leert van tekst en geeft antwoorden in taal. Maar een model dat sensordata moet begrijpen, heeft andere voorbeelden nodig: gelabelde momenten. Een label is een korte omschrijving van wat er op dat moment gebeurt, zoals "persoon loopt" of "deur gaat open". Zonder die labels kan het model niet leren wat de data betekent. Hoe meer goede labels, hoe slimmer het model wordt.',

            'intro.title': 'Wat is AutoAnnotate?',
            'intro.p1': 'AutoAnnotate helpt met labelen. Labelen betekent: een kort tekstje bij data zetten, zodat duidelijk is wat er op dat moment gebeurt. Met behulp van camera\'s en software koppelt AutoAnnotate wat u ziet aan wat uw sensoren meten.',
            'intro.p2': 'In het kort: opnemen, herkennen wat er gebeurt, koppelen aan uw metingen, en daarna exporteren. Alles komt samen in één doorlopend geheel richting uw training.',

            'glossary.title': 'Woorden die u tegenkomt',
            'glossary.d1t': 'Dataset',
            'glossary.d1b': 'Een map met voorbeelden (beeld + korte omschrijving) waarmee u een slim systeem leert.',
            'glossary.d2t': 'Werkroute voor data',
            'glossary.d2b': 'Het pad van ruwe metingen tot een bestand dat uw train-software aankan.',
            'glossary.d3t': 'Labelen',
            'glossary.d3b': 'Een kort tekstje bij data zetten, zodat meteen duidelijk is wat er gebeurt. Bijvoorbeeld: “iemand loopt langs” of “deur gaat open”.',
            'glossary.d4t': 'Meetgegevens van sensoren',
            'glossary.d4b': 'Getallen van bijvoorbeeld versnelling, druk of afstand, vaak een rij cijfers zonder dat u meteen ziet wat het betekent.',

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
            'problem.headline': 'Veel teams lopen hier tegenaan',
            'problem.intro': 'De meeste organisaties die met sensoren werken, labelen hun data nog met de hand. Dat is tijdrovend, duur en foutgevoelig.',
            'problem.p1t': 'Tijd',
            'problem.p1b': 'Handmatig labelen kost weken tot maanden. Uw team blijft hangen in herhaalwerk in plaats van vooruit te komen.',
            'problem.p2t': 'Kosten',
            'problem.p2b': 'Uitbesteden is duur. Zelf doen kost uw mensen fulltime werk dat eigenlijk niet bij hun rol hoort.',
            'problem.p3t': 'Kwaliteit',
            'problem.p3b': 'Iedereen schrijft het net even anders op. Dat geeft wisselende labels, en een model dat daarvan leert wordt minder betrouwbaar.',
            'counter.tijd': 'Tijdsbesparing',
            'counter.snel': 'Sneller itereren',
            'counter.100x': '100× sneller',
            'counter.nauw': 'Nauwkeurigheid',

            'solution.title': 'In vier stappen',
            'solution.headline': 'Zo werkt AutoAnnotate',
            'solution.s1t': 'Opnemen',
            'solution.s1b': 'Met camera\'s naast uw sensoren worden beeld en metingen tegelijk opgenomen, op één tijdlijn.',
            'solution.s2t': 'Herkennen',
            'solution.s2b': 'De software herkent op het beeld wat er gebeurt: een persoon, een gebaar, een handeling.',
            'solution.s3t': 'Koppelen',
            'solution.s3b': 'Wat de camera ziet, wordt automatisch gekoppeld aan de sensordata van datzelfde moment.',
            'solution.s4t': 'Exporteren',
            'solution.s4b': 'U exporteert de gelabelde data in gangbare formaten, klaar om uw model te trainen.',

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
            'market.p1': 'Er gaat steeds meer geld naar het klaarzetten van goede voorbeelddata. Tegelijk zegt de sector: de kwaliteit van die data is vaak het struikelblok, niet alleen het slimme programma zelf.',
            'market.p2': 'Automatisch labelen groeit sneller dan puur handwerk. Wie nu investeert in schaalbaar labelen, is de volgende ronde sneller klaar.',
            'market.stat1': 'Tijd die teams aan datavoorbereiding kwijt zijn (indicatief)',
            'market.stat2': 'Groei van automatisch labelen (indicatief)',
            'market.stat3': 'Bedrijven zoeken oplossingen met sterke privacy (indicatief)',
            'market.source': 'Cijfers gebaseerd op branche-analyses; exacte bronnen op aanvraag.',

            'apps.title': 'Toepassingen',
            'apps.a1t': 'Zorgrobots',
            'apps.a1b': 'Sensoren op de robot of in de kamer, met behulp van camera\'s: zo krijgt u automatisch duidelijke voorbeelden van gebaren, houdingen en voorwerpen.',
            'apps.a2t': 'Draagbare sensoren & valdetectie',
            'apps.a2b': 'Sensoren om het lichaam, met behulp van camera\'s: automatische aantekeningen om valalarmen slimmer te maken.',
            'apps.a3t': 'Drukte en gedrag in de winkel',
            'apps.a3b': 'Sensoren in de winkel, met behulp van camera\'s: zo ziet u automatisch hoe druk het is en hoe mensen lopen, handig voor planning.',
            'apps.a4t': 'Boerderij & gezonde koeien',
            'apps.a4b': 'Sensoren bij het vee, met behulp van camera\'s: gedrag en signalen van gezondheid automatisch bij elkaar gezet.',

            'demo.title': 'In de praktijk',
            'demo.proofTitle': 'Bewezen bij SAR Maatje Pop',
            'demo.proofTitlePrefix': 'Bewezen bij',
            'demo.h': 'SAR Maatje Pop',
            'demo.p': 'Bij SAR Maatje Pop werken we met camera\'s naast de bestaande sensoren en robot. Zo wordt contact automatisch van duidelijke aantekeningen voorzien, de robot leert sneller wanneer iemand aandacht wil of rust.',
            'demo.m1': 'Sneller labelen',
            'demo.m2': 'Beelden',
            'demo.m3': 'Nauwkeurigheid',

            'quote1': 'Sinds we AutoAnnotate gebruiken, hoeven we veel minder handmatig te labelen. Zo hebben we sneller bruikbare data en blijft de kwaliteit van de annotaties stabiel.',
            'cite1': 'Projectcoordinator SAR Maatje Pop',
            'quote2': 'De export sluit goed aan op ons bestaande werkproces. We kunnen bestanden direct gebruiken zonder extra omzetstappen.',
            'cite2': 'R2R Engineering',
            'quote3': 'Waar we eerst lang bezig waren met afstemmen en corrigeren, maken we nu in kortere tijd duidelijke labels. Dat geeft meer rust in het team.',
            'cite3': 'Ontwikkelteam Maatje Pop',

            'team.title': 'Het team',
            'team.intro': 'AutoAnnotate is een initiatief van R2R Engineering en IMeTech Engineering, een team dat productontwikkeling, zorg en organisatie combineert met hands-on techniek.',
            'team.richard.role': 'Eigenaar R2R Engineering',
            'team.richard.bio': 'Al 25 jaar productontwikkeling en innovatie. Brengt technologie en zorg samen. Integere ondernemer met oog voor wat er echt nodig is.',
            'team.ivo.role': 'Oprichter IMeTech Engineering',
            'team.ivo.bio': 'Engineer met mechatronica-achtergrond. Zet technische ideeën om in werkende producten. Praktisch, doeltreffend en hands-on.',
            'team.jackie.role': 'Vormgeving & administratie AutoAnnotate',
            'team.jackie.bio': 'Vormgeving en administratie bij AutoAnnotate. Creatief en scherp. Zorgt voor heldere communicatie en overzicht in de organisatie.',
            'team.mark.role': 'Adviseur digitale transformatie',
            'team.mark.bio': 'Meer dan 30 jaar ervaring in digitale en bedrijfstransformatie, in diverse sectoren. Zowel vanuit consultancy als in de rol van directeur van bedrijfsonderdelen.',
            'team.rick.role': 'Adviseur · podiumkunsten & organisatie',
            'team.rick.bio': 'Ruim twintig jaar ervaring in de podiumkunsten: strategie, financiën en communicatie bij toonaangevende gezelschappen. Adviseur voor AutoAnnotate.',
            'team.richard.linkedinAria': 'LinkedIn-profiel van Richard Schaper (opent in nieuw tabblad)',
            'team.ivo.linkedinAria': 'LinkedIn-profiel van Ivo Mengerink (opent in nieuw tabblad)',
            'team.jackie.linkedinAria': 'LinkedIn-profiel van Jackie Oostendorp (opent in nieuw tabblad)',
            'team.mark.linkedinAria': 'LinkedIn-profiel van Mark Kempkes (opent in nieuw tabblad)',
            'team.rick.linkedinAria': 'LinkedIn-profiel van Rick Spaan (opent in nieuw tabblad)',

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
            'form.ok': 'Bedankt, we reageren zo snel mogelijk.',
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
            'nav.contact': 'Contact',

            'product.blockTitle': 'What AutoAnnotate does',
            'product.lead': 'You have sensors in a machine, robot, or building and want a smart system to learn from them. You need examples: at each moment it should be clear what happened. Without that clarity, the system cannot learn. Manually matching hours of video to readings takes weeks. AutoAnnotate works with the help of cameras: we record video and readings together, and automatically link what you see to your sensors. You get a clean set of examples ready for training.',
            'product.b1': 'With the help of cameras alongside your sensors',
            'product.b2': 'Video and readings stay in step, labels are added automatically',
            'product.b3': 'Spot-check or correct by hand where needed',
            'product.b4': 'Export data in the formats your training tools expect',

            'why.title': 'Manual vs AutoAnnotate',
            'why.intro': 'What does AutoAnnotate actually deliver compared to manual labelling?',

            'privacy.title': 'Privacy by design, local',
            'privacy.short': 'Video from cameras and your readings stay with you. AutoAnnotate is built to run on your own systems, nothing has to be sent to someone else’s cloud unless you want that. You stay in charge of storage and use.',
            'privacy.compliance': 'We handle personal data in line with the GDPR and EU privacy law, in Dutch often referred to as the AVG. Our product and how we work are set up to meet those requirements.',
            'market.inline': 'Good training examples matter more and more; often data quality is the real hurdle, not only the smart program itself.',

            'hero.title': 'AutoAnnotate – fast, accurate, scalable AI training data',
            'hero.sub': 'AutoAnnotate helps teams label, check, and improve data with AI tools.',
            'hero.cta1': 'Request demo',
            'hero.cta2': 'How it works',
            'hero.privacyTagline': 'Local · Privacy by design',

            'trust.line': 'For teams using readings from machines, robots, or buildings, care, shops, robotics, and more',
            'trust.clientsHeadline': 'Trusted by teams at:',
            'basics.title': 'How AI learns in 5 simple steps',
            'basics.intro': 'Click a step to see what happens: from raw sensor data to a model that can predict labels.',
            'basics.step.sensor': 'Sensor data',
            'basics.step.labels': 'Labels',
            'basics.step.gelabeld': 'Combine',
            'basics.step.training': 'Train model',
            'basics.step.uitkomst': 'Model predicts',
            'basics.map.sensor': 'Sensor data',
            'basics.map.labels': 'Labels',
            'basics.map.gelabeld': 'Labelled data',
            'basics.map.training': 'Training',
            'basics.map.model': 'Model',
            'basics.map.inferTitle': 'Prediction',
            'basics.map.newSignal': 'New signal',
            'basics.map.labelOut': 'Label',
            'basics.sensor.title': 'Step 1: Sensor data comes in',
            'basics.sensor.body': 'Think of raw numbers like motion, pressure, or distance. By itself, that does not clearly say what happened.',
            'basics.sensor.note': 'Example: 0.43, 0.51, 0.49... just numbers, no meaning yet.',
            'basics.labels.title': 'Step 2: Labels describe what happens',
            'basics.labels.body': 'A label is a short text that belongs to a moment, such as "person walks", "person falls", or "door opens". It gives meaning to bare numbers.',
            'basics.labels.note': 'Without labels the model cannot know what the data represents.',
            'basics.gelabeld.title': 'Step 3: Sensor data + labels are combined',
            'basics.gelabeld.body': 'The raw readings and their matching labels are joined together. This is called labelled data: every measurement now has a clear description.',
            'basics.gelabeld.note': 'The more good examples, the better the model will learn.',
            'basics.training.title': 'Step 4: The model learns from many examples',
            'basics.training.body': 'The model receives thousands of labelled moments. That is how it learns to recognize patterns in sensor data.',
            'basics.training.note': 'Like practicing with many example questions and answers.',
            'basics.uitkomst.title': 'Step 5: New signal in, label out',
            'basics.uitkomst.body': 'Later, the model receives new, unseen sensor data and predicts which label belongs to it, without anyone doing it by hand.',
            'basics.uitkomst.note': 'That is the goal: faster recognition without fully manual labelling.',
            'basics.facts.heading': 'Good to know',
            'basics.explain.model.title': 'Models: what are they and where do you find them?',
            'basics.explain.model.body': 'An AI model is a program that learns patterns from examples. Think of speech recognition on your phone, spam filters in your email, navigation apps predicting traffic, or smart cameras spotting intruders. All those run on a model. There are millions worldwide, including models trained on sensor data, like AutoAnnotate does.',
            'basics.explain.labels.title': 'Why labels matter so much',
            'basics.explain.labels.body': 'You may know ChatGPT: it learns from text and responds in language. But a model that needs to understand sensor data requires different examples: labelled moments. A label is a short description of what happens at that moment, like "person walks" or "door opens". Without labels the model cannot learn what data means. The more good labels, the smarter the model becomes.',

            'intro.title': 'What is AutoAnnotate?',
            'intro.p1': 'AutoAnnotate helps with labelling. Labelling means adding a short note to data so it is clear what happens at that moment. With the help of cameras and software, AutoAnnotate links what you see to what your sensors measure.',
            'intro.p2': 'In short: record, spot what happens, link it to your readings, then export. Everything flows in one line toward training.',

            'glossary.title': 'Terms you will see',
            'glossary.d1t': 'Dataset',
            'glossary.d1b': 'A folder of examples (images + short notes) used to teach a smart system.',
            'glossary.d2t': 'Data workflow',
            'glossary.d2b': 'The path from raw measurements to files your training tools can use.',
            'glossary.d3t': 'Labelling',
            'glossary.d3b': 'Adding a short note to data so it is immediately clear what is happening. For example: “person walks by” or “door opens”.',
            'glossary.d4t': 'Sensor readings',
            'glossary.d4b': 'Numbers from things like movement, pressure, or distance, often a string of figures without obvious meaning.',

            'cap.title': 'What can you do with it?',
            'cap.li1': 'Set up cameras and tie them to your sensors on one timeline',
            'cap.li2': 'Spot events on video and link them to your readings',
            'cap.li3': 'Correct by hand where needed',
            'cap.li4': 'Export in common file formats',
            'cap.li5': 'Reuse the same examples for a new version of your system',
            'cap.li6': 'Handle more work without hiring as many extra people',
            'cap.note': 'Care robots, fall alerts, or busy shops, same approach.',

            'problem.title': 'Manual labelling',
            'problem.titleSpan': 'holds you back',
            'problem.headline': 'Many teams run into this',
            'problem.intro': 'Most organisations that work with sensors still label their data by hand. That is slow, expensive, and error-prone.',
            'problem.p1t': 'Time',
            'problem.p1b': 'Manual labelling takes weeks to months. Your team stays stuck on repetitive work instead of moving forward.',
            'problem.p2t': 'Cost',
            'problem.p2b': 'Outsourcing is expensive. Doing it yourself means full-time work that does not really belong to your team.',
            'problem.p3t': 'Quality',
            'problem.p3b': 'Everyone writes things slightly differently. That gives inconsistent labels, and a model trained on those becomes less reliable.',
            'counter.tijd': 'Time saved',
            'counter.snel': 'Faster iteration',
            'counter.100x': '100× faster',
            'counter.nauw': 'Accuracy',

            'solution.title': 'In four steps',
            'solution.headline': 'How AutoAnnotate works',
            'solution.s1t': 'Record',
            'solution.s1b': 'With cameras alongside your sensors, video and readings are recorded together on one timeline.',
            'solution.s2t': 'Spot',
            'solution.s2b': 'The software spots what happens on video: a person, a gesture, an action.',
            'solution.s3t': 'Link',
            'solution.s3b': 'What the camera sees is automatically linked to the sensor data at that same moment.',
            'solution.s4t': 'Export',
            'solution.s4b': 'Export labelled data in common formats, ready to train your model.',

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
            'market.p1': 'More money goes into preparing good training examples. The industry agrees: data quality is often the hurdle, not only the smart program.',
            'market.p2': 'Automatic labelling is growing faster than pure hand work. Investing in scalable labelling speeds every next round.',
            'market.stat1': 'Time teams spend on data prep (indicative)',
            'market.stat2': 'Growth of automatic labelling (indicative)',
            'market.stat3': 'Companies want solutions with strong privacy (indicative)',
            'market.source': 'Figures based on industry analyses; sources available on request.',

            'apps.title': 'Applications',
            'apps.a1t': 'Care and assistive robots',
            'apps.a1b': 'Sensors on the robot or in the room, with the help of cameras: clear examples of gestures, poses, and objects, added automatically.',
            'apps.a2t': 'Wearables & fall detection',
            'apps.a2b': 'Body-worn sensors, with the help of cameras: automatic notes to make fall alerts smarter.',
            'apps.a3t': 'Busy shops & customer flow',
            'apps.a3b': 'Sensors in the store, with the help of cameras: see how busy it is and how people move, handy for planning.',
            'apps.a4t': 'Farms & healthy cattle',
            'apps.a4b': 'Sensors with the herd, with the help of cameras: behaviour and health signals linked automatically.',

            'demo.title': 'In practice',
            'demo.proofTitle': 'Proven with SAR Maatje Pop',
            'demo.proofTitlePrefix': 'Proven with',
            'demo.h': 'SAR Maatje Pop',
            'demo.p': 'For SAR Maatje Pop we work with cameras next to the existing sensors and robot. Contact is labelled automatically so the robot learns faster when someone wants attention or quiet.',
            'demo.m1': 'Faster labelling',
            'demo.m2': 'Images',
            'demo.m3': 'Accuracy',

            'quote1': 'Since we started using AutoAnnotate, we spend far less time on manual labelling. We get usable data faster and the annotation quality stays consistent.',
            'cite1': 'SAR Maatje Pop project coordinator',
            'quote2': 'Export fits our existing workflow well. We can use the files directly without extra conversion steps.',
            'cite2': 'R2R Engineering',
            'quote3': 'Where we previously spent a lot of time aligning and correcting, we now produce clear labels in less time. That gives the team more focus.',
            'cite3': 'Maatje Pop dev team',

            'team.title': 'The team',
            'team.intro': 'AutoAnnotate is an initiative of R2R Engineering and IMeTech Engineering, a team combining product development, care, and organisation with hands-on technology.',
            'team.richard.role': 'Owner R2R Engineering',
            'team.richard.bio': '25 years in product development and innovation. Brings technology and care together, with a focus on what is actually needed.',
            'team.ivo.role': 'Founder IMeTech Engineering',
            'team.ivo.bio': 'Engineer with a mechatronics background. Turns technical ideas into working products. Practical, effective, and hands-on.',
            'team.jackie.role': 'Design & administration, AutoAnnotate',
            'team.jackie.bio': 'Design and administration at AutoAnnotate. Creative and sharp. Brings clarity to visual communication and day-to-day organisation.',
            'team.mark.role': 'Digital transformation advisor',
            'team.mark.bio': 'Over 30 years of experience in digital and business transformation across multiple sectors, both from a consulting perspective and as a director of business units.',
            'team.rick.role': 'Advisor · performing arts & organisation',
            'team.rick.bio': 'Over 20 years in the performing arts: strategy, finance, and communications for leading Dutch music, theatre, and dance companies. Advisor to AutoAnnotate.',
            'team.richard.linkedinAria': 'Richard Schaper’s LinkedIn profile (opens in a new tab)',
            'team.ivo.linkedinAria': 'Ivo Mengerink’s LinkedIn profile (opens in a new tab)',
            'team.jackie.linkedinAria': 'Jackie Oostendorp’s LinkedIn profile (opens in a new tab)',
            'team.mark.linkedinAria': 'Mark Kempkes’s LinkedIn profile (opens in a new tab)',
            'team.rick.linkedinAria': 'Rick Spaan’s LinkedIn profile (opens in a new tab)',

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
            'form.ok': 'Thanks, we will get back to you shortly.',
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

    var SECTION_IDS = ['hero', 'ai-basics', 'probleem', 'oplossing', 'voordelen', 'privacy', 'toepassingen', 'demo', 'team', 'contact', 'contact-form-wrap'];

    function isValidSection(s) {
        return SECTION_IDS.indexOf(s) !== -1;
    }

    /** Pad-URL: /team, /contact, /en/team, /nl/team (nl + sectie wordt genormaliseerd naar /sectie) */
    function parsePathname(pathname) {
        var p = (pathname || '/').replace(/\/+$/, '') || '/';
        if (p === '/') return { lang: null, section: null };
        var parts = p.split('/').filter(Boolean);
        var lang = null;
        if (parts[0] === 'en' || parts[0] === 'nl') {
            lang = parts[0];
            parts = parts.slice(1);
        }
        if (parts.length === 0) return { lang: lang, section: null };
        if (parts.length > 1) return { lang: lang, section: null };
        var section = parts[0];
        if (!isValidSection(section)) return { lang: lang, section: null };
        return { lang: lang, section: section };
    }

    /** Taal + sectie naar pad (NL zonder /nl-prefix; EN onder /en/...) */
    function pathFor(lang, section) {
        if (!normalizeLang(lang)) lang = 'nl';
        var sec = section && section !== 'hero' ? section : null;
        if (!sec) return lang === 'en' ? '/en' : '/';
        if (lang === 'en') return '/en/' + sec;
        return '/' + sec;
    }

    function normalizeLang(v) {
        if (!v) return null;
        v = String(v).toLowerCase();
        return v === 'en' || v === 'nl' ? v : null;
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

        try {
            document.dispatchEvent(new CustomEvent('aa-i18n-applied', { detail: { lang: lang } }));
        } catch (e) { /* ignore */ }
    }

    function currentLang() { return localStorage.getItem('aa_lang') || 'nl'; }
    window.AA_I18N = {
        applyLang: applyLang,
        t: t,
        currentLang: currentLang,
        STR: STR,
        normalizeLang: normalizeLang,
        parsePathname: parsePathname,
        pathFor: pathFor,
        isValidSection: isValidSection,
        SECTION_IDS: SECTION_IDS
    };

    document.addEventListener('DOMContentLoaded', function () {
        var params = new URLSearchParams(window.location.search);
        var parsed = parsePathname(location.pathname);
        var fromPathLang = parsed.lang;
        var fromQuery = normalizeLang(params.get('lang'));
        var saved = fromPathLang || fromQuery || localStorage.getItem('aa_lang') || 'nl';
        applyLang(saved);

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var L = btn.getAttribute('data-lang');
                applyLang(L);
                try {
                    document.dispatchEvent(new CustomEvent('aa-lang-change', { detail: { lang: L } }));
                } catch (e) { /* ignore */ }
            });
        });
    });
})();
