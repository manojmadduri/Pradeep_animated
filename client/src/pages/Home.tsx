import React, { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onMobileMenuToggle={toggleMobileMenu} />
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        onMobileMenuClose={closeMobileMenu} 
      />
      
      <main className="lg:ml-64 pt-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="lg:ml-64 bg-gradient-to-r from-sidebar-bg to-background text-muted-foreground py-16 border-t border-sidebar-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h3 className="text-3xl font-black mb-4 text-foreground">
              Pradeep
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">Senior UI/UX Designer & Developer</p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-sm text-muted-foreground/70">&copy; 2025 Pradeep. All rights reserved. Designed with passion and precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
