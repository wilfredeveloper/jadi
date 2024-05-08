"use client";
import { InstantSearch, Hits, SearchBox, Highlight } from "react-instantsearch";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import styles from "./Discover.module.css";
const algoliasearch = require("algoliasearch");

const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const algoliaApiKey = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY;

// Connect and authenticate with your Algolia app
const client = algoliasearch(algoliaAppId, algoliaApiKey);

interface Hit {
  objectID: string;
  noteTitle: string;
  description: string;
  url: string;
  Tags: string[];
  popularity: number;
  createdAt: string;
  updatedAt: string;
  _highlightResult?: any;
  _snippetResult?: any;
  _rankingInfo?: any;
  _distinctSeqID?: number;
  _geoloc?: any;
}


function Hit({ hit }: { hit: any }) {
  return (
    <Card className="w-full max-w-md bg-transparent">
      <CardHeader>
        <CardTitle>{hit.noteTitle} <Highlight attribute={"noteTitle"} hit={hit}/></CardTitle>
        <CardDescription>{hit.description} <Highlight attribute={"description"} hit={hit}/></CardDescription>
      </CardHeader>
      <CardContent>
        <a href={hit.url}>Link</a>
        <p>Popularity: {hit.popularity}</p>
        <p>Created at: {hit.createdAt}</p>
        <p>Updated at: {hit.updatedAt}</p>
      </CardContent>
    </Card>
  );
}

export default function Page() {
  return (
   <main className={`${styles.main}`}>
     <InstantSearch searchClient={client} indexName="notes_files" >
      <SearchBox classNames={
        {
          root: "mb-4 mt-4 w-full max-w-md",
          input: styles.input,
          submit: "hidden",
          reset: "hidden",
          submitIcon: "hidden",
          resetIcon: "hidden",
        }
      }/>
      <Hits hitComponent={Hit} classNames={{
        root: "",
        item: "bg-orange-900 rounded-lg",
        list: "grid grid-cols-1 gap-4 bg-green-300 p-4 rounded-lg",
      }}/>
    </InstantSearch>
   </main>
  );
}
