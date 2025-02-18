"use client";

import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { useState } from "react";
import  UserTypeSelection  from "./UserTypeForm";

type UserSelectionType = "company" | "jobSeeker" | null;

export function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserSelectionType>(null);

  function handleUserTypeSelection(type: UserSelectionType) {
    setUserType(type);
    setStep(2);
  }

  function renderStep() {
    switch (step) {
      case 1:
        return <UserTypeSelection/>;

      case 2:
        return userType === "company" ? (
          <p>Company onboarding form</p>
        ) : (
          <p>Jobseeker onboarding form</p>
        );

      default:
        return null;
    }
  }

  return (
    <>
      <div className="flex items-center gap-4 mb-10">
        <Image src={Logo} alt="logo" width={50} height={50} />
        <h1 className="text-4xl font-bold">
          Work<span className="text-primary">Sphere</span>
        </h1>
      </div>
      <Card className="max-w-lg w-full">
        <CardContent className="p-6">{renderStep()}</CardContent>
      </Card>
    </>
  );
}
