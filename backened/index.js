const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Route files
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

// App config
const app = express();
const PORT = 4001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/employee", employeeRoutes);
app.use("/category", categoryRoutes);

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://ayushsharma12345:rc2eGcvoRL0KhTQ0@cluster0.bcdqjou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => {
  console.log("✅ MongoDB connected successfully!");
  // Start server only after DB connection
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection failed:", err);
});

