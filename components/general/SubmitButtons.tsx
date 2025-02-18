"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

interface GeneralSubmitButtonProps {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;

  width?: string;
  icon?: React.ReactNode;
}

export function GeneralSubmitButton({
  text,
  variant,
  width,
  icon,
}: GeneralSubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button variant={variant} className={width} disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          <span>Submitting...</span>
        </>
      ) : (
        <>
          {icon && <div>{icon}</div>}
          <span>{text}</span>
        </>
      )}
    </Button>
  );
}
