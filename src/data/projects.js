export const projects = [
  {
    id: "schedulink",
    number: "01",
    title: "Schedulink",
    subtitle: "Appointment & Scheduling Platform",
    tagline: "Bridging the gap between service providers and client availability.",
    year: "2026",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Git", "GitHub"],
    github: "https://github.com/hkul2604/schedulink",
    liveDemo: null, // Configurable demo link
    previewImage: "/images/schedulink_preview.svg",
    category: "Full Stack & Web",
    caseStudy: {
      problem: "Unpredictable waiting times, manual appointment coordination, and overloaded professional workload scheduling lead to missed sessions, lost revenue, and poor customer experience.",
      whatIBuilt: "A centralized appointment and availability management platform designed to help customers explore real-time professional slots and effortlessly book without friction.",
      howItWorks: "Customers can view provider availability matrices in real-time, select suitable timeslots, receive automatic booking confirmations, and enable providers to view structured calendars.",
      technologies: ["HTML5", "CSS3", "Modern JavaScript", "Python Backend", "Git & GitHub Version Control"],
      myRole: "Collaborated on frontend UI, appointment booking flow design, scheduling logic, and Git collaboration.",
      challenges: "Handling edge-case slot collisions, managing timezone consistency, and ensuring responsive mobile booking screens.",
      whatILearned: "End-to-end full stack architecture, state synchronization between slot availability and user bookings, and team collaboration via Git branching.",
      futureImprovements: "Automated SMS/WhatsApp reminders, Google Calendar bi-directional sync, and payment gateway integration."
    }
  },
  {
    id: "finsync",
    number: "02",
    title: "FinSync",
    subtitle: "Tax Intelligence & Reconciliation Platform",
    tagline: "Multi-broker transaction standardization and intelligent reconciliation.",
    year: "2026",
    technologies: ["Python", "Data Processing", "AI / Automation", "Pandas", "Reconciliation Engine"],
    github: "https://github.com/aditianayak15-code/finsync-tax-intelligence",
    liveDemo: null,
    previewImage: "/images/finsync_preview.svg",
    category: "Fintech & Data Automation",
    caseStudy: {
      problem: "Retail investors face fragmented data across multiple brokerage platforms, duplicate entries, manual calculation of short/long-term capital gains, and difficult AIS / 26AS statement reconciliation.",
      whatIBuilt: "An automated financial-tax pipeline that aggregates and normalizes multi-broker transaction data, eliminates redundant trades, calculates capital gains, and categorizes tax details.",
      howItWorks: "Parses heterogeneous broker reports (Zerodha, Groww, etc.), maps trades into canonical schemas, flags discrepancy anomalies against official tax reports, and provides CA-focused multi-client reports.",
      technologies: ["Python", "Data Cleaning & Parsing", "AI-assisted Discrepancy Detection", "Tax-loss Analysis Logic", "Automated Reporting"],
      myRole: "Engineered core data parsing algorithms, deduplication scripts, and tax classification logic.",
      challenges: "Normalizing vastly different CSV/XLS broker export formats and accurately identifying edge-case corporate actions (splits, bonuses).",
      whatILearned: "Advanced data manipulation in Python, algorithmic reconciliation workflows, and practical financial tax compliance regulations.",
      futureImprovements: "Direct ITD API integration, predictive tax-saving recommendations, and automated 1099/ITR-2 filing generator."
    }
  },
  {
    id: "trustiq",
    number: "03",
    title: "TrustIQ",
    subtitle: "AI Model Marketplace & Trust Benchmark",
    tagline: "Verifying, comparing, and deploying trustworthy AI models.",
    year: "2026",
    technologies: ["AI Marketplace", "Model Evaluation", "Chatbot", "AI Recommendations", "Python", "Vite"],
    github: "https://github.com/aditianayak15-code/tr-justiq",
    liveDemo: null,
    previewImage: "/images/trustiq_preview.svg",
    category: "AI & Systems",
    caseStudy: {
      problem: "Developers and enterprises struggle to evaluate open-source and proprietary AI models for domain-specific safety, latency, accuracy, and cost-efficiency before deployment.",
      whatIBuilt: "A trust-first AI model discovery marketplace providing transparent benchmarks, automated model recommendations, and guided evaluation frameworks.",
      howItWorks: "Users specify performance needs (e.g. text classification, low latency, edge deployment). TrustIQ compares benchmark metrics, provides conversational model advice via an integrated assistant, and generates deployment recipes.",
      technologies: ["AI Benchmark Frameworks", "Conversational AI Interface", "Recommendation Logic", "Modern Frontend UI"],
      myRole: "Designed marketplace architecture, recommendation pipeline logic, model evaluation metric cards, and responsive interface.",
      challenges: "Establishing meaningful, standardized trust & latency scores across disparate LLM architectures.",
      whatILearned: "Deepened knowledge of AI model evaluation standards, ethical AI benchmarking, and intuitive marketplace UX design.",
      futureImprovements: "Real-time sandbox testing environment, automated latency profiling on edge devices, and decentralized model verification."
    }
  },
  {
    id: "safe-twin",
    number: "04",
    title: "Safe-Twin",
    subtitle: "AI-Driven Failure Cascade & Safe Maintenance Planning",
    tagline: "Predictive digital twin topology and safe industrial maintenance planning.",
    year: "2026",
    technologies: ["React", "Vite", "Python", "FastAPI", "Machine Learning", "React Flow", "Three.js", "SQLite"],
    github: "https://github.com/princi143",
    repoIsProfile: true, // no public repo yet — button links to the GitHub profile
    liveDemo: null,
    previewImage: "/images/safetwin_preview.svg",
    category: "Digital Twin & Hackathon Build",
    isHackathonBuild: true,
    caseStudy: {
      problem: "Traditional predictive maintenance flags isolated machine warnings without understanding upstream and downstream dependency cascades, leading to unexpected plant halts and risky maintenance schedules.",
      whatIBuilt: "An industrial software digital twin concept that models interconnected machinery topologies, computes failure cascade probabilities, and proposes safe maintenance windows.",
      howItWorks: "Constructs a dependency graph connecting manufacturing units (Node A -> Node B -> Node C). As risk scores fluctuate via simulated telemetry, cascade simulation algorithms highlight critical failure pathways and suggest optimal intervention timing.",
      technologies: ["React & Vite", "FastAPI Backend", "Machine Learning Risk Scoring", "Graph Dependency Topology (React Flow / Three.js)", "SQLite State Store"],
      myRole: "Created interactive topology visualizer, integrated risk propagation logic, and built the live simulation dashboard.",
      challenges: "Modeling realistic cascading probabilities across multi-node acyclic/cyclic industrial graphs in real-time.",
      whatILearned: "Graph data structures applied to industrial systems, real-time telemetry state streaming, and full-stack API contract design.",
      futureImprovements: "Edge IoT sensor ingestion over MQTT, 3D photorealistic CAD twin rendering, and RL-based maintenance schedule optimization."
    }
  }
];
