import { Code2, Database, BarChart3, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Python", "C", "C++", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: Database,
    title: "Python Libraries",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "SciPy", "Scikit-learn", "SQLite3"],
  },
  {
    icon: BarChart3,
    title: "Data Science",
    skills: ["Data Analysis", "Data Cleaning", "Machine Learning", "Data Visualization"],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
            Technical Skills
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My{" "}
            <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning data science, software development, and engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:glow-card transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <category.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-4">{category.title}</h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
