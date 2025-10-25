import { Play, Info } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full animate-particle-float"
            style={{
              left: `${10 + i * 12}%`,
              bottom: "-5%",
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <h1
              className="font-cinzel text-6xl md:text-8xl font-black text-foreground animate-fade-in-left opacity-0 drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]"
              style={{ animationDelay: "0.2s" }}
            >
              DEMON SLAYER
            </h1>
            <h2
              className="font-noto-jp text-3xl md:text-5xl font-bold bg-hero-gradient bg-clip-text text-transparent animate-fade-in-left opacity-0"
              style={{ animationDelay: "0.4s" }}
            >
              鬼滅の刃：柱の物語
            </h2>
            <h3
              className="font-bebas text-2xl md:text-3xl text-accent animate-fade-in-left opacity-0 tracking-wider"
              style={{ animationDelay: "0.5s" }}
            >
              The Hashira Chronicles
            </h3>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl font-montserrat animate-fade-in-left opacity-0"
              style={{ animationDelay: "0.7s" }}
            >
              The ultimate battle between humanity and demons reaches its
              climax. Join the demon slayers in their most dangerous mission
              yet.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 pt-4 animate-fade-in-left opacity-0"
              style={{ animationDelay: "0.9s" }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-red group font-montserrat font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Watch Trailer
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-glow-cyan font-montserrat font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-card/30"
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
