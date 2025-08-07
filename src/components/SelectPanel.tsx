'use client'

import { defaultAmbiences } from '@/data/default-ambiences'
import AmbiencesPanel from './AmbiencesPanel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { getSavedAmbiences } from "@/actions/getSavedAmbiences";
import { useEffect, useState } from 'react';
import { Ambience } from '@/data/config';

const SelectPanel = () => {
  const [savedAmbiences, setSavedAmbiences] = useState<Ambience[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const ambiences = await getSavedAmbiences();
        setSavedAmbiences(ambiences);
      } catch (error) {
        console.error('Error fetching ambiences:', error);
      }
    })();
  }, []);

  return (
    <div className="justify-content-center flex flex-col items-center p-5 pt-8">
      <h1 className="text-xl font-medium md:mb-7 mb-2">Select an Ambience</h1>
      <div className="flex justify-center gap-5 mb-4 hidden md:flex">
        <AmbiencesPanel listTitle="Default Ambiences" ambiences={defaultAmbiences} defaultAmbiences />
        <AmbiencesPanel listTitle="Your Saved Ambiences" ambiences={savedAmbiences} defaultAmbiences={false} />
      </div>
      <Tabs defaultValue="defaultAmbiences" className="flex self-center md:hidden">
        <TabsList className="flex self-center mb-4 bg-transparent">
          <TabsTrigger value="defaultAmbiences">
            Default Ambiences
          </TabsTrigger>
          <TabsTrigger value="savedAmbiences">
            Your Saved Ambiences
          </TabsTrigger>
        </TabsList>
        <TabsContent value="defaultAmbiences">
          <AmbiencesPanel ambiences={defaultAmbiences} defaultAmbiences />
        </TabsContent>
        <TabsContent value="savedAmbiences">
          <AmbiencesPanel ambiences={savedAmbiences} defaultAmbiences={false} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default SelectPanel