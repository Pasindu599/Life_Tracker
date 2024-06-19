import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
function UserProfile() {
  const userButtonApperence = {
    elements: {
      userButtonAvatarBox: "w-14 h-14",
      userButtonPopoverActionButton: "text-mainColor",
    },
  };

  const { user } = useUser();
  return (
    <div className="flex flex-col gap-3 items-center justify-center  mt-9">
      <UserButton appearance={userButtonApperence} />
      <div>
        <span>{user?.fullName}</span>
      </div>
    </div>
  );
}

export default UserProfile;
