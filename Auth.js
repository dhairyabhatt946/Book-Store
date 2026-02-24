const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json());

// --------------------
// MongoDB Connection
// --------------------
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("DB Error:", err));

// --------------------
// User Schema
// --------------------
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

// --------------------
// JWT Middleware
// --------------------
const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

// --------------------
// Register Route
// --------------------
app.post("/register", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields required" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role
        });

        await newUser.save();

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// --------------------
// Login Route
// --------------------
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({
            message: "Login successful",
            token
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// --------------------
// Protected User Route
// --------------------
app.get("/user-dashboard", authMiddleware, async (req, res) => {
    try {
        res.json({
            message: "Welcome User",
            userData: req.user
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

// --------------------
// Admin Only Route
// --------------------
app.get("/admin-dashboard", authMiddleware, async (req, res) => {
    try {
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Access denied" });
        }

        res.json({
            message: "Welcome Admin"
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

// --------------------
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
