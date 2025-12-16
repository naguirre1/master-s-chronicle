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
import javierRuizMunizAvatar from '@/assets/avatars/javier-ruiz-muniz.png';
import marioGonzalezJimenezAvatar from '@/assets/avatars/mario-gonzalez-jimenez.png';
import eliasIbanezClimentAvatar from '@/assets/avatars/elias-ibanez-climent.png';
import adrielAgustinSaaAvatar from '@/assets/avatars/adriel-agustin-saa.png';
import ismaelRodriguezMorenoAvatar from '@/assets/avatars/ismael-rodriguez-moreno.png';
import veronicaMerinoYunguerosAvatar from '@/assets/avatars/veronica-merino-yungueros.png';
import andresReyesNavasAvatar from '@/assets/avatars/andres-reyes-navas.png';
import ronalAlexisBaierCifuentesAvatar from '@/assets/avatars/ronal-alexis-baier-cifuentes.png';
import stevenGarciaCerveraAvatar from '@/assets/avatars/steven-garcia-cervera.png';
import harrisonLeeRivasChaconAvatar from '@/assets/avatars/harrison-lee-rivas-chacon.png';
import mayteVazquezAndresAvatar from '@/assets/avatars/mayte-vazquez-andres.png';
import julioGilHigesAvatar from '@/assets/avatars/julio-gil-higes.png';
import manuelTourinoLucasAvatar from '@/assets/avatars/manuel-tourino-lucas.png';
import mishaMaligaAvatar from '@/assets/avatars/misha-maliga.png';
import antonioArjonaHernanAvatar from '@/assets/avatars/antonio-arjona-hernan.png';
import carlosGamezFuentesAvatar from '@/assets/avatars/carlos-gamez-fuentes.png';
import angelDeCastroEscaleraAvatar from '@/assets/avatars/angel-de-castro-escalera.png';
import danielMaestreYepesAvatar from '@/assets/avatars/daniel-maestre-yepes.png';
import orpazMenahemAvatar from '@/assets/avatars/orpaz-menahem.png';
import alvaroMiguelObiesGarciaAvatar from '@/assets/avatars/alvaro-miguel-obies-garcia.png';
import javierVentasGarzonAvatar from '@/assets/avatars/javier-ventas-garzon.png';
import damianRossiAvatar from '@/assets/avatars/damian-rossi.png';
import silviaPanaderoHernandezAvatar from '@/assets/avatars/silvia-panadero-hernandez.png';
import alexBoschAvatar from '@/assets/avatars/alex-bosch.png';
import aitorAgirretxeaGomezAvatar from '@/assets/avatars/aitor-agirretxea-gomez.png';
import sergioNovilloFelixAvatar from '@/assets/avatars/sergio-novillo-felix.png';

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
  },
  // --- MISSING ECARE WEB MEMBERS ---
  {
    id: '24',
    realName: 'Javier Ruiz Muñiz',
    fantasyName: 'Javier el Ilusionista',
    role: 'Senior Frontend Developer',
    class: 'Illusionist',
    avatar: javierRuizMunizAvatar,
    level: 13,
    hp: 65,
    maxHp: 75,
    backstory: 'A master of visual trickery, he weaves CSS spells that dazzle the eye and hide the complexity beneath.',
    abilities: ['Mirage DOM', 'Prismatic Style', 'Render Vanish'],
    equipment: ['Wand of React', 'Cloak of Pixels', 'Prism of Colors']
  },
  {
    id: '25',
    realName: 'Mario Gonzalez Jimenez',
    fantasyName: 'Mario el Constructor',
    role: 'Senior Frontend Developer',
    class: 'Artificer',
    avatar: marioGonzalezJimenezAvatar,
    level: 12,
    hp: 70,
    maxHp: 80,
    backstory: 'Forges user interfaces with the precision of a dwarven smith, ensuring every button clicks with satisfaction.',
    abilities: ['Component Forge', 'Mechanical State', 'Blueprint Reading'],
    equipment: ['Hammer of TypeScript', 'Goggles of Inspection', 'Belt of Widgets']
  },
  {
    id: '26',
    realName: 'Elías Íbañez Climent',
    fantasyName: 'Elías el Robusto',
    role: 'Senior Backend Developer',
    class: 'Paladin',
    avatar: eliasIbanezClimentAvatar,
    level: 13,
    hp: 100,
    maxHp: 120,
    backstory: 'A sworn protector of the database, standing firm against the hordes of high latency and bad requests.',
    abilities: ['Shield of Uptime', 'Smite Latency', 'Lay on Servers'],
    equipment: ['Shield of SQL', 'Plate of Persistence', 'Sword of Services']
  },
  {
    id: '27',
    realName: 'Adriel Agustín Saa',
    fantasyName: 'Adriel el Conectado',
    role: 'Senior Backend Developer',
    class: 'Sorcerer',
    avatar: adrielAgustinSaaAvatar,
    level: 12,
    hp: 60,
    maxHp: 70,
    backstory: 'Born with innate magic to connect disparate systems into a harmonious flow of energy.',
    abilities: ['Integration Bolt', 'Flow of Data', 'Chaos Control'],
    equipment: ['Orb of Connectivity', 'Robes of the Cloud', 'Ring of API Keys']
  },
  {
    id: '28',
    realName: 'Ismael Rodriguez Moreno',
    fantasyName: 'Ismael el Estético',
    role: 'Senior Frontend Developer',
    class: 'Bard',
    avatar: ismaelRodriguezMorenoAvatar,
    level: 11,
    hp: 68,
    maxHp: 78,
    backstory: 'Sings the song of user experience, ensuring every interaction is a melody of smoothness.',
    abilities: ['Ballad of UX', 'Harmony of Layout', 'Charming Interface'],
    equipment: ['Lute of Styles', 'Cap of Creativity', 'Boots of Responsiveness']
  },
  {
    id: '29',
    realName: 'Verónica Merino Yungueros',
    fantasyName: 'Verónica la Lógica',
    role: 'Senior Backend Developer',
    class: 'Wizard',
    avatar: veronicaMerinoYunguerosAvatar,
    level: 13,
    hp: 55,
    maxHp: 65,
    backstory: 'A scholar of the deep code, she deciphers the ancient scrolls of business logic.',
    abilities: ['Logic Blast', 'Algorithm Weave', 'Teleport Data'],
    equipment: ['Staff of Java', 'Grimoire of Rules', 'Amulet of Intelligence']
  },
  {
    id: '30',
    realName: 'Andrés Reyes Navas',
    fantasyName: 'Andrés el Capitán',
    role: 'Chapter Lead Frontend Multitenant',
    class: 'Warlord',
    avatar: andresReyesNavasAvatar,
    level: 15,
    hp: 95,
    maxHp: 110,
    backstory: 'A veteran commander who leads the frontend vanguard across multiple tenants and realms.',
    abilities: ['Multitenant Command', 'Rally Frontend', 'Tactical Merge'],
    equipment: ['Banner of the Chapter', 'Sword of Governance', 'Helm of Vision']
  },
  {
    id: '31',
    realName: 'Ronal Alexis Baier Cifuentes',
    fantasyName: 'Ronal el Guardián',
    role: 'Senior Backend Developer',
    class: 'Guardian',
    avatar: ronalAlexisBaierCifuentesAvatar,
    level: 12,
    hp: 110,
    maxHp: 130,
    backstory: 'An immovable object in the path of chaos, ensuring the stability of the core systems.',
    abilities: ['Taunt Bug', 'Fortress of Code', 'Unbreakable Build'],
    equipment: ['Greatshield of Stability', 'Armor of Resilience', 'Mace of Reliability']
  },
  {
    id: '32',
    realName: 'Steven Garcia Cervera',
    fantasyName: 'Steven el Rápido',
    role: 'Senior Backend Developer',
    class: 'Rogue',
    avatar: stevenGarciaCerveraAvatar,
    level: 11,
    hp: 65,
    maxHp: 75,
    backstory: 'Moves through the codebase like a shadow, optimizing performance before anyone notices.',
    abilities: ['Sneak Optimization', 'Backstab Latency', 'Evasion of Errors'],
    equipment: ['Daggers of Speed', 'Cloak of Cache', 'Boots of Haste']
  },
  {
    id: '33',
    realName: 'Harrison Lee Rivas Chacon',
    fantasyName: 'Harrison el Pintor',
    role: 'Senior Frontend Developer',
    class: 'Monk',
    avatar: harrisonLeeRivasChaconAvatar,
    level: 12,
    hp: 72,
    maxHp: 82,
    backstory: 'Codes with a fluid style, blending martial discipline with artistic expression.',
    abilities: ['Brushstroke Code', 'Fluid Layout', 'Ki of CSS'],
    equipment: ['Staff of Design', 'Robes of Color', 'Belt of Flexbox']
  },
  {
    id: '34',
    realName: 'Mayte Vazquez Andrés',
    fantasyName: 'Mayte la Vidente',
    role: 'UX',
    class: 'Oracle',
    avatar: mayteVazquezAndresAvatar,
    level: 14,
    hp: 60,
    maxHp: 70,
    backstory: 'Possesses the sight to see the product through the eyes of the users before it is even built.',
    abilities: ['User Empathy', 'Future Sight', 'Wireframe Reality'],
    equipment: ['Crystal Ball of Figma', 'Mirror of Persona', 'Robes of Experience']
  },
  {
    id: '35',
    realName: 'Julio Gil Higes',
    fantasyName: 'Julio el Escriba',
    role: 'Product Analyst',
    class: 'Cleric',
    avatar: julioGilHigesAvatar,
    level: 11,
    hp: 75,
    maxHp: 85,
    backstory: 'Documents the sacred texts of requirements, healing confusion with clarity.',
    abilities: ['Clarify Intent', 'Blessing of Detail', 'Sanctuary of Scope'],
    equipment: ['Scrolls of Specifications', 'Symbol of Analysis', 'Staff of Order']
  },
  {
    id: '36',
    realName: 'Manuel Touriño Lucas',
    fantasyName: 'Manuel el Soberano',
    role: 'Product Owner',
    class: 'Noble',
    avatar: manuelTourinoLucasAvatar,
    level: 13,
    hp: 85,
    maxHp: 95,
    backstory: 'A ruler of the backlog, making tough decrees to ensure the kingdom\'s prosperity.',
    abilities: ['Royal Decree', 'Resource Command', 'Diplomatic Immunity'],
    equipment: ['Scepter of Prioritization', 'Crown of Value', 'Signet Ring of Approval']
  },
  {
    id: '37',
    realName: 'Misha Maliga',
    fantasyName: 'Misha la Elemental',
    role: 'Senior Frontend Developer',
    class: 'Druid',
    avatar: mishaMaligaAvatar,
    level: 12,
    hp: 76,
    maxHp: 88,
    backstory: 'Controls the elements of the browser, summoning storms of interactivity.',
    abilities: ['DOM Growth', 'Lightning Render', 'Roots of Logic'],
    equipment: ['Staff of Elements', 'Cloak of the Web', 'Seed of Code']
  },
  {
    id: '38',
    realName: 'Antonio Arjona Hernán',
    fantasyName: 'Antonio el Centinela',
    role: 'QA',
    class: 'Hunter',
    avatar: antonioArjonaHernanAvatar,
    level: 11,
    hp: 80,
    maxHp: 90,
    backstory: 'Sets traps for bugs in the dark forests of pre-production.',
    abilities: ['Trap Bug', 'Tracking Error', 'Precision Shot'],
    equipment: ['Crossbow of Testing', 'Net of Capture', 'Boots of Stealth']
  },
  {
    id: '39',
    realName: 'Carlos Gamez Fuentes',
    fantasyName: 'Carlos el Arquimago',
    role: 'Chapter Principal',
    class: 'Archmage',
    avatar: carlosGamezFuentesAvatar,
    level: 18,
    hp: 90,
    maxHp: 100,
    backstory: 'Wielder of high-level magic, overseeing the magical currents of the entire guild.',
    abilities: ['Grand Architecture', 'Mass Teleport', 'Arcane Shield'],
    equipment: ['Staff of the Principal', 'Robes of Mastery', 'Orb of Oversight']
  },
  {
    id: '40',
    realName: 'Ángel de Castro Escalera',
    fantasyName: 'Ángel el Escadador',
    role: 'Senior Backend Developer',
    class: 'Ranger',
    avatar: angelDeCastroEscaleraAvatar,
    level: 12,
    hp: 78,
    maxHp: 88,
    backstory: 'Climbs the highest peaks of server load, finding paths where others see walls.',
    abilities: ['Pathfinding', 'Server Snipe', 'Load Balance'],
    equipment: ['Bow of Throughput', 'Climbing Gear of Scale', 'Cloak of the Cloud']
  },
  {
    id: '41',
    realName: 'Daniel Maestre Yepes',
    fantasyName: 'Daniel el Maestro',
    role: 'Senior Frontend Developer',
    class: 'Fighter',
    avatar: danielMaestreYepesAvatar,
    level: 12,
    hp: 90,
    maxHp: 105,
    backstory: 'A versatile fighter who adapts to any frontend framework thrown his way.',
    abilities: ['Action Surge', 'Second Wind', 'Weapon Mastery'],
    equipment: ['Sword of JS', 'Shield of CSS', 'Armor of HTML']
  },
  {
    id: '42',
    realName: 'Orpaz Menahem',
    fantasyName: 'Orpaz la Exploradora',
    role: 'Senior Frontend Developer',
    class: 'Scout',
    avatar: orpazMenahemAvatar,
    level: 11,
    hp: 70,
    maxHp: 80,
    backstory: 'Ventures into unknown territories of the codebase, mapping out new features.',
    abilities: ['Reconnaissance', 'Quick Step', 'Map Reveal'],
    equipment: ['Spyglass of Inspect', 'Light Armor of Speed', 'Dagger of Script']
  },
  {
    id: '43',
    realName: 'Álvaro Miguel Obies García',
    fantasyName: 'Álvaro el Núcleo',
    role: 'Senior Backend Developer',
    class: 'Golemsmith',
    avatar: alvaroMiguelObiesGarciaAvatar,
    level: 12,
    hp: 95,
    maxHp: 110,
    backstory: 'Constructs the heavy golems that carry the weight of the application data.',
    abilities: ['Construct Golem', 'Reinforce Structure', 'Power Smash'],
    equipment: ['Hammer of Forging', 'Apron of Safety', 'Gloves of Strength']
  },
  {
    id: '44',
    realName: 'Javier Ventas Garzón',
    fantasyName: 'Javier el Mercader',
    role: 'Product Analyst',
    class: 'Merchant',
    avatar: javierVentasGarzonAvatar,
    level: 11,
    hp: 65,
    maxHp: 75,
    backstory: 'Trades in the most valuable currency of all: information and user insights.',
    abilities: ['Appraise Value', 'Trade Secret', 'Gold Rush'],
    equipment: ['Scales of Balance', 'Bag of Holding', 'Coin of analytics']
  },
  {
    id: '45',
    realName: 'Damián Rossi',
    fantasyName: 'Damián el Colorista',
    role: 'Senior Frontend Developer',
    class: 'Illusionist',
    avatar: damianRossiAvatar,
    level: 12,
    hp: 62,
    maxHp: 72,
    backstory: 'Weaves light and shadow to create interfaces that are indistinguishable from magic.',
    abilities: ['Color Spray', 'Hypnotic Pattern', 'Invisibility'],
    equipment: ['Prism of Light', 'Robes of Chroma', 'Wand of Gradients']
  },
  {
    id: '46',
    realName: 'Silvia Panadero Hernández',
    fantasyName: 'Silvia la Estratega',
    role: 'Product Analyst',
    class: 'Tactician',
    avatar: silviaPanaderoHernandezAvatar,
    level: 15,
    hp: 80,
    maxHp: 90,
    backstory: 'Surveys the battlefield of the market, devising plans that ensure victory.',
    abilities: ['Battle Plan', 'Inspire Confidence', 'Tactical Shift'],
    equipment: ['Map of the Market', 'Flag of Command', 'Horn of Rallying']
  },
  {
    id: '47',
    realName: 'Álex Bosch',
    fantasyName: 'Álex el Fulgor',
    role: 'Senior Frontend Developer',
    class: 'Pyromancer',
    avatar: alexBoschAvatar,
    level: 12,
    hp: 68,
    maxHp: 78,
    backstory: 'Burns away legacy code and lights up the screen with blazing fast performance.',
    abilities: ['Fireball of Features', 'Blazing Speed', 'Burn Bug'],
    equipment: ['Staff of Fire', 'Robes of Flame', 'Ring of Ember']
  },
  {
    id: '48',
    realName: 'Aitor Agirretxea Gómez',
    fantasyName: 'Aitor el Depurador',
    role: 'QA',
    class: 'Inquisitor',
    avatar: aitorAgirretxeaGomezAvatar,
    level: 11,
    hp: 85,
    maxHp: 95,
    backstory: 'Relentlessly hunts down heresy in the form of defects and inconsistencies.',
    abilities: ['Judgement', 'Detect Lies', 'Purge Error'],
    equipment: ['Hammer of Justice', 'Seal of Quality', 'Book of Law']
  },
  {
    id: '49',
    realName: 'Sergio Novillo Felix',
    fantasyName: 'Sergio el Pionero',
    role: 'Reference Lead Frontend eCare',
    class: 'Paladin',
    avatar: sergioNovilloFelixAvatar,
    level: 14,
    hp: 98,
    maxHp: 115,
    backstory: 'Leads the charge into new technologies, protecting his squad with a shield of best practices.',
    abilities: ['Aura of Leadership', 'Divine Shield', 'Charge'],
    equipment: ['Sword of the Pioneer', 'Shield of Standards', 'Armor of Radiance']
  }
];
