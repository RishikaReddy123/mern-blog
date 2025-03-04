const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;

require("dotenv").config();

if (!process.env.MONGO_URI) {
  console.error("MONGO_URI is not defined in the .env file");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

app.use(express.json({ extended: false }));

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
    res.status(200).send(article);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error!");
  }
});

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
