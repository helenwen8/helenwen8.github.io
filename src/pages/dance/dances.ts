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
    danceName: 'HOME;RUN',
    artistName: 'SEVENTEEN',
    videoID: 'bMpEBz2DdgM',
    tags: ["K-Pop", "Dance Cover", "Leader"],
    date: "Spring 25",
  }

]
