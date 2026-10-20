export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base.endsWith('/') ? base : base + '/'}${cleanPath}`;
};

export interface Profile {
  fullName: string;
  displayName: string;
  monogram: string;
  headline: string;
  eyebrow: string;
  heroHeadline: string;
  heroDescription: string;
  aboutText: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumePdf: string;
  portrait: string;
  campusPhoto: string;
  cgpa: string;
  academicStatus: string;
  college: string;
  university: string;
}

export const profile: Profile = {
  fullName: 'Siddh Dharod',
  displayName: 'Siddh Dharod',
  monogram: 'SD',
  headline: 'Aspiring Full-Stack Developer | Computer Engineering Student',
  eyebrow: 'COMPUTER ENGINEERING • SOFTWARE DEVELOPMENT',
  heroHeadline: 'Building Ideas Into Digital Experiences.',
  heroDescription: "I'm a third-year Computer Engineering student passionate about building practical digital experiences and exploring Full-Stack Development, Machine Learning, Cloud Computing, and System Design.",
  aboutText: "I'm a third-year Computer Engineering student at Shah & Anchor Kutchhi Engineering College, interested in creating useful software and exploring how technology can solve real-world problems. Through academic work, personal projects, internships, and hackathons, I continue to strengthen my development skills, experiment with new technologies, and collaborate with other builders.",
  location: 'Thane, Maharashtra, India',
  email: 'siddhdharod@gmail.com',
  phone: '+91 8879062991',
  linkedin: 'https://www.linkedin.com/in/siddh-dharod-8a8aa9385',
  github: 'https://github.com/siddharod',
  resumePdf: getAssetUrl('assets/Siddh_Dharod_Resume.pdf'),
  portrait: getAssetUrl('assets/siddh-portrait.jpg'),
  campusPhoto: getAssetUrl('assets/siddh-about.png'),
  cgpa: '9.20/10',
  academicStatus: 'Third Year (B.Tech)',
  college: 'Shah & Anchor Kutchhi Engineering College (SAKEC)',
  university: 'Mumbai University',
};

export interface Highlight {
  label: string;
  value: string;
  detail: string;
}

export const highlights: Highlight[] = [
  { label: 'Academic Standing', value: '9.20 / 10 CGPA', detail: 'Consistent Semester Highs (Sem 3: 9.54, Sem 4: 9.55)' },
  { label: 'Hackathon Honor', value: 'National Winner', detail: 'HackNova 2025 National-Level 12h Hackathon' },
  { label: 'Academic Path', value: 'Computer Engineering', detail: 'Third Year, Shah & Anchor Kutchhi Engineering College' },
  { label: 'Location Base', value: 'Thane, Maharashtra', detail: 'Mumbai Metropolitan Region, India' },
];

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  breakdown?: { sem: string; cgpa: string }[];
  location: string;
}

export const educationList: EducationItem[] = [
  {
    institution: 'Shah & Anchor Kutchhi Engineering College (SAKEC)',
    degree: 'B.Tech in Computer Engineering',
    period: '2024 – Present (Third Year)',
    score: '9.20 / 10 CGPA',
    location: 'Mumbai University, Chembur, Mumbai',
    breakdown: [
      { sem: 'Semester 1', cgpa: '8.98' },
      { sem: 'Semester 2', cgpa: '8.82' },
      { sem: 'Semester 3', cgpa: '9.54' },
      { sem: 'Semester 4', cgpa: '9.55' },
    ],
  },
  {
    institution: 'Pace Junior Science College',
    degree: 'Higher Secondary Certificate (HSC) — Science',
    period: '2022 – 2024',
    score: 'HSC Examination',
    location: 'Thane, Maharashtra',
  },
  {
    institution: 'Saraswati Vidyalaya High School and Junior College of Science',
    degree: 'Secondary School Certificate (SSC)',
    period: 'Completed 2022',
    score: 'SSC Board Examination',
    location: 'Thane, Maharashtra',
  },
];

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  dates: string;
  status: 'Ongoing' | 'Completed';
  verifiedNote?: string;
  responsibilities: string[];
  techStack?: string[];
}

export const experienceList: ExperienceItem[] = [
  {
    company: 'AUSPIFY Technologies',
    role: 'Software Development Intern',
    duration: '1 Month',
    dates: 'Ongoing / Present',
    status: 'Ongoing',
    verifiedNote: 'Current ongoing internship at AUSPIFY Technologies.',
    responsibilities: [
      'Contributing to modern full-stack application development and modular interface components.',
      'Assisting with client software feature integration, responsive state handling, and application workflows.',
      'Collaborating on software architecture standards and engineering best practices.',
    ],
    techStack: ['React', 'JavaScript', 'Node.js', 'UI Architecture'],
  },
  {
    company: 'Elevate Labs',
    role: 'Web Development Intern',
    duration: '45 Days',
    dates: 'Aug 23, 2026 – Oct 2026',
    status: 'Completed',
    verifiedNote: 'Verified via Offer Letter from Elevate Labs.',
    responsibilities: [
      'Collaborated closely with the engineering team on real-time projects enhancing web technologies and responsive design.',
      'Built dynamic website interfaces and developed user-friendly, responsive layouts across devices.',
      'Gained hands-on experience in HTML, CSS, JavaScript, and modern front-end workflows.',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
  },
  {
    company: 'Elevance Skills',
    role: 'Full Stack Web Development Intern',
    duration: '1 Month',
    dates: 'Aug 14, 2026 – Sep 14, 2026',
    status: 'Completed',
    verifiedNote: 'Verified via Certificate of Training (DOC ID: 6a7f67b4d4aac0351088bb37).',
    responsibilities: [
      'Completed rigorous training on Full Stack Web Development and end-to-end web deployment workflows.',
      'Engineered a real-time web application prototype inspired by BookMyShow using Python Django.',
      'Implemented database models, views, templates, and backend RESTful logic.',
    ],
    techStack: ['Python', 'Django', 'Full-Stack Architecture', 'Database Design'],
  },
];

export interface LeadershipItem {
  organization: string;
  role: string;
  type: string;
  summary: string;
  contributions: string[];
}

export const leadershipList: LeadershipItem[] = [
  {
    organization: 'CSI Cell (Computer Society of India) — SAKEC',
    role: 'Technical Head',
    type: 'Campus Technical Leadership',
    summary: 'Directing technical initiatives, student tech events, and peer development workshops for computer engineering students.',
    contributions: [
      'Coordinates technical workshops and competitive coding challenges for collegiate developers.',
      'Guides peers on modern web development practices, problem-solving, and technology exploration.',
      'Oversees technical execution and infrastructure for CSI department sessions.',
    ],
  },
  {
    organization: 'SAKEC Alumni Cell',
    role: 'Member of Technical Team',
    type: 'College Cell Involvements',
    summary: 'Developing and supporting the digital interfaces and network platforms that connect alumni with the institution.',
    contributions: [
      'Maintains and enhances web interfaces for alumni outreach and institutional engagement.',
      'Coordinates digital operations and technical workflows during flagship alumni networking events.',
      'Assists in managing digital database records and portal accessibility.',
    ],
  },
];

export interface ProjectItem {
  id: string;
  name: string;
  headline: string;
  tagline: string;
  category: 'Featured Builds' | 'Full-Stack Applications' | 'AI & Intelligent Systems' | 'Real-World Problem Solving';
  tags: string[];
  techStack: string[];
  github: string;
  demoUrl?: string;
  featured: boolean;
  thumbnail?: string;
  problem: string;
  objective: string;
  contribution: string;
  features: string[];
  architectureSummary: string;
  architectureDetails: {
    frontend: string;
    backend: string;
    dataStorage: string;
    aiMl?: string;
    protocols: string;
  };
  technicalDecisions: string[];
  architectureDiagramType?: 'arogyamitra' | 'accessiq' | 'mochichat' | 'apex' | 'campus';
  architectureImage?: string;
  comparisonImage?: string;
}

export const projectsList: ProjectItem[] = [
  {
    id: 'accessiq',
    name: 'AccessIQ',
    headline: 'Smart Accessibility Assessment System',
    tagline: 'ML-powered geospatial accessibility analytics and infrastructure rating platform.',
    category: 'Featured Builds',
    tags: ['AIML', 'Python', 'ML', 'Streamlit'],
    techStack: ['Python', 'Streamlit', 'Scikit-Learn', 'Folium / Leaflet', 'Pandas', 'NumPy', 'Joblib'],
    github: 'https://github.com/siddharod/AccessIQ',
    featured: true,
    thumbnail: getAssetUrl('assets/accessiq_thumb.png'),
    problem: 'Urban public infrastructure frequently lacks transparent, standardized, data-driven assessments of physical accessibility for individuals with mobility challenges.',
    objective: 'Build an end-to-end intelligent evaluation system that calculates accessibility scores for venues, predicts ratings via machine learning, and maps geographical accessibility metrics.',
    contribution: 'Designed the machine learning model evaluation pipeline, built feature preprocessing algorithms, and developed the interactive geospatial visualization interface in Streamlit.',
    features: [
      'Multi-metric accessibility scoring based on entrance accessibility, elevators, restrooms, and pathway compliance.',
      'Machine Learning rating prediction using trained ensemble models (Random Forest and gradient-boosted decision trees).',
      'Geographical map visualization using Folium/Leaflet to explore accessibility ratings by venue coordinates.',
      'Interactive recommendation generator pointing out high-impact structural adjustments.',
    ],
    architectureSummary: 'Streamlit client interface that parses location and building accessibility parameters, pipes them into a trained Scikit-Learn inference pipeline, and renders geospatial Leaflet overlays with recommendations.',
    architectureDetails: {
      frontend: 'Streamlit interactive components & responsive dark theme',
      backend: 'Python 3 application logic with Scikit-Learn inference',
      dataStorage: 'Structured CSV/Joblib model serialization',
      aiMl: 'Supervised regression & ensemble trees for rating prediction',
      protocols: 'In-process Python data pipelines & GeoJSON mapping',
    },
    technicalDecisions: [
      'Selected Streamlit for rapid iteration and rich interactive data filtering without heavy client overhead.',
      'Used Joblib serialization to decouple model training experimentation from real-time inference.',
      'Adopted Folium GIS mapping for visual geospatial accessibility clustering.',
    ],
    architectureDiagramType: 'accessiq',
  },
  {
    id: 'mochichat',
    name: 'MochiChat',
    headline: 'Real-time Communication Platform',
    tagline: 'High-throughput WebSocket chat platform with instant rooms and persistent messaging.',
    category: 'Full-Stack Applications',
    tags: ['Full-Stack', 'React', 'Node.js', 'Socket.IO'],
    techStack: ['Node.js', 'Express', 'Socket.io', 'React', 'MongoDB', 'TailwindCSS'],
    github: 'https://github.com/siddharod/MochiChat-',
    featured: false,
    thumbnail: getAssetUrl('assets/mochichat_thumb.png'),
    problem: 'Modern web applications require low-latency, lightweight, and reliable communication without heavy monolithic messaging overhead.',
    objective: 'Build an intuitive, responsive real-time chat application supporting instant room creation, live user presence, and persistent conversation history.',
    contribution: 'Implemented full-stack architecture including the WebSocket connection layer, room management server in Express, and reactive React client.',
    features: [
      'Bi-directional low-latency messaging powered by Socket.io and Node.js.',
      'Dynamic room creation and joining with live participant presence indicators.',
      'Message history persistence and clean timestamped conversational feeds.',
      'Mobile-first responsive interface with sleek dark-mode aesthetics.',
    ],
    architectureSummary: 'React client establishes persistent WebSocket handshakes via Socket.io to an Express cluster, routing incoming messages through room event dispatchers and persisting logs to MongoDB.',
    architectureDetails: {
      frontend: 'React with real-time state hooks & TailwindCSS',
      backend: 'Node.js with Express & Socket.io server engine',
      dataStorage: 'MongoDB document collections for users and message threads',
      protocols: 'WebSockets (ws://) with fallback HTTP long-polling',
    },
    technicalDecisions: [
      'Implemented Socket.io namespaces and rooms for clean isolation between conversation threads.',
      'Used optimistic UI updates on the client for instantaneous message rendering before server roundtrips.',
    ],
    architectureDiagramType: 'mochichat',
  },
  {
    id: 'campus-connect',
    name: 'Campus Connect',
    headline: 'Student Community Platform',
    tagline: 'College hackathon prototype uniting campus navigation, department notices, and student utilities.',
    category: 'Real-World Problem Solving',
    tags: ['Full-Stack', 'React', 'Node.js', 'MongoDB'],
    techStack: ['Java / Android', 'React / Web', 'Node.js', 'REST API', 'Leaflet Maps'],
    github: 'https://github.com/siddharod/Campus-Connect-',
    featured: false,
    thumbnail: getAssetUrl('assets/campus_thumb.png'),
    problem: 'Collegiate campuses have fragmented communication channels, making building navigation, lab finding, and urgent department notices difficult for new students.',
    objective: 'Unify campus building navigation, official academic notices, and peer resource sharing into an integrated digital portal.',
    contribution: 'Developed the prototype interface, integrated department notice board services, and mapped college points of interest.',
    features: [
      'Interactive campus directory with search for departments, faculty rooms, and laboratories.',
      'Centralized notice board organizing urgent announcements and examination circulars.',
      'Selected and recognized in internal college hackathon rounds.',
    ],
    architectureSummary: 'Unified client connects to modular REST APIs providing verified campus department registries and real-time announcement streams.',
    architectureDetails: {
      frontend: 'Modular Web & Mobile Responsive client interfaces',
      backend: 'Java / Node.js service layer',
      dataStorage: 'Relational & JSON stores for points of interest and notices',
      protocols: 'HTTP/HTTPS REST APIs',
    },
    technicalDecisions: [
      'Organized data models modularly to allow easy scaling across additional college departments.',
      'Implemented offline caching for campus maps to ensure functionality in low-connectivity lecture halls.',
    ],
    architectureDiagramType: 'campus',
  },
  {
    id: 'apex-expense',
    name: 'AUSPIFY',
    headline: 'Apex Expense Tracker',
    tagline: 'Visual budgeting dashboard with dynamic spending breakdowns and category analytics.',
    category: 'Full-Stack Applications',
    tags: ['Finance', 'React', 'Node.js', 'MongoDB'],
    techStack: ['React', 'JavaScript', 'TailwindCSS', 'Chart.js / Analytics', 'LocalStorage'],
    github: 'https://github.com/siddharod/Apex---Expense-Tracker',
    featured: false,
    thumbnail: getAssetUrl('assets/auspify_thumb.png'),
    problem: 'Students and early-career developers need an intuitive, friction-free way to monitor daily expenses without invasive account linking or overly complex enterprise spreadsheets.',
    objective: 'Provide a crisp, visual personal finance dashboard that captures expenses, tracks income vs outgoings, and computes monthly category insights.',
    contribution: 'Constructed the reactive dashboard UI, developed budget calculation math routines, and created visual category breakdown charts.',
    features: [
      'Fast transaction entry with tags, category selection, and instant balance computation.',
      'Visual breakdowns of expenditure habits via dynamic chart summaries.',
      'Persistent local state management ensuring zero data transmission for privacy.',
      'Exportable financial records and monthly budget threshold alerts.',
    ],
    architectureSummary: 'React single-page application utilizing pure client-side state engines and Chart visualization renderers with immediate local persistence.',
    architectureDetails: {
      frontend: 'React SPA with Tailwind styling & Chart.js data visualization',
      backend: 'Client-side financial computational engine',
      dataStorage: 'Browser LocalStorage / Structured JSON',
      protocols: 'Client-driven state dispatch',
    },
    technicalDecisions: [
      'Engineered with a client-first privacy philosophy—all personal financial inputs remain local on the user device.',
      'Designed high-contrast financial graphs with Prime-inspired cyan and electric-blue data indicators.',
    ],
    architectureDiagramType: 'apex',
  },
  {
    id: 'swasthyasetu',
    name: 'SwasthyaSetu',
    headline: 'AI-Powered Rural Healthcare',
    tagline: 'National Hackathon Winner — Retrieval-based NLP multilingual medical assistance.',
    category: 'AI & Intelligent Systems',
    tags: ['Healthcare', 'React', 'Python', 'MongoDB'],
    techStack: ['Python', 'NLP', 'TF-IDF Vectorization', 'Cosine Similarity', 'Flask', 'Node.js', 'Marathi & English'],
    github: 'https://github.com/MaahiShah287/SwasthyaSetu',
    featured: true,
    thumbnail: getAssetUrl('assets/swasthya_thumb.png'),
    problem: 'Rural populations face steep language barriers, limited specialist access, and complex medical jargon that prevents timely understanding of health reports.',
    objective: 'Create an accessible, bilingual (Marathi & English) healthcare assistant that answers medical queries using verified medical knowledge and summarizes diagnostic lab reports.',
    contribution: 'Collaborated on the retrieval-based Natural Language Processing engine, implementing TF-IDF vectorization, Marathi query preprocessing, cosine similarity document ranking, and extractive medical report summarization.',
    features: [
      'Retrieval-based NLP chatbot answering health questions accurately from curated medical corpora in Marathi and English.',
      'Extractive summarization module distilling lengthy clinical documents and diagnostic lab reports into plain language.',
      'Doctor recommendation and disease informational modules with confidence ranking.',
      'Recognized with 1st/2nd place at HackNova 2025 National-Level 12-Hour Hackathon at Shivajirao Jondhale College of Engineering.',
    ],
    architectureSummary: 'Dual pipeline: Marathi query preprocessing feeds into a TF-IDF vectorizer and Cosine Similarity document ranking engine against verified healthcare corpora, while diagnostic reports pass through extractive summarization for patient guidance.',
    architectureDetails: {
      frontend: 'Responsive patient dashboard with multi-language selector',
      backend: 'Python Flask / Node.js retrieval microservice',
      dataStorage: 'Curated healthcare corpora, FAQs, and medical report guidelines',
      aiMl: 'TF-IDF vectorizer, Marathi stopwords normalization & Cosine Similarity search',
      protocols: 'RESTful JSON API endpoints',
    },
    technicalDecisions: [
      'Chose TF-IDF + Cosine Similarity over black-box LLMs to eliminate medical hallucinations and ensure fast, verifiable retrieval on edge hardware.',
      'Incorporated specialized Marathi tokenization and custom Marathi stopwords for regional accuracy.',
    ],
    architectureDiagramType: 'arogyamitra',
    architectureImage: getAssetUrl('assets/arogyamitra_architecture.png'),
    comparisonImage: getAssetUrl('assets/arogyamitra_comparison.png'),
  },
];

export interface SkillGroup {
  category: string;
  description: string;
  skills: { name: string; verifiedContext: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages verified in coursework, projects, and competitive programming.',
    skills: [
      { name: 'C', verifiedContext: 'SAKEC Coursework & Spoken Tutorial IIT Bombay Certified' },
      { name: 'Python', verifiedContext: 'AccessIQ, SwasthyaSetu ML, Django, Spoken Tutorial Certified' },
      { name: 'Java', verifiedContext: 'SAKEC Academic Curriculum & Campus Connect Prototype' },
      { name: 'JavaScript', verifiedContext: 'MochiChat, Apex Tracker, JS Institute Certified' },
      { name: 'TypeScript', verifiedContext: 'Modern Web Application Builds & Typed Frontends' },
    ],
  },
  {
    category: 'Full-Stack & Web Technologies',
    description: 'Technologies used across internships, hackathons, and personal builds.',
    skills: [
      { name: 'React', verifiedContext: 'Frontend UI for portfolio, chat, and expense tracking' },
      { name: 'Node.js & Express', verifiedContext: 'Backend API routes & Socket.io server engineering' },
      { name: 'Django', verifiedContext: 'Elevance Skills Internship Real-time Project' },
      { name: 'HTML5 & CSS3', verifiedContext: 'Responsive semantic layout & JS Institute Essentials Certified' },
      { name: 'Tailwind CSS', verifiedContext: 'Production design systems, responsive utilities, dark themes' },
      { name: 'Socket.io / WebSockets', verifiedContext: 'Low-latency live bi-directional messaging in MochiChat' },
    ],
  },
  {
    category: 'AI / Machine Learning & Data',
    description: 'Applied machine learning, NLP, and data engineering pipelines.',
    skills: [
      { name: 'Scikit-Learn', verifiedContext: 'AccessIQ predictive accessibility regression & classification' },
      { name: 'TF-IDF & Cosine Similarity', verifiedContext: 'SwasthyaSetu NLP retrieval for Marathi/English' },
      { name: 'Pandas & NumPy', verifiedContext: 'Feature engineering & dataset manipulation' },
      { name: 'Folium & Leaflet GIS', verifiedContext: 'Geospatial mapping in AccessIQ & Campus Connect' },
      { name: 'Streamlit', verifiedContext: 'Interactive data application development' },
    ],
  },
  {
    category: 'Core Computer Engineering Areas',
    description: 'Theoretical foundations and systems engineering interests.',
    skills: [
      { name: 'Full-Stack Development', verifiedContext: 'Primary engineering focus across internships and apps' },
      { name: 'System Design', verifiedContext: 'Scalable service architectures, modular pipelines' },
      { name: 'Cloud Computing', verifiedContext: 'Zero Trust Cloud Security & Palo Alto Networks coursework' },
      { name: 'Cybersecurity Fundamentals', verifiedContext: 'Palo Alto Networks & Network Support Certifications' },
      { name: 'Database Management (SQL/RDBMS)', verifiedContext: 'PostgreSQL, MongoDB, Springboard Certified' },
    ],
  },
];

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  relevance: string;
  badge?: string;
  file?: string;
  topPriority?: boolean;
}

export const certificatesList: CertificateItem[] = [
  {
    id: 'cert-elevance',
    title: 'Certificate of Training — Full Stack Web Development',
    issuer: 'Elevance Skills',
    date: 'August 15, 2026',
    relevance: 'Completed training and real-time project on building a BookMyShow-style web application using Python Django (DOC ID: 6a7f67b4d4aac0351088bb37).',
    file: getAssetUrl('assets/elevance_certificate.png'),
    badge: 'Internship Training',
    topPriority: true,
  },
  {
    id: 'cert-palo-alto-1',
    title: 'Palo Alto Networks Course Certificate of Completion',
    issuer: 'Palo Alto Networks Cybersecurity Academy',
    date: 'Verified 2025/2026',
    relevance: 'Network Security Fundamentals, secure infrastructure principles, and modern firewall policy configurations.',
    file: getAssetUrl('certificates/12437_3_904985_1784395387_Palo Alto Networks Course Certificate of Completion.pdf'),
    badge: 'Cybersecurity',
    topPriority: true,
  },
  {
    id: 'cert-ibm-ai',
    title: 'AI Fundamentals with IBM SkillsBuild',
    issuer: 'IBM & Cisco Networking Academy',
    date: 'Verified Credential',
    relevance: 'Foundational concepts in artificial intelligence, neural networks, ethics, and machine learning algorithms.',
    file: getAssetUrl('certificates/Siddh - AI Fundamentals with IBM SkillsBuild Certificate (CISCO).pdf'),
    badge: 'Artificial Intelligence',
    topPriority: true,
  },
  {
    id: 'cert-genai-intern',
    title: 'Gen AI Virtual Internship Certificate',
    issuer: 'EduSkills / AICTE',
    date: 'Verified Internship',
    relevance: 'Hands-on practical implementations using generative AI models, prompt engineering, and intelligent application design.',
    file: getAssetUrl('certificates/Siddh- Gen AI Virtual Internship Certificate.pdf'),
    badge: 'Gen AI',
    topPriority: true,
  },
  {
    id: 'cert-spoken-python',
    title: 'Spoken Tutorial: Python Programming',
    issuer: 'IIT Bombay — National Mission on Education through ICT',
    date: 'Verified Certificate',
    relevance: 'Passed comprehensive exam covering core Python data structures, OOP principles, and standard library utilities.',
    file: getAssetUrl('certificates/SPOKEN TUTORIAL (PYTHON).pdf'),
    badge: 'IIT Bombay',
    topPriority: true,
  },
  {
    id: 'cert-spoken-c',
    title: 'Spoken Tutorial: C Programming',
    issuer: 'IIT Bombay — National Mission on Education through ICT',
    date: 'Verified Certificate',
    relevance: 'Procedural programming, pointers, memory allocation, and algorithmic design.',
    file: getAssetUrl('certificates/SPOKEN TUTORIAL (C).pdf'),
    badge: 'IIT Bombay',
    topPriority: true,
  },
  {
    id: 'cert-spoken-rdbms',
    title: 'Spoken Tutorial: RDBMS PostgreSQL',
    issuer: 'IIT Bombay — National Mission on Education through ICT',
    date: 'Verified Certificate',
    relevance: 'Relational database schema modeling, SQL querying, constraints, and index optimization.',
    file: getAssetUrl('certificates/SPOKEN TUTORIAL (RDBMS).pdf'),
    badge: 'IIT Bombay',
    topPriority: false,
  },
  {
    id: 'cert-js-essentials',
    title: 'JavaScript Essentials Certificate',
    issuer: 'JS Institute / OpenEDG',
    date: 'Verified Credential',
    relevance: 'Core ECMAScript fundamentals, DOM manipulation, asynchronous programming, and closures.',
    file: getAssetUrl('certificates/Siddh- JavaScript Essentials Certificate (JS INSTITUTE).pdf'),
    badge: 'Web Standard',
    topPriority: false,
  },
  {
    id: 'cert-html-essentials',
    title: 'HTML Essentials Certificate',
    issuer: 'JS Institute / OpenEDG',
    date: 'Verified Credential',
    relevance: 'Semantic web markup, accessibility guidelines, forms, and responsive viewport principles.',
    file: getAssetUrl('certificates/Siddh- HTMLEssentials Certificate (JS INSTITUTE).pdf.pdf'),
    badge: 'Web Standard',
    topPriority: false,
  },
  {
    id: 'cert-net-sec',
    title: 'Network Support and Security Badge',
    issuer: 'Cisco Networking Academy',
    date: 'Verified Badge',
    relevance: 'Network topology diagnostics, packet tracing, protocol security, and subnetting.',
    file: getAssetUrl('certificates/Siddh- Network Support and Security Certificate (BADGE CERTIFICATE).pdf'),
    badge: 'Networking',
    topPriority: false,
  },
  {
    id: 'cert-springboard-os',
    title: 'Operating Systems & System Architecture',
    issuer: 'Infosys Springboard',
    date: 'Verified Coursework',
    relevance: 'Process scheduling, concurrency, virtual memory, threads, and file system mechanics.',
    file: getAssetUrl('certificates/Siddh- Springboard (Operating Systems).pdf'),
    badge: 'Computer Systems',
    topPriority: false,
  },
  {
    id: 'cert-codethon',
    title: 'Codethon 2025 Competitive Programming',
    issuer: 'SAKEC Computer Engineering',
    date: 'March 15, 2025',
    relevance: 'Algorithmic problem solving and high-speed competitive programming implementation.',
    file: getAssetUrl('certificates/Siddh Codethon (15_03_2025).pdf'),
    badge: 'Competition',
    topPriority: false,
  },
];

export const achievementsList = [
  {
    title: 'National-Level Hackathon Winner',
    event: 'HackNova 2025 (12-Hour National Hackathon)',
    venue: 'Shivajirao S. Jondhale College of Engineering',
    year: '2025',
    description: 'Won top placement for developing SwasthyaSetu (ArogyaMitra), an AI-assisted rural healthcare solution featuring NLP retrieval in regional Marathi language, diagnostic report summarization, and doctor recommendation.',
    verified: true,
  },
  {
    title: 'Internal College Hackathon Winner',
    event: 'SAKEC Internal Hackathon Round',
    venue: 'Shah & Anchor Kutchhi Engineering College',
    year: '2024 / 2025',
    description: 'Selected and awarded for prototyping Campus Connect, a smart campus directory and departmental notice coordination platform.',
    verified: true,
  },
];
