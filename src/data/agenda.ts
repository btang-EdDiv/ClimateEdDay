export interface AgendaItem {
  time: string;
  title: string;
  details?: string | string[];
  type?: 'session' | 'workshop' | 'panel' | 'break';
  color?: 'green' | 'teal' | 'yellow' | 'sky' | 'purple' | 'grey';
  subSessions?: {
    title: string;
    type: string;
    details: string | string[];
  }[];
}

export const agendaData: AgendaItem[] = [
  {
    time: "9:30am - 9:45am",
    title: "Welcome attendees",
    type: "session",
    color: "grey"
  },
  {
    time: "9:45am - 10:30am",
    title: "Opening Session",
    details: [
      "Welcome remarks",
      "Guest speaker"
    ],
    type: "session",
    color: "purple"
  },
  {
    time: "10:45am - 11:30am",
    title: "Morning Breakout Sessions",
    color: "sky",
    subSessions: [
      {
        title: "Session A1: Workshop",
        type: "Workshop",
        details: "Climate Action Module and/or N2A"
      },
      {
        title: "Session A2: Intergenerational Panel",
        type: "Panel",
        details: "Opportunities for Climate Action in SF: 3-4 speakers share and discuss the current opportunities and experienced challenges through their unique work."
      }
    ]
  },
  {
    time: "11:45am - 12:15pm",
    title: "Late Morning Breakout Sessions",
    color: "teal",
    subSessions: [
      {
        title: "Session B1: Workshop",
        type: "Workshop",
        details: "Screening of My Climate Future; Q&A with producers and the youth"
      },
      {
        title: "Session B2: Panel",
        type: "Panel",
        details: "Teaching and learning for climate action: climate emotions and best approaches for educating through a hopeful lens"
      }
    ]
  },
  {
    time: "12:15pm - 1:00pm",
    title: "Lunch",
    type: "break",
    color: "grey"
  },
  {
    time: "1:15pm - 2:00pm",
    title: "Early Afternoon Breakout Sessions",
    color: "yellow",
    subSessions: [
      {
        title: "Session C1: Workshop",
        type: "Workshop",
        details: "Traditional Ecological Knowledge in Climate Education & Action"
      },
      {
        title: "Session C2: Panel",
        type: "Panel",
        details: [
          "Green & Blue Careers for Climate Action",
          "What's the green & blue economy and how can it be integrated into K-12 and afterschool learning",
          "Focus on examples that can be used by formal and informal educators"
        ]
      }
    ]
  },
  {
    time: "2:15pm - 3:00pm",
    title: "Late Afternoon Breakout Sessions",
    color: "green",
    subSessions: [
      {
        title: "Session D1: Workshop",
        type: "Workshop",
        details: "How to launch & champion youth-led local climate action"
      },
      {
        title: "Session D2: Panel",
        type: "Panel",
        details: [
          "Climate Resilient Schools",
          "What is a climate ready school?",
          "Importance of climate resilient infrastructure",
          "From academic to economic benefits"
        ]
      }
    ]
  },
  {
    time: "3:10pm - 4:00pm",
    title: "Closing Session",
    details: [
      "Remarks from CAS (10min)",
      "Networking (35min)",
      "Light snacks"
    ],
    type: "session",
    color: "purple"
  }
];
