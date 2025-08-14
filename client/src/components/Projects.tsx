import React from "react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "TaskFlow Pro",
      description: "A comprehensive task management platform designed for remote teams. Features include real-time collaboration, intuitive drag-and-drop interfaces, and advanced analytics dashboards.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      features: [
        "Real-time team collaboration",
        "Advanced project analytics",
        "Customizable workflow automation",
        "Mobile-responsive design"
      ],
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      liveUrl: "#",
      codeUrl: "#",
      colors: {
        bg: "from-blue-500/20 to-purple-500/20",
        text: "from-blue-500 to-purple-500",
        badge: "from-blue-500/10 to-purple-500/10 border-blue-500/30 text-blue-400"
      }
    },
    {
      title: "Foodiez Mobile App",
      description: "A modern food delivery application with seamless ordering experience. Features GPS tracking, real-time order updates, and personalized recommendations based on user preferences.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "GPS-based restaurant discovery",
        "Real-time order tracking",
        "AI-powered food recommendations",
        "Secure payment integration"
      ],
      technologies: ["React Native", "Firebase", "Express.js", "Stripe API"],
      liveUrl: "#",
      codeUrl: "#",
      colors: {
        bg: "from-orange-500/20 to-red-500/20",
        text: "from-orange-500 to-red-500",
        badge: "from-orange-500/10 to-red-500/10 border-orange-500/30 text-orange-400"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="projects-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">Showcasing my recent work and achievements</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl overflow-hidden border border-border/50 card-hover group animate-slide-up relative"
              style={{animationDelay: `${index * 0.2}s`}}
              data-testid={`project-${index}`}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} interface`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  data-testid={`project-image-${index}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.colors.bg} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                
                {/* Floating demo buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-300 flex items-center"
                    data-testid={`project-demo-${index}`}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
              
              <div className="p-8 relative z-10">
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${project.colors.text} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`} data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Key Features:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start" data-testid={`project-feature-${index}-${featureIndex}`}>
                        <div className="w-4 h-4 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-4 py-2 bg-gradient-to-r ${project.colors.badge} border rounded-xl text-sm font-medium hover:scale-105 transition-all duration-300 glow-effect`}
                      data-testid={`project-tech-${index}-${techIndex}`}
                      style={{animationDelay: `${techIndex * 0.1}s`}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className={`flex items-center px-4 py-2 bg-gradient-to-r ${project.colors.badge} border rounded-xl font-medium group/link hover:scale-105 transition-all duration-300 glow-effect`}
                    data-testid={`project-live-link-${index}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    Live Demo
                  </a>
                  <a 
                    href={project.codeUrl}
                    className="flex items-center px-4 py-2 bg-muted/50 border border-border/50 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-300 font-medium group/link hover:scale-105"
                    data-testid={`project-code-link-${index}`}
                  >
                    <svg className="w-4 h-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
