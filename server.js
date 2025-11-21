const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const quotes = [
    "Du er homo Mads.",
    "Er du bange for at tabe dit fine skilt?.",
    "Pussy.",
    "David Goggins.",
    "SUUUUUIIIII.",
];

// Simple JSON API for random quote
app.get("/api/quote", (req, res) => {
    const random = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[random] });
});

// Fallback to index.html for root
// Fallback to index.html for everything except /api
app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});