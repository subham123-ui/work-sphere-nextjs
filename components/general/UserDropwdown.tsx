import { ChevronDown, Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage src="" alt="User Avatar" />
            <AvatarFallback>WWW</AvatarFallback>
          </Avatar>

          <ChevronDown size={16} strokeWidth={2} className="ml-1 opacity-60" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48" align="end">
        <DropdownMenuLabel className="flex flex-col items-start gap-1 p-3">
          <span className="text-sm font-medium text-foreground">Profile</span>
          <span className="text-xs text-muted-foreground">
            suvam.rockstar@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/favorites">
            <Heart size={16} strokeWidth={2} className="opacity-60"/>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
