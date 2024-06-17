import { SignOutButton } from "@clerk/nextjs";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function LogOutSection() {
  const logOutObject = { name: "Log Out", icon: faRightFromBracket };
  return (
    <div className="flex gap-2 items-center ml-8 p-2 mt-28 hover:text-mainColor transition-all">
      <FontAwesomeIcon icon={logOutObject.icon} width={20} height={20} />
      <div>
        <SignOutButton />
      </div>
    </div>
  );
}

export default LogOutSection;
