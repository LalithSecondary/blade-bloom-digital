import { Play, Info } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-tanjiro.jpg";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <h1 
              className="font-['Cinzel'] text-6xl md:text-8xl font-black text-foreground animate-fade-in-left opacity-0"
              style={{ animationDelay: '0.2s' }}
            >
              DEMON SLAYER
            </h1>
            <h2 
              className="font-['Cinzel'] text-3xl md:text-5xl font-bold bg-hero-gradient bg-clip-text text-transparent animate-fade-in-left opacity-0"
              style={{ animationDelay: '0.4s' }}
            >
              The Hashira Chronicles
            </h2>
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl font-['Montserrat'] animate-fade-in-left opacity-0"
              style={{ animationDelay: '0.6s' }}
            >
              The ultimate battle between humanity and demons reaches its climax. 
              Join the demon slayers in their most dangerous mission yet.
            </p>
            
            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4 pt-4 animate-fade-in-left opacity-0"
              style={{ animationDelay: '0.8s' }}
            >
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-red group font-['Montserrat'] font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Watch Trailer
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-glow-cyan font-['Montserrat'] font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                <Info className="mr-2 h-5 w-5" />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
