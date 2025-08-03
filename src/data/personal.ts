/**
 * Personal Information Data
 * Centralized storage for all personal details, contact information, and social links
 */

export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  titles: string[];
  tagline: string;
  description: string;
  location: {
    city: string;
    country: string;
    full: string;
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  about: {
    summary: string;
    achievements: string[];
    funFacts: Array<{
      icon: string;
      text: string;
    }>;
  };
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
    twitter?: string;
    instagram?: string;
  };
  resumeUrl?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Fras Khan",
  fullName: "Al-Fraskhan A. Jose",
  title: "Full Stack Developer",
  titles: [
    "Full Stack Developer",
    "Aspiring Software Engineer", 
    "IT Student",
    "React Specialist",
    "Node.js Developer",
    "TypeScript Expert"
  ],
  tagline: "Building exceptional digital experiences with modern technologies",
  description: "A passionate IT student focused on building exceptional digital experiences with modern web technologies.",
  
  location: {
    city: "Zamboanga City",
    country: "Philippines",
    full: "Kasanyangan, Zamboanga City, Philippines"
  },
  
  contact: {
    email: "alfraskhanj@gmail.com",
    phone: "09650348702",
    linkedin: "alfraskhan-jose-22b6b6358",
    github: "alfraskhanj"
  },
  
  about: {
    summary: "As a committed IT student, I can't wait to use my abilities and expertise in a stimulating workplace. I have a strong desire to learn, am flexible enough to take on new challenges, and promise to keep going until my objectives are met. I look for chances to develop and make a significant contribution to the team's success.",
    achievements: [
      "Dean's List for 3 consecutive semesters",
      "Led multiple capstone projects in web development",
      "Organized university tech events and workshops",
      "Champion – Chess Competition, Palaro SY 2023–2024",
      "Executive Director of Zamboanga Youth Movement Association (SPORTS)"
    ],
    funFacts: [
      {
        icon: "🏆",
        text: "Champion – Chess Competition, Palaro SY 2023–2024"
      },
      {
        icon: "👥",
        text: "Executive Director of Zamboanga Youth Movement Association (SPORTS)"
      }
    ]
  },
  
  socialLinks: {
    github: "https://github.com/alfraskhanj",
    linkedin: "https://linkedin.com/in/alfraskhan-jose-22b6b6358",
    email: "mailto:alfraskhanj@gmail.com"
  },
  
  resumeUrl: "/documents/resume.pdf"
};

export default personalInfo;