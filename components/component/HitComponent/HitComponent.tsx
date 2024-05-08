import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import DownloadButton from "@/components/ui/download-button";
import styles from "./HitComponent.module.css";
import { Divide } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Hit {
  title: string;
  description: string;
  url: string;
  Tags: string[];
  popularity: number;
  createdAt: string;
  updatedAt: string;
}

interface HitComponentProps {
  hit: Hit;
}

const maxPopularity = 1;

export default function HitComponent({ hit }: HitComponentProps) {
  return (
    <Card className="w-full max-w-md dark:bg-zinc-950">
      <CardHeader>
        <p>
          <strong className={`${styles.popularity_score}`}>
            Popularity score
          </strong>
          : {((hit.popularity / maxPopularity) * 100).toFixed(2)}%
        </p>
        
        {/* <Separator className="dark:bg-gray-400 opacity-20" /> */}
        <CardTitle>{hit.title}</CardTitle>
        <CardDescription>{hit.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <time dateTime="2024-04-11T18:09:08Z">
            Uploaded on{" "}
            <span className="font-bold">
              {new Date(hit.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </time>
        </p>
      </CardContent>
      <CardFooter>
        <DownloadButton className={`${styles.download_btn}`} url={hit.url} />
      </CardFooter>
    </Card>
  );
}
