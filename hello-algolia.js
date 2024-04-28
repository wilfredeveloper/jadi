// hello_algolia.js
const algoliasearch = require("algoliasearch");

// Connect and authenticate with your Algolia app
const client = algoliasearch("5AM91AHDV1", "ff4bdb7ea8967af46003787e66cfd6f3");

// Create a new index and add a record
const index = client.initIndex("notes_files");

index
  .saveObjects(recordsArr, { autoGenerateObjectIDIfNotExist: true })
  .then(({ objectIDs }) => console.log(objectIDs))
  .catch((error) => console.error("Error saving records:", error));

// Search the index and print the results
// Perform a search
index
  .search("Deep Learning")
  .then(({ hits }) => {
    hits.forEach((hit) => {
      console.log(`Title: ${hit.noteTitle}`);
      console.log(`Description: ${hit.description}`);
      console.log(`URL: ${hit.url}`);
      console.log(`Tags: ${hit.Tags.join(", ")}`);
      console.log(`Popularity: ${hit.popularity}`);
      console.log(`Created At: ${hit.createdAt}`);
      console.log(`Updated At: ${hit.updatedAt}`);
      console.log("---");
    });
  })
  .catch((error) => {
    console.error("Error searching index:", error);
  });
