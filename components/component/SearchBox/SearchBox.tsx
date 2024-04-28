"use client";
import styles from "./SearchBox.module.css";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

interface SearchBoxProps {
  className: string;
}

export default function SearchBox({ className }: SearchBoxProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClear = () => {
    setInputValue("");
    setIsFocused(false);
  };

  return (
    <div
      className={`${styles.search_box_wrapper} ${className} flex items-center justify-between dark:bg-slate-400 dark:text-gray-950 px-6 py-4 rounded-xl`}
    >
      <input
        className={`w-full text-sm h-9 bg-transparent focus:outline-none focus:ring-0 ${styles.search_box}`}
        id="search"
        placeholder="Search for files..."
        type="text"
        name="search"
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        autoComplete="off"
      />
      <button
        type="submit"
        onClick={isFocused && inputValue ? handleClear : undefined}
      >
        {isFocused && inputValue ? <CloseIcon /> : <SearchIcon />}
      </button>
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#fff"
      viewBox="0 0 256 256"
    >
      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
    </svg>
  );
}

function CloseIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="#fff"
      viewBox="0 0 256 256"
    >
      <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
    </svg>
  );
}
