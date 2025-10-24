import { useState } from "react";
import { Hero } from "@/components/Hero";
import { CharacterCard } from "@/components/CharacterCard";
import { ImageModal } from "@/components/ImageModal";
import { Github, Twitter, Instagram, Youtube } from "lucide-react";

// Character Images
import tanjiroImg from "@/assets/character-tanjiro.jpg";
import nezukoImg from "@/assets/character-nezuko.jpg";
import zenitsuImg from "@/assets/character-zenitsu.jpg";
import inosukeImg from "@/assets/character-inosuke.jpg";

// Gallery Images
import battleImg from "@/assets/gallery-battle.jpg";
import shrineImg from "@/assets/gallery-shrine.jpg";
import hashiraImg from "@/assets/gallery-hashira.jpg";
import swordImg from "@/assets/gallery-sword.jpg";

const characters = [
  {
    name: "Tanjiro Kamado",
    description: "A kindhearted boy who becomes a demon slayer to save his sister Nezuko and avenge his family.",
    image: tanjiroImg,
  },
  {
    name: "Nezuko Kamado",
    description: "Tanjiro's younger sister who was turned into a demon but retains her humanity and fights alongside her brother.",
    image: nezukoImg,
  },
  {
    name: "Zenitsu Agatsuma",
    description: "A cowardly but powerful demon slayer who mastered Thunder Breathing and fights with lightning speed.",
    image: zenitsuImg,
  },
  {
    name: "Inosuke Hashibira",
    description: "A feral warrior raised by boars who wears a boar mask and fights with dual serrated swords.",
    image: inosukeImg,
  },
];

const galleryImages = [
  { src: battleImg, alt: "Epic battle scene with demon slayers" },
  { src: shrineImg, alt: "Peaceful Japanese shrine at sunset" },
  { src: hashiraImg, alt: "The powerful Hashira standing together" },
  { src: swordImg, alt: "Glowing nichirin sword with water effects" },
];

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Character Showcase Section */}
      <section className="py-24 px-4 bg-demon-gradient">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Cinzel'] text-5xl md:text-6xl font-black text-foreground mb-4">
              Meet The Heroes
            </h2>
            <p className="text-muted-foreground text-lg font-['Montserrat'] max-w-2xl mx-auto">
              Brave warriors who stand between humanity and the demon menace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {characters.map((character, index) => (
              <CharacterCard
                key={character.name}
                {...character}
                delay={`${index * 0.15}s`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Japanese Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-['Cinzel'] text-5xl md:text-6xl font-black text-foreground">
              The Epic Saga
            </h2>
            
            <div className="space-y-6 text-lg font-['Montserrat']">
              <p className="text-muted-foreground leading-relaxed">
                In a world where demons lurk in the shadows, preying on humanity under the cover of night, 
                an elite corps of warriors stands as the last line of defense. These are the Demon Slayers, 
                warriors who have mastered ancient breathing techniques and wield special blades forged to 
                slay the immortal demons.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Follow Tanjiro Kamado, a kindhearted boy who becomes a demon slayer after his family is 
                slaughtered and his younger sister Nezuko is turned into a demon. With unwavering determination, 
                Tanjiro embarks on a dangerous journey to find a cure for his sister and avenge his family.
              </p>

              <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-card border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Breathing Styles</div>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <div className="text-4xl font-bold text-accent mb-2">9</div>
                  <div className="text-sm text-muted-foreground">Hashira Pillars</div>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <div className="text-4xl font-bold text-secondary mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">Epic Battles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 bg-demon-gradient">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Cinzel'] text-5xl md:text-6xl font-black text-foreground mb-4">
              Gallery
            </h2>
            <p className="text-muted-foreground text-lg font-['Montserrat']">
              Witness the breathtaking world of demon slayers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-video animate-scale-in opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(image.src, image.alt)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full">
                    <span className="text-foreground font-['Montserrat'] font-semibold">View Full Size</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm font-['Montserrat']">
                © 2025 Demon Slayer Production Committee. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Created for showcase purposes
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
      />
    </div>
  );
};

export default Index;
