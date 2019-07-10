const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

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

// Server static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
