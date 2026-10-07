/* ══════════════════════════════════════════════
   Traductions — version anglaise du portfolio
   Le texte français est directement dans index.html.
   Pour modifier l'anglais, change le texte ici (même clé que data-i18n).
══════════════════════════════════════════════ */
window.I18N_EN = {
  /* Méta & navigation */
  'meta.description': "Portfolio of Kelyan Clark Tahe, software engineering co-op student at the University of Ottawa: full-stack web apps, real-time systems, UI/UX design.",
  'nav.skip': 'Skip to content',
  'nav.aria': 'Main navigation',
  'nav.menu': 'Open menu',
  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.work': 'My approach',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',

  /* Héro */
  'hero.tag': 'Looking for a co-op internship',
  'hero.hello': "Hi, I'm",
  'hero.lead': 'Software engineering student at the University of Ottawa · Passionate about building websites and useful applications that make a real difference for users.',
  'hero.cta1': 'See my projects',
  'hero.cta2': 'Learn more',
  'hero.photo': 'Photo of Kelyan Clark Tahe',

  /* À propos */
  'about.title': 'About me',
  'about.p1': "I'm a software engineering student at the University of Ottawa, in the co-op program. I love building concrete applications that solve real problems: a real-time video monitoring platform, a voting system for a school, an online store for a jewelry brand.",
  'about.p2': "What sets me apart is the care I put into user experience: I want my tools to be as intuitive as they are solid. Outside of code, I draw, play the piano and I'm interested in video game development and robotics.",
  'social.email': 'Email Kelyan Clark Tahe',

  /* Compétences */
  'skills.title': 'Skills',
  'skills.lang': 'Languages',
  'skills.back': 'Back-end & data',
  'skills.tools': 'Tools & quality',

  /* Approche */
  'work.title': 'My approach',
  'work.process.title': 'My process',
  'work.process.1': '<strong>Understand</strong>: who the user is and what problem they face.',
  'work.process.2': '<strong>Sketch</strong>: mockups and user flows in Figma.',
  'work.process.3': '<strong>Build</strong>: a working prototype, then a deployed version.',
  'work.process.4': '<strong>Test</strong>: testing, heuristic evaluation and iterations.',
  'work.edu.title': 'Education',
  'work.edu.degree': 'Bachelor of Software Engineering (co-op), University of Ottawa.',
  'work.edu.1': 'SEG3525: User interface design',
  'work.edu.2': 'SEG3503: Software verification and testing',
  'work.edu.3': 'CSI3531: Operating systems',
  'work.edu.4': 'SEG3501: Requirements engineering',
  'work.goal.title': 'What I aim for',
  'work.goal.p1': 'Projects that are <strong>deployed and used</strong>, not just mockups. My web projects are live and their code is public on GitHub.',
  'work.goal.p2': "I love taking on <strong>new experiences</strong>: tackling challenges I've never faced before is how I learn the most.",
  'work.goal.link': "My references: Nielsen's heuristics",

  /* Projets : titres et filtres */
  'projects.title': 'My projects',
  'projects.subtitle': 'From UX prototype to deployed full-stack application.',
  'projects.others': 'Other projects',
  'projects.wip': 'In development',
  'filter.aria': 'Filter projects',
  'filter.all': 'All',
  'filter.web': 'Web & UX',
  'filter.mobile': 'Mobile & games',
  'filter.systems': 'Systems & quality',

  /* Statuts et boutons */
  'status.live': 'Live',
  'status.done': 'Completed',
  'status.course': 'Coursework',
  'status.design': 'In design',
  'status.wip': 'In progress',
  'btn.view': 'View project',

  /* Sentinel */
  'p.sentinel.open': 'Open Sentinel',
  'p.sentinel.alt': 'Hand mounting a security camera on the ceiling',
  'p.sentinel.cat': 'Featured · Full-stack',
  'p.sentinel.desc': 'Remote monitoring platform: a device streams its camera live to a secure web dashboard.',
  'p.sentinel.challenge': '<strong>Challenge:</strong> establishing peer-to-peer video (WebRTC) across different networks, with a WebSocket signaling server and a TURN relay.',
  'p.sentinel.code': 'Sentinel source code on GitHub',

  /* VoteBal */
  'p.vote.open': 'Open VoteBal',
  'p.vote.alt': 'Golden ballot box to elect the prom king and queen',
  'p.vote.cat': 'Featured · Real client',
  'p.vote.desc': "Online voting platform to elect the prom king and queen of a school in Côte d'Ivoire, with an admin dashboard.",
  'p.vote.challenge': '<strong>Challenge:</strong> guaranteeing a single vote per person and per category with an anonymous token verified server-side, and opening or closing the vote from the admin area.',
  'p.vote.code': 'VoteBal source code on GitHub',
  'p.vote.site': 'The voting site',
  'p.vote.siteSub': 'What students see',
  'p.vote.admin': 'The admin area',
  'p.vote.adminSub': 'Managing candidates and the vote',

  /* Autres projets */
  'p.dc.open': 'Open Docteur Cheveux',
  'p.dc.alt': 'Preview of the Docteur Cheveux project',
  'p.dc.desc': 'Web app for hair diagnosis and appointment booking for a hair salon.',
  'p.dc.approach': '<strong>Approach:</strong> prototype designed with a user-centered process, as part of the SEG3525 course.',
  'p.dc.code': 'Docteur Cheveux source code on GitHub',

  'p.palma.open': 'Open Palma',
  'p.palma.alt': 'Preview of the Palma store',
  'p.palma.desc': 'Online store with a product catalog and shopping cart.',
  'p.palma.btn': 'Visit the store',
  'p.palma.code': 'Palma source code on GitHub',

  'p.bf.open': 'Open the Black Friday dashboard',
  'p.bf.alt': 'Preview of the Black Friday dashboard',
  'p.bf.cat': 'Data · Visualization',
  'p.bf.title': 'Black Friday Dashboard',
  'p.bf.desc': 'Analysis of electronics sales during Black Friday, presented as a dashboard to support decision-making.',
  'p.bf.btn': 'View the analysis',
  'p.bf.code': 'Dashboard source code on GitHub',

  'p.mem.open': 'Play Memorizz',
  'p.mem.alt': "Two Memorizz avatars facing off in Battle mode",
  'p.mem.cat': 'Featured · Web game',
  'p.mem.desc': 'Bilingual memory games in the browser: memorize a sequence, solve the math, then take on a friend or the computer in a 2D or 3D boxing match.',
  'p.mem.challenge': '<strong>Challenge:</strong> syncing the whole fight to the beat of the music and building the 3D ring in pure CSS, with no library.',
  'p.mem.btn': 'Play',
  'p.mem.code': 'Memorizz source code on GitHub',
  'btn.video': 'Video',
  'video.langAria': 'Video language',
  'video.close': 'Close',

  'p.utaste.desc': 'Android app to look up food nutrition information using the OpenFoodFacts API, with local storage.',

  'p.afri.cat': 'Video game',
  'p.afri.desc': 'Video game built in Python, with its interface and screens first designed as mockups in Figma.',

  'p.dep.open': 'View the DepCache code',
  'p.dep.cat': 'Systems · Swift',
  'p.dep.desc': 'Swift command-line tool exploring two ideas at the heart of build systems: dependency build order and caching.',
  'p.dep.how': '<strong>How:</strong> topological sort (Kahn\'s algorithm) to find a valid build order, then input hashing to skip unnecessary rebuilds.',
  'p.dep.t1': 'Graphs',
  'p.dep.t2': 'Hashing',
  'btn.code': 'View the code',

  'p.sys.cat': 'Systems · Testing',
  'p.sys.title': 'Systems & software quality',
  'p.sys.1': 'Process chain in C using <code>fork</code>, <code>execvp</code> and pipes (Linux).',
  'p.sys.2': 'Thread synchronization in Java with locks and semaphores.',
  'p.sys.3': 'JUnit testing: branch coverage, state-based tests, JaCoCo report.',

  /* En cours */
  'p.laly.cat': 'E-commerce · Real client',
  'p.laly.desc': 'Online store for chains and jewelry for a brand based in Abidjan: a powder pink and gold look, Wave mobile payment in FCFA, product catalog, etc.',
  'p.laly.step': '<strong>Current stage:</strong> visual identity and payment method approved with the client; mockups and architecture in progress.',
  'p.laly.t1': 'Wave payment',
  'p.laly.t2': 'Responsive design',

  'p.photo.cat': 'Full-stack · Real client',
  'p.photo.title': 'Photographer portfolio',
  'p.photo.desc': 'Showcase and booking website for a photographer in France: gallery, appointment booking and admin dashboard.',

  /* Contact */
  'contact.kicker': 'Contact',
  'contact.title': 'Have an internship, a project or an idea?<br><span>Let\'s build it together.</span>',
  'contact.lead': "I'm looking for a software development co-op internship. If you want someone who ships applications that work, from design to deployment, let's talk.",
  'contact.pt1': 'Real projects, deployed and used',
  'contact.pt2': 'From front-end to back-end and database',
  'contact.pt3': 'A genuine focus on user experience',
  'contact.fastest': 'The fastest way: email',
  'contact.copy': 'Copy',
  'contact.copied': 'Copied!',
  'contact.copyAria': 'Copy email address',
  'contact.mailto': 'mailto:ctahe033@uottawa.ca?subject=Co-op%20internship%20opportunity',
  'contact.write': 'Write to me now',
  'contact.li': 'My background',
  'contact.gh': 'My code'
};
