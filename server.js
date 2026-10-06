const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const cropRoutes = require("./routes/cropRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/crops", cropRoutes);
app.get("/api/crops/test", (req, res) => {
  res.json({
    success: true,
    message: "Crop route is working!"
  });
});

// Home route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AgriSense AI Backend is running!",
  });
});

// Health check API
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend connected successfully",
    service: "AgriSense AI API",
    status: "healthy",
  });
});

// Farm summary API
app.get("/api/farm-summary", (req, res) => {
  res.json({
    success: true,
    data: {
      activeCrops: 4,
      soilMoisture: 68,
      marketTrend: 8.4,
      farmHealth: 92,
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`AgriSense AI Backend running on http://localhost:${PORT}`);
});