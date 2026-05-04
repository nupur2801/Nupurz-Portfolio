export type Project = {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  url: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Julius Silvert",
    description:
      "Redesigned the Julius Silvert e-commerce platform to deliver a modern, responsive user experience with improved navigation, smarter product discovery, and an optimized ordering workflow.",
    image: "/julius-silvert.png",
    tags: ["Node.js", "React.js", "Express.js", "MongoDB"],
    url: "https://julius-silvert.nupurpatel.me/",
    liveUrl: "https://julius-silvert.nupurpatel.me/",
  },
  {
    title: "Research Assistant Chatbot",
    description:
      "A research chatbot that provides intelligent, context-aware answers to enhance information discovery.",
    image: "/ollama-chatbot.png",
    tags: ["Node.js", "React.js", "Ollama", "LLaMA 3"],
    url: "https://github.com/nupur2801/ai-llm-research-assistant",
    githubUrl: "https://github.com/nupur2801/ai-llm-research-assistant",
  },
  {
    title: "Form Builder",
    description:
      "A dynamic form builder application that enables users to create and customize forms with real-time interaction using modern web technologies.",
    image: "/form-builder.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    url: "https://form-builder.nupurpatel.me/",
    liveUrl: "https://form-builder.nupurpatel.me/",
  },
  {
    title: "AI Coding Editor",
    description:
      "An AI-powered coding editor that enhances development with intelligent suggestions and real-time assistance.",
    image: "/ai-code-editor.png",
    tags: ["TypeScript", "JavaScript"],
    url: "https://github.com/nupur2801/AI-Coding-Editor",
    githubUrl: "https://github.com/nupur2801/AI-Coding-Editor",
  },
  {
    title: "Bag Shop",
    description:
      "My first practice website built using HTML and CSS to learn and explore frontend development.",
    image: "/bag-shop.png",
    tags: ["HTML", "CSS", "JS"],
    url: "https://nupurpatel-myfirstwebsite.netlify.app/",
    liveUrl: "https://nupurpatel-myfirstwebsite.netlify.app/",
  },
];
