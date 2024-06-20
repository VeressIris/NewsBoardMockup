import { MongoClient, ServerApiVersion } from "mongodb";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function addNews(html) {
  const newsCollection = client.db("samplenews").collection("news");
  const doc = { rawHTML: html };
  const result = await newsCollection.insertOne(doc);
  console.log(`document was inserted with the _id: ${result.insertedId}`);
  return result;
}

async function getNews() {
  const newsCollection = client.db("samplenews").collection("news");
  const result = await newsCollection.find().toArray();
  console.log(result);
  return result;
}

app.post("/addNews", async (req, res) => {
  const html = req.body;
  console.log("Request body:", html);
  try {
    await client.connect();
    const result = await addNews(html.innerHTML);
    res
      .status(201)
      .send({ message: "News added successfully", id: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to add news" });
  } finally {
    await client.close();
  }
});

app.get("/getAllNews", async (req, res) => {
  console.log("Received GET request to /getAllNews");

  try {
    await client.connect();
    const newsArray = await getNews();
    res.status(200).send(newsArray);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).send({ message: "Failed to fetch news" });
  } finally {
    await client.close();
  }
});

// setup mongodb connection
const uri =
  "mongodb+srv://midnightdovedev:XfgjnMx91QOTvexX@cluster0.c0ehijw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
