export const projectData = {
  name: "VARMA",
  tagline: "On-Device AI",
  fullTitle: "On-Device Visual Perception for Lightweight Browser Agents",
  problemStatement: "SIH26171",
  organization: "ISRO",
  shortDescription: "On-device visual perception and privacy-preserving browser automation for lightweight intelligent agents.",
  heroTitle: "AI Browser Agents.\nBuilt to Stay Private.",
  
  trustBadges: [
    "ON-DEVICE PROCESSING",
    "PII PROTECTION",
    "LIGHTWEIGHT AI",
    "PRIVACY-FIRST",
    "BROWSER AUTOMATION"
  ],
  
  socialLinks: {
    github: "[Add GitHub URL]",
    demo: "#demo",
    research: "#research"
  },

  sections: {
    hero: {
      title: "AI Browser Agents.\nBuilt to Stay Private.",
      description: "On-device visual perception and privacy-preserving browser automation for lightweight intelligent agents.",
      cta1: "Watch Demo",
      cta2: "Explore Architecture",
      cta3: "View Research"
    },
    
    problem: {
      title: "The Problem",
      description: "Traditional browser agents send all webpage data to cloud servers for processing, exposing sensitive information.",
      risks: [
        "Names",
        "Email addresses",
        "Phone numbers",
        "Aadhaar",
        "Passwords",
        "Addresses",
        "Financial information",
        "Private page content"
      ]
    },

    solution: {
      title: "Meet the Privacy-First Browser Agent",
      description: "Instead of sending everything to a remote AI system, our approach processes sensitive information locally first."
    },

    workflow: {
      title: "From Natural Language to Browser Action",
      stages: [
        {
          number: 1,
          title: "Input Request",
          description: "User gives a natural-language task."
        },
        {
          number: 2,
          title: "Intent Interpretation",
          description: "Agent understands the user's goal."
        },
        {
          number: 3,
          title: "Plan Development",
          description: "Agent creates a step-by-step strategy."
        },
        {
          number: 4,
          title: "Action Execution",
          description: "Agent performs the action."
        }
      ]
    },

    privacy: {
      title: "Privacy Is Not an Afterthought.",
      description: "Sensitive information is detected and protected locally before outbound data is allowed to leave the device.",
      pipeline: [
        "DATA ENTERS DEVICE",
        "LOCAL PROCESSING",
        "PII DETECTION",
        "REDACTION",
        "PAYLOAD RESCAN",
        "ALLOW / BLOCK",
        "SERVER"
      ]
    },

    piiCategories: [
      "PERSON NAME",
      "EMAIL",
      "PHONE",
      "AADHAAR",
      "PASSWORD",
      "ADDRESS",
      "COMPANY"
    ],

    limitations: [
      "Lightweight models can have lower accuracy than large cloud models.",
      "Complex webpages may require additional perception.",
      "PII detection can produce false positives/negatives.",
      "Some websites may use dynamic or non-standard UI elements.",
      "Browser automation still requires security controls.",
      "Prototype measurements may differ from production environments."
    ],

    roadmap: [
      { phase: "PHASE 1", title: "Prototype", status: "COMPLETED" },
      { phase: "PHASE 2", title: "Improved Local Vision", status: "IN PROGRESS" },
      { phase: "PHASE 3", title: "More Robust PII Detection", status: "PLANNED" },
      { phase: "PHASE 4", title: "Advanced Risk-Based Actions", status: "PLANNED" },
      { phase: "PHASE 5", title: "Cross-Browser Support", status: "PLANNED" },
      { phase: "PHASE 6", title: "Production Optimization", status: "PLANNED" }
    ],

    technologies: {
      frontend: ["TypeScript", "React", "Chrome Extension APIs", "Vite", "Tailwind CSS"],
      perception: ["DOM", "Accessibility Tree", "OCR", "Vision Models"],
      localAI: ["ONNX Runtime", "WebGPU / WASM", "Lightweight Models"],
      privacy: ["PII Detection", "NER / Regex", "Redaction", "Policy Engine", "Risk Scoring"],
      execution: ["Chrome DevTools Protocol", "Browser APIs", "Action Validator"]
    },

    threats: [
      { threat: "PII Leakage", detection: "Local Detection", mitigation: "Block/Redact" },
      { threat: "Malicious Webpages", detection: "Risk Evaluation", mitigation: "Sandbox / Block" },
      { threat: "Unsafe Actions", detection: "Risk Evaluation", mitigation: "User Confirmation" },
      { threat: "Prompt Injection", detection: "Intent Validation", mitigation: "Policy Enforcement" }
    ]
  }
};

export const piiDetectionDemo = {
  title: "Privacy Protection in Action",
  description: "See how sensitive information is automatically detected and redacted.",
  categories: [
    { name: "PERSON NAME", color: "bg-red-100 text-red-800" },
    { name: "EMAIL", color: "bg-blue-100 text-blue-800" },
    { name: "PHONE", color: "bg-green-100 text-green-800" },
    { name: "AADHAAR", color: "bg-purple-100 text-purple-800" },
    { name: "PASSWORD", color: "bg-orange-100 text-orange-800" },
    { name: "ADDRESS", color: "bg-pink-100 text-pink-800" },
    { name: "COMPANY", color: "bg-indigo-100 text-indigo-800" }
  ]
};
