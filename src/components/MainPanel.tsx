'use client'

import SoundRow from './SoundRow';
import SoundLibrary from './SoundLibrary';
import SaveButton from './SaveButton';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Label } from './ui/label';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Volume1, Volume2, VolumeX } from 'lucide-react';
import { useNavigationGuard } from 'next-navigation-guard';
import { useRouter } from 'next/navigation';
import { useAmbienceStore } from '@/stores/ambienceStore';
import { useSelectedStore } from '@/stores/selectedAmbiences';
import { useInputStore } from '@/stores/selectPanelSearchInput';
import { useEffect, useState } from 'react';
import { equalAmbiences } from '@/actions/equalAmbiences';

const MainPanel = () => {
  const { config, originalConfig, globalVolume, updateGlobalVolume } = useAmbienceStore();
  const [showVolumePercentage, setShowVolumePercentage] = useState(false);
  const setSelected = useSelectedStore(state => state.setSelected);
  const updateInput = useInputStore(state => state.updateInput);
  const navGuard = useNavigationGuard({
    enabled: !equalAmbiences(config, originalConfig) && config.length > 0,
    confirm: () => window.confirm("You have unsaved changes. Are you sure you wish to leave this page?")
  });

  useEffect(() => {
    setSelected([]);
    updateInput("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const router = useRouter();

  const handleLoad = () => {
    router.push('/select');
  }

  return (
    <div>
      <div className="flex p-3 pl-8 pr-8 justify-center">
        <div className="flex w-full max-w-4xl justify-between">
          <h2 className="flex text-lg sm:text-xl font-medium items-center translate-y-0.5">Ambience Designer</h2>
          <div className="flex gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  {globalVolume === 0 ? <VolumeX /> : globalVolume < 0.5 ? <Volume1 /> : <Volume2 />}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="leading-none font-medium">Ambience Volume</h4>
                    <p className="text-muted-foreground text-sm">
                      Adjust the volume of the ambience.
                    </p>
                  </div>
                  <div className="grid grid-cols-4 items-center">
                    <Label htmlFor="globalVolume">{showVolumePercentage ? `${(globalVolume * 100).toFixed(0)}%` : "Volume"}</Label>
                    <Slider
                      id="globalVolume"
                      value={[globalVolume]}
                      onValueChange={(value) => updateGlobalVolume(value[0])}
                      onMouseEnter={() => setShowVolumePercentage(true)}
                      onMouseLeave={() => setShowVolumePercentage(false)}
                      max={1}
                      step={0.01}
                      className="col-span-3">
                    </Slider>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Button onClick={handleLoad} variant="outline" className="flex justify-self-center text-sm">Load Ambience...</Button>
          </div>
        </div>
      </div>
      <SoundRow />
      <SoundLibrary />
      <div className="pt-3 pl-8 pr-8 pb-8 flex justify-center">
        <div className="flex w-full max-w-4xl justify-end">
          <SaveButton />
        </div>
      </div>
    </div>
  )
}

export default MainPanel