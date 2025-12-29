import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Greeting */}
          <div className="opacity-0 animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>

          {/* Name */}
          <h1 className="opacity-0 animate-fade-up animation-delay-200 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Mahmoud Emam</span>
          </h1>

          {/* Title */}
          <p className="opacity-0 animate-fade-up animation-delay-400 text-xl md:text-2xl text-muted-foreground max-w-2xl">
            <span className="text-foreground font-semibold">Chemical Engineer</span>
            {" "}×{" "}
            <span className="text-foreground font-semibold">AI Engineer</span>
          </p>

          {/* Description */}
          <p className="opacity-0 animate-fade-up animation-delay-600 text-muted-foreground max-w-xl text-lg">
            Bridging the gap between traditional engineering and cutting-edge AI solutions. 
            Passionate about solving complex problems through innovative technology.
          </p>

          {/* CTA Buttons */}
          <div className="opacity-0 animate-fade-up animation-delay-600 flex flex-wrap gap-4 justify-center pt-4">
            <Button variant="glow" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="opacity-0 animate-fade-up animation-delay-600 flex gap-4 pt-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hello@example.com"
              className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
