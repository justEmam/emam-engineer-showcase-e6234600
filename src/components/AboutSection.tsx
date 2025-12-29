import { Atom, Brain, Beaker, Code2 } from "lucide-react";

const skills = [
  { icon: Beaker, label: "Chemical Engineering", description: "Process optimization & analysis" },
  { icon: Brain, label: "Artificial Intelligence", description: "Machine learning & deep learning" },
  { icon: Code2, label: "Software Development", description: "Python, data structures, algorithms" },
  { icon: Atom, label: "Data Science", description: "Data analysis & visualization" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Engineering the Future with{" "}
              <span className="text-gradient">AI & Chemistry</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a Chemical Engineer with a deep passion for Artificial Intelligence. 
              My unique background allows me to approach problems from multiple angles, 
              combining the rigorous analytical methods of chemical engineering with 
              the innovative potential of AI and machine learning.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe in building solutions that matter—whether it's optimizing 
              industrial processes or developing intelligent systems that push the 
              boundaries of what's possible.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={skill.label}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:glow-card transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
