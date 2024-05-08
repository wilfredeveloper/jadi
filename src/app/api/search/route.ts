import { NextResponse } from "next/server";
const algoliasearch = require("algoliasearch");

const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const algoliaApiKey = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY;
// Connect and authenticate with your Algolia app
const client = algoliasearch(algoliaAppId, algoliaApiKey);

// Create a new index and add a record
const index = client.initIndex("notes_files");

index.setSettings({
  'typoTolerance': 'min',
  searchableAttributes: ['noteTitle', 'description'],
})

interface Hit {
  noteTitle: string;
  description: string;
  url: string;
  Tags: string[];
  popularity: number;
  createdAt: string;
  updatedAt: string;
}

export const POST = async (req: Request, res: Response) => {
  const formData = await req.formData();

  const searchTerm = formData.get("search-term") as string;

  try {
    const { hits } = await index.search(searchTerm);

    // map over hits and extract the data we need
    const data = hits.map((hit: Hit) => {
      return {
        title: hit.noteTitle,
        description: hit.description,
        url: hit.url,
        Tags: hit.Tags,
        popularity: hit.popularity,
        createdAt: hit.createdAt,
        updatedAt: hit.updatedAt,
      };
    });

    return NextResponse.json({ message: "Search was successful", data });
  } catch (error) {
    console.error("Error getting documents: ", error);
    return NextResponse.json({ message: "Search failed" });
  }
};
