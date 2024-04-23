"use client";

import { Button } from "./button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NextRouter } from "next/router";

interface DownloadButtonProps {
  url: string;
}

// https://cdn.sanity.io/files/cvu4lkrj/production/6bdb8ae4d4a0bceb911a541e50d3766005972710.pptx


export default function DownloadButton({ url }: DownloadButtonProps) {

  return (
    <Button
      size={"sm"}
      onClick={(e) => {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
        }
      }}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <Link
        className="text-sm font-medium dark:text-zinc-900"
        href={url}
        download
      >
        Download Note
      </Link>
    </Button>
  );
}
