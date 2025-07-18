import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  // Navigation
  activeSection: string;
  setActiveSection: (section: string) => void;
  
  // Hero data
  heroData: {
    name: string;
    titles: string[];
    description: string;
    socialLinks: {
      github?: string;
      linkedin?: string;
      email?: string;
    };
    resumeUrl?: string;
  };
  
  // Actions
  scrollToSection: (sectionId: string) => void;
  
  // Theme
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// Default context values
const defaultContextValue: AppContextType = {
  activeSection: 'home',
  setActiveSection: () => {},
  
  heroData: {
    name: "Al-Fraskhan A. Jose",
    titles: ["Full Stack Developer", "Aspiring Software Engineer", "IT Student"],
    description: "A passionate IT student focused on building exceptional digital experiences with modern web technologies.",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com/in/alfraskhan-jose-22b6b6358",
      email: "mailto:alfraskhanj@gmail.com"
    },
    resumeUrl: "/resume.pdf"
  },
  
  scrollToSection: () => {},
  
  isDarkMode: true,
  toggleDarkMode: () => {}
};

// Create context
export const AppContext = createContext<AppContextType>(defaultContextValue);

// Custom hook for using the context
export const useAppContext = () => useContext(AppContext);

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
  
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
    // Add logic to change theme if needed
  };
  
  // Value object to be passed to provider
  const value: AppContextType = {
    activeSection,
    setActiveSection,
    
    heroData: defaultContextValue.heroData,
    
    scrollToSection,
    
    isDarkMode,
    toggleDarkMode
  };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider; 