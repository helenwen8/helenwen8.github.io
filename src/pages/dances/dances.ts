// import { getRepositoryDetails } from "../../utils";

export interface Dance {
  danceName: string,
  artistName?: string,
  thumbnail?: string,
  videoLink: string;
  tags?: string[],
  date?: string,
  // [key: string]: any;
}

export const dances: Dance[] = [
  {
    danceName: 'HOME;RUN',
    artistName: 'SEVENTEEN',
    videoLink: 'https://youtu.be/bMpEBz2DdgM?si=81XWwlWNQmMa8D7J',
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
