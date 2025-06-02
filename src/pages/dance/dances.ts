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

export const dances: Dance[] = [
  {
    // S25
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
    danceName: 'Keep Me Up',
    artistName: 'B.I',
    videoID: '6gdiT-2gdvg',
    leaderType: "Member",
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
    danceName: 'Maestro',
    artistName: 'SEVENTEEN',
    videoID: '',
    leaderType: "Co-Leader",
    genre: Genre.other, // for now
    contentType: ContentType.cover, // for now
    tags: ["this is wrong"],
    date: "Fall 24",
  },

]
