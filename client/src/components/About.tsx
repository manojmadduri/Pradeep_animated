import React from "react";
import { Download } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="about-title">About Me</h2>
          <p className="text-xl text-muted-foreground">Passionate about creating digital experiences that matter</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="animate-slide-up">
          <div className="glass-effect p-8 rounded-2xl border border-border/50 mb-8">
            <h3 className="text-3xl font-semibold mb-8 text-foreground text-center" data-testid="about-greeting">Hello, I'm Pradeep</h3>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description-1">
                I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description-2">
                Currently, I'm a Senior UI/UX Designer at <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-bold px-2 py-1 bg-blue-500/10 rounded-lg border border-blue-500/20">Cisco</span>, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Cisco's frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description-3">
                In the past, I've had the opportunity to develop software across a variety of settings — from <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent font-semibold">telecommunications</span> and <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent font-semibold">insurance companies</span> to <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold">enterprise platforms</span> and <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-semibold">digital product studios</span>. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with modern technologies.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="glass-effect p-6 rounded-xl border border-border/50 card-hover group relative overflow-hidden" data-testid="info-location">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center mb-3 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 glow-effect">
                  <svg className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent text-lg">Location</h4>
              </div>
              <p className="text-foreground font-medium relative z-10">USA</p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/50 card-hover group relative overflow-hidden" data-testid="info-experience">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center mb-3 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 glow-effect">
                  <svg className="w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent text-lg">Experience</h4>
              </div>
              <p className="text-foreground font-medium relative z-10">8+ Years</p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="/assets/Pradeep_Resume.docx" 
              download="Pradeep_Resume.docx"
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-xl font-semibold transform hover:scale-105 glow-effect"
              data-testid="link-resume-download"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
