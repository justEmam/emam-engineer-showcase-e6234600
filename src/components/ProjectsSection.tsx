import { ExternalLink, Github, Code, Database, Users } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Pandas from Scratch",
    description: "A custom implementation of the popular Pandas library, built from the ground up to understand data manipulation fundamentals and data structure design.",
    tags: ["Python", "Data Structures", "Algorithms"],
    icon: Database,
    github: "#",
    demo: null,
  },
  {
    title: "User Management System",
    description: "A full-featured user management system with authentication, role-based access control, and user CRUD operations.",
    tags: ["Python", "Backend", "Authentication"],
    icon: Users,
    github: "#",
    demo: null,
  },
  {
    title: "Coming Soon",
    description: "More exciting projects are in development. Stay tuned for innovative solutions combining AI and engineering expertise.",
    tags: ["AI", "Machine Learning", "Innovation"],
    icon: Code,
    github: null,
    demo: null,
    placeholder: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in software development, 
            data engineering, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 flex flex-col ${
                project.placeholder ? 'opacity-60' : ''
              }`}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-px bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <project.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {!project.placeholder && (
                  <div className="flex gap-3">
                    {project.github && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
