import { Card } from "./ui/card";

interface CharacterCardProps {
  name: string;
  description: string;
  image: string;
  delay?: string;
}

export const CharacterCard = ({ name, description, image, delay = "0s" }: CharacterCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden border-border hover:border-primary transition-all duration-500 cursor-pointer animate-scale-in opacity-0"
      style={{ 
        animationDelay: delay,
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--glass-border)'
      }}
    >
      {/* Character Image */}
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'
          }}
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        
        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/20 backdrop-blur-sm"
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
          }}
        />
      </div>

      {/* Glassmorphism Content Card */}
      <div className="p-6 space-y-3 relative backdrop-blur-sm bg-card/40">
        <h3 className="font-cinzel text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-muted-foreground font-montserrat leading-relaxed">
          {description}
        </p>
        
        {/* Decorative line */}
        <div className="h-0.5 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700" />
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 shadow-glow-red blur-xl" />
      </div>
    </Card>
  );
};
