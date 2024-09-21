'use client';
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { ContentCreator } from '../_entities/ContentCreator';


interface ContentCreatorsContextType {
  contentCreators: ContentCreator[];
  isLoading: boolean;
  error: string | null;
  apiUrl: string;
}

const ContentCreatorsContext = createContext<ContentCreatorsContextType | undefined>(undefined);

interface ContentCreatorsProviderProps {
  children: ReactNode;
}

export const ContentCreatorsProvider: React.FC<ContentCreatorsProviderProps> = ({ children }) => {
  const [contentCreators, setContentCreators] = useState<ContentCreator[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = 'https://api.creadoresapi.com/v1/content-creator'

  useEffect(() => {
    const fetchContentCreators = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Error fetching content creators');
        }
        const data = await response.json();
        setContentCreators(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContentCreators();
  }, []);

  return (
    <ContentCreatorsContext.Provider value={{ contentCreators, isLoading, error, apiUrl }}>
      {children}
    </ContentCreatorsContext.Provider>
  );
};

export const useContentCreators = () => {
  const context = React.useContext(ContentCreatorsContext);
  if (context === undefined) {
    throw new Error('useContentCreators must be used inside a ContentCreatorsProvider');
  }
  return context;
};
