import React from "react";
import { Building, Smartphone, Shield, Laptop } from "lucide-react";
import ciscoImg from "@assets/image_1755139491585.png";
import asanaImg from "@assets/image_1755139499226.png";

export function Experience() {
  const experiences = [
    {
      title: "Sr UI/UX Designer",
      company: "Cisco, CA",
      period: "Mar 2025 - Present",
      project: "Cisco Partner Feedback Central (CPFC)",
      icon: Building,
      color: "primary",
      description: [
        "Led UI/UX design using wireframes, prototypes, and usability testing to validate workflows",
        "Developed AngularJS components and services for interactive dashboards",
        "Implemented responsive layouts with HTML5, CSS3, and Bootstrap",
        "Enhanced portal performance through lazy loading and pagination optimization"
      ],
      technologies: ["Angular", "TypeScript", "ServiceNow", "Material UI"],
      image: ciscoImg
    },
    {
      title: "UI/UX Designer",
      company: "Verizon, Dallas, Texas",
      period: "Feb 2024 - Jan 2025",
      project: "Customer Service Platform Enhancement",
      icon: Smartphone,
      color: "red",
      description: [
        "Designed intuitive customer service interfaces with React and Material-UI",
        "Improved user experience through comprehensive UX research and testing",
        "Implemented responsive design patterns for mobile-first approach",
        "Collaborated with cross-functional teams to deliver user-centered solutions"
      ],
      technologies: ["React", "Material-UI", "Figma", "User Research"],
      image: asanaImg
    },
    {
      title: "UI/UX Developer",
      company: "State Farm, Bloomington, IL",
      period: "Jan 2022 - Feb 2024",
      project: "Insurance Platform Modernization",
      icon: Shield,
      color: "green",
      description: [
        "Led frontend development for insurance claim processing systems",
        "Implemented accessibility standards (WCAG 2.1) across all interfaces",
        "Developed reusable component libraries with React and TypeScript",
        "Optimized application performance and user experience metrics"
      ],
      technologies: ["React", "TypeScript", "WCAG 2.1", "Performance"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300"
    },
    {
      title: "React UI/UX Developer",
      company: "GSV Soft Systems, Hyderabad",
      period: "July 2016 - Aug 2021",
      project: "Full-Stack Development & UI Design",
      icon: Laptop,
      color: "purple",
      description: [
        "Developed enterprise web applications using MEAN stack",
        "Created responsive mobile applications with React Native",
        "Designed and implemented RESTful APIs and microservices",
        "Established UI/UX design processes and component libraries"
      ],
      technologies: ["MEAN Stack", "React Native", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300"
    }
  ];

  const getCompanyColors = (company: string) => {
    const colorMap = {
      "Cisco, CA": { 
        bg: "from-blue-500/20 to-cyan-500/20", 
        text: "from-blue-500 to-cyan-500",
        badge: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/30 text-blue-400"
      },
      "Verizon, Dallas, Texas": { 
        bg: "from-red-500/20 to-pink-500/20", 
        text: "from-red-500 to-pink-500",
        badge: "bg-gradient-to-r from-red-500/10 to-pink-500/10 border-red-500/30 text-red-400"
      },
      "State Farm, Bloomington, IL": { 
        bg: "from-green-500/20 to-emerald-500/20", 
        text: "from-green-500 to-emerald-500",
        badge: "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30 text-green-400"
      },
      "GSV Soft Systems, Hyderabad": { 
        bg: "from-purple-500/20 to-indigo-500/20", 
        text: "from-purple-500 to-indigo-500",
        badge: "bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border-purple-500/30 text-purple-400"
      }
    };
    return colorMap[company as keyof typeof colorMap] || colorMap["Cisco, CA"];
  };

  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="experience-title">Professional Experience</h2>
          <p className="text-xl text-muted-foreground">My journey in UI/UX development</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const colors = getCompanyColors(exp.company);
            return (
              <div 
                key={index}
                className="glass-effect rounded-2xl p-8 card-hover border border-border/50 animate-slide-up group relative overflow-hidden"
                style={{animationDelay: `${index * 0.2}s`}}
                data-testid={`experience-${index}`}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                
                <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300" data-testid={`experience-title-${index}`}>
                          {exp.title}
                        </h3>
                        <p className={`text-lg font-bold ${colors.badge} px-4 py-2 rounded-xl inline-block mb-3 border`} data-testid={`experience-company-${index}`}>
                          {exp.company}
                        </p>
                        <p className="text-muted-foreground font-medium bg-muted/30 px-3 py-1 rounded-lg inline-block" data-testid={`experience-period-${index}`}>{exp.period}</p>
                      </div>
                      <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 glow-effect border border-border/30`}>
                        <Icon className={`w-8 h-8 bg-gradient-to-r ${colors.text} bg-clip-text text-transparent`} />
                      </div>
                    </div>
                    
                    <h4 className={`text-lg font-semibold mb-6 text-foreground ${colors.badge} px-4 py-3 rounded-xl border`} data-testid={`experience-project-${index}`}>
                      🚀 {exp.project}
                    </h4>
                    
                    <ul className="space-y-3 text-muted-foreground mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start group/item" data-testid={`experience-description-${index}-${itemIndex}`}>
                          <div className="w-6 h-6 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                          </div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-4 py-2 ${colors.badge} rounded-xl text-sm font-medium hover:scale-105 transition-all duration-300 border glow-effect`}
                          data-testid={`experience-tech-${index}-${techIndex}`}
                          style={{animationDelay: `${techIndex * 0.1}s`}}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="relative group/image">
                      <img 
                        src={exp.image} 
                        alt={`${exp.company} project interface`}
                        className="rounded-2xl shadow-2xl w-full max-w-sm transform group-hover/image:scale-105 transition-transform duration-500 border border-border/50"
                        data-testid={`experience-image-${index}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
