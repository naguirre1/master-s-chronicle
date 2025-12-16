import masterAvatar from '@/assets/master-avatar.png';

export interface GameMaster {
  realName: string;
  fantasyName: string;
  title: string;
  avatar: string;
  description: string;
  powers: string[];
}

export const gameMaster: GameMaster = {
  realName: 'María Isabel Santos Gaitiano',
  fantasyName: 'Ysabel la Tejedora de Destinos',
  title: 'Supreme Dungeon Master',
  avatar: masterAvatar,
  description: 'She who weaves the threads of fate, keeper of all stories, and master of the realm. Her wisdom guides heroes through darkness, and her voice commands the very fabric of reality.',
  powers: [
    'Fate Weaving - Controls the destiny of all heroes',
    'Reality Shaping - Creates and destroys worlds at will',
    'Time Mastery - Bends time to suit the narrative',
    'Soul Sight - Sees into the hearts of all characters',
    'Story Binding - Her words become law',
    'Animal Defender - Protector of all creatures great and small',
    'Expert Cyclist - Navigates the realms on two wheels with unmatched speed'
  ]
};
