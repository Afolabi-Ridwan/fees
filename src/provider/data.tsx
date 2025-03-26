import consultant1 from "/assets/image/consultantOne.png";
import consultant2 from "/assets/image/consultantTwo.png";
import consultant3 from "/assets/image/consultantThree.jpg";
import consultant4 from "/assets/image/consultantFour.jpg";
import consultant5 from "/assets/image/consultantFive.jpg";
import consultant6 from "/assets/image/consultantSix.jpg";
import consultant7 from "/assets/image/consultantSeven.jpg";
import consultant8 from "/assets/image/consultantEight.jpg";
import mapPinIcon from "/assets/icons/MapPinArea.png"
import pathIcon from "/assets/icons/Path.png"
import chartLineIcon from "/assets/icons/ChartLineUp.png"
import { BadgeCheck, Crown } from "lucide-react";

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
        text: `
            <div class="track-container">
                <p class="heading">FEES Leadership Academy offers two specialized tracks to meet you where you are:</p>
                <div class="tracks">
                <div class="track">
                  <div>
                <img src="/assets/icons/PuzzlePiece.png" class="image"/>
                  </div>
                  <div>
                    <h3>Foundational Track</h3>
                    <p>Designed for early-stage leaders who are building their skills and looking to make their first significant impact.</p>
                </div>
                </div>
                <div class="track">
                <div>
                  <img src="/assets/icons/Crown.png" class="image"/>
                </div>
                <div>
                    <h3>Advanced Track</h3>
                    <p>Tailored for managers, executives, and business owners ready to elevate their leadership skills and drive meaningful change.</p>
                </div>
                </div>
                </div>
            </div>
        `,
        icon: pathIcon, id: 2
    },
    {
        header: "A Unique Approach to Leadership Growth",
        text: `What sets FEES apart is our commitment to personalized leadership journeys. 
          We recognize that each leader’s path is unique, and our academy is structured to support different 
          timelines and goals. Whether you’re early in your career or already established, we work with you to ensure you reach your highest potential. A highlight of our program is the Mentor Mixer—an exclusive experience where participants engage with 
          accomplished mentors, learning directly from leaders who have made significant strides in their fields`,
        icon: chartLineIcon, id: 3
    },
];


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



    export const infos = [
        {
            id: 1,
            icon: <BadgeCheck />,
            name: "Foundational Track",
            shortNote: `The <span className="font-bold">foundational track</span> is ideal for those looking to
                    build a strong base in leadership principles, self-awareness, and foundational skills.
                    If your answers lean toward building core skills, mastering communication basics, and
                    understanding essential strategies, the Foundational Level Curriculum will provide the stepping stones you need.`,
    
            buttonType: "deepBlueBg"
        }, {
            id: 2,
            icon: <Crown />,
            name: "Advanced Track",
            shortNote: `The <span className="font-bold">Advanced Track</span> is suited for those ready to
                    tackle strategic leadership challenges, refine their influence, and make high-impact decisions. If
                    you’re comfortable with the basics and seeking to deepen your expertise in complex areas like emotional intelligence, advanced
                    financial management, and team dynamics, the Advanced Level Curriculum will help you achieve those goals`,
    
            buttonType: "whiteBg"
        }
    
    ]
    

    export const questions = [
      {
          question: "How do you typically approach learning new skills?",
          answers: [
              { id: "A", text: "I prefer to start with the basics and build a strong foundation." },
              { id: "B", text: "I like diving into complex challenges and applying what I already know." },
          ],
      },
      {
          question:
              "When faced with a major change, like a new job or shifting industry trends, how do you feel?",
          answers: [
              { id: "A", text: "I’m interested in understanding the fundamentals of adapting to change." },
              { id: "B", text: "I enjoy exploring strategic ways to thrive and lead through change." },
          ],
      },
      {
          question: "How would you rate your comfort level with managing financial decisions?",
          answers: [
              { id: "A", text: "I’d like to learn essential skills to make better decisions." },
              { id: "B", text: "I’m comfortable with the basics and ready for advanced strategies." },
          ],
      },
      {
          question: "When it comes to presenting ideas, what best describes you?",
          answers: [
              { id: "A", text: "I’m focused on improving my basic communication and storytelling skills." },
              { id: "B", text: "I aim to refine and influence others with advanced presentation techniques." },
          ],
      },
      {
          question: "How do you typically handle team dynamics?",
          answers: [
              { id: "A", text: "I’m learning to navigate group settings and want to improve my empathy and integrity." },
              { id: "B", text: "I’m ready to tackle complex team challenges like conflict resolution and talent development." },
          ],
      },
      {
          question: "What’s your approach to problem-solving in challenging situations?",
          answers: [
              { id: "A", text: "I’m focused on developing creative solutions to familiar problems." },
              { id: "B", text: "I look for innovative ways to solve complex, strategic issues." },
          ],
      },
      {
          question: "How would you describe your career development goals?",
          answers: [
              { id: "A", text: "I want to develop a solid foundation for long-term growth." },
              { id: "B", text: "I’m focused on advancing my career to achieve ambitious leadership goals." },
          ],
      },
  ];


  export const countries = [
    { code: "NG", name: "Nigeria", dialCode: "+234" },
    { code: "GH", name: "Ghana", dialCode: "+233" },
    { code: "KE", name: "Kenya", dialCode: "+254" },
    { code: "US", name: "United States", dialCode: "+1" },
    { code: "GB", name: "United Kingdom", dialCode: "+44" },
    { code: "ZA", name: "South Africa", dialCode: "+27" },
    { code: "IN", name: "India", dialCode: "+91" },
    { code: "CA", name: "Canada", dialCode: "+1" },
    { code: "AU", name: "Australia", dialCode: "+61" },
    { code: "DE", name: "Germany", dialCode: "+49" },
    { code: "FR", name: "France", dialCode: "+33" },
    { code: "IT", name: "Italy", dialCode: "+39" },
    { code: "ES", name: "Spain", dialCode: "+34" },
    { code: "BR", name: "Brazil", dialCode: "+55" },
    { code: "MX", name: "Mexico", dialCode: "+52" },
    { code: "CN", name: "China", dialCode: "+86" },
    { code: "JP", name: "Japan", dialCode: "+81" },
    { code: "SA", name: "Saudi Arabia", dialCode: "+966" },
    { code: "AE", name: "United Arab Emirates", dialCode: "+971" },
  ];