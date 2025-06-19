declare module 'react-icons/fa' {
  import { IconType } from 'react-icons';
  
  // Export all FA icons
  export const FaGithub: IconType;
  export const FaLinkedin: IconType;
  export const FaEnvelope: IconType;
  export const FaMapMarkerAlt: IconType;
  export const FaPhone: IconType;
  export const FaTrophy: IconType;
  export const FaScroll: IconType;
  export const FaAward: IconType;
  export const FaMedal: IconType;
  export const FaGraduationCap: IconType;
  export const FaBriefcase: IconType;
  export const FaCode: IconType;
  export const FaCertificate: IconType;
  export const FaHeart: IconType;
  export const FaTimes: IconType;
  export const FaBars: IconType;
  export const FaGlobe: IconType;
  export const FaJava: IconType;
  export const FaPython: IconType;
  export const FaHtml5: IconType;
  export const FaCss3Alt: IconType;
  export const FaPhp: IconType;
  export const FaReact: IconType;
  export const FaDatabase: IconType;
  export const FaTools: IconType;
}

declare module 'react-icons/si' {
  import { IconType } from 'react-icons';
  
  export const SiTypescript: IconType;
  export const SiDjango: IconType;
  export const SiFlask: IconType;
  export const SiStreamlit: IconType;
  export const SiMysql: IconType;
  export const SiPostgresql: IconType;
  export const SiSupabase: IconType;
}

declare module 'react-icons' {
  import { ComponentType, SVGAttributes } from 'react';

  export interface IconBaseProps extends SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }

  export type IconType = ComponentType<IconBaseProps>;
} 