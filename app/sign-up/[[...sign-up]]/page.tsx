import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpPage() {
  const defaultColor = "#5A639C";
  const gradiantColor = `linear-gradient(to bottom, ${defaultColor}, #7776B3)`;
  return (
    <div
      style={{
        background: gradiantColor,
      }}
      className="flex justify-center items-center flex-col gap-10 w-full h-screen"
    >
      <SignUp />
    </div>
  );
}

export default SignUpPage;
