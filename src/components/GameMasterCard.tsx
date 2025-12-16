import { gameMaster } from '@/data/gameMaster';
import { Sparkles, Star, Wand2 } from 'lucide-react';

export function GameMasterCard() {
  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-gold/30 bg-card parchment-texture shadow-gold">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/50 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/50 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/50 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/50 rounded-br-xl" />

      <div className="relative p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gold shadow-gold animate-float">
              <img
                src={gameMaster.avatar}
                alt={gameMaster.fantasyName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 bg-gold rounded-full p-2 shadow-gold">
              <Star className="h-6 w-6 text-primary-foreground fill-current" />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-gold animate-pulse-gold" />
              <span className="text-gold-light text-sm font-body tracking-wide uppercase">
                {gameMaster.title}
              </span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl text-gold glow-gold mb-2">
              {gameMaster.fantasyName}
            </h2>
            
            <p className="text-muted-foreground text-sm mb-4 font-body italic">
              "{gameMaster.realName}"
            </p>

            <p className="text-foreground/90 font-body text-lg leading-relaxed mb-6">
              {gameMaster.description}
            </p>

            {/* Powers */}
            <div className="space-y-2">
              <h3 className="font-display text-lg text-gold flex items-center gap-2 justify-center md:justify-start">
                <Wand2 className="h-5 w-5" />
                Divine Powers
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {gameMaster.powers.map((power, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-sm text-gold-light font-body"
                  >
                    {power.split(' - ')[0]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
