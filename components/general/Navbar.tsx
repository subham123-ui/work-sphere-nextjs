import { auth } from "@/app/utils/auth";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { UserDropdown } from "./UserDropwdown";

export async function Navbar() {
  const session = await auth();

  return (
    <nav className="flex items-center justify-between py-5 ">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">
          Work<span className="text-primary">Sphere</span>
        </h1>
      </Link>

      {/* Desktop Navigation */}

      <div className="hidden md:flex items-center gap-5">
        <ThemeToggle />
        <Link className={buttonVariants({ size: "lg" })} href="/post-job">
          Post Job
        </Link>
        {session?.user ? (
          <UserDropdown
            email={session.user.email as string}
            name={session.user.name as string}
            image={session.user.image as string}
          />
        ) : (
          <Link
            className={buttonVariants({ variant: "outline", size: "lg" })}
            href="/login"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
