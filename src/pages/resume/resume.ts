// interfaces

export interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string[];
  skills?: string[];
}

export interface ProjectProps {
  projectName: string;
  dates: string;
  role: string;
  description: string[];
  skills?: string[];
}

// data!
export const experiences: ExperienceProps[] =  [
    {
        title: "Cloud & Digital Strategy Intern",
        location: "New York, NY, USA",
        company: "PricewaterhouseCoopers (PwC)",
        dates: "Jun 2023 - Aug 2023",
        description: [
            "Solved a critical data gap by helping the client identifying unresponsive survey invitees through advanced Excel analysis, enabling the project to move forward within two hours instead of two days when the team were burned with other issue.",
            "Led daily stand-ups and facilitated stakeholder meetings to oversee the transition of Google Drive data during a corporate divestiture, ensuring sensitive information was not transferred improperly. ",
            "Regularly communicated strategic recommendations to managers and stakeholders, directly engaged with clients to address concerns when other team members were unavailable, and documented key meeting outcomes to keep the project on track and aligned with compliance requirements.",
            "Prepared strategies and presented for the Interns Case Competition, and received first place out of 19 teams.",
        ]
    },
    {
        title: "Research Assistant", 
        company: "Carnegie Mellon University, Heinz College",
        location: 'Pittsburgh, PA, USA',
        dates: "May 2022 - Aug 2022", 
        description: [
            "Implemented termination procedures across an email-tracking program, Chrome browser extension, and C# Windows service, ensuring no extraneous data is transmitted and improved compliance with data collection policies.",
            "Conducted efficiency and completeness testing for a Chrome browser extension, focusing on optimizing network speed, disk storage, and removing sensitive personal identifiable information (PII) to comply with data collection regulations.",
        ]
    },
    {
        title: "Security Research Assistant", 
        company: "Tecent, Keen Security Lab",
        location: 'Shanghai, China',
        dates: "Oct 2020 - May 2021", 
        description: [
            "Analyzed and debugged a 5000-lines Java static program analysis tool with the Ghidra API, ensured the tool was logically sound to detect Use-After-Free (UAF) bugs with efficiency.",
            "Designed and implemented a flow-insensitive pointer analysis tool in C++, leveraging the LLVM frameworks and interval arithmetic, providing new insight into precision in static program analysis.",
        ]
    },
    {
        title: "Python & SML Teaching Assistant", 
        company: "Carnegie Mellon University, School of Computer Science",
        location: 'Pittsburgh, PA, USA',
        dates: "Jan 2020 - Aug 2022", 
        description: [
            "Taught recitation twice weekly to review difficult topics (e.g. data structure, recursion, higher-order functions).",
            "Mentored 30 students on term projects, ensuring that completed projects included advanced algorithms and data structures. Guided one student’s project to achieve first place out of 500 other students.",

        ]
    }
]

export const projects: ProjectProps[] = [
    {
        projectName: "Shelly, a personal CRM",
        role: "Team Manager, Backend Developer",
        dates: "Sep 2023 - Dec 2023",
        description: [
            "Co-managed a team of three, overseeing deadlines and deliverables to develop a successful app, earning 2nd place in the course-wide competition out of 20 other teams.",
            "Sole backend developer for Shelly with the CoreData framework, ensuring seamless integration between frontend and backend APIs, accurate data storage and proper delivery of notifications.",
            "Assisted with user testing in early stages of the development, synthesized important feedbacks throughout all prototypes.",
        ]
    }
]