'use client'

import { Search } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import LibraryPanel from './LibraryPanel'
import ScrollAreaWithArrows from './ScrollAreaWithArrows'
import { background_noises, colored_noises, environments, nature_sounds, sound_metadata, tonal_sounds } from '@/data/sound-metadata'

const SoundLibrary = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Tabs defaultValue="search" className="flex w-full">
          <ScrollAreaWithArrows tabslayout="true" showscrollbar="false" orientation="horizontal" className="w-full self-center mb-2">
            <TabsList className="bg-transparent">
              <TabsTrigger value="search" title="search-tab">
                <Search />
              </TabsTrigger>
              <TabsTrigger value="nature_sounds">Nature Sounds</TabsTrigger>
              <TabsTrigger value="background_noises">Background Noises</TabsTrigger>
              <TabsTrigger value="environments">Environments</TabsTrigger>
              <TabsTrigger value="colored_noises">Colored Noises</TabsTrigger>
              <TabsTrigger value="tonal_sounds">Tonal Sounds</TabsTrigger>
            </TabsList>
          </ScrollAreaWithArrows>
          <TabsContent value="search">
            <LibraryPanel sounds={sound_metadata} search />
          </TabsContent>
          <TabsContent value="nature_sounds">
            <LibraryPanel sounds={nature_sounds} />
          </TabsContent>
          <TabsContent value="background_noises">
            <LibraryPanel sounds={background_noises} />
          </TabsContent>
          <TabsContent value="environments">
            <LibraryPanel sounds={environments} />
          </TabsContent>
          <TabsContent value="colored_noises">
            <LibraryPanel sounds={colored_noises} />
          </TabsContent>
          <TabsContent value="tonal_sounds">
            <LibraryPanel sounds={tonal_sounds} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default SoundLibrary