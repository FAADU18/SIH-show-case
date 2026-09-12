export const architectureData = {
  zones: [
    {
      id: "user-browser",
      name: "USER / BROWSER",
      description: "User tasks and web interface",
      components: [
        "User Task",
        "Web Pages",
        "Web Apps",
        "Forms",
        "Documents"
      ],
      details: "This is where the user interacts with web applications. The agent observes the browser state and understands the UI.",
      position: { x: 0, y: 0 }
    },
    {
      id: "perception",
      name: "PERCEPTION ENGINE",
      description: "Extract and analyze browser context",
      components: [
        "DOM",
        "Accessibility Tree",
        "Vision",
        "OCR",
        "Element Detection",
        "Compact State"
      ],
      details: "The perception engine combines multiple signals from the browser to build a comprehensive understanding of the page. It processes DOM, visual information, and accessibility data to create a compact state representation.",
      position: { x: 200, y: 0 }
    },
    {
      id: "ai-agent",
      name: "ON-DEVICE AI AGENT",
      description: "Understand and plan actions",
      components: [
        "Intent Interpretation",
        "Plan Development",
        "Lightweight Local Model",
        "Risk-Based Validation"
      ],
      details: "The AI agent runs locally on the device. It interprets user intent, develops a multi-step plan, and validates actions based on privacy and security policies.",
      position: { x: 400, y: 0 }
    },
    {
      id: "browser-control",
      name: "BROWSER CONTROL",
      description: "Execute actions in the browser",
      components: [
        "Chrome DevTools Protocol",
        "Click",
        "Type",
        "Scroll",
        "Navigate",
        "Extract",
        "Wait / Observe"
      ],
      details: "Browser control executes validated actions through the Chrome DevTools Protocol. It can click, type, scroll, navigate, and extract information from the browser.",
      position: { x: 600, y: 0 }
    },
    {
      id: "feedback",
      name: "BROWSER FEEDBACK",
      description: "Observe results and adjust",
      components: [
        "Updated Browser State",
        "Feedback Loop",
        "Re-perception"
      ],
      details: "After each action, the agent observes the updated browser state and re-runs perception to understand the results. This enables adaptive and multi-step task execution.",
      position: { x: 800, y: 0 }
    }
  ],

  privacyGateway: {
    title: "Privacy Gateway",
    description: "Detects and protects sensitive information before it leaves the device",
    components: [
      "PII Detection",
      "Risk Scoring",
      "Redaction",
      "Payload Validation",
      "Policy Enforcement"
    ]
  },

  dataFlow: {
    title: "Data Flow Pipeline",
    stages: [
      { step: 1, name: "Screenshot Captured", description: "Browser state is captured" },
      { step: 2, name: "OCR Processing", description: "Text is extracted from the screen" },
      { step: 3, name: "PII Detection", description: "Sensitive information is identified" },
      { step: 4, name: "PII Redaction", description: "Sensitive data is masked locally" },
      { step: 5, name: "Payload Scanned", description: "Final payload is validated" },
      { step: 6, name: "Agent Selection", description: "Agent selects the next action" },
      { step: 7, name: "Request Sent", description: "Sanitized request goes to server" },
      { step: 8, name: "Server Response", description: "Server receives sanitized data" },
      { step: 9, name: "Browser Update", description: "Browser state is updated" }
    ]
  },

  perceptionPipeline: [
    { component: "DOM", description: "Structure of the webpage" },
    { component: "AX Tree", description: "Accessibility information" },
    { component: "Vision", description: "Visual layout and rendering" },
    { component: "OCR", description: "Text extraction from images" },
    { component: "Element Detection", description: "Identify interactive elements" },
    { component: "Compact State", description: "Unified representation" }
  ]
};
