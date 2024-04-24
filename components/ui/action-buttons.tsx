"use client";

import { likeFile, UpvoteFile } from "@/src/app/utils/noteUtils";
import { useState } from "react";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./actionButtonStyles.module.css";
import AuthDialog from "./auth-dialog";

interface LikeButtonProps {
  hasLiked: boolean;
  likeCount: number;
  userId: string;
  fileId: string; // Function that will be called when the button is clicked
}
interface UpvoteButtonProps {
  hasUpvoted: boolean;
  upvoteCount: number;
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
  const [isOpen, setIsOpen] = useState(false);

  const handleLikeClick = async () => {
    if (userId === "") {
      return setIsOpen(true);
    }
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
    <>
      <AuthDialog onNav={false} isOpen={isOpen} onOpenChange={setIsOpen} />
      <motion.div
        className={`flex items-center ${styles.wrapper}`}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.25 }}
      >
        <div className={``}>
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
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {likeCount == 0 ? "" : likeCount}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  );
}

function UpvoteButton({
  userId,
  fileId,
  hasUpvoted: initialHasLiked,
  upvoteCount: initialLikeCount,
}: UpvoteButtonProps) {
  const [hasUpvoted, setHasUpvoted] = useState(initialHasLiked);
  const [upvoteCount, setUpvoteCount] = useState(initialLikeCount);
  const [isOpen, setIsOpen] = useState(false);

  const handleLikeClick = async () => {
    if (userId === "") {
      return setIsOpen(true);
    }
    setHasUpvoted(!hasUpvoted);
    setUpvoteCount(hasUpvoted ? upvoteCount - 1 : upvoteCount + 1);
    try {
      console.log("user ID: ", userId, "\n", "file ID: ", fileId);
      await UpvoteFile({ userId, fileId }, setHasUpvoted);
    } catch (error) {
      console.error("Error liking file:", error);
    }
  };

  return (
    <>
      <AuthDialog onNav={false} isOpen={isOpen} onOpenChange={setIsOpen} />
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
            {hasUpvoted ? <UpvoteIconFilled /> : <UpvoteIcon />}
          </Button>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={upvoteCount}
            className={`text-slate-400 text-sm ${styles.like_count}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {upvoteCount == 0 ? "" : upvoteCount}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
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
        fillRule="evenodd"
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

function UpvoteIcon(props: any) {
  return (
    <svg
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="#94a3b8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9245 11.3833C21.8489 11.566 21.7207 11.7222 21.5563 11.8321C21.3919 11.9421 21.1986 12.0007 21.0008 12.0008H1.00079C0.802892 12.0009 0.609399 11.9424 0.444805 11.8325C0.280212 11.7226 0.151917 11.5664 0.076165 11.3836C0.000412494 11.2008 -0.0193921 10.9996 0.0192583 10.8055C0.0579087 10.6114 0.153276 10.4331 0.293288 10.2933L10.2933 0.293286C10.3862 0.20031 10.4964 0.126551 10.6178 0.0762272C10.7392 0.0259029 10.8694 0 11.0008 0C11.1322 0 11.2623 0.0259029 11.3837 0.0762272C11.5051 0.126551 11.6154 0.20031 11.7083 0.293286L21.7083 10.2933C21.8481 10.4332 21.9433 10.6115 21.9818 10.8055C22.0202 10.9995 22.0003 11.2006 21.9245 11.3833Z"
        fill="#94a3b8"
      />
      <path
        d="M13 12C13 13.1046 12.1046 14 11 14C9.89543 14 9 13.1046 9 12C9 10.8954 9.89543 10 11 10C12.1046 10 13 10.8954 13 12Z"
        fill="#94a3b8"
      />
    </svg>
  );
}
function UpvoteIconFilled(props: any) {
  return (
    <svg
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="#a7ffbd"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9245 11.3833C21.8489 11.566 21.7207 11.7222 21.5563 11.8321C21.3919 11.9421 21.1986 12.0007 21.0008 12.0008H1.00079C0.802892 12.0009 0.609399 11.9424 0.444805 11.8325C0.280212 11.7226 0.151917 11.5664 0.076165 11.3836C0.000412494 11.2008 -0.0193921 10.9996 0.0192583 10.8055C0.0579087 10.6114 0.153276 10.4331 0.293288 10.2933L10.2933 0.293286C10.3862 0.20031 10.4964 0.126551 10.6178 0.0762272C10.7392 0.0259029 10.8694 0 11.0008 0C11.1322 0 11.2623 0.0259029 11.3837 0.0762272C11.5051 0.126551 11.6154 0.20031 11.7083 0.293286L21.7083 10.2933C21.8481 10.4332 21.9433 10.6115 21.9818 10.8055C22.0202 10.9995 22.0003 11.2006 21.9245 11.3833Z"
        fill="#a7ffbd"
      />
      <path
        d="M13 12C13 13.1046 12.1046 14 11 14C9.89543 14 9 13.1046 9 12C9 10.8954 9.89543 10 11 10C12.1046 10 13 10.8954 13 12Z"
        fill="#a7ffbd"
      />
    </svg>
  );
}

// Icons end here
export { LikeButton, UpvoteButton };
