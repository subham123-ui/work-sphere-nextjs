import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { Button } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5 ">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">
          Work<span className="text-primary">Sphere</span>
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button>Log In</Button>
      </div>
    </nav>
  );
}
