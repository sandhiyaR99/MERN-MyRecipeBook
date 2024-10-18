import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

const client = new MongoClient(process.env.MONGO_URI);
let RecipeCollection;
let SavedCollection;

const main = async () => {
    await client.connect();
    console.log("Connected to MongoDB");
    RecipeCollection = client.db("RecipeDB").collection("Recipes");
    SavedCollection = client.db("RecipeDB").collection("SavedRecipes");
};

app.get("/recipes", async (req, res) => {
    const recipes = await RecipeCollection.find({}).toArray();
    res.status(200).json(recipes);
});

app.post("/recipes", async (req, res) => {
    const recipe = req.body;
    const result = await RecipeCollection.insertOne(recipe);
    res.status(201).send(result);
});

app.get("/saved", async (req, res) => {
    const savedRecipes = await SavedCollection.find({}).toArray();
    res.status(200).json(savedRecipes);
});

app.post("/saved", async (req, res) => {
    const savedRecipe = req.body;
    const result = await SavedCollection.insertOne(savedRecipe);
    res.status(201).json(result);
});

app.listen(process.env.PORT, async () => {
    await main();
    console.log("Server is running on port 5000");
});
