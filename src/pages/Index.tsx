import { Hero } from "@/components/Hero";
import { CharacterCard } from "@/components/CharacterCard";
import { KatanaSlash } from "@/components/KatanaSlash";
import { Github, Twitter, Instagram, Youtube } from "lucide-react";

// Character Images
import tanjiroImg from "@/assets/character-tanjiro.jpg";
import nezukoImg from "@/assets/character-nezuko-new.jpeg";
import zenitsuImg from "@/assets/character-zenitsu-new.jpg";
import inosukeImg from "@/assets/character-inosuke-new.jpeg";
import giyuImg from "@/assets/character-giyu.jpg";
import kyojuroImg from "@/assets/character-kyojuro.jpg";
import tengenImg from "@/assets/character-tengen.jpg";
import mitsuriImg from "@/assets/character-mitsuri-new.jpeg";
import muichiroImg from "@/assets/character-muichiro.jpg";
import sanemiImg from "@/assets/character-sanemi.jpg";
import obanaiImg from "@/assets/character-obanai.jpg";
import gyomeiImg from "@/assets/character-gyomei.jpg";
import muzanImg from "@/assets/character-muzan.avif";

const characters = [
  {
    name: "Tanjiro Kamado",
    description:
      "A kindhearted Demon Slayer who seeks a cure for his sister and masters the art of Water and Sun Breathing techniques.",
    image: tanjiroImg,
  },
  {
    name: "Akaza",
    description:
      "🔥 Akaza (Upper Moon Three) - A ruthless martial artist who became a demon seeking eternal strength. Akaza honors only the strong, mastering Destructive Death to unleash devastating hand-to-hand combat infused with demonic power.",
    image: gyomeiImg,
  },
  {
    name: "Nezuko Kamado",
    description:
      "Once human, now a demon who fiercely protects others using her incredible strength and blood demon art.",
    image: nezukoImg,
  },
  {
    name: "Inosuke Hashibira",
    description:
      "A wild warrior raised by boars; he fights ferociously with dual serrated swords and Beast Breathing.",
    image: inosukeImg,
  },
  {
    name: "Giyu Tomioka",
    description:
      "The stoic Water Hashira who upholds justice with calm precision and unmatched swordsmanship.",
    image: giyuImg,
  },
  {
    name: "Kyojuro Rengoku",
    description:
      "The passionate Flame Hashira whose fiery spirit and strength inspire all who fight beside him.",
    image: kyojuroImg,
  },
  {
    name: "Tengen Uzui",
    description:
      "The flamboyant Sound Hashira, known for his speed, explosive techniques, and dazzling style in battle.",
    image: tengenImg,
  },
  {
    name: "Mitsuri Kanroji",
    description:
      "The Love Hashira, gentle yet deadly, wielding her whip-like sword with grace and unmatched agility.",
    image: mitsuriImg,
  },

  {
    name: "Sanemi Shinazugawa",
    description:
      "Wind Hashira. Fierce and aggressive, he harnesses Wind Breathing in combat.",
    image: sanemiImg,
  },
  {
    name: "Obanai Iguro",
    description:
      "Serpent Hashira. Stern and precise, he uses Serpent Breathing techniques.",
    image: obanaiImg,
  },
  {
    name: "Muzan Kibutsuji",
    description:
      "The progenitor of all demons and the main antagonist. Muzan possesses immense power, shape-shifting abilities, and an insatiable desire for immortality. He rules the demon world with absolute cruelty.",
    image: muzanImg,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Katana Slash Transition */}
      <KatanaSlash />

      {/* Character Showcase Section */}
      <section className="py-24 px-4 bg-demon-gradient relative">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)`,
            }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-5xl md:text-6xl font-black text-foreground mb-4 drop-shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              Meet The Heroes
            </h2>
            <p className="text-muted-foreground text-lg font-montserrat max-w-2xl mx-auto">
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

      {/* Katana Slash Transition */}
      <KatanaSlash />

      {/* About Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Japanese Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, currentColor 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-cinzel text-5xl md:text-6xl font-black text-foreground drop-shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              The Epic Saga
            </h2>
            <div className="font-noto-jp text-2xl text-accent mb-4">
              鬼滅の刃の世界
            </div>

            <div className="space-y-6 text-lg font-montserrat">
              <p className="text-muted-foreground leading-relaxed">
                In a world where demons lurk in the shadows, preying on humanity
                under the cover of night, an elite corps of warriors stands as
                the last line of defense. These are the Demon Slayers, warriors
                who have mastered ancient breathing techniques and wield special
                blades forged to slay the immortal demons.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Follow Tanjiro Kamado, a kindhearted boy who becomes a demon
                slayer after his family is slaughtered and his younger sister
                Nezuko is turned into a demon. With unwavering determination,
                Tanjiro embarks on a dangerous journey to find a cure for his
                sister and avenge his family.
              </p>

              <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  className="p-6 rounded-lg backdrop-blur-sm bg-card/40 border border-glass-border group hover:border-primary transition-all duration-300"
                  style={{
                    background: "var(--glass-bg)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    12
                  </div>
                  <div className="text-sm text-muted-foreground font-bebas tracking-wider">
                    Breathing Styles
                  </div>
                </div>
                <div
                  className="p-6 rounded-lg backdrop-blur-sm bg-card/40 border border-glass-border group hover:border-accent transition-all duration-300"
                  style={{
                    background: "var(--glass-bg)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                    9
                  </div>
                  <div className="text-sm text-muted-foreground font-bebas tracking-wider">
                    Hashira Pillars
                  </div>
                </div>
                <div
                  className="p-6 rounded-lg backdrop-blur-sm bg-card/40 border border-glass-border group hover:border-secondary transition-all duration-300"
                  style={{
                    background: "var(--glass-bg)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="text-4xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform">
                    ∞
                  </div>
                  <div className="text-sm text-muted-foreground font-bebas tracking-wider">
                    Epic Battles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Katana Slash Transition */}
      <KatanaSlash />

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
              <p className="text-muted-foreground text-sm font-montserrat">
                © 2025 Demon Slayer Production Committee. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1 font-noto-jp">
                Created for showcase purposes | 鬼滅の刃
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
