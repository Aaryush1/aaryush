'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import DynamicLandingPage from '../components/DynamicLandingPage';
import AboutSection from '../components/AboutSection';
import ProjectCard from '../components/ProjectCard';
import InteractiveSkillsChart from '../components/InteractiveSkillsChart';
import VisionSection from '../components/VisionSection';
import ContactSection from '../components/ContactSection';

const projects = [
  {
    title: 'Univise',
    shortDescription: 'AI-powered academic advising',
    longDescription: 'Univise is an innovative platform that leverages AI to provide personalized academic advice to students.',
    keyFeatures: ['Personalized course recommendations', 'Degree progress tracking', 'Career path insights'],
    technologies: ['Machine Learning', 'React', 'Node.js', 'MongoDB'],
    image: '/univise-placeholder.jpg'
  },
  {
    title: 'Cylerity',
    shortDescription: 'ML for healthcare receivables',
    longDescription: 'Cylerity utilizes machine learning to optimize and accelerate accounts receivables processes for healthcare providers.',
    keyFeatures: ['Automated claim processing', 'Predictive analytics for payment', 'Real-time financial insights'],
    technologies: ['Python', 'TensorFlow', 'SQL', 'Tableau'],
    image: '/cylerity-placeholder.jpg'
  },
];

export default function Home() {
  const appRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: appRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = ['home', 'about', 'projects', 'skills', 'vision', 'contact'];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop - windowHeight / 2) {
          setCurrentSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ParallaxProvider>
      <div ref={appRef} className="bg-gray-900 text-white">
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-mclaren-orange z-50" style={{ scaleX }} />

        <DynamicLandingPage currentSection={currentSection} />

        <AboutSection />

        <section id="projects" className="min-h-screen py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map(project => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <InteractiveSkillsChart />

        <VisionSection />

        <ContactSection />
      </div>
    </ParallaxProvider>
  );
}