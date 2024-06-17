"use client";
import { SignOutButton, useUser } from "@clerk/nextjs";
import React from "react";

function Dashboard() {
  const { user } = useUser();
  return (
    <div>
      hello, {user?.lastName}
      <SignOutButton>Sign Out</SignOutButton>
    </div>
  );
}

export default Dashboard;
