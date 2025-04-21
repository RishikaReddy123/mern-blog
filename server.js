const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

if (!process.env.MONGO_URI) {
  console.error("MONGO_URI is not defined in the .env file");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

app.use(cors());
app.use(helmet());
app.use(express.json());

const articleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  comments: [
    {
      username: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  ],
});

const Article = mongoose.model("Article", articleSchema);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/api/articles/:name", async (req, res) => {
  const articleName = req.params.name;
  try {
    const article = await Article.findOne({ name: articleName });
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json(article);
  } catch (err) {
    console.error("Error fetching article:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/api/articles/:name/add-comments", async (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  if (!username || !text) {
    return res.status(400).json({ message: "Username and text are required" });
  }

  try {
    let article = await Article.findOne({ name: articleName });

    if (!article) {
      article = new Article({
        name: articleName,
        comments: [],
      });
    }

    article.comments.push({ username, text });
    await article.save();
    res.status(200).json(article);
  } catch (err) {
    console.error("Error adding comment:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
