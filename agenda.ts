interface AgendaItem {
  id: string;
  title: string;
  timing: string[];
  tag: string[];
  duration: number;
  speakers: string[];
}

interface Timing {
  [day: string]: {
    [hall: string]: AgendaItem[];
  };
}

export const timing: Timing = {
  dayOne: {
    hallA: [
      {
        id: "1",
        timing: ["10:50 AM", "11:10 AM"],
        title:
          "Charting the Path to Responsible AI: Balancing Innovation with Accountability",
        tag: ["AI"],
        duration: 20,
        speakers: ["97"],
      },
      {
        id: "2",
        timing: ["11:15 AM", "12:05 PM"],
        title:
          "Scaling AI for Impact - Strategies for Enterprise Growth and Innovation",
        tag: ["AI", "Innovation"],
        duration: 50,
        speakers: ["42", "41", "90", "40", "43"],
      },
      {
        id: "3",
        timing: ["12:10 PM", "01:00 PM"],
        title:
          "Next-Gen Cybersecurity - The Role of AI in the hyperconnected world",
        tag: ["AI"],
        duration: 50,
        speakers: ["58", "114", "89", "61"],
      },
      {
        id: "4",
        timing: ["02:00 PM", "02:45 PM"],
        title:
          "GCC Next for Tamil Nadu: Strengthening Global Technology Leadership",
        tag: ["GCC"],
        duration: 45,
        speakers: ["144", "68", "75", "94"],
      },
      {
        id: "5",
        timing: ["02:55 PM", "03:50 PM"],
        title: "The IT Engine: Driving Tamil Nadu's Economic Growth",
        tag: ["Role of IT in the state's development"],
        duration: 45,
        speakers: ["147", "131", "32", "132", "116"],
      },
      {
        id: "6",
        timing: ["04:00 PM", "05:00 PM"],
        title: "AI for Public Good",
        tag: ["AI"],
        duration: 60,
        speakers: ["154"],
      },
    ],
    hallB: [
      {
        id: "7",
        timing: ["10:50 AM", "11:10 AM"],
        title: "The State of Deep Tech Investments: Today and Tomorrow",
        tag: ["Deeptech"],
        duration: 45,
        speakers: ["87", "88", "159"],
      },
      {
        id: "8",
        timing: ["11:45 AM", "12:20 PM"],
        title:
          "Innovative Solutions to Combat Climate ChangeL A Global Prespective",
        tag: ["Climate Change", "A Global Prespective"],
        duration: 35,
        speakers: ["91", "36", "37"],
      },
      {
        id: "9",
        timing: ["12:30 PM", "01:00 PM"],
        title:
          "Building a Resilinet Tamil Nadu: Local Solutions for Climate Action",
        tag: ["Climate Change", "A Local Prespective"],
        duration: 30,
        speakers: ["123", "130"],
      },
      {
        id: "10",
        timing: ["02:00 PM", "02:30 PM"],
        title: "TN Startups - 3 Journeys",
        tag: ["Tech Startup Ecosystem"],
        duration: 30,
        speakers: ["140", "84", "125"],
      },
      {
        id: "11",
        timing: ["02:30 PM", "03:30 PM"],
        title:
          "The Role of private equity in taking TN startups national  and global",
        tag: ["Tech Startup Ecosystem"],
        duration: 60,
        speakers: ["20", "23", "65", "139", "33", "84", "125"],
      },
      {
        id: "12",
        timing: ["04:00 PM", "05:00 PM"],
        title: "Global Technology Trends and Local Impact",
        tag: ["G2G Tech Innovation"],
        duration: 60,
        speakers: ["137", "34", "38", "100", "79"],
      },
    ],
    hallC: [
      {
        id: "13",
        timing: ["11:00 AM", "12:05 PM"],
        title: "Quantum - The New Frontier of Computing",
        tag: ["Quantum Computing"],
        duration: 60,
        speakers: ["16", "151", "86", "72"],
      },
      {
        id: "14",
        timing: ["12:15 PM", "01:00 PM"],
        title:
          "Building Skilled Talent Supply and Awarness for Emerging Industries & Jobs",
        tag: ["AVGC Global Standard"],
        duration: 45,
        speakers: ["121", "112", "143", "98", "93"],
      },
      {
        id: "15",
        timing: ["02:00 PM", "02:45 PM"],
        title: "EV Ecosystem",
        tag: ["EV"],
        duration: 45,
        speakers: ["73", "141"],
      },
      {
        id: "16",
        timing: ["02:55 PM", "03:50 PM"],
        title:
          "AI in Travel and Hospitality: Shaping the Future of Cost, Experience, and Next-Gen Travel",
        tag: ["AI"],
        duration: 45,
        speakers: ["35", "67", "47", "78"],
      },
      {
        id: "17",
        timing: ["04:00 PM", "05:00 PM"],
        title:
          "Building Games from Tamil Nadu for the Global & Domestic Markets",
        tag: ["AVGC Global Standard"],
        duration: 60,
        speakers: ["110", "126", "113", "160", "66"],
      },
    ],
    hallD: [
      {
        id: "44",
        timing: ["09:30 AM", "10:30 AM"],
        title: "Inaugural Session",
        tag: ["All Tracks"],
        duration: 60,
        speakers: ["1", "3", "5", "12", "13", "9", "7"],
      },
      {
        id: "45",
        timing: ["10:30 AM", "10:50 AM"],
        title: "NETWORKING & BREAK",
        tag: ["All Tracks"],
        duration: 20,
        speakers: [],
      },
      {
        id: "18",
        timing: ["10:50 AM", "11:30 AM"],
        title:
          "Transforming the Workforce: The Role of AI in shaping the future of work",
        tag: ["AI"],
        duration: 45,
        speakers: ["12", "5", "13"],
      },
      {
        id: "19",
        timing: ["11:45 AM", "12:15 PM"],
        title:
          "Powering Progress to $1T economy: Youth Leading the Digital Revolution",
        tag: ["AI"],
        duration: 30,
        speakers: ["3", "18"],
      },
      {
        id: "20",
        timing: ["12:30 PM", "01:15 PM"],
        title:
          "Innovation Centres: Accelerating Tamil Nadu's Tech Startup Growth",
        tag: ["Tech Startup Ecosystem"],
        duration: 45,
        speakers: ["9", "122", "102", "39", "88"],
      },
      {
        id: "21",
        timing: ["02:00 PM", "02:45 PM"],
        title:
          "Space Startups and Tamil Nadu's Emergence as a Space Investment Hub",
        tag: ["Satellite Technology"],
        duration: 45,
        speakers: ["146", "53", "18", "124"],
      },
      {
        id: "22",
        timing: ["02:55 PM", "03:50 PM"],
        title:
          "Building a Globally secured and sustained enterprises through GCC",
        tag: ["GCC"],
        duration: 45,
        speakers: ["101", "29", "30", "83", "77"],
      },
      {
        id: "23",
        timing: ["04:00 PM", "05:00 PM"],
        title:
          "Innovation as a Growth Catalyst: Tamil Nadu's Role in India Tech Future",
        tag: ["Innovation in industry"],
        duration: 60,
        speakers: ["76", "21", "28", "29"],
      },
    ],
  },
  dayTwo: {
    hallA: [
      {
        id: "24",
        timing: ["10:30 AM", "11:15 AM"],
        title:
          "Future-proofing the Workspace - Skilling and Scaling for Deep technologies",
        tag: ["AI"],
        duration: 45,
        speakers: ["103", "157", "62", "109", "82"],
      },
      {
        id: "25",
        timing: ["11:25 AM", "12:15 PM"],
        title:
          "Beyond Chennai:: Building Emerging Tech Hubs for Tamil Nadu's Next Wave of Growth",
        tag: ["Development of secondary tech hubs"],
        duration: 45,
        speakers: ["105", "99", "119", "111"],
      },
      {
        id: "26",
        timing: ["12:30 PM", "01:15 PM"],
        title: "Future-Ready Tamil Nadu: Scaling Emerging Tech Ecosystems",
        tag: ["Emerging technologies and their impact"],
        duration: 45,
        speakers: ["106", "108", "70", "85"],
      },
      {
        id: "27",
        timing: ["02:15 PM", "03:00 PM"],
        title: "AI meets quantum - The next frontier",
        tag: ["AI"],
        duration: 45,
        speakers: ["150", "97", "118", "31", "46"],
      },
      {
        id: "28",
        timing: ["03:15 PM", "04:00 PM"],
        title:
          "Leveraging AI in Cyber Defense, Can we predict and prevent crime leveraging AI?",
        tag: ["AI"],
        duration: 45,
        speakers: ["162", "11", "26"],
      },
    ],
    hallB: [
      {
        id: "29",
        timing: ["10:30 AM", "11:15 AM"],
        title:
          "From TN to the Globe - Beyond Borders Expanding Tamil Nadu's Digital Workforce",
        tag: ["Talent development", "Scaling Operations and global outreach"],
        duration: 45,
        speakers: ["104", "81", "153", "107"],
      },
      {
        id: "30",
        timing: ["11:25 AM", "12:15 PM"],
        title:
          "Building a Tech Talent Ecosystem: Nuturing the NExt Generation of Innovators",
        tag: ["Talent development and retention"],
        duration: 45,
        speakers: ["96", "80", "136"],
      },
      {
        id: "31",
        timing: ["12:30 PM", "01:15 PM"],
        title: "Making AI Real - The Infra",
        tag: ["AI Infrastrusture"],
        duration: 45,
        speakers: ["49", "134", "51", "15", "44"],
      },
      {
        id: "32",
        timing: ["02:15 PM", "03:00 PM"],
        title: "AI adoption across industries",
        tag: ["AI"],
        duration: 45,
        speakers: ["138", "60", "161", "135"],
      },
      {
        id: "33",
        timing: ["03:15 PM", "04:00 PM"],
        title:
          "Next-Gen Technologies Transforming Space Exploration and Defense Systems",
        tag: ["Technologies for Defense and Space"],
        duration: 45,
        speakers: ["140", "10", "25"],
      },
    ],
    hallC: [
      {
        id: "34",
        timing: ["10:00 AM", "10:30 AM"],
        title: "Hyperlocal Marketplaces - Future of Economy",
        tag: [""],
        duration: 30,
        speakers: ["92", "117"],
      },
      {
        id: "35",
        timing: ["11:25 AM", "12:15 PM"],
        title:
          "Leveraging AI in Cyber Defense, what talent needed in Tamil Nadu to build a world class cyber capability",
        tag: ["AI"],
        duration: 45,
        speakers: ["128", "55", "78", "129"],
      },
      {
        id: "36",
        timing: ["12:30 PM", "01:15 PM"],
        title: "Cultivating Entrepreneurship in TN via Angel Investing",
        tag: ["Entrepreneurship"],
        duration: 45,
        speakers: ["23", "69", "133"],
      },
      {
        id: "37",
        timing: ["02:15 PM", "03:00 PM"],
        title:
          "Data-Driven Telco: How organizations are Enabling predictive insights and Enhanced Network Performance",
        tag: ["GCC"],
        duration: 45,
        speakers: ["115", "50", "45", "95"],
      },
      {
        id: "38",
        timing: ["03:10 PM", "03:40 PM"],
        title: "Adoptions of AI and impact in consulting",
        tag: ["AI"],
        duration: 30,
        speakers: [],
      },
    ],
    hallD: [
      {
        id: "39",
        timing: ["10:30 AM", "11:15 PM"],
        title:
          "Driving Innovation and Resilience: The Role of GCC's in Shaping the Future of BSI",
        tag: ["GCC BFSI"],
        duration: 45,
        speakers: ["64", "27", "71", "149", "52"],
      },
      {
        id: "40",
        timing: ["11:25 AM", "12:15 PM"],
        title:
          "Future-Proofing Global Healthcare: The Strategic Vision of GCC Leadership",
        tag: ["GCC"],
        duration: 45,
        speakers: ["115", "59", "28"],
      },
      {
        id: "41",
        timing: ["12:30 PM", "01:15 PM"],
        title: "Enterprise Grade AI",
        tag: ["Emerging technologies and their impact"],
        duration: 45,
        speakers: ["19", "17"],
      },
      {
        id: "42",
        timing: ["02:15 PM", "03:00 PM"],
        title: "Innovation in Tamil Computing",
        tag: ["Tamil Computing"],
        duration: 45,
        speakers: ["57"],
      },
      {
        id: "43",
        timing: ["03:15 PM", "03:45 PM"],
        title: "Cybersecurity in the age of AI",
        tag: [""],
        duration: 30,
        speakers: ["22"],
      },
      {
        id: "46",
        timing: ["04:15 PM", "05:15 PM"],
        title: "Inaugural Session",
        tag: ["All Tracks"],
        duration: 60,
        speakers: ["2", "3", "4", "6", "7", "10", "21"],
      },
    ],
  },
};
