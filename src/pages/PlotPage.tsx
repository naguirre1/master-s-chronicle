import { Navigation } from '@/components/Navigation';
import { PlotEditor } from '@/components/PlotEditor';
import { Scroll } from 'lucide-react';

const PlotPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 pt-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
              <Scroll className="h-8 w-8 text-gold" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl text-gold glow-gold mb-4">
              The Chronicle
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Here lies the epic tale of the Apps Guild. Each chapter brings new adventures, challenges, and triumphs for our heroes.
            </p>
          </div>

          {/* Plot Editor */}
          <PlotEditor />
        </div>
      </main>
    </div>
  );
};

export default PlotPage;
