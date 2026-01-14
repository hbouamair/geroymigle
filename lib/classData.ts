export interface ClassDetail {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  badge: string;
  gradient: string;
  image?: string;
  price: string;
  steps: string[];
  instructors: string[];
  duration?: string;
  lessonsCount?: number;
}

export const classDetails: ClassDetail[] = [
  {
    slug: "partnerwork-routines",
    title: "Partnerwork Routines",
    description: "Learn synchronized partner movements and routines",
    fullDescription: "Here you can find all the partner work routines made 100% for social dancing and of course matching with each LVL. Master the art of leading and following with structured routines designed for real dance floor situations.",
    badge: "2 Plans Available",
    gradient: "from-blue-500 to-cyan-500",
    image: "/partnerwork.avif",
    price: "From €29.99/month",
    duration: "8-12 hours",
    lessonsCount: 45,
    steps: [
      "101 Steps - Beginner Level",
      "Intermediate Partnerwork Patterns",
      "Advanced Social Dancing Routines",
      "Connection & Lead/Follow Techniques",
      "Musicality in Partnerwork"
    ],
    instructors: ["Gero Ruiz", "Miglė Kreipaviciute"]
  },
  {
    slug: "master-class",
    title: "Master Class",
    description: "Advanced techniques and professional insights",
    fullDescription: "Take your dancing to the highest level with our master classes. Learn advanced techniques, professional insights, and refine your skills with intensive training sessions designed for serious dancers.",
    badge: "FULL PASS",
    gradient: "from-yellow-500 to-orange-500",
    image: "/masterclass.jpg",
    price: "Full Pass Available",
    duration: "6-8 hours",
    lessonsCount: 12,
    steps: [
      "Advanced Technique Breakdown",
      "Professional Performance Tips",
      "Stage Presence & Expression",
      "Musical Interpretation",
      "Competition Preparation"
    ],
    instructors: ["Gero Ruiz", "Miglė Kreipaviciute"]
  },
  {
    slug: "choreos",
    title: "Choreos",
    description: "Complete choreography routines to master",
    fullDescription: "Learn complete choreography routines that you can perform on stage or use to enhance your social dancing. Each choreography is broken down step by step with detailed explanations.",
    badge: "FULL PASS",
    gradient: "from-purple-500 to-pink-500",
    image: "/choreo.avif",
    price: "Full Pass Available",
    duration: "10-15 hours",
    lessonsCount: 30,
    steps: [
      "Complete Choreography Breakdown",
      "Step-by-Step Tutorials",
      "Timing & Musicality",
      "Performance Techniques",
      "Stage Choreography"
    ],
    instructors: ["Gero Ruiz", "Miglė Kreipaviciute"]
  },
  {
    slug: "men-style",
    title: "Men Style | by Gero",
    description: "Master the masculine bachata styling techniques",
    fullDescription: "Learn the masculine bachata styling techniques with Gero. Develop your own style, improve your body movement, and master the art of leading with confidence and elegance.",
    badge: "2 Plans Available",
    gradient: "from-indigo-500 to-blue-500",
    image: "/men-style.avif",
    price: "From €29.99/month",
    duration: "6-10 hours",
    lessonsCount: 25,
    steps: [
      "Masculine Body Movement",
      "Leading Techniques",
      "Footwork & Styling",
      "Confidence Building",
      "Personal Style Development"
    ],
    instructors: ["Gero Ruiz"]
  },
  {
    slug: "lady-style",
    title: "Lady Style | by Miglė",
    description: "Elegant feminine styling and body movement",
    fullDescription: "Discover elegant feminine styling and body movement with Miglė. Learn how to express yourself through dance, develop graceful movements, and master the art of following with style and confidence.",
    badge: "2 Plans Available",
    gradient: "from-pink-500 to-rose-500",
    image: "/lady-style.avif",
    price: "From €29.99/month",
    duration: "6-10 hours",
    lessonsCount: 25,
    steps: [
      "Feminine Body Movement",
      "Following Techniques",
      "Hair & Arm Styling",
      "Expression & Emotion",
      "Elegant Movement Patterns"
    ],
    instructors: ["Miglė Kreipaviciute"]
  },
  {
    slug: "programs",
    title: "Programs",
    description: "Structured learning paths from beginner to advanced",
    fullDescription: "Follow structured learning paths designed to take you from beginner to advanced level. Our comprehensive programs cover all aspects of bachata dancing with progressive difficulty levels.",
    badge: "FULL PASS",
    gradient: "from-green-500 to-emerald-500",
    image: "/program.avif",
    price: "Full Pass Available",
    duration: "20-30 hours",
    lessonsCount: 80,
    steps: [
      "Beginner Foundation",
      "Intermediate Development",
      "Advanced Mastery",
      "Progressive Skill Building",
      "Complete Curriculum"
    ],
    instructors: ["Gero Ruiz", "Miglė Kreipaviciute"]
  }
];

export function getClassBySlug(slug: string): ClassDetail | undefined {
  return classDetails.find((classItem) => classItem.slug === slug);
}

