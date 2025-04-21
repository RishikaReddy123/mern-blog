const mongoose = require("mongoose");
require("dotenv").config();

const articleSchema = new mongoose.Schema({
  name: String,
  comments: [{ username: String, text: String }],
});

const Article = mongoose.model("Article", articleSchema);

const seedArticles = async () => {
  const articleNames = ["React", "MongoDB", "Express", "Node"];

  for (const name of articleNames) {
    const exists = await Article.findOne({ name });
    if (!exists) {
      await Article.create({ name, comments: [] });
      console.log(`✔️ Inserted: ${name}`);
    } else {
      console.log(`🔁 Already exists: ${name}`);
    }
  }

  mongoose.disconnect();
};

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("🌱 Seeding MongoDB...");
    seedArticles();
  })
  .catch((err) => console.error("❌ MongoDB connection failed:", err));
