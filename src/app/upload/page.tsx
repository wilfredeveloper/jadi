"use client";
import { UploadForm } from "@/components/component/UploadForm/upload-form";
import { useEffect, useState } from "react";
import styles from "./page.module.css"


export default function Home() {

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${styles.main}`}>
      <UploadForm/>
    </main>
  );
}