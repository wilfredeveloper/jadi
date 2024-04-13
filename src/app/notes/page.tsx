import { Button } from "@/components/ui/button";
import { fetchFiles } from "../services/fetchFirestoreFiles";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import styles from "./page.module.css";

type FileData = {
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
};

export default async function SearchPage() {
  const documentData = await fetchFiles();
  const fileData: FileData[] = documentData.map(doc => ({
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
  }));
  const savesWeight = 0.5;
  const viewsWeight = 0.3;
  const upVotesWeight = 0.2;

  fileData.sort((a: FileData, b: FileData) => {
    const aScore =
      a.saves * savesWeight + a.views * viewsWeight + a.upvotes * upVotesWeight;
    const bScore =
      b.saves * savesWeight + b.views * viewsWeight + b.upvotes * upVotesWeight;
    return bScore - aScore;
  });

  //   calculate popularity of the notes by mapping through the fileData
  fileData.map((file, index) => {
    file.popularity =
      file.saves * savesWeight +
      file.views * viewsWeight +
      file.upvotes * upVotesWeight;
  });

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
          <Card key={index} className={`${styles.card}`}>
            <CardHeader className="pb-0">
              <div className="flex items-center gap-1">
                <StarIcon className="w-4 h-4 mr-1.5 flex-shrink-0" />
                <span>Popularity {file.popularity}</span>
              </div>
              <p className={`${styles.category}`}>{file.category}</p>
              <div className="grid grid-cols-2 text-sm/relaxed gap-4">
                <div className="flex items-center gap-1">
                  <StarIcon className="w-4 h-4 mr-1.5 flex-shrink-0" />
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
              <Button size={"sm"}>
                <Link
                  className="text-sm underline font-medium dark:text-gray-300"
                  href={file.url}
                >
                  Download Note
                </Link>
              </Button>
              <div className="grid grid-cols-1 text-sm/relaxed gap-4 my-5">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4 mr-1.5 flex-shrink-0" />
                  <time dateTime="2024-04-11T18:09:08Z">
                    Created at{" "}
                    <span className="font-bold">
                      {new Date(file.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </time>
                </div>
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
          </Card>
        ))}
      </div>
    </main>
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
      fill="none"
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
