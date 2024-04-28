import algoliasearch from 'algoliasearch';

// Connect and authenticate with your Algolia app
const client = algoliasearch("5AM91AHDV1", "ff4bdb7ea8967af46003787e66cfd6f3");

// Create a new index
const index = client.initIndex("notes_files");

export default index;