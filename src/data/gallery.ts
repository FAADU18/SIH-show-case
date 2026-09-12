import screenshot1 from '../assets/project/screenshots/WhatsApp Image 2026-09-08 at 5.10.45 AM.jpeg';
import screenshot2 from '../assets/project/screenshots/WhatsApp Image 2026-09-09 at 10.49.29 AM.jpeg';
import screenshot3 from '../assets/project/screenshots/WhatsApp Image 2026-09-09 at 10.49.30 AM (1).jpeg';
import screenshot4 from '../assets/project/screenshots/WhatsApp Image 2026-09-09 at 10.49.30 AM.jpeg';
import screenshot5 from '../assets/project/screenshots/WhatsApp Image 2026-09-09 at 10.49.31 AM (1).jpeg';
import screenshot6 from '../assets/project/screenshots/WhatsApp Image 2026-09-09 at 10.49.31 AM (2).jpeg';
import screenshot7 from '../assets/project/screenshots/WhatsApp Image 2026-09-09 at 10.49.31 AM.jpeg';
import screenshot8 from '../assets/project/screenshots/WhatsApp Image 2026-09-09 at 10.56.41 AM.jpeg';
import screenshot9 from '../assets/project/screenshots/WhatsApp Image 2026-09-09 at 11.11.55 AM.jpeg';
import screenshot10 from '../assets/project/screenshots/WhatsApp Image 2026-09-11 at 4.28.19 AM.jpeg';

export const galleryData = {
  categories: [
    {
      id: "browser-agent",
      name: "Browser Agent",
      description: "Agent in action"
    },
    {
      id: "pii-detection",
      name: "PII Detection",
      description: "Privacy protection features"
    },
    {
      id: "privacy-redaction",
      name: "Privacy Redaction",
      description: "Data masking and protection"
    },
    {
      id: "dashboard",
      name: "Dashboard",
      description: "Observability and monitoring"
    },
    {
      id: "data-flow",
      name: "Data Flow",
      description: "Pipeline visualization"
    },
    {
      id: "server-perspective",
      name: "Server Perspective",
      description: "What server receives"
    }
  ],

  images: [
    {
      id: "img-1",
      filename: "WhatsApp Image 2026-09-08 at 5.10.45 AM.jpeg",
      src: screenshot1,
      caption: "Project demonstration screenshot",
      category: "browser-agent",
      description: "Browser agent interface and capabilities"
    },
    {
      id: "img-2",
      filename: "WhatsApp Image 2026-09-09 at 10.49.29 AM.jpeg",
      src: screenshot2,
      caption: "PII detection in action",
      category: "pii-detection",
      description: "Sensitive information identified and protected"
    },
    {
      id: "img-3",
      filename: "WhatsApp Image 2026-09-09 at 10.49.30 AM (1).jpeg",
      src: screenshot3,
      caption: "Privacy protection features",
      category: "privacy-redaction",
      description: "Data masking and redaction UI"
    },
    {
      id: "img-4",
      filename: "WhatsApp Image 2026-09-09 at 10.49.30 AM.jpeg",
      src: screenshot4,
      caption: "Dashboard overview",
      category: "dashboard",
      description: "Monitoring and observability dashboard"
    },
    {
      id: "img-5",
      filename: "WhatsApp Image 2026-09-09 at 10.49.31 AM (1).jpeg",
      src: screenshot5,
      caption: "Data flow visualization",
      category: "data-flow",
      description: "Pipeline stages and data transformations"
    },
    {
      id: "img-6",
      filename: "WhatsApp Image 2026-09-09 at 10.49.31 AM (2).jpeg",
      src: screenshot6,
      caption: "Privacy validation",
      category: "privacy-redaction",
      description: "Payload validation before transmission"
    },
    {
      id: "img-7",
      filename: "WhatsApp Image 2026-09-09 at 10.49.31 AM.jpeg",
      src: screenshot7,
      caption: "Server visibility",
      category: "server-perspective",
      description: "What the server sees after redaction"
    },
    {
      id: "img-8",
      filename: "WhatsApp Image 2026-09-09 at 10.56.41 AM.jpeg",
      src: screenshot8,
      caption: "Live dashboard monitoring",
      category: "dashboard",
      description: "Real-time event tracking and monitoring"
    },
    {
      id: "img-9",
      filename: "WhatsApp Image 2026-09-09 at 11.11.55 AM.jpeg",
      src: screenshot9,
      caption: "Architecture diagram",
      category: "data-flow",
      description: "Complete system architecture visualization"
    },
    {
      id: "img-10",
      filename: "WhatsApp Image 2026-09-11 at 4.28.19 AM.jpeg",
      src: screenshot10,
      caption: "Full pipeline demonstration",
      category: "browser-agent",
      description: "End-to-end browser agent workflow"
    }
  ],

  video: {
    id: "demo-video",
    filename: "WhatsApp Video 2026-09-06 at 5.26.29 AM.mp4",
    title: "Browser Agent + Privacy Protection",
    description: "Watch the agent perceive a real web interface, identify sensitive information locally, protect private content, and execute the requested browser action.",
    duration: "Video demonstration"
  }
};
