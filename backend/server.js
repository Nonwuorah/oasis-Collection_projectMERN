import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

// Importing routes
// Note: Ensure that the path to auth.route.js is correct based on your project structure.
// If you're using a different file structure, adjust the import path accordingly.
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const ___dirname = path.resolve();

// authentication

app.use(express.json({ limit: "10mb" })); // Middleware to parse JSON bodies
app.use(cookieParser()); // Middleware to parse cookies

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

if (process.env.NODE_ENV === "production") {
  // Serve static files from the React app
  app.use(express.static(path.join(___dirname, "./frontend/dist")));

  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(___dirname, "./frontend/dist/index.html"));
  });
}

app.listen(PORT, async () => {
  console.log("Server is running on http://localhost:" + PORT);
  console.log("env is", process.env);
  // Connect to the database
  connectDB();
});
