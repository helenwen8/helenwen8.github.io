// import { getRepositoryDetails } from "../../utils";

// using enum so the description can be prettier
export enum Genre{
  kpop = "K-Pop",
  open = "Open Style",
  other = "Other"
}

export enum ContentType {
  performance = "Performance",
  cover = "Cover"
}

export interface Dance {
  danceName: string,
  artistName?: string,
  videoID: string;
  date?: string,

  // Attributes of the dance
  genre: Genre;
  leaderType: "Leader" | "Co-Leader" | "Member" | "Choreographer";
  contentType: ContentType;

  
  // groupType?: "Boy Group" | "Girl Group" | "Other"; // maybe name this subgenre
  
  tags?: string[],
}


// TODO: ds, various other peroformances, cover videos
const s25: Dance[] = [
  // KPDC Showcase
  {
    danceName: 'HOME;RUN',
    artistName: 'SEVENTEEN',
    videoID: 'bMpEBz2DdgM',
    leaderType: "Co-Leader",
    genre: Genre.kpop,
    contentType: ContentType.performance,
    tags: ["circus"],
    date: "Spring 25",
  },
  {
    danceName: 'God of Music',
    artistName: 'SEVENTEEN',
    videoID: 'PrsqmsTpx14',
    leaderType: 'Leader',
    genre: Genre.kpop,
    contentType: ContentType.performance,
    date: "Spring 25",
  },
  {
    danceName: 'Rising',
    artistName: 'TripleS',
    videoID: 'KPVhg3EE3qk',
    leaderType: "Co-Leader",
    genre: Genre.kpop,
    contentType: ContentType.performance,
    date: "Spring 25",
  },
  {
    danceName: 'Keep Me Up',
    artistName: 'B.I',
    videoID: '6gdiT-2gdvg',
    leaderType: "Member",
    genre: Genre.kpop,
    contentType: ContentType.performance,
    date: "Spring 25",
  },
  {
    danceName: 'Ima - Even if the world ends tomorrow',
    artistName: 'SEVENTEEN',
    videoID: 'cV6763RA35g',
    leaderType: "Co-Leader",
    genre: Genre.kpop,
    contentType: ContentType.performance,
    date: "Spring 25",
  },
  {
    danceName: 'Getting Closer',
    artistName: 'SEVENTEEN',
    videoID: 'Xy-fx-LjU1A',
    leaderType: "Member",
    genre: Genre.kpop,
    contentType: ContentType.performance,
    date: "Spring 25",
  },
  {
    danceName: 'Supersonic',
    artistName: 'Fromis_9',
    videoID: 'XAo0NJFIf4g',
    leaderType: "Member",
    genre: Genre.kpop,
    contentType: ContentType.performance,
    date: "Spring 25",
  },

  {
    danceName: 'Good Boy',
    artistName: 'G-Dragon',
    videoID: 'eVCcF5fP2mo',
    leaderType: "Member",
    genre: Genre.kpop,
    contentType: ContentType.performance,
    tags: ["Board Dance"],
    date: "Spring 25",
  },
  {
    danceName: 'BANG BANG BANG',
    artistName: 'BIG BANG',
    videoID: 'PkdAipd1YPM',
    leaderType: "Member",
    genre: Genre.kpop,
    contentType: ContentType.performance,
    tags: ["Subunit Leader Dance"],
    date: "Spring 25",
  },

  // KPDC Covers

  // DS Showcase

  // Others


 

]

const f24: Dance[] = [
  // KPDC: Allure
 {
    danceName: 'Maestro',
    artistName: 'SEVENTEEN',
    videoID: '1Y8F-Jrpw3Y',
    leaderType: "Co-Leader",
    genre: Genre.kpop, // for now
    contentType: ContentType.performance, // for now
    tags: [""],
    date: "Fall 24",
  },
  {
    danceName: 'Girls Never Die',
    artistName: 'TripleS',
    videoID: 'YjuLSbrw1sM',
    leaderType: "Co-Leader",
    genre: Genre.kpop, // for now
    contentType: ContentType.performance, // for now
    tags: [""],
    date: "Fall 24",
  },
  {
    danceName: "I'm Ready",
    artistName: 'CHUNGHA',
    videoID: 'hbtn5fRS-hs',
    leaderType: "Member",
    genre: Genre.kpop, 
    contentType: ContentType.performance, 
    tags: [""],
    date: "Fall 24",
  },
  {
    danceName: "Smoothie",
    artistName: 'NCT DREAM',
    videoID: 'TitYg1Srfvs',
    leaderType: "Member",
    genre: Genre.kpop, 
    contentType: ContentType.performance, 
    tags: [""],
    date: "Fall 24",
  },
  {
    danceName: "Produce 101 Medley",
    artistName: 'PRODUCE 101',
    videoID: '45rQLD1fG3o',
    leaderType: "Member",
    genre: Genre.kpop, 
    contentType: ContentType.performance, 
    tags: ["Board Dance", "Kinda a colead bc i taught ooo"],
    date: "Fall 24",
  },
  {
    danceName: "Ridin'",
    artistName: 'NCT DREAM',
    videoID: 'vBo7fPMAbCY',
    leaderType: "Co-Leader",
    genre: Genre.kpop, 
    contentType: ContentType.performance, 
    tags: [""],
    date: "Fall 24",
  },

  // KPDC Covers
  {
    danceName: 'Maestro',
    artistName: 'SEVENTEEN',
    videoID: 'MAAXIUDxByg',
    leaderType: "Co-Leader",
    genre: Genre.kpop, // for now
    contentType: ContentType.cover, // for now
    tags: [""],
    date: "Fall 24",
  },
  {
    danceName: 'Girls Never Die',
    artistName: 'TripleS',
    videoID: '-sTcCK7Ppls',
    leaderType: "Co-Leader",
    genre: Genre.kpop, // for now
    contentType: ContentType.cover, // for now
    tags: [""],
    date: "Fall 24",
  },
  {
    danceName: "Smoothie",
    artistName: 'NCT DREAM',
    videoID: 'j4PXUHioaHY',
    leaderType: "Member",
    genre: Genre.kpop, 
    contentType: ContentType.cover, 
    tags: [""],
    date: "Fall 24",
  },
  {
    danceName: "Ridin'",
    artistName: 'NCT DREAM',
    videoID: 'luhhe41GYgA',
    leaderType: "Co-Leader",
    genre: Genre.kpop, 
    contentType: ContentType.cover, 
    tags: [""],
    date: "Fall 24",
  },
  {
    danceName: "Generation'",
    artistName: 'TripleS AAA',
    videoID: '84jzBITNiLM',
    leaderType: "Member",
    genre: Genre.kpop, 
    contentType: ContentType.cover, 
    tags: [""],
    date: "Fall 24",
  },
  // {
  //   danceName: "Lili Yabbay'",
  //   artistName: 'SEVENTEEN (Performance Unit)',
  //   videoID: '',
  //   leaderType: "Member",
  //   genre: Genre.kpop, 
  //   contentType: ContentType.cover, 
  //   tags: [""],
  //   date: "Fall 24",
  // },
  // {
  //   danceName: "How Sweet",
  //   artistName: 'NewJeans',
  //   videoID: '',
  //   leaderType: "Member",
  //   genre: Genre.kpop, 
  //   contentType: ContentType.cover, 
  //   tags: [""],
  //   date: "Fall 24",
  // },

  // DS: Ember
  {
    danceName: "You Think I'm Dramatic?",
    artistName: "Lily Du & Nina Zhao",
    videoID: "pXt13vLdiBE",
    leaderType: "Member",
    genre: Genre.open, 
    contentType: ContentType.performance, 
    tags: [""],
    date: "Fall 24",
  },
  {
    danceName: "PLAYBOY",
    artistName: "Alisa Lo & Lydia Yang",
    videoID: "Qhz2laDI46I",
    leaderType: "Member",
    genre: Genre.open, 
    contentType: ContentType.performance, 
    tags: ["heels"],
    date: "Fall 24",
  },
  {
    danceName: "Adios",
    artistName: "Elva Jia",
    videoID: "s77V0EpC6Gw",
    leaderType: "Member",
    genre: Genre.open, 
    contentType: ContentType.performance, 
    tags: [""],
    date: "Fall 24",
  },
  {
    danceName: "PLAYGROUND",
    artistName: "Helix Dance Crew",
    videoID: "Xb_SdQKzJFQ",
    leaderType: "Member",
    genre: Genre.open, 
    contentType: ContentType.performance, 
    tags: [""],
    date: "Fall 24",
  },

  // others
]


// concatenated result
export const dances: Dance[] = [
  ...s25,
  ...f24,
]