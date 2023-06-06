type Instrumentation = 'satb' | 'ssa' | 'ssaa' | 'a capella' | 'ssaaa' | 'drum';
type Language = 'Engels' | 'Nederlands'
type Genre = 'Eigen werk' | 'traditional' | 'pop' | 'jazz'
type Level = 1 | 2 | 3 | 4

type SheetMusic = {
  title: string;
  urlSmp: string;
  bezetting: Instrumentation[];
  language: Language[];
  genre: Genre[];
  level: Level;
  urlYouTube?: string;
}

const music: SheetMusic[] = [
  {
    title: 'Wade in the water',
    urlSmp: 'https://www.sheetmusicplus.com/title/wade-in-the-water-digital-sheet-music/22490308',
    bezetting: ['ssaaa', 'a capella', 'drum'],
    language: ['Engels'],
    genre: ['traditional'],
    level: 3
  },
    {
    title: "Let's have another cup of coffee",
    urlSmp: 'https://www.sheetmusicplus.com/title/let-s-have-another-cup-of-coffee-digital-sheet-music/22489277',
    bezetting: ['ssaa', 'a capella'],
    language: ['Engels'],
    genre: ['jazz'],
    level: 2
  }
]