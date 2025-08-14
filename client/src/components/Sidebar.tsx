import React, { useState, useEffect } from "react";
import { User, Code, Briefcase, Laptop, GraduationCap, Mail, X } from "lucide-react";

interface SidebarProps {
  isMobileMenuOpen: boolean;
  onMobileMenuClose: () => void;
}

export function Sidebar({ isMobileMenuOpen, onMobileMenuClose }: SidebarProps) {
  const [activeSection, setActiveSection] = useState("about");

  const menuItems = [
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Laptop },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

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
    onMobileMenuClose();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPos >= section.offsetTop) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-16 bottom-0 w-64 bg-sidebar-bg/95 backdrop-blur-xl border-r border-sidebar-border/50 overflow-y-auto hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        <nav className="p-6 relative z-10">
          <ul className="space-y-3" data-testid="nav-desktop">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={item.id} style={{animationDelay: `${index * 0.1}s`}} className="animate-fade-in">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link w-full text-left flex items-center p-4 rounded-xl transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'text-primary bg-primary/10 border border-primary/20 glow-effect' 
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-primary border border-transparent'
                    }`}
                    data-testid={`nav-link-${item.id}`}
                  >
                    <Icon className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-md" data-testid="mobile-menu-overlay">
          <div className="fixed inset-y-0 left-0 w-64 bg-sidebar-bg/95 backdrop-blur-xl shadow-2xl border-r border-sidebar-border/50">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
            <div className="p-6 relative z-10">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-black text-foreground">
                  Pradeep
                </h2>
                <button
                  onClick={onMobileMenuClose}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 p-2 rounded-lg hover:bg-muted/50"
                  data-testid="button-close-mobile-menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav>
                <ul className="space-y-3" data-testid="nav-mobile">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.id} style={{animationDelay: `${index * 0.1}s`}} className="animate-fade-in">
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`nav-link w-full text-left flex items-center p-4 rounded-xl transition-all duration-300 ${
                            activeSection === item.id 
                              ? 'text-primary bg-primary/10 border border-primary/20 glow-effect' 
                              : 'text-muted-foreground hover:bg-muted/50 hover:text-primary border border-transparent'
                          }`}
                          data-testid={`nav-link-mobile-${item.id}`}
                        >
                          <Icon className="w-5 h-5 mr-3 transition-transform duration-300" />
                          <span className="font-medium">{item.label}</span>
                          {activeSection === item.id && (
                            <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
