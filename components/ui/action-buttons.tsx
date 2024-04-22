"use client";

import { likeFile } from "@/src/app/utils/noteUtils";
import { useState } from "react";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./actionButtonStyles.module.css";

interface LikeButtonProps {
  hasLiked: boolean;
  likeCount: number;
  userId: string;
  fileId: string; // Function that will be called when the button is clicked
}

function LikeButton({
  userId,
  fileId,
  hasLiked: initialHasLiked,
  likeCount: initialLikeCount,
}: LikeButtonProps) {
  const [hasLiked, setHasLiked] = useState(initialHasLiked);
  const [likeCount, setLikeCount] = useState(initialLikeCount);

  const handleLikeClick = async () => {
    setHasLiked(!hasLiked);
    setLikeCount(hasLiked ? likeCount - 1 : likeCount + 1);
    try {
      console.log("user ID: ", userId, "\n", "file ID: ", fileId);
      await likeFile({ userId, fileId }, setHasLiked);
    } catch (error) {
      console.error("Error liking file:", error);
    }
  };

  return (
    <motion.div
      className={`flex items-center ${styles.wrapper}`}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.25 }}
    >
      <div>
        <Button
          className={`${styles.btn}`}
          size={"icon"}
          variant={"outline"}
          onClick={handleLikeClick}
        >
          {hasLiked ? <HeartIconFilled /> : <HeartIcon />}
        </Button>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={likeCount}
          className={`text-slate-400 text-sm ${styles.like_count}`}
          initial={{ y: 20,  opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {likeCount == 0 ? '': likeCount}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

// Icons start here
function HeartIconFilled(props: any) {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M12 1.94075C18.6572 -4.79695 35.3016 6.99328 12 22.1538C-11.3016 6.99476 5.34282 -4.79695 12 1.94075Z"
        fill="#FF254C"
      />
    </svg>
  );
}
function HeartIcon(props: any) {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6443 2.29217L12 2.65214L12.3557 2.29217C15.4198 -0.809038 20.8494 0.332985 22.791 4.06615C23.7441 5.89882 23.8731 8.41022 22.322 11.4233C20.7887 14.4018 17.6148 17.8596 12 21.5563C6.3852 17.86 3.21133 14.4024 1.67801 11.424C0.126861 8.41092 0.255892 5.89947 1.20904 4.0667C3.15063 0.333308 8.58022 -0.809001 11.6443 2.29217Z"
        stroke="#94a3b8"
      />
    </svg>
  );
}

// Icons end here
export { LikeButton };
