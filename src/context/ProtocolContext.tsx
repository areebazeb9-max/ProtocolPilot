"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type ProtocolData = {
  studyTitle: string;
  setStudyTitle: (value: string) => void;
};

const ProtocolContext = createContext<ProtocolData | undefined>(undefined);

export function ProtocolProvider({ children }: { children: ReactNode }) {
  const [studyTitle, setStudyTitle] = useState("");

  return (
    <ProtocolContext.Provider value={{ studyTitle, setStudyTitle }}>
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