"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChatbot } from "@/components/contexts/ChatbotContext";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const knowledgeBase = {
  // Personal Information
  name: "Nupur",
  education: {
    bachelor: {
      degree: "Bachelor's Degree in Computer Engineering",
      university: "Gujarat Technological University",
      years: "2019 - 2023"
    },
    master: {
      degree: "MS in Computer Science",
      university: "Rowan University, New Jersey, USA",
      years: "2024 - 2026"
    }
  },
  experience: {
    internship: {
      company: "Ellecon Pvt Ltd",
      role: "Full Stack Developer Intern",
      location: "India",
      period: "May 2023 - July 2023",
      description: "Built full-stack web applications using the MERN stack. Developed real-time inventory updates and admin dashboard. Integrated RESTful APIs and improved UI/UX for better usability."
    }
  },
  skills: [
    "Full Stack Development",
    "MERN Stack (MongoDB, Express, React, Node.js)",
    "RESTful API Development",
    "UI/UX Design",
    "Cloud Computing",
    "Machine Learning",
    "Cybersecurity",
    "Infrastructure Management",
    "Real-time Applications"
  ],
  interests: [
    "Intelligent Systems",
    "Practical ML",
    "Thoughtful Automation",
    "AI Safety",
    "Threat Modeling",
    "Cybersecurity"
  ],
  background: "I'm a full stack developer and cloud-minded engineer who enjoys stitching together frontends, APIs, and the infrastructure that keeps them honest. My foundation is in computer engineering, sharpened with a master's in computer science. I have hands-on experience building full-stack applications with the MERN stack."
};

export function Chatbot() {
  const { isOpen, closeChatbot } = useChatbot();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Nupur's AI assistant. Ask me anything about Nupur's education, skills, experience, or background! 👋",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Education related queries
    if (lowerMessage.includes("education") || lowerMessage.includes("study") || lowerMessage.includes("degree")) {
      if (lowerMessage.includes("bachelor") || lowerMessage.includes("undergrad")) {
        return `Nupur completed her Bachelor's Degree in Computer Engineering from Gujarat Technological University from 2019 to 2023. 🎓`;
      } else if (lowerMessage.includes("master") || lowerMessage.includes("graduate")) {
        return `Nupur is currently pursuing her MS in Computer Science at Rowan University, New Jersey, USA from 2024 to 2026. 🎓`;
      } else {
        return `Nupur has a Bachelor's Degree in Computer Engineering from Gujarat Technological University (2019-2023) and is currently pursuing an MS in Computer Science at Rowan University, New Jersey, USA (2024-2026).`;
      }
    }

    // Skills related queries
    if (lowerMessage.includes("skill") || lowerMessage.includes("expertise") || lowerMessage.includes("technology")) {
      if (lowerMessage.includes("mern") || lowerMessage.includes("stack")) {
        return `Nupur has hands-on experience with the MERN stack (MongoDB, Express, React, Node.js) from her internship at Ellecon Pvt Ltd. She also specializes in Full Stack Development, RESTful APIs, and UI/UX design. 💻`;
      } else if (lowerMessage.includes("api") || lowerMessage.includes("backend")) {
        return `Nupur has experience with RESTful API development and full stack development. She integrated APIs during her internship at Ellecon Pvt Ltd and has skills in Cloud Computing and Infrastructure Management. 🔧`;
      } else {
        return `Nupur's skills include Full Stack Development, MERN Stack (MongoDB, Express, React, Node.js), RESTful API Development, UI/UX Design, Cloud Computing, Machine Learning, Cybersecurity, and Infrastructure Management. 💻`;
      }
    }

    // Background/About queries
    if (lowerMessage.includes("about") || lowerMessage.includes("background") || lowerMessage.includes("who")) {
      return knowledgeBase.background;
    }

    // Interests queries
    if (lowerMessage.includes("interest") || lowerMessage.includes("passion") || lowerMessage.includes("like")) {
      return `Nupur is interested in Intelligent Systems, Practical ML, Thoughtful Automation, AI Safety, Threat Modeling, and Cybersecurity. 🤖`;
    }

    // Location queries
    if (lowerMessage.includes("where") || lowerMessage.includes("location") || lowerMessage.includes("live")) {
      return `Nupur is currently studying at Rowan University in New Jersey, USA. 🇺🇸`;
    }

    // Experience queries
    if (lowerMessage.includes("experience") || lowerMessage.includes("work") || lowerMessage.includes("job") || lowerMessage.includes("internship")) {
      if (lowerMessage.includes("internship") || lowerMessage.includes("ellecon")) {
        return `Nupur worked as a Full Stack Developer Intern at Ellecon Pvt Ltd in India from May 2023 to July 2023. She built full-stack web applications using the MERN stack, developed real-time inventory updates and admin dashboard, integrated RESTful APIs, and improved UI/UX for better usability. 💼`;
      } else if (lowerMessage.includes("mern") || lowerMessage.includes("stack")) {
        return `Nupur has hands-on experience with the MERN stack (MongoDB, Express, React, Node.js) from her internship at Ellecon Pvt Ltd. She built full-stack applications and developed real-time features. 🚀`;
      } else if (lowerMessage.includes("project") || lowerMessage.includes("built")) {
        return `During her internship at Ellecon Pvt Ltd, Nupur built full-stack web applications, developed real-time inventory updates, created an admin dashboard, and integrated RESTful APIs. She also improved the UI/UX for better usability. 🛠️`;
      } else {
        return `Nupur has experience as a Full Stack Developer Intern at Ellecon Pvt Ltd (May-July 2023) where she worked with the MERN stack, built real-time applications, and developed RESTful APIs. She's a full stack developer and cloud-minded engineer focused on intelligent systems and practical ML applications. 💼`;
      }
    }

    // Name queries
    if (lowerMessage.includes("name") || lowerMessage.includes("called")) {
      return `My name is not specified, but I'm Nupur's AI assistant! Nupur is the talented developer behind this portfolio. 😊`;
    }

    // Default response
    const defaultResponses = [
      "That's interesting! You can ask me about Nupur's education, skills, experience, or background.",
      "I can tell you about Nupur's internship at Ellecon Pvt Ltd, her MERN stack experience, or her educational journey. What would you like to know?",
      "Feel free to ask about Nupur's experience in full stack development, MERN stack projects, or her technical skills!",
      "I'm here to help you learn more about Nupur. Try asking about her internship, education, or technical interests!"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeChatbot}
        >
          <motion.div
            className="bg-cream rounded-2xl border-2 border-mint-soft shadow-xl overflow-hidden w-full max-w-lg max-h-[80vh]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Chat Header */}
            <div className="bg-mint-soft px-6 py-4 border-b border-mint-soft flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-coral rounded-full animate-pulse"></div>
                <h3 className="font-semibold text-mint-deep">Nupur's AI Assistant</h3>
              </div>
              <button
                onClick={closeChatbot}
                className="text-mint-deep hover:text-mint transition-colors"
                aria-label="Close chatbot"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages Container */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-mint-deep text-cream"
                          : "bg-white text-gray-800 border border-mint-soft"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white text-gray-800 border border-mint-soft px-4 py-3 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-mint-soft rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-mint-soft rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-mint-soft rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-mint-soft p-4 bg-cream-deep">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Nupur's education, skills, or background..."
                  className="flex-1 px-4 py-3 bg-white border border-mint-soft rounded-full focus:outline-none focus:ring-2 focus:ring-mint-soft focus:border-transparent placeholder:text-gray-500 text-gray-800"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={inputValue.trim() === "" || isTyping}
                  className="px-6 py-3 bg-mint-deep text-cream rounded-full hover:bg-mint transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  Send
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Education", "Skills", "Background", "Interests"].map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setInputValue(`Tell me about ${topic.toLowerCase()}`)}
                    className="px-3 py-1 bg-mustard-soft text-ink rounded-full text-sm hover:bg-mustard transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
