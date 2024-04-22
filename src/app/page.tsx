import { Button } from "@/components/ui/button";
import { fetchFiles } from "./services/fetchFirestoreFiles";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import styles from "./page.module.css";
import chalk from "chalk";
import { fetchBasicUserData } from "./utils/userUtils";
import { LikeButton } from "@/components/ui/action-buttons";

type FileData = {
  id: string;
  saves: number;
  views: number;
  upvotes: number;
  popularity: number;
  category: string;
  size: number;
  noteTitle: string;
  extension: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  mimeType: string;
  name: string;
  cms_id: string;
  Tags: string[];
  likes: string[];
  updatedAtTime?: number | undefined;
};

type DocumentData = {
  id: string;
  noteTitle: string;
  extension: string;
  description: string;
  mimeType: string;
  url: string;
  createdAt: string;
  size: number;
  cms_id: string;
  popularity: number;
  name: string;
  category: string;
  Tags: string[];
  updatedAt: string;
  upvotes: number;
  views: number;
  saves: number;
  likes: string[];
  updatedAtTime?: number | undefined;
};

export default async function SearchPage() {
  let documentData: DocumentData[] = [];

  try {
    documentData = await fetchFiles();
  } catch (error) {
    console.log(`${chalk.yellowBright("\n\n ---> Network Error")}`);
  }

  const fileData: FileData[] = documentData.map((doc: DocumentData) => ({
    id: doc.id,
    saves: doc.saves,
    views: doc.views,
    upvotes: doc.upvotes,
    popularity: doc.popularity,
    category: doc.category,
    size: doc.size,
    noteTitle: doc.noteTitle,
    extension: doc.extension,
    url: doc.url,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
    description: doc.description,
    mimeType: doc.mimeType,
    name: doc.name,
    cms_id: doc.cms_id,
    Tags: doc.Tags,
    likes: doc.likes,
    updatedAtTime: new Date(doc.updatedAt).getTime(),
  }));

  const savesWeight = 0.3;
  const viewsWeight = 0.15;
  const upVotesWeight = 0.5;
  const updatedAtWeight = 0.05;

  const maxSaves = Math.max(...fileData.map((file) => file.saves));
  const maxViews = Math.max(...fileData.map((file) => file.views));
  const maxUpvotes = Math.max(...fileData.map((file) => file.upvotes));
  const maxUpdatedAtTime = Math.max(
    ...fileData.map((file) => file.updatedAtTime ?? 0)
  );

  //   calculate popularity of the notes by mapping through the fileData
  fileData.map((file, index) => {
    file.popularity =
      (file.saves / maxSaves) * savesWeight +
      (file.views / maxViews) * viewsWeight +
      (file.upvotes / maxUpvotes) * upVotesWeight +
      ((file.updatedAtTime ?? 0) / maxUpdatedAtTime) * updatedAtWeight;
  });

  // sort by popularity
  fileData.sort((a: FileData, b: FileData) => {
    return b.popularity - a.popularity;
  });

  const trendingThreshold = 0.5;

  const userData = await fetchBasicUserData();
  const userId = userData?.id || "";

  return (
    <main className={`${styles.main}`}>
      <div className={`${styles.search_box_wrapper}`}>
        <input
          className={`${styles.search_box}`}
          type="text"
          id="search"
          name="search"
        />
        <Button>
          <label className={`${styles.search_label}`} htmlFor="search">
            Go
          </label>
        </Button>
      </div>

      <div className={`${styles.notes_gallery}`}>
        {fileData.map((file, index) => (
          <Card
            key={index}
            className={`${styles.card} ${
              file.popularity > trendingThreshold && styles.border_trending
            }`}
          >
            <CardHeader className="pb-0 mb-3">
              <div>
                {file.popularity > trendingThreshold ? (
                  <div className="flex items-center gap-2">
                    <TrendingIcon />
                    <small>Trending</small>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <p className={`${styles.category}`}>{file.category}</p>
              <div className="grid grid-cols-2 text-sm/relaxed gap-4">
                <div className="flex items-center gap-1">
                  <UpvotesIcon className="w-4 h-4 mr-1.5 flex-shrink-0" />
                  <span>Upvotes {file.upvotes}</span>
                </div>

                <div className="flex items-center gap-1">
                  <FileIcon className="w-4 h-4 mr-1.5 flex-shrink-0" />
                  <span>
                    <span className="font-bold text-sm">
                      {(file.size / 1048576).toFixed(2)} MB
                    </span>
                  </span>
                </div>
              </div>

              <CardTitle className="text-2xl">{file.noteTitle}</CardTitle>
              <CardDescription>{file.extension}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="grid grid-cols-1 text-sm/relaxed gap-4 my-5">
                <p>{file.description}</p>
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4 mr-1.5 flex-shrink-0" />
                  <time dateTime="2024-04-11T18:09:08Z">
                    Last published at{" "}
                    <span className="font-bold">
                      {new Date(file.updatedAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </time>
                </div>
              </div>
            </CardContent>
            <CardFooter className={``}>
              <Button size={"sm"}>
                <Link
                  className="text-sm underline font-medium dark:text-gray-300"
                  href={file.url}
                >
                  Download Note
                </Link>
              </Button>

              <LikeButton userId={userId} fileId={file.id} hasLiked={file.likes?.includes(userId)} likeCount={file.likes?.length}/>
              
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

function UpvotesIcon(props: any) {
  return (
    <svg
      {...props}
      fill="##4AFF9D"
      stroke="none"
      strokeWidth={"0"}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z" />
    </svg>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function FileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 22 22"
      fill="yellow"
      stroke="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ViewIcon(props: any) {
  return (
    <svg
      width="17"
      height="11"
      viewBox="0 0 17 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 5.5C16.5 5.5 13.5 0 8.5 0C3.5 0 0.5 5.5 0.5 5.5C0.5 5.5 3.5 11 8.5 11C13.5 11 16.5 5.5 16.5 5.5ZM1.673 5.5C2.15578 4.76459 2.71197 4.08008 3.333 3.457C4.62 2.168 6.38 1 8.5 1C10.62 1 12.379 2.168 13.668 3.457C14.289 4.08008 14.8452 4.76459 15.328 5.5C15.2707 5.58667 15.2057 5.68267 15.133 5.788C14.798 6.268 14.303 6.908 13.668 7.543C12.379 8.832 10.619 10 8.5 10C6.381 10 4.621 8.832 3.332 7.543C2.71097 6.91992 2.15578 6.23541 1.673 5.5Z"
        fill="white"
      />
      <path
        d="M8.5 3C7.83696 3 7.20107 3.26339 6.73223 3.73223C6.26339 4.20107 6 4.83696 6 5.5C6 6.16304 6.26339 6.79893 6.73223 7.26777C7.20107 7.73661 7.83696 8 8.5 8C9.16304 8 9.79893 7.73661 10.2678 7.26777C10.7366 6.79893 11 6.16304 11 5.5C11 4.83696 10.7366 4.20107 10.2678 3.73223C9.79893 3.26339 9.16304 3 8.5 3ZM5 5.5C5 4.57174 5.36875 3.6815 6.02513 3.02513C6.6815 2.36875 7.57174 2 8.5 2C9.42826 2 10.3185 2.36875 10.9749 3.02513C11.6313 3.6815 12 4.57174 12 5.5C12 6.42826 11.6313 7.3185 10.9749 7.97487C10.3185 8.63125 9.42826 9 8.5 9C7.57174 9 6.6815 8.63125 6.02513 7.97487C5.36875 7.3185 5 6.42826 5 5.5Z"
        fill="white"
      />
    </svg>
  );
}

function TrendingIcon(props: any) {
  return (
    <svg
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 0.777754V6.99978C22 7.20606 21.9172 7.40388 21.7699 7.54974C21.6225 7.6956 21.4227 7.77754 21.2143 7.77754C21.0059 7.77754 20.8061 7.6956 20.6587 7.54974C20.5114 7.40388 20.4286 7.20606 20.4286 6.99978V2.65506L12.3418 10.6611C12.2688 10.7334 12.1822 10.7907 12.0868 10.8299C11.9914 10.869 11.8892 10.8892 11.7859 10.8892C11.6827 10.8892 11.5804 10.869 11.485 10.8299C11.3897 10.7907 11.303 10.7334 11.23 10.6611L7.85742 7.32158L1.34202 13.7721C1.19459 13.918 0.994632 14 0.786136 14C0.577639 14 0.377683 13.918 0.230254 13.7721C0.0828248 13.6261 0 13.4282 0 13.2218C0 13.0154 0.0828248 12.8175 0.230254 12.6716L7.30154 5.67177C7.37451 5.59946 7.46117 5.54209 7.55655 5.50295C7.65193 5.46381 7.75417 5.44366 7.85742 5.44366C7.96068 5.44366 8.06292 5.46381 8.1583 5.50295C8.25368 5.54209 8.34034 5.59946 8.41331 5.67177L11.7859 9.01125L19.3178 1.55551H14.9287C14.7203 1.55551 14.5205 1.47357 14.3731 1.32771C14.2258 1.18185 14.143 0.984027 14.143 0.777754C14.143 0.571481 14.2258 0.373656 14.3731 0.227799C14.5205 0.0819418 14.7203 0 14.9287 0H21.2143C21.4227 0 21.6225 0.0819418 21.7699 0.227799C21.9172 0.373656 22 0.571481 22 0.777754Z"
        fill="#4AFF9D"
      />
    </svg>
  );
}
