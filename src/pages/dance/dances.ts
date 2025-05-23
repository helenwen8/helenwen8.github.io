// import { getRepositoryDetails } from "../../utils";

export interface Dance {
  danceName: string,
  artistName?: string,
  thumbnail?: string,
  videoID: string;
  tags?: string[],
  date?: string,
}

export const dances: Dance[] = [
  {
    // S25
    danceName: 'HOME;RUN',
    artistName: 'SEVENTEEN',
    videoID: 'bMpEBz2DdgM',
    tags: ["K-Pop", "Dance Cover", "Co-Leader"],
    date: "Spring 25",
  },
  {
    danceName: 'God of Music',
    artistName: 'SEVENTEEN',
    videoID: 'PrsqmsTpx14',
    tags: ["K-Pop", "Dance Cover", "Leader"],
    date: "Spring 25",
  },
  {
    danceName: 'Ima - Even if rthe world ends tomorrow',
    artistName: 'SEVENTEEN',
    videoID: 'cV6763RA35g',
    tags: ["K-Pop", "Dance Cover", "CoLeader"],
    date: "Spring 25",
  },
  {
    danceName: 'Getting Closer',
    artistName: 'SEVENTEEN',
    videoID: 'Xy-fx-LjU1A',
    tags: ["K-Pop", "Dance Cover", ],
    date: "Spring 25",
  },
  {
    danceName: 'Supersonic',
    artistName: 'Fromis_9',
    videoID: 'XAo0NJFIf4g',
    tags: ["K-Pop", "Dance Cover", "Girl Group"],
    date: "Spring 25",
  },
  {
    danceName: 'Keep Me Up',
    artistName: 'B.I',
    videoID: '6gdiT-2gdvg',
    tags: ["K-Pop", "Dance Cover", "Other"],
    date: "Spring 25",
  },
  {
    danceName: 'Rising',
    artistName: 'TripleS',
    videoID: 'KPVhg3EE3qk',
    tags: ["K-Pop", "Dance Cover", "Girl Group", "Co-Leader"],
    date: "Spring 25",
  },
  {
    danceName: 'Good Boy',
    artistName: 'G-Dragon',
    videoID: 'eVCcF5fP2mo',
    tags: ["K-Pop", "Dance Cover", "Boy Group", "Board Dance"],
    date: "Spring 25",
  },


  {
    danceName: 'Maestro',
    artistName: 'SEVENTEEN',
    videoID: '',
    tags: ["K-Pop", "Dance Cover", "Co-Leader"],
    date: "Fall 24",
  },

]
