"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type ProtocolData = {
  studyTitle: string;
  setStudyTitle: (value: string) => void;
  hasIntervention: boolean | null;
  setHasIntervention: (value: boolean | null) => void;
  populationDescription: string;
  setPopulationDescription: (value: string) => void;
  ageMin: string;
  setAgeMin: (value: string) => void;
  ageMax: string;
  setAgeMax: (value: string) => void;
};

const ProtocolContext = createContext<ProtocolData | undefined>(undefined);

export function ProtocolProvider({ children }: { children: ReactNode }) {
  const [studyTitle, setStudyTitle] = useState("");
  const [hasIntervention, setHasIntervention] = useState<boolean | null>(false);
  const [populationDescription, setPopulationDescription] = useState("");
  const [ageMin, setAgeMin] = useState("");
  const [ageMax, setAgeMax] = useState("");

  return (
    <ProtocolContext.Provider
      value={{
        studyTitle,
        setStudyTitle,
        hasIntervention,
        setHasIntervention,
        populationDescription,
        setPopulationDescription,
        ageMin,
        setAgeMin,
        ageMax,
        setAgeMax,
      }}
    >
      {children}
    </ProtocolContext.Provider>
  );
}

export function useProtocol() {
  const context = useContext(ProtocolContext);
  if (context === undefined) {
    throw new Error("useProtocol must be used within a ProtocolProvider");
  }
  return context;
}