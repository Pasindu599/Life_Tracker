"use client";
import React from "react";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import LogoAndName from "../components/LogoAndName";

function Navbar() {
  const { userId } = useAuth();
  const defaultColor = "#5A639C";
  const backgroundColourObject = {
    backgroundColor: defaultColor,
  };
  return (
    <header>
      <div className="p-8 px-20">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left mb-7 sm:mb-0">
            {/* icon + name */}
            <LogoAndName />
          </div>
          {/* buttons */}
          <div>
            {userId ? (
              <Link href="/dashboard">
                <button className="block rounded-lg px-9 py-3 text-sm font-medium text-white bg-mainColor transition focus:outline-none hover:bg-thirdColor hover:text-white border-mainColor">
                  Dashboard
                </button>
              </Link>
            ) : (
              <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                <Link href="/sign-in">
                  <button
                    //   style={{ backgroundColor: "#5A639C" }}
                    className={`block sm:w-32 w-full border rounded-lg px-9 py-3 text-sm font-medium text-mainColor transition focus:outline-none hover:bg-mainColor hover:text-white border-mainColor`}
                    type="button"
                  >
                    Sign In
                  </button>
                </Link>
                <Link href="/sign-up">
                  <button
                    //   style={{ backgroundColor: "#5A639C" }}
                    className={`block sm:w-32 w-full border rounded-lg px-9 py-3 text-sm font-medium text-mainColor transition focus:outline-none hover:bg-mainColor hover:text-white border-mainColor`}
                    type="button"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
