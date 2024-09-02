"use client";

import { useState, useEffect, useRef } from 'react';
import DynamicLandingPage from '../components/DynamicLandingPage';
import AboutSection from '../components/AboutSection';
import ProjectCard from '../components/ProjectCard';
import InteractiveSkillsChart from '../components/InteractiveSkillsChart';
import VisionSection from '../components/VisionSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import EnhancedInteractiveBackground from '../components/EnhancedInteractiveBackground';
import ContactPreviewModal from '../components/ContactPreviewModal';
import { useFullpageScroll } from '../hooks/useFullpageScroll';

const sections = ['home', 'about', 'projects', 'skills', 'vision', 'contact'];

export default function Home() {
  const { currentSection, scrollToSection } = useFullpageScroll(sections.length);
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <EnhancedInteractiveBackground currentSection={currentSection} />
      <main ref={mainRef} className="relative z-10 w-full h-full">
        <Navigation currentSection={currentSection} scrollToSection={scrollToSection} openModal={openModal} />
        <div
          className="absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out"
          style={{
            height: `${100 * sections.length}vh`,
            transform: `translateY(${-currentSection * 100}vh)`
          }}
        >
          <section id="home" className="h-screen">
            <DynamicLandingPage
              currentSection={sections[currentSection]}
              scrollToSection={scrollToSection}
              openModal={openModal}
            />
          </section>
          <section id="about" className="h-screen">
            <AboutSection />
          </section>
          <section id="projects" className="h-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 text-center text-white">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProjectCard title="Univise" description="AI-powered university recommendation system" />
                <ProjectCard title="Cylerity" description="Innovative cycling analytics platform" />
              </div>
            </div>
          </section>
          <section id="skills" className="h-screen">
            <InteractiveSkillsChart />
          </section>
          <section id="vision" className="h-screen">
            <VisionSection />
          </section>
          <section id="contact" className="h-screen">
            <ContactSection />
          </section>
        </div>
        <ContactPreviewModal
          isOpen={isModalOpen}
          onClose={closeModal}
          containerRef={mainRef}
        />
      </main>
    </div>
  );
}