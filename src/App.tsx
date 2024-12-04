import { useEffect, useState } from "react";
import ContactSection from "./components/contact-section";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import ProjectSection from "./components/project-section";
import SkillSection from "./components/skill-section";
import LoadingScreen from "./components/loading";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <LoadingScreen />
  ) : (
    <div className={`bg-[url('/bg.jpg')] bg-cover text-white`} id="home">
      <Header />
      <div className="web-container sm:px-0 px-2 py-4">
        <HeroSection />
        <SkillSection />
      </div>
      <div className="w-full h-48 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div className="bg-gray-900">
        <div className="web-container">
          <ProjectSection />
        </div>
      </div>
      <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-orange-500">
        <ContactSection />
      </div>
      <div className="w-full py-10">
        <div className="web-container sm:px-0 px-2">
          @ Copyright 2024, Kendev
        </div>
      </div>
    </div>
  );
}
