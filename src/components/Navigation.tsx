import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scroll, Users, Map, Sparkles, Menu, X, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/', label: 'Throne Room', icon: Crown },
  { path: '/plot', label: 'Chronicle', icon: Scroll },
  { path: '/characters', label: 'Heroes', icon: Users },
  { path: '/map', label: 'Realm Map', icon: Map },
];

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className="h-6 w-6 text-gold animate-pulse-gold" />
            <span className="font-display text-xl text-gold glow-gold hidden sm:block">
              Realm of Apps
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-lg font-display text-sm tracking-wider transition-all duration-300',
                    isActive
                      ? 'bg-gold/20 text-gold shadow-gold border border-gold/30'
                      : 'text-foreground/70 hover:text-gold hover:bg-gold/10'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-gold transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm border-b border-gold/20">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg font-display text-sm tracking-wider transition-all',
                    isActive
                      ? 'bg-gold/20 text-gold border border-gold/30'
                      : 'text-foreground/70 hover:text-gold hover:bg-gold/10'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
