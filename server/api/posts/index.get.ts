import { MongoClient, Db } from "mongodb";
let client: MongoClient;
async function connectToDatabase(): Promise<Db> {
  if (!client) {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI not defined");
    }
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
  }
  return client.db("BlogData");
}

export default defineEventHandler(async (event) => {
  const db = await connectToDatabase();
  const collection = db.collection("Posts");
  const posts = await collection.find().toArray();

  return {
    posts: posts,
  };
});
