import { useState } from 'react';
import { PlotChapter, initialPlot } from '@/data/plot';
import { BookOpen, Feather, Check, Clock, ChevronDown, ChevronUp, Save } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

export function PlotEditor() {
  const [chapters, setChapters] = useState<PlotChapter[]>(initialPlot);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const [editingChapter, setEditingChapter] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');

  const handleEditStart = (chapter: PlotChapter) => {
    setEditingChapter(chapter.id);
    setEditContent(chapter.content);
  };

  const handleSave = (chapterId: string) => {
    setChapters(prev => prev.map(ch => 
      ch.id === chapterId ? { ...ch, content: editContent } : ch
    ));
    setEditingChapter(null);
    toast({
      title: "Chronicle Updated",
      description: "The tale has been inscribed in the ancient scrolls.",
    });
  };

  const toggleComplete = (chapterId: string) => {
    setChapters(prev => prev.map(ch => 
      ch.id === chapterId ? { ...ch, isComplete: !ch.isComplete } : ch
    ));
  };

  return (
    <div className="space-y-6">
      {chapters.map((chapter, index) => (
        <div
          key={chapter.id}
          className={cn(
            'rounded-xl border border-gold/20 bg-card overflow-hidden transition-all duration-300',
            expandedChapter === chapter.id && 'border-gold/40 shadow-gold'
          )}
        >
          {/* Chapter header */}
          <div
            className="p-6 cursor-pointer hover:bg-gold/5 transition-colors"
            onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={cn(
                  'w-12 h-12 rounded-full flex items-center justify-center',
                  chapter.isComplete ? 'bg-emerald/20 text-emerald' : 'bg-gold/20 text-gold'
                )}>
                  {chapter.isComplete ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    <BookOpen className="h-6 w-6" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold/70 text-sm font-display">Chapter {index + 1}</span>
                    {!chapter.isComplete && (
                      <span className="px-2 py-0.5 bg-gold/20 rounded text-xs text-gold flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        In Progress
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl text-foreground">{chapter.title}</h3>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground text-sm">{chapter.date}</span>
                {expandedChapter === chapter.id ? (
                  <ChevronUp className="h-5 w-5 text-gold" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </div>
          </div>

          {/* Chapter content */}
          {expandedChapter === chapter.id && (
            <div className="px-6 pb-6 animate-fade-in">
              <div className="border-t border-gold/10 pt-6">
                {editingChapter === chapter.id ? (
                  <div className="space-y-4">
                    <Textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="min-h-[300px] bg-background/50 border-gold/20 focus:border-gold/40 font-body text-foreground/90 leading-relaxed"
                      placeholder="Write your tale here..."
                    />
                    <div className="flex gap-2 justify-end">
                      <Button
                        variant="outline"
                        onClick={() => setEditingChapter(null)}
                        className="border-gold/30 hover:bg-gold/10"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => handleSave(chapter.id)}
                        className="bg-gold hover:bg-gold-light text-primary-foreground"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="prose prose-invert max-w-none">
                      {chapter.content.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-foreground/80 font-body text-lg leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-6 pt-4 border-t border-gold/10">
                      <Button
                        variant="outline"
                        onClick={() => handleEditStart(chapter)}
                        className="border-gold/30 hover:bg-gold/10 text-gold"
                      >
                        <Feather className="h-4 w-4 mr-2" />
                        Edit Chapter
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => toggleComplete(chapter.id)}
                        className={cn(
                          'border-gold/30',
                          chapter.isComplete ? 'hover:bg-blood/10 text-blood' : 'hover:bg-emerald/10 text-emerald'
                        )}
                      >
                        {chapter.isComplete ? 'Mark In Progress' : 'Mark Complete'}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Add new chapter */}
      <button
        onClick={() => {
          const newChapter: PlotChapter = {
            id: String(chapters.length + 1),
            title: `New Chapter`,
            content: 'Begin your tale...',
            date: new Date().toISOString().split('T')[0],
            isComplete: false
          };
          setChapters([...chapters, newChapter]);
          setExpandedChapter(newChapter.id);
          setEditingChapter(newChapter.id);
          setEditContent(newChapter.content);
        }}
        className="w-full p-6 rounded-xl border-2 border-dashed border-gold/20 hover:border-gold/40 hover:bg-gold/5 transition-all text-muted-foreground hover:text-gold group"
      >
        <div className="flex items-center justify-center gap-2">
          <Feather className="h-5 w-5 group-hover:animate-pulse" />
          <span className="font-display">Add New Chapter</span>
        </div>
      </button>
    </div>
  );
}
