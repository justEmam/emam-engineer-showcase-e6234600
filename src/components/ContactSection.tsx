import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative bg-secondary/30">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Build Something{" "}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Whether you have a project in mind, a question, or just want to connect—
            I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="mailto:mahmoudemam2231@outlook.com"
              className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:glow-card transition-all duration-300 w-full sm:w-auto"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">mahmoudemam2231@outlook.com</p>
              </div>
            </a>

            <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card w-full sm:w-auto">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Available Worldwide</p>
              </div>
            </div>
          </div>

          <Button variant="glow" size="lg" asChild>
            <a href="mailto:mahmoudemam2231@outlook.com">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
