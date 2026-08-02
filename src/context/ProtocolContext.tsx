"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

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
  variableType: string;
  setVariableType: (value: string) => void;
  measurementScale: string;
  setMeasurementScale: (value: string) => void;
  groupStructure: string;
  setGroupStructure: (value: string) => void;
  distribution: string;
  setDistribution: (value: string) => void;
  saveProgress: () => Promise<void>;
  isSaving: boolean;
  lastSavedAt: Date | null;
};

const ProtocolContext = createContext<ProtocolData | undefined>(undefined);

export function ProtocolProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [studyTitle, setStudyTitle] = useState("");
  const [hasIntervention, setHasIntervention] = useState<boolean | null>(null);
  const [populationDescription, setPopulationDescription] = useState("");
  const [ageMin, setAgeMin] = useState("");
  const [ageMax, setAgeMax] = useState("");
  const [variableType, setVariableType] = useState("");
  const [measurementScale, setMeasurementScale] = useState("");
  const [groupStructure, setGroupStructure] = useState("");
  const [distribution, setDistribution] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);

  useEffect(() => {
    if (!user) return;

    const loadData = async () => {
      const docRef = doc(db, "protocols", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setStudyTitle(data.studyTitle ?? "");
        setHasIntervention(data.hasIntervention ?? null);
        setPopulationDescription(data.populationDescription ?? "");
        setAgeMin(data.ageMin ?? "");
        setAgeMax(data.ageMax ?? "");
        setVariableType(data.variableType ?? "");
        setMeasurementScale(data.measurementScale ?? "");
        setGroupStructure(data.groupStructure ?? "");
        setDistribution(data.distribution ?? "");
      }
    };

    loadData();
  }, [user]);

  const saveProgress = async () => {
    if (!user) return;
    setIsSaving(true);
    try {
      const docRef = doc(db, "protocols", user.uid);
      await setDoc(docRef, {
        studyTitle,
        hasIntervention,
        populationDescription,
        ageMin,
        ageMax,
        variableType,
        measurementScale,
        groupStructure,
        distribution,
      });
      setLastSavedAt(new Date());
    } finally {
      setIsSaving(false);
    }
  };

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
        variableType,
        setVariableType,
        measurementScale,
        setMeasurementScale,
        groupStructure,
        setGroupStructure,
        distribution,
        setDistribution,
        saveProgress,
        isSaving,
        lastSavedAt,
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