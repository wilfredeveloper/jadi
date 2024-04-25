"use client";

import { Button } from "./button";
import Link from "next/link";
import styles from "./actionButtonStyles.module.css";

interface DownloadButtonProps {
  url: string;
}

// https://cdn.sanity.io/files/cvu4lkrj/production/6bdb8ae4d4a0bceb911a541e50d3766005972710.pptx

export default function DownloadButton({ url }: DownloadButtonProps) {
  return (
    <Button
      size={"sm"}
      variant={"outline"}
      className={`${styles.btn}`}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <Link className="text-sm font-medium dark:text-zinc-500 flex" href={url}>
        <DownloadIcon /> Download
      </Link>
    </Button>
  );
}

function DownloadIcon(props: any) {
  return (
    <svg
      className={`me-2`}
      width="22"
      height="17"
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 8.06306C22.0046 9.80936 21.438 11.5093 20.3867 12.9037C20.3288 12.9807 20.2563 13.0456 20.1734 13.0946C20.0904 13.1436 19.9986 13.1758 19.9032 13.1893C19.8078 13.2029 19.7106 13.1975 19.6173 13.1735C19.5239 13.1495 19.4363 13.1073 19.3592 13.0494C19.2822 12.9915 19.2173 12.919 19.1683 12.836C19.1193 12.7531 19.0871 12.6612 19.0735 12.5658C19.06 12.4704 19.0654 12.3733 19.0894 12.2799C19.1134 12.1866 19.1556 12.0989 19.2135 12.0219C20.074 10.8819 20.5376 9.49141 20.5334 8.06306C20.5334 6.31274 19.8381 4.63411 18.6004 3.39644C17.3628 2.15878 15.6841 1.46347 13.9338 1.46347C12.1835 1.46347 10.5049 2.15878 9.2672 3.39644C8.02953 4.63411 7.33422 6.31274 7.33422 8.06306C7.33422 8.25754 7.25697 8.44405 7.11945 8.58157C6.98193 8.71909 6.79542 8.79634 6.60094 8.79634C6.40646 8.79634 6.21994 8.71909 6.08242 8.58157C5.9449 8.44405 5.86765 8.25754 5.86765 8.06306C5.86729 7.32306 5.96876 6.58653 6.16921 5.87419C6.0693 5.86319 5.96847 5.86319 5.86765 5.86319C4.70077 5.86319 3.58168 6.32673 2.75657 7.15184C1.93146 7.97695 1.46792 9.09604 1.46792 10.2629C1.46792 11.4298 1.93146 12.5489 2.75657 13.374C3.58168 14.1991 4.70077 14.6626 5.86765 14.6626H8.06751C8.26199 14.6626 8.4485 14.7399 8.58602 14.8774C8.72354 15.0149 8.8008 15.2015 8.8008 15.3959C8.8008 15.5904 8.72354 15.7769 8.58602 15.9144C8.4485 16.052 8.26199 16.1292 8.06751 16.1292H5.86765C5.06119 16.1294 4.26336 15.9633 3.52398 15.6413C2.7846 15.3193 2.11955 14.8483 1.57038 14.2577C1.0212 13.6672 0.599688 12.9697 0.332168 12.2089C0.0646486 11.4481 -0.0431331 10.6403 0.0155545 9.83601C0.0742421 9.0317 0.298138 8.24812 0.67326 7.53422C1.04838 6.82032 1.56667 6.19143 2.19576 5.68683C2.82484 5.18223 3.55122 4.81276 4.32951 4.60149C5.1078 4.39023 5.92129 4.3417 6.71918 4.45895C7.53166 2.83394 8.86894 1.53082 10.5144 0.760641C12.1599 -0.00953336 14.0172 -0.201647 15.7855 0.215418C17.5538 0.632482 19.1295 1.6343 20.2574 3.0586C21.3852 4.48289 21.9993 6.24625 22 8.06306ZM15.6149 11.944L13.9338 13.626V8.06306C13.9338 7.86858 13.8566 7.68206 13.719 7.54454C13.5815 7.40703 13.395 7.32977 13.2005 7.32977C13.006 7.32977 12.8195 7.40703 12.682 7.54454C12.5445 7.68206 12.4672 7.86858 12.4672 8.06306V13.626L10.7862 11.944C10.6486 11.8064 10.462 11.7291 10.2674 11.7291C10.0728 11.7291 9.88617 11.8064 9.74857 11.944C9.61098 12.0816 9.53368 12.2682 9.53368 12.4628C9.53368 12.6574 9.61098 12.844 9.74857 12.9816L12.6817 15.9147C12.7498 15.9829 12.8307 16.037 12.9197 16.0739C13.0087 16.1108 13.1042 16.1298 13.2005 16.1298C13.2969 16.1298 13.3923 16.1108 13.4813 16.0739C13.5703 16.037 13.6512 15.9829 13.7193 15.9147L16.6525 12.9816C16.7901 12.844 16.8674 12.6574 16.8674 12.4628C16.8674 12.2682 16.7901 12.0816 16.6525 11.944C16.5149 11.8064 16.3283 11.7291 16.1337 11.7291C15.9391 11.7291 15.7525 11.8064 15.6149 11.944Z"
        fill="#4AFF9D"
      />
    </svg>
  );
}
