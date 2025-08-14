import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";


interface NavigationProps {
  onMobileMenuToggle: () => void;
}

export function Navigation({ onMobileMenuToggle }: NavigationProps) {
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-black text-foreground" data-testid="brand-logo">
              Pradeep
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-xl text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 glow-effect"
              data-testid="button-contact"
            >
              Get In Touch
            </button>
            <Button
              variant="outline"
              size="icon"
              onClick={onMobileMenuToggle}
              className="lg:hidden glass-effect border-border/50 hover:bg-muted/50"
              data-testid="button-mobile-menu"
            >
              <Menu className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
