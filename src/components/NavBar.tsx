'use client'

import { Button } from './ui/button'
import { Home, Image, User } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import { useBackgroundContext } from '@/stores/backgroundStore'
import { signOut, useSession } from "next-auth/react";
import { Separator } from '@/components/ui/separator'
import forest from "../../public/images/forest.png"
import space from "../../public/images/spacebackground.png"
import beach from "../../public/images/beach.png"

const NavBar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const setBackgroundSrc = useBackgroundContext(state => state.setBackgroundSrc);

  const handleHome = () => {
    router.push('/');
  }

  const handleSignIn = async () => {
    const popupWidth = 500;
    const popupHeight = 600;

    const popup = window.open("/login?popup=true", "Sign in with Google", `width=${popupWidth}, height=${popupHeight}`);
    popup?.focus();
  }

  const handleLogout = () => {
    signOut({ redirect: window.location.pathname !== "/ambience" });
  }

  const handleBackgroundChange = (background: string) => {
    switch(background) {
      case "forest": setBackgroundSrc(forest); break;
      case "space": setBackgroundSrc(space); break;
      case "beach": setBackgroundSrc(beach); break;
      default:;
    }
  }

  return (
    <nav className="flex justify-between items-center p-2 fixed top-0 left-0 right-0 z-50 bg-slate-900/50 border-b border-white/30">
      <Button variant="ghost" onClick={handleHome} className="flex items-center w-9 text-white rounded-sm border-transparent hover:border hover:text-white hover:border-white hover:bg-transparent" title="home">
        <Home />
      </Button>
      <div className="flex items-center gap-2">
        {status === "authenticated" ? <p className="text-sm pr-3 text-white">{session.user?.name}</p> : <Button variant="ghost" className="p-3 border border-white/70 rounded-sm text-white border-transparent hover:border hover:text-white hover:border-white hover:bg-transparent" onClick={handleSignIn}>Sign in with Google</Button>}
        <div className="h-7">
          <Separator orientation="vertical" className="bg-white/30" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center w-9 rounded-sm text-white border-transparent hover:border hover:text-white hover:border-white hover:bg-transparent" title="background">
              <Image />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2">
            <DropdownMenuItem onClick={() => handleBackgroundChange("forest")}>Forest</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleBackgroundChange("space")}>Space</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleBackgroundChange("beach")}>Beach</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="h-7">
          <Separator orientation="vertical" className="bg-white/30" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center w-9 rounded-sm text-white border-transparent hover:border hover:text-white hover:border-white hover:bg-transparent" title="user">
              <User />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2">
            {status === "authenticated" ?
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem> :
              <DropdownMenuLabel className="font-medium">Guest</DropdownMenuLabel>
            }
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default NavBar