'use client'

import { Button } from './ui/button'
import { Home, User } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import { signOut, useSession } from "next-auth/react";
import { Separator } from '@/components/ui/separator'

const NavBar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

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

  return (
    <nav className="flex justify-between items-center p-2 border-b fixed top-0 left-0 right-0 z-50 bg-white">
      <Button variant="ghost" onClick={handleHome} className="flex items-center w-9" title="home">
        <Home />
      </Button>
      <div className="flex items-center gap-2">
        {status === "authenticated" ? <p className="text-sm pr-3">{session.user?.name}</p> : <Button variant="ghost" className="p-3" onClick={handleSignIn}>Sign in with Google</Button>}
        <div className="h-6">
          <Separator orientation="vertical" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center w-9" title="user">
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