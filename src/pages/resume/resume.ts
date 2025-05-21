// interfaces

export interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string[];
  skills?: string[];
}

export interface Experience {
    danceName: string,
    artistName?: string,
    thumbnail?: string,
    videoID: string;
    tags?: string[],
    date?: string,
}


export const experiences: ExperienceProps[] =  [
    {
        title: "Cloud & Digital Strategy Intern",
        location: "New York, NY, USA",
        company: "PricewaterhouseCoopers (PwC)",
        dates: "June 2023 - August 2023",
        description: [
            "made slides",
            "competed and won first place lol"
        ]
    },
    {
        title: "Research Assistant", 
        company: "Carnegie Mellon University, Heinz College",
        location: 'Pittsburgh, PA, USA',
        dates: "May 2022 - August 2022", 
        description: [
                    "Good morning baltimore",
                    "Every day is like an open door",
        ]
    }
]