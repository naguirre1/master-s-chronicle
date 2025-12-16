import warriorAvatar from '@/assets/avatars/warrior.png';
import rogueAvatar from '@/assets/avatars/rogue.png';
import mageAvatar from '@/assets/avatars/mage.png';
import rangerAvatar from '@/assets/avatars/ranger.png';
import clericAvatar from '@/assets/avatars/cleric.png';
import barbarianAvatar from '@/assets/avatars/barbarian.png';
import druidAvatar from '@/assets/avatars/druid.png';
import bardAvatar from '@/assets/avatars/bard.png';
import monkAvatar from '@/assets/avatars/monk.png';
import warlockAvatar from '@/assets/avatars/warlock.png';
import necromancerAvatar from '@/assets/avatars/necromancer.png';
import alchemistAvatar from '@/assets/avatars/alchemist.png';

export interface Character {
  id: string;
  realName: string;
  fantasyName: string;
  role: string;
  class: string;
  avatar: string;
  level: number;
  hp: number;
  maxHp: number;
  backstory: string;
  abilities: string[];
  equipment: string[];
}

export const characters: Character[] = [
  {
    id: '1',
    realName: 'Natividad Fernández Alcalá',
    fantasyName: 'Nativa la Forjadora',
    role: 'Senior Android Developer',
    class: 'Warrior',
    avatar: warriorAvatar,
    level: 12,
    hp: 95,
    maxHp: 120,
    backstory: 'Forged in the fires of the Android Realms, Nativa wields her code like a legendary sword.',
    abilities: ['Shield Bash', 'Code Fortress', 'Android Fury'],
    equipment: ['Golden Compiler Shield', 'Sword of Dependencies', 'Armor of Kotlin']
  },
  {
    id: '2',
    realName: 'Pablo Gómez Ordoñez',
    fantasyName: 'Pablo el Estratega',
    role: 'Product Owner',
    class: 'Bard',
    avatar: bardAvatar,
    level: 14,
    hp: 78,
    maxHp: 85,
    backstory: 'Master of rallying teams and spinning tales of product vision into reality.',
    abilities: ['Inspiring Speech', 'Roadmap Revelation', 'Sprint Harmony'],
    equipment: ['Backlog Lute', 'Cloak of Prioritization', 'Ring of Stakeholder Charm']
  },
  {
    id: '3',
    realName: 'Álvaro Núñez Corredor',
    fantasyName: 'Álvaro el Analista',
    role: 'Product Analyst',
    class: 'Mage',
    avatar: mageAvatar,
    level: 11,
    hp: 65,
    maxHp: 70,
    backstory: 'Sees patterns in the chaos of data, wielding insights like arcane spells.',
    abilities: ['Data Divination', 'Metric Mastery', 'Insight Storm'],
    equipment: ['Staff of Analytics', 'Robes of KPIs', 'Tome of User Behavior']
  },
  {
    id: '4',
    realName: 'Gonzalo Vega Fernández',
    fantasyName: 'Gonzalo el Festivo',
    role: 'Product Party Analyst',
    class: 'Bard',
    avatar: bardAvatar,
    level: 10,
    hp: 72,
    maxHp: 80,
    backstory: 'Legendary for turning any analysis session into a celebration of discovery.',
    abilities: ['Party Mode', 'Celebration Aura', 'Dance of Data'],
    equipment: ['Party Hat of Wisdom', 'Confetti Scrolls', 'Boots of Dancing']
  },
  {
    id: '5',
    realName: 'Alejandro Aranguez',
    fantasyName: 'Alejandro el Arquitecto',
    role: 'Senior Backend Developer',
    class: 'Mage',
    avatar: mageAvatar,
    level: 13,
    hp: 68,
    maxHp: 75,
    backstory: 'Architect of invisible systems that hold the digital realm together.',
    abilities: ['API Conjuration', 'Database Fortification', 'Microservice Multiplication'],
    equipment: ['Staff of REST', 'Cloak of GraphQL', 'Amulet of Scalability']
  },
  {
    id: '6',
    realName: 'Rosario Carracedo Riol',
    fantasyName: 'Rosario la Vigilante',
    role: 'QA',
    class: 'Ranger',
    avatar: rangerAvatar,
    level: 11,
    hp: 82,
    maxHp: 90,
    backstory: 'No bug escapes her watchful eye, guardian of quality across all realms.',
    abilities: ['Bug Hunt', 'Test Coverage Shield', 'Regression Tracking'],
    equipment: ['Bow of Automation', 'Quiver of Test Cases', 'Boots of Edge Cases']
  },
  {
    id: '7',
    realName: 'Miguel Ángel Perez Perez',
    fantasyName: 'Miguel el Comandante',
    role: 'Product Owner',
    class: 'Warrior',
    avatar: warriorAvatar,
    level: 15,
    hp: 110,
    maxHp: 130,
    backstory: 'A born leader who commands respect and guides teams through treacherous sprints.',
    abilities: ['Leadership Aura', 'Priority Strike', 'Team Rally'],
    equipment: ['Crown of Leadership', 'Armor of Deadlines', 'Banner of the Squad']
  },
  {
    id: '8',
    realName: 'Beñat Barrueta Bilbao',
    fantasyName: 'Beñat el Swiftiano',
    role: 'Senior iOS Developer',
    class: 'Rogue',
    avatar: rogueAvatar,
    level: 12,
    hp: 75,
    maxHp: 85,
    backstory: 'Master of the Apple arts, swift and precise in every line of code.',
    abilities: ['Swift Strike', 'Xcode Vanish', 'UI Assassination'],
    equipment: ['Daggers of SwiftUI', 'Cloak of App Store', 'Ring of TestFlight']
  },
  {
    id: '9',
    realName: 'Sebastián Varela Basconi',
    fantasyName: 'Sebastián el Sabio',
    role: 'Chapter Applications',
    class: 'Cleric',
    avatar: clericAvatar,
    level: 16,
    hp: 88,
    maxHp: 100,
    backstory: 'Chapter leader who heals team conflicts and blesses code with wisdom.',
    abilities: ['Wisdom Blessing', 'Chapter Heal', 'Code Review Consecration'],
    equipment: ['Holy Symbol of Best Practices', 'Robes of Architecture', 'Staff of Mentorship']
  },
  {
    id: '10',
    realName: 'David Martínez Garcia',
    fantasyName: 'David el Veloz',
    role: 'Senior iOS Developer',
    class: 'Monk',
    avatar: monkAvatar,
    level: 11,
    hp: 70,
    maxHp: 80,
    backstory: 'Disciplined coder who achieves perfection through practice and patience.',
    abilities: ['Flurry of Commits', 'Zen Focus', 'Code Meditation'],
    equipment: ['Gloves of Touch ID', 'Sash of Core Data', 'Sandals of Swift']
  },
  {
    id: '11',
    realName: 'Marta Rebollo',
    fantasyName: 'Marta la Protectora',
    role: 'QA',
    class: 'Druid',
    avatar: druidAvatar,
    level: 10,
    hp: 76,
    maxHp: 85,
    backstory: 'Guardian of the natural order of code, ensuring balance in every release.',
    abilities: ['Nature\'s Test', 'Wildshape Testing', 'Bug Entangle'],
    equipment: ['Staff of Selenium', 'Crown of Test Plans', 'Cloak of Environments']
  },
  {
    id: '12',
    realName: 'Jose María Tavira López de Rodas',
    fantasyName: 'José el Visionario',
    role: 'Product Analyst',
    class: 'Warlock',
    avatar: warlockAvatar,
    level: 12,
    hp: 62,
    maxHp: 70,
    backstory: 'Made a pact with the data gods to see beyond normal metrics.',
    abilities: ['Eldritch Insight', 'Pact of Analytics', 'Dark Knowledge'],
    equipment: ['Tome of Forbidden Data', 'Ring of Patron Reports', 'Cloak of Dashboards']
  },
  {
    id: '13',
    realName: 'Abel Parada Avivar',
    fantasyName: 'Abel el Incansable',
    role: 'Senior Backend Developer',
    class: 'Barbarian',
    avatar: barbarianAvatar,
    level: 13,
    hp: 125,
    maxHp: 140,
    backstory: 'Relentless coder who charges through problems with raw power.',
    abilities: ['Rage Coding', 'Reckless Deployment', 'Brutal Optimization'],
    equipment: ['Axe of Node.js', 'Helm of Docker', 'Belt of Kubernetes']
  },
  {
    id: '14',
    realName: 'Daniel Garijo de Cádiz',
    fantasyName: 'Daniel el Sombra',
    role: 'Senior Backend Developer',
    class: 'Necromancer',
    avatar: necromancerAvatar,
    level: 11,
    hp: 58,
    maxHp: 65,
    backstory: 'Master of reviving dead projects and summoning legacy code.',
    abilities: ['Raise Dead Code', 'Spectral Debugging', 'Soul of the Server'],
    equipment: ['Staff of Git History', 'Robes of Legacy', 'Amulet of Migrations']
  },
  {
    id: '15',
    realName: 'Jesús Ignacio Granados López',
    fantasyName: 'Jesús el Iluminado',
    role: 'Senior Backend Developer',
    class: 'Cleric',
    avatar: clericAvatar,
    level: 12,
    hp: 85,
    maxHp: 95,
    backstory: 'Blessed with the light of clean code and architectural enlightenment.',
    abilities: ['Holy Refactor', 'Divine Documentation', 'Resurrect Build'],
    equipment: ['Holy API of Light', 'Vestments of Clean Code', 'Mace of Truth']
  },
  {
    id: '16',
    realName: 'Alberto Baeza Pérez',
    fantasyName: 'Alberto el Verde',
    role: 'Senior Android Developer',
    class: 'Druid',
    avatar: druidAvatar,
    level: 11,
    hp: 78,
    maxHp: 88,
    backstory: 'One with the Android ecosystem, speaks the language of the green robot.',
    abilities: ['Android Shapeshift', 'Material Design Bloom', 'Natural Jetpack'],
    equipment: ['Staff of Compose', 'Crown of Material', 'Roots of Firebase']
  },
  {
    id: '17',
    realName: 'Nerea Aguirre García',
    fantasyName: 'Nerea la Tejedora',
    role: 'Senior Backend Developer',
    class: 'Alchemist',
    avatar: alchemistAvatar,
    level: 12,
    hp: 64,
    maxHp: 72,
    backstory: 'Transforms raw data into golden solutions through arcane algorithms.',
    abilities: ['Potion of Performance', 'Transmute Query', 'Elixir of Efficiency'],
    equipment: ['Alembic of APIs', 'Goggles of Debug', 'Bandolier of Libraries']
  },
  {
    id: '18',
    realName: 'Marta Yebra González',
    fantasyName: 'Marta la Valiente',
    role: 'Senior Android Developer',
    class: 'Warrior',
    avatar: warriorAvatar,
    level: 11,
    hp: 92,
    maxHp: 105,
    backstory: 'Fearless warrior of the mobile realm, defender of user experience.',
    abilities: ['UI Shield Wall', 'Charge of Features', 'Victory Release'],
    equipment: ['Sword of Fragments', 'Shield of Activities', 'Armor of Views']
  },
  {
    id: '19',
    realName: 'Raúl Pedraza León',
    fantasyName: 'Raúl el León',
    role: 'Senior iOS Developer',
    class: 'Barbarian',
    avatar: barbarianAvatar,
    level: 12,
    hp: 118,
    maxHp: 135,
    backstory: 'Fierce as a lion, coding with raw passion and untamed energy.',
    abilities: ['Lion\'s Roar', 'Savage Implementation', 'Primal Release'],
    equipment: ['Claws of Objective-C', 'Mane of Persistence', 'Heart of Swift']
  },
  {
    id: '20',
    realName: 'Mario de Biase Jimenez',
    fantasyName: 'Mario el Arquitecto Supremo',
    role: 'Chapter Lead Backend Multitenant',
    class: 'Mage',
    avatar: mageAvatar,
    level: 17,
    hp: 72,
    maxHp: 80,
    backstory: 'Supreme architect whose designs span multiple realms simultaneously.',
    abilities: ['Multitenant Mastery', 'Architecture Vision', 'Lead Inspiration'],
    equipment: ['Staff of Microservices', 'Robes of Patterns', 'Crown of Systems']
  },
  {
    id: '21',
    realName: 'Daniel Cruz Andrades',
    fantasyName: 'Daniel el Cruzado',
    role: 'Senior Backend Developer',
    class: 'Warrior',
    avatar: warriorAvatar,
    level: 11,
    hp: 96,
    maxHp: 110,
    backstory: 'A crusader for clean backends and righteous APIs.',
    abilities: ['Holy Endpoint', 'Crusader\'s Query', 'Divine Cache'],
    equipment: ['Sword of Endpoints', 'Shield of Validation', 'Tabard of HTTP']
  },
  {
    id: '22',
    realName: 'Ana Cordón Laraudogoitia',
    fantasyName: 'Ana la Encantadora',
    role: 'Product Owner',
    class: 'Ranger',
    avatar: rangerAvatar,
    level: 13,
    hp: 80,
    maxHp: 88,
    backstory: 'Navigates the wilderness of requirements with grace and precision.',
    abilities: ['Requirement Track', 'Stakeholder Bond', 'Feature Hunt'],
    equipment: ['Bow of User Stories', 'Quiver of Acceptance Criteria', 'Boots of Agility']
  },
  {
    id: '23',
    realName: 'Valentín Gabriel Radú',
    fantasyName: 'Valentín el Arcano',
    role: 'Senior iOS Developer',
    class: 'Warlock',
    avatar: warlockAvatar,
    level: 12,
    hp: 60,
    maxHp: 68,
    backstory: 'Made dark pacts with Apple\'s arcane APIs to unlock forbidden powers.',
    abilities: ['Eldritch Combine', 'Pact of UIKit', 'Hex of Deprecation'],
    equipment: ['Grimoire of WWDC', 'Rod of Core Animation', 'Chains of Protocols']
  }
];
