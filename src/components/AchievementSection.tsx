import { Trophy, Award, Target } from "lucide-react";
import achievementImage from "@/assets/mondelez-achievement.png";

const AchievementSection = () => {
  return (
    <section id="achievement" className="py-24 md:py-32 relative bg-secondary/30">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
            Featured Achievement
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Regional Competition{" "}
            <span className="text-gradient">Winner</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img 
                src={achievementImage} 
                alt="Mondelez International Engineering Competition Winner" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Trophy className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Mondelez International</h3>
                <p className="text-muted-foreground">Engineering & Supply Chain Competition</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Won first place in the regional engineering and supply chain competition 
              organized by Mondelez International. This achievement showcases my ability 
              to solve complex real-world challenges and deliver innovative solutions 
              under competitive pressure.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">1st Place</p>
                  <p className="text-sm text-muted-foreground">Regional Winner</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Supply Chain</p>
                  <p className="text-sm text-muted-foreground">Optimization Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
