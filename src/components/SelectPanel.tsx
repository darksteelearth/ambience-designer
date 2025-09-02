'use client'

import { defaultAmbiences } from '@/data/default-ambiences'
import AmbiencesPanel from './AmbiencesPanel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { useSavedAmbiencesStore } from '@/stores/savedAmbiencesStore';

const SelectPanel = () => {
  const { savedAmbiences } = useSavedAmbiencesStore();

  return (
    <div className="justify-content-center flex flex-col items-center p-5 pt-10">
      <h1 className="text-xl font-medium md:mb-7 mb-4 text-white text-shadow-black/50 text-shadow-md">Select an Ambience</h1>
      <div className="flex justify-center gap-5 mb-4 hidden md:flex">
        <AmbiencesPanel listTitle="Default Ambiences" ambiences={defaultAmbiences} defaultAmbiences />
        <AmbiencesPanel listTitle="Saved Ambiences" ambiences={savedAmbiences} defaultAmbiences={false} />
      </div>
      <Tabs defaultValue="defaultAmbiences" className="flex self-center md:hidden">
        <TabsList className="flex self-center mb-4 bg-transparent border border-white/30 h-10 bg-slate-900/50 rounded-sm w-full">
          <TabsTrigger value="defaultAmbiences">
            Default Ambiences
          </TabsTrigger>
          <TabsTrigger value="savedAmbiences">
            Saved Ambiences
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