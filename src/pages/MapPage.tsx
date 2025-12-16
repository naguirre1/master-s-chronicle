import { Navigation } from '@/components/Navigation';
import { RealmMap } from '@/components/RealmMap';
import { Map } from 'lucide-react';

const MapPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
              <Map className="h-8 w-8 text-gold" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl text-gold glow-gold mb-4">
              Map of the Realm
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Explore the vast lands of Digitalia, from the Citadel of Sprints to the treacherous Bug Nest.
            </p>
          </div>

          {/* Map */}
          <RealmMap />
        </div>
      </main>
    </div>
  );
};

export default MapPage;
