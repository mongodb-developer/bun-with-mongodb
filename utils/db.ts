import { MongoClient } from "mongodb";

let MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env");
}
// Adding the appName parameter to see if any reader is using this template :)
// These two lines can safely be removed
if (MONGODB_URI.indexOf("appName") === -1) MONGODB_URI += MONGODB_URI.indexOf("?") > -1 ? "&appName=devrel.template.bun|" : "?appName=devrel.template.bun|";
else MONGODB_URI = MONGODB_URI.replace(/appName\=([a-z0-9]*)/i, (m,p) => `appName=devrel.template.bun|${p}`);

const client: MongoClient = await MongoClient.connect(MONGODB_URI);
const moviesCollection = client.db("sample_mflix").collection("movies");

export {
  moviesCollection
}