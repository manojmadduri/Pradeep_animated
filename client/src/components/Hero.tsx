import React from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4" data-testid="hero-title">
              <span className="wave-text">Pradeep</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground/80 mb-8" data-testid="hero-subtitle">
            Senior UI/UX Designer & Developer
          </h2>
          
          <p className="text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="hero-description">
            8+ years of crafting exceptional digital experiences through user-centered design and cutting-edge development. Passionate about creating accessible, pixel-perfect interfaces that drive business success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="group inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 glow-effect"
              data-testid="button-view-work"
            >
              <span>View My Work</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center px-8 py-4 border-2 border-primary text-lg font-medium rounded-xl text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 glass-effect"
              data-testid="button-connect"
            >
              <span>Let's Connect</span>
              <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
          
          {/* Contact links */}
          <div className="flex justify-center space-x-8 mb-12">
            <a 
              href="mailto:pradeeppathi363@gmail.com" 
              className="flex items-center text-foreground/70 hover:text-primary transition-colors duration-300 transform hover:scale-110 group"
              title="Email: pradeeppathi363@gmail.com"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.454-6.269h.91c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium">Email</p>
                <p className="text-xs text-muted-foreground">pradeeppathi363@gmail.com</p>
              </div>
            </a>
            <a 
              href="tel:+16038109541" 
              className="flex items-center text-foreground/70 hover:text-primary transition-colors duration-300 transform hover:scale-110 group"
              title="Phone: (603) 810-9541"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium">Phone</p>
                <p className="text-xs text-muted-foreground">(603) 810-9541</p>
              </div>
            </a>
          </div>
        </div>
        
        <div className="mt-16 animate-bounce-subtle">
          <button
            onClick={() => scrollToSection('about')}
            className="inline-block text-foreground/60 hover:text-primary transition-colors duration-300 transform hover:scale-110"
            data-testid="button-scroll-down"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
