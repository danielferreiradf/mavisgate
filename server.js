const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect to Database
connectDB();

app.use(cors());

// Init JSON Middleware
app.use(express.json({ extended: false }));

// Define Route
app.use("/api/users", require("./routes/api/users"));
app.use("/api/characters", require("./routes/api/characters"));
app.use("/api/monsters", require("./routes/api/monsters"));
app.use("/api/auth", require("./routes/api/auth"));

app.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
