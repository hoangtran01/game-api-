import express from "express";

import gameRoutes from "./routes/game.route.js";
import { notFoundMiddleware } from "./middlewares/notFound.middleware.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

// Cho phép Express đọc JSON từ request body
app.use(express.json());

// Game API
app.use("/api/games", gameRoutes);

// Route không tồn tại
app.use(notFoundMiddleware);

// Global Error Handler
app.use(errorMiddleware);

export default app;