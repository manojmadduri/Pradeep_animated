import React, { useEffect, useRef, useState } from "react";
import { Code, Palette, Cloud } from "lucide-react";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-purple-600",
      bgColor: "from-blue-500/20 to-purple-600/20",
      skills: [
        { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "Angular/AngularJS", level: 90, color: "from-red-500 to-pink-500" },
        { name: "TypeScript/JavaScript", level: 92, color: "from-yellow-500 to-orange-500" },
      ]
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-500/20 to-rose-600/20",
      skills: [
        { name: "Figma/Sketch", level: 95, color: "from-purple-500 to-indigo-500" },
        { name: "Adobe XD/Photoshop", level: 88, color: "from-blue-500 to-teal-500" },
        { name: "User Research", level: 85, color: "from-green-500 to-emerald-500" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-500/20 to-teal-600/20",
      skills: [
        { name: "AWS Services", level: 80, color: "from-orange-500 to-red-500" },
        { name: "Docker/Jenkins", level: 75, color: "from-blue-500 to-indigo-500" },
        { name: "Git/CI/CD", level: 90, color: "from-purple-500 to-pink-500" },
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="skills-title">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">Technologies and tools I work with</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="glass-effect p-8 rounded-2xl border border-border/50 card-hover group animate-slide-up"
                style={{animationDelay: `${categoryIndex * 0.2}s`}}
                data-testid={`skill-category-${categoryIndex}`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.bgColor} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300 glow-effect`}>
                    <Icon className={`w-7 h-7 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="skill-item" data-testid={`skill-${categoryIndex}-${skillIndex}`}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-4 overflow-hidden border border-border/30">
                        <div 
                          className={`h-4 rounded-full transition-all duration-1000 ease-out relative overflow-hidden bg-gradient-to-r ${skill.color} shadow-lg`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            animationDelay: `${skillIndex * 0.2}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
