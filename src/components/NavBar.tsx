'use client'

import { Button } from './ui/button'
import { Home, User } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'

const NavBar = () => {
  const router = useRouter();
  
  const handleClickHome = () => {
    router.push('/');
  }

  return (
    <nav className="flex justify-between items-center p-2 border-b fixed top-0 left-0 right-0 z-50 bg-white">
        <Button variant="ghost" onClick={handleClickHome} className="flex items-center" title="home">
          <Home />
        </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center" title="user">
            <User />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2">
          <DropdownMenuLabel className="font-medium">Test User</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav> 
  )
}

export default NavBar