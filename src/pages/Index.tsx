import { Navigation } from '@/components/Navigation';
import { GameMasterCard } from '@/components/GameMasterCard';
import { characters } from '@/data/characters';
import { Link } from 'react-router-dom';
import { Scroll, Users, Map, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
                <Sparkles className="h-6 w-6 text-gold animate-pulse-gold" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-gold glow-gold mb-4">
                Realm of Apps
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl font-body max-w-2xl mx-auto">
                A legendary campaign where heroes of code battle the forces of technical debt
              </p>
            </div>

            {/* Game Master Card */}
            <GameMasterCard />

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              <div className="text-center p-4 rounded-lg bg-card/50 border border-gold/10">
                <div className="font-display text-3xl text-gold">{characters.length}</div>
                <div className="text-muted-foreground text-sm">Heroes</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 border border-gold/10">
                <div className="font-display text-3xl text-gold">3</div>
                <div className="text-muted-foreground text-sm">Chapters</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 border border-gold/10">
                <div className="font-display text-3xl text-gold">6</div>
                <div className="text-muted-foreground text-sm">Locations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl text-center text-foreground mb-8">
              Explore the Realm
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/plot"
                className="group p-8 rounded-xl border border-gold/20 bg-card hover:border-gold/40 hover:shadow-gold transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Scroll className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-display text-xl text-gold mb-2">Chronicle</h3>
                  <p className="text-muted-foreground font-body">
                    Write and manage the epic tale of your campaign
                  </p>
                </div>
              </Link>

              <Link
                to="/characters"
                className="group p-8 rounded-xl border border-gold/20 bg-card hover:border-gold/40 hover:shadow-gold transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Users className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-display text-xl text-gold mb-2">Heroes</h3>
                  <p className="text-muted-foreground font-body">
                    Meet the brave adventurers of the Apps Guild
                  </p>
                </div>
              </Link>

              <Link
                to="/map"
                className="group p-8 rounded-xl border border-gold/20 bg-card hover:border-gold/40 hover:shadow-gold transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Map className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-display text-xl text-gold mb-2">Realm Map</h3>
                  <p className="text-muted-foreground font-body">
                    Discover locations across the digital kingdoms
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Characters Preview */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl text-foreground">Featured Heroes</h2>
              <Link to="/characters" className="text-gold hover:text-gold-light transition-colors text-sm font-display">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {characters.slice(0, 4).map((character) => (
                <div key={character.id} className="p-4 rounded-lg border border-gold/10 bg-card/50 text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30 mx-auto mb-3">
                    <img src={character.avatar} alt={character.fantasyName} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-display text-sm text-gold truncate">{character.fantasyName}</h4>
                  <p className="text-xs text-muted-foreground">{character.class} • Lvl {character.level}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gold/10 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground font-body text-sm">
            Crafted for the legendary <span className="text-gold">Apps Guild</span> by the order of the Game Master
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
