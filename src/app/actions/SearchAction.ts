"use server";
const algoliasearch = require("algoliasearch");
import chalk from "chalk";

interface Hit {
  noteTitle: string;
  description: string;
  url: string;
  Tags: string[];
  popularity: number;
  createdAt: string;
  updatedAt: string;
}

// Connect and authenticate with your Algolia app
const client = algoliasearch("5AM91AHDV1", "ff4bdb7ea8967af46003787e66cfd6f3");

// Create a new index and add a record
const index = client.initIndex("notes_files");

export async function searchNote(
  prevState: void | { message: string },
  formData: FormData
) {
  const search = formData.get("search-term") as string;
  console.log({ search });

  try {
    // Search the index and print the results
    // Perform a search
    const { hits } = await index.search(search);

    const data = hits.map((hit: Hit) => ({
      title: hit.noteTitle,
      description: hit.description,
      url: hit.url,
      tags: hit.Tags,
      popularity: hit.popularity,
      createdAt: hit.createdAt,
      updatedAt: hit.updatedAt,
    }));

    console.log(data);

    return { message: "Search was successful", data };
  } catch (error) {
    console.error("Error getting documents: ", error);
    return { message: "Search failed" };
  }
}