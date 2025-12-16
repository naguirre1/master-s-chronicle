import { Character } from '@/data/characters';
import { Heart, Shield, Sword, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface CharacterCardProps {
  character: Character;
  index: number;
}

export function CharacterCard({ character, index }: CharacterCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const healthPercent = (character.hp / character.maxHp) * 100;

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border border-gold/20 bg-card transition-all duration-500 cursor-pointer group',
        'hover:border-gold/40 hover:shadow-gold',
        isExpanded && 'col-span-1 md:col-span-2 lg:col-span-2'
      )}
      onClick={() => setIsExpanded(!isExpanded)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Level badge */}
      <div className="absolute top-3 right-3 z-10 bg-gold/90 text-primary-foreground rounded-full px-2 py-0.5 text-xs font-display">
        Lvl {character.level}
      </div>

      <div className={cn('p-5', isExpanded && 'md:flex gap-6')}>
        {/* Avatar and basic info */}
        <div className={cn('flex items-center gap-4', isExpanded && 'md:flex-col md:items-center md:w-48')}>
          <div className="relative">
            <div className={cn(
              'rounded-full overflow-hidden border-2 border-gold/40 group-hover:border-gold transition-all',
              isExpanded ? 'w-32 h-32' : 'w-16 h-16'
            )}>
              <img
                src={character.avatar}
                alt={character.fantasyName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-secondary rounded-full p-1">
              <Sparkles className="h-3 w-3 text-gold" />
            </div>
          </div>

          <div className={cn(isExpanded && 'md:text-center')}>
            <h3 className="font-display text-lg text-gold leading-tight">
              {character.fantasyName}
            </h3>
            <p className="text-muted-foreground text-xs font-body italic">
              {character.realName}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <Shield className="h-3 w-3 text-gold/70" />
              <span className="text-xs text-foreground/70">{character.class}</span>
            </div>
          </div>
        </div>

        {/* Health bar */}
        <div className={cn('mt-4', isExpanded && 'md:flex-1')}>
          <div className="flex items-center gap-2 mb-1">
            <Heart className="h-3 w-3 text-blood" />
            <span className="text-xs text-muted-foreground">
              {character.hp} / {character.maxHp} HP
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blood to-accent rounded-full transition-all duration-500"
              style={{ width: `${healthPercent}%` }}
            />
          </div>

          {/* Expanded content */}
          {isExpanded && (
            <div className="mt-6 space-y-4 animate-fade-in">
              <p className="text-foreground/80 font-body text-sm leading-relaxed">
                {character.backstory}
              </p>

              <div>
                <h4 className="font-display text-sm text-gold mb-2 flex items-center gap-2">
                  <Sword className="h-4 w-4" />
                  Abilities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {character.abilities.map((ability, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-mystic/20 border border-mystic/30 rounded text-xs text-foreground/90"
                    >
                      {ability}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-display text-sm text-gold mb-2">Equipment</h4>
                <ul className="space-y-1">
                  {character.equipment.map((item, i) => (
                    <li key={i} className="text-xs text-foreground/70 flex items-center gap-2">
                      <span className="w-1 h-1 bg-gold rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Click hint */}
      <div className="absolute bottom-2 right-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
        {isExpanded ? 'Click to collapse' : 'Click to expand'}
      </div>
    </div>
  );
}
