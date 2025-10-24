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
      className="group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 cursor-pointer animate-scale-in opacity-0"
      style={{ animationDelay: delay }}
    >
      {/* Character Image */}
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-3">
        <h3 className="font-['Cinzel'] text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-muted-foreground font-['Montserrat'] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 shadow-glow-red blur-xl" />
      </div>
    </Card>
  );
};
