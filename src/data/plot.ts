export interface PlotChapter {
  id: string;
  title: string;
  content: string;
  date: string;
  isComplete: boolean;
}

export const initialPlot: PlotChapter[] = [
  {
    id: '1',
    title: 'The Awakening',
    content: `In the ancient realm of Digitalia, where code flows like rivers and data grows like forests, a great darkness has begun to stir. The Apps Guild, a legendary order of heroes sworn to protect the mobile kingdoms, receives word of a terrible prophecy.

The Oracle of Analytics has foreseen that the Shadow of Technical Debt will consume all realms unless stopped. Ancient bugs, long thought defeated, have risen from deprecated codebases. The Void of Legacy Code threatens to engulf everything.

Our heroes must journey through treacherous Sprint Cycles, battle fierce Deadline Dragons, and solve the riddles of the Architecture Ancients to find the legendary Clean Code Artifacts that can seal away the darkness forever.

But first, they must gather in the Hall of Daily Standups, where the Supreme Dungeon Master, Ysabel la Tejedora de Destinos, will reveal their quest...`,
    date: '2024-01-15',
    isComplete: true
  },
  {
    id: '2',
    title: 'The Call to Adventure',
    content: `The heroes assembled in the grand Hall of Daily Standups, its walls adorned with ancient Jira tickets and the sacred Kanban boards of old. Each carried their own burden of tasks, their own sprint goals weighing upon their shoulders.

Ysabel spoke with a voice that echoed through dimensions: "Brave heroes of the Apps Guild, the time has come. The Shadow grows stronger with each passing iteration. You must venture into the Forbidden Repository, where the first artifact awaits."

The Forbidden Repository was said to be a place where no pull request had been approved in a thousand years. Its guardians, the Review Wraiths, were merciless in their criticism.

"Who among you will lead this expedition?" Ysabel asked, her eyes glowing with the light of a thousand dashboards...`,
    date: '2024-02-01',
    isComplete: true
  },
  {
    id: '3',
    title: 'Into the Forbidden Repository',
    content: `The journey begins at dawn. Write the next chapter of this epic tale...`,
    date: '2024-02-15',
    isComplete: false
  }
];
