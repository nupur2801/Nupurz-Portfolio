import { Header } from "@/components/navigation/Header";
import { About } from "@/components/sections/About";
import { Chatbot } from "@/components/sections/Chatbot";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Placeholder } from "@/components/sections/Placeholder";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Placeholder id="certificates" label="certificates." bg="bg-coral-soft" />
        <Contact />
        <Chatbot />
      </main>
    </div>
  );
}
