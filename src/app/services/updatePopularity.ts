const savesWeight = 0.3;
const viewsWeight = 0.15;
const likesWeight = 0.2;
const upVotesWeight = 0.3;
const updatedAtWeight = 0.05;

interface FileData {
    saves: string[];
    views: number;
    upvotes: string[];
    popularity: number;
    likes: string[];
    updatedAtTime: number;
}

// Utility function to update popularity
function updatePopularity(
  file: FileData,
  maxSaves: number,
  maxViews: number,
  maxLikes: number,
  maxUpvotes: number,
  maxUpdatedAtTime: number
) {
  file.popularity =
      (file.saves.length / (maxSaves || 1)) * savesWeight +
      (file.views / (maxViews || 1)) * viewsWeight +
      (file.upvotes.length / (maxUpvotes || 1)) * upVotesWeight +
      ((file.updatedAtTime ?? 0) / (maxUpdatedAtTime || 1)) * updatedAtWeight +
      (file.likes.length / (maxLikes || 1)) * likesWeight;
}


export { updatePopularity }