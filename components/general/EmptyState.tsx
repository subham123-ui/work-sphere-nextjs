import { Ban, PlusCircle } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";


interface iAppProps {
    title: string;
    description: string;
    buttonText: string;
    href: string;
};

export function EmptyState({title, description, buttonText, href}: iAppProps) {
  return (
    <div className="flex flex-col flex-1 h-full items-center justify-center p-8 rounded-md border border-dashed border-primary">
      <div className="size-20 items-center flex justify-center rounded-full bg-primary/10 ">
          <Ban className="size-10 text-primary" />
      </div>
      <h2 className="mt-6 text-xl font-semibold">{title}</h2>
      <p className="mb-8 mt-2 text-sm text-center leading-tight text-muted-foreground max-w-sm text-balance">{description}</p>
      <Link href={href} className={buttonVariants()}>
      <PlusCircle/> {buttonText}
      </Link>
      
    </div>
  );
}
