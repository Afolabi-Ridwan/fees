import consultant1 from "/assets/image/consultantOne.png";
import consultant2 from "/assets/image/consultantTwo.jpg";
import consultant3 from "/assets/image/consultantThree.jpg";
import consultant4 from "/assets/image/consultantFour.jpg";
import consultant5 from "/assets/image/consultantFive.jpg";
import consultant6 from "/assets/image/consultantSix.jpg";
import consultant7 from "/assets/image/consultantSeven.jpg";
import consultant8 from "/assets/image/consultantEight.jpg";
import mapPinIcon from "/assets/icons/MapPinArea.png"
import pathIcon from "/assets/icons/Path.png"
import chartLineIcon from "/assets/icons/ChartLineUp.png"

interface CardData {
  id: number;
  name: string;
  image: string;
  title: string;
  bio: string;
  courses: string[];
}

export const cardsData: CardData[] = [
  {
    id: 1,
    name: "Pelumi Akinsika",
    image: consultant1,
    title: "HR Consultant",
    bio: "<strong>Pelumi Akinsika</strong> is a highly decorated Leadership Strategist with over 10 years of experience in team management, organizational growth, and leadership training. He has worked with notable companies like Microsoft, Astra, etc. Pelumi is dedicated to helping emerging leaders unlock their full potential.",
    courses: [
      "Strategic Decision-Making",
      "Emotional Intelligence for Leaders",
      "Driving Organizational Change",
    ],
  },
  {
    id: 2,
    name: "Afolabi Ridwan",
    image: consultant2,
    title: "Leadership Coach",
    bio: "<strong>Afolabi Ridwan</strong> is a seasoned Leadership Coach with extensive experience in executive coaching and leadership development. He has worked with top-tier organizations to enhance their leadership capabilities.",
    courses: [
      "Executive Coaching",
      "Leadership Development",
      "Team Building",
    ],
  },
  {
    id: 3,
    name: "Kabeer Hammed",
    image: consultant3,
    title: "Business Consultant",
    bio: "<strong>Kabeer Hammed</strong> is a Business Consultant specializing in strategic planning and organizational efficiency. She has helped numerous companies achieve their business goals.",
    courses: [
      "Strategic Planning",
      "Organizational Efficiency",
      "Business Growth Strategies",
    ],
  },
  {
    id: 4,
    name: "Idowu Valentine",
    image: consultant6,
    title: "HR Specialist",
    bio: "<strong>Idowu Valentine</strong> is an HR Specialist with a focus on talent management and employee engagement. She has a proven track record of improving workplace culture.",
    courses: [
      "Talent Management",
      "Employee Engagement",
      "Workplace Culture",
    ],
  },
  {
    id: 5,
    name: "Esther Akinloose",
    image: consultant5,
    title: "Change Management Expert",
    bio: "<strong>Esther Akinloose</strong> is a Change Management Expert with over 15 years of experience guiding organizations through transformational change.",
    courses: [
      "Change Management",
      "Transformational Leadership",
      "Organizational Change",
    ],
  },
  {
    id: 6,
    name: "Gbadamosi Olamide",
    image: consultant7,
    title: "Team Building Specialist",
    bio: "<strong>Gbadamosi Olamide</strong> is a Team Building Specialist known for creating cohesive and high-performing teams across various industries.",
    courses: [
      "Team Building",
      "Conflict Resolution",
      "High-Performance Teams",
    ],
  },
  {
    id: 7,
    name: "Edoh Tina",
    image: consultant4,
    title: "Motivational Speaker",
    bio: "<strong>Edoh Tina</strong> is a Motivational Speaker who empowers individuals and organizations to reach their highest potential.",
    courses: [
      "Public Speaking",
      "Personal Development",
      "Motivational Strategies",
    ],
  },
  {
    id: 8,
    name: "Kolade Olaide",
    image: consultant8,
    title: "Executive Coach",
    bio: "<strong>Kolade Olaide</strong> is an Executive Coach with a focus on helping leaders achieve their professional and personal goals.",
    courses: [
      "Executive Leadership",
      "Goal Setting",
      "Performance Coaching",
    ],
  },
];


export const faqs = [
        {
            question: "Does the academy offer one-on-one leadership sessions?",
            answer:
                "We offer Mentor-Mixer sessions designed to provide personalized guidance and support on your leadership journey.",
        },
        {
            question: "Can the tuition fee be paid in installments?",
            answer: "Yes, we offer flexible installment payment options.",
        },
        {
            question: "If absent, do we get access to the resources shared in class?",
            answer: "Yes, all resources will be available online for registered students.",
        },
        {
            question:
                "Beside the designated days, can we have physical interactions with the faculties?",
            answer: "Faculty members are available during office hours for interactions.",
        },
        {
            question:
                "Do we automatically advance to the next track after the foundational track?",
            answer: "No, progression to the next track depends on performance evaluation.",
        },
    ];

   export  const aboutSectionData = [
        {
          header: "Welcome Home, Leaders",
          text: `The FEES Leadership Academy is beyond a programme- it’s a community committed to grooming 
            leaders with authentic impact. Leadership is more than the title, it is legacy and purpose. 
            This is what stands us out as we are dedicated to developing 
            leaders who lead effectively, evoke change and create significant and lasting impact.`,
          icon: mapPinIcon, id: 1
        },
        {
          header: "Two Tracks, Tailored to Your Stage",
          text: `The FEES Leadership Academy is beyond a programme- it’s a community committed to grooming 
            leaders with authentic impact. Leadership is more than the title, it is legacy and purpose. 
            This is what stands us out as we are dedicated to developing 
            leaders who lead effectively, evoke change and create significant and lasting impact.`,
          icon: pathIcon, id: 2
        },
        {
          header: "A Unique Approach to Leadership Growth",
          text: `The FEES Leadership Academy is beyond a programme- it’s a community committed to grooming 
            leaders with authentic impact. Leadership is more than the title, it is legacy and purpose. 
            This is what stands us out as we are dedicated to developing 
            leaders who lead effectively, evoke change and create significant and lasting impact.`,
          icon: chartLineIcon, id: 3
        },
    
      ]


    export const whoYouAre = [
        { title: "Driven to Lead with Purpose", desc: "Motivated by a desire to inspire others and make a meaningful impact." },
        { title: "Committed to Lifelong Growth", desc: "Embraces learning, adapting, and evolving continuously." },
        { title: "Aspiring to Influence Change", desc: "Aims to bring about positive change in your career, business, or community." },
        { title: "Seeking Mentorship and Collaboration", desc: "Values learning from experienced leaders and connecting with driven peers." },
        { title: "Ready to Invest in Your Future", desc: "Prepared to take the next step in a meaningful leadership journey." }
    ]
    
    export const whatYouLike = [
        { title: "Personalized Learning Tracks", desc: "Tailored pathways for leaders at every stage." },
        { title: "Exclusive Class Sizes", desc: "Small cohorts of 30 ensure personalized attention and interaction." },
        { title: "Access to Industry-Leading Faculty", desc: "Learn from seasoned experts dedicated to your growth." },
        { title: "Hands-On Leadership Skills", desc: "Practical skills development for immediate impact in real-world settings." }
    ]