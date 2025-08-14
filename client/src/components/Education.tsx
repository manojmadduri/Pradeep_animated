import React from "react";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "Southern Arkansas University",
      year: "May 2023",
      description: "Advanced studies in software engineering, human-computer interaction, and data structures."
    },
    {
      degree: "Bachelor of Technology",
      institution: "Jawaharlal Nehru Technological University",
      year: "May 2017",
      description: "Foundation in computer science principles, programming, and software development."
    }
  ];

  const certifications = [
    {
      name: "Asana Foundations Skill Badge",
      category: "Project Management & Collaboration",
      icon: "🎯"
    },
    {
      name: "UI/UX training program - Design Errs",
      category: "User Experience Design",
      icon: "🎨"
    },
    {
      name: "Certification of Sketch 5 course - Design app & website",
      category: "Design Tools & Prototyping",
      icon: "✏️"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="education-title">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground">Academic background and professional development</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="glass-effect rounded-2xl p-8 border border-border/50 card-hover animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center" data-testid="education-section-title">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative pl-8 group"
                  data-testid={`education-${index}`}
                >
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-blue-500 rounded-full"></div>
                  <div className="absolute left-[-4px] top-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  
                  <div className="bg-muted/50 p-6 rounded-xl border border-border/50 group-hover:border-primary/30 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300" data-testid={`education-degree-${index}`}>
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-semibold bg-primary/10 px-3 py-1 rounded-lg inline-block mb-2" data-testid={`education-institution-${index}`}>
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground font-medium mb-3" data-testid={`education-year-${index}`}>{edu.year}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`education-description-${index}`}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-effect rounded-2xl p-8 border border-border/50 card-hover animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center" data-testid="certifications-section-title">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="glass-effect p-6 rounded-xl border border-border/50 card-hover group"
                  style={{animationDelay: `${index * 0.1}s`}}
                  data-testid={`certification-${index}`}
                >
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl flex items-center justify-center mr-4 text-2xl group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300" data-testid={`certification-name-${index}`}>
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground" data-testid={`certification-category-${index}`}>
                        {cert.category}
                      </p>
                    </div>
                    <div className="w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
