"use client"
import { likeFile } from "@/src/app/services/upload";

interface LikeButtonProps {
  userId: string;
  fileId: string; // Function that will be called when the button is clicked
}

function LikeButton({ userId, fileId}: LikeButtonProps) {
  const handleLikeClick = async () => {
    try {
      console.log("user ID: ", userId, "\n", "file ID: ", fileId); // Call the onLike function
      await likeFile(userId, fileId);
    } catch (error) {
      console.error("Error liking file:", error);
    }
  };

  return (
    <button onClick={handleLikeClick}>
      Like
    </button>
  );
}

export { LikeButton }