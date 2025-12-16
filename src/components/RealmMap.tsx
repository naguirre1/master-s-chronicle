import fantasyMap from '@/assets/fantasy-map.png';
import { useState } from 'react';
import { MapPin, Castle, Mountain, Skull, TreePine, Waves } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MapLocation {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
  icon: typeof MapPin;
  type: 'castle' | 'danger' | 'forest' | 'mountain' | 'water';
}

const locations: MapLocation[] = [
  {
    id: '1',
    name: 'The Citadel of Sprints',
    description: 'Where all quests begin and daily standups echo through ancient halls.',
    x: 25,
    y: 30,
    icon: Castle,
    type: 'castle'
  },
  {
    id: '2',
    name: 'Forbidden Repository',
    description: 'A dark place where no pull request has been approved in a thousand years.',
    x: 70,
    y: 25,
    icon: Skull,
    type: 'danger'
  },
  {
    id: '3',
    name: 'The Azure Mountains',
    description: 'Home to the Cloud Keepers, masters of deployment and scaling.',
    x: 45,
    y: 15,
    icon: Mountain,
    type: 'mountain'
  },
  {
    id: '4',
    name: 'Enchanted Code Forest',
    description: 'Where clean code grows wild and refactoring spirits dwell.',
    x: 15,
    y: 60,
    icon: TreePine,
    type: 'forest'
  },
  {
    id: '5',
    name: 'Sea of Data',
    description: 'Vast oceans of information, home to the legendary Data Kraken.',
    x: 60,
    y: 70,
    icon: Waves,
    type: 'water'
  },
  {
    id: '6',
    name: 'The Bug Nest',
    description: 'A treacherous swamp where ancient bugs breed and multiply.',
    x: 80,
    y: 55,
    icon: Skull,
    type: 'danger'
  }
];

export function RealmMap() {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);

  const getIconColor = (type: MapLocation['type']) => {
    switch (type) {
      case 'castle': return 'text-gold';
      case 'danger': return 'text-blood';
      case 'forest': return 'text-emerald';
      case 'mountain': return 'text-foreground/70';
      case 'water': return 'text-mystic';
      default: return 'text-gold';
    }
  };

  return (
    <div className="space-y-6">
      {/* Map container */}
      <div className="relative rounded-xl overflow-hidden border-2 border-gold/30 shadow-gold">
        <img
          src={fantasyMap}
          alt="Fantasy Realm Map"
          className="w-full h-auto"
        />
        
        {/* Location markers */}
        {locations.map((location) => {
          const Icon = location.icon;
          return (
            <button
              key={location.id}
              className={cn(
                'absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300',
                'hover:scale-125 focus:outline-none focus:scale-125',
                selectedLocation?.id === location.id && 'scale-125'
              )}
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
              onClick={() => setSelectedLocation(
                selectedLocation?.id === location.id ? null : location
              )}
            >
              <div className={cn(
                'p-2 rounded-full bg-card/90 border-2 shadow-lg',
                selectedLocation?.id === location.id 
                  ? 'border-gold shadow-gold animate-pulse'
                  : 'border-gold/50 hover:border-gold'
              )}>
                <Icon className={cn('h-5 w-5', getIconColor(location.type))} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Location details */}
      {selectedLocation && (
        <div className="p-6 rounded-xl border border-gold/20 bg-card animate-fade-in">
          <div className="flex items-start gap-4">
            <div className={cn(
              'p-3 rounded-lg',
              selectedLocation.type === 'castle' && 'bg-gold/20',
              selectedLocation.type === 'danger' && 'bg-blood/20',
              selectedLocation.type === 'forest' && 'bg-emerald/20',
              selectedLocation.type === 'mountain' && 'bg-muted',
              selectedLocation.type === 'water' && 'bg-mystic/20'
            )}>
              <selectedLocation.icon className={cn('h-8 w-8', getIconColor(selectedLocation.type))} />
            </div>
            <div>
              <h3 className="font-display text-xl text-gold mb-2">{selectedLocation.name}</h3>
              <p className="text-foreground/80 font-body text-lg leading-relaxed">
                {selectedLocation.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="flex items-center gap-2 text-sm">
          <Castle className="h-4 w-4 text-gold" />
          <span className="text-muted-foreground">Settlements</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Skull className="h-4 w-4 text-blood" />
          <span className="text-muted-foreground">Danger Zones</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <TreePine className="h-4 w-4 text-emerald" />
          <span className="text-muted-foreground">Forests</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Mountain className="h-4 w-4 text-foreground/70" />
          <span className="text-muted-foreground">Mountains</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Waves className="h-4 w-4 text-mystic" />
          <span className="text-muted-foreground">Waters</span>
        </div>
      </div>
    </div>
  );
}
