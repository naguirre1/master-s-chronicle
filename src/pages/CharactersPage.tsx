import { Navigation } from '@/components/Navigation';
import { CharacterCard } from '@/components/CharacterCard';
import { characters } from '@/data/characters';
import { Users, Search } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

const CharactersPage = () => {
  const [search, setSearch] = useState('');
  const [filterClass, setFilterClass] = useState<string | null>(null);

  const uniqueClasses = [...new Set(characters.map(c => c.class))];

  const filteredCharacters = characters.filter(character => {
    const matchesSearch = 
      character.fantasyName.toLowerCase().includes(search.toLowerCase()) ||
      character.realName.toLowerCase().includes(search.toLowerCase()) ||
      character.class.toLowerCase().includes(search.toLowerCase());
    const matchesClass = !filterClass || character.class === filterClass;
    return matchesSearch && matchesClass;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
              <Users className="h-8 w-8 text-gold" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl text-gold glow-gold mb-4">
              Heroes of the Apps Guild
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              {characters.length} brave adventurers stand ready to defend the realm against the forces of darkness.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search heroes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-card border-gold/20 focus:border-gold/40"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterClass(null)}
                className={`px-3 py-2 rounded-lg text-sm font-display transition-all ${
                  !filterClass
                    ? 'bg-gold text-primary-foreground'
                    : 'bg-card border border-gold/20 text-foreground/70 hover:border-gold/40'
                }`}
              >
                All Classes
              </button>
              {uniqueClasses.map(cls => (
                <button
                  key={cls}
                  onClick={() => setFilterClass(filterClass === cls ? null : cls)}
                  className={`px-3 py-2 rounded-lg text-sm font-display transition-all ${
                    filterClass === cls
                      ? 'bg-gold text-primary-foreground'
                      : 'bg-card border border-gold/20 text-foreground/70 hover:border-gold/40'
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>
          </div>

          {/* Characters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCharacters.map((character, index) => (
              <CharacterCard key={character.id} character={character} index={index} />
            ))}
          </div>

          {filteredCharacters.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground font-body">No heroes found matching your search.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CharactersPage;
