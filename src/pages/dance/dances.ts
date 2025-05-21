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
  },
  // {
  //   ...(await getRepositoryDetails('devaradise/paradise-ui')),
  //   name: 'Paradise UI',
  //   demoLink: 'https://paradise-ui.com',
  //   postLink: 'https://devaradise.com/how-i-build-paradise-ui-react-component-library/',
  //   tags: ['React', 'UI Library']
  // }

]
