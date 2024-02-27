"use client"
import React, { useContext, useState, createContext} from 'react'
import {links} from "@/app/lib/data"
import { SectionName } from '@/app/lib/types';


type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);
export default function ActiveSectionContextProvider({children,} : {children: React.ReactNode}) {
  const[activeSection, setActiveSection] = useState<SectionName>('Home');
  const[timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
    }}>{children}</ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error();
  }
  return context;
}
