export const KatanaSlash = () => {
  return (
    <div className="relative h-32 overflow-hidden pointer-events-none">
      {/* Katana Slash Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-1">
          {/* Main slash line */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 animate-slide-slash"
            style={{ 
              height: '3px',
              boxShadow: '0 0 20px hsl(var(--accent)), 0 0 40px hsl(var(--accent))',
              animationDelay: '0s'
            }}
          />
          {/* Secondary slash for depth */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 animate-slide-slash"
            style={{ 
              height: '2px',
              boxShadow: '0 0 15px hsl(var(--primary)), 0 0 30px hsl(var(--primary))',
              animationDelay: '0.3s'
            }}
          />
        </div>
      </div>

      {/* Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full opacity-0 animate-particle-float"
          style={{
            left: `${20 + i * 15}%`,
            animationDelay: `${i * 0.2}s`,
            boxShadow: '0 0 10px hsl(var(--accent))'
          }}
        />
      ))}
    </div>
  );
};
