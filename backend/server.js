import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import medicineRoutes from "./routes/medicineRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MediTrack API is Running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";

// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import medicineRoutes from "./routes/medicineRoutes.js";
// import aiRoutes from "./routes/aiRoutes.js";
// dotenv.config();

// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("MediTrack API is Running...");
// });

// app.use("/api/auth", authRoutes);
// app.use("/api/medicines", medicineRoutes);
// const PORT = process.env.PORT || 5000;

// app.use("/api/ai", aiRoutes);

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });