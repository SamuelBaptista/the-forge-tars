"use client";

import { useLayoutEffect, useState } from "react";
import ArionkoderLogo from "./logos/Arionkoder";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
// Remove the Github import as we won't be using it
// import Github from "./logos/GitHub";
// No need for pkg import if you're only using it for the GitHub button
// import pkg from '@/package.json';

export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const el = document.documentElement;

    if (el.classList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    el.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border"
      }
    >
      <div>
        <ArionkoderLogo className={"h-5 w-auto"} />
      </div>
      <div className={"ml-auto flex items-center gap-1"}>
        {/* Remove the GitHub button, keeping only the dark mode toggle */}
        <Button
          onClick={toggleDark}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
            {isDarkMode ? (
              <Sun className={"size-4"} />
            ) : (
              <Moon className={"size-4"} />
            )}
          </span>
          <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
        </Button>
      </div>
    </div>
  );
};