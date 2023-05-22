import express from "express";
import { login } from "../controllers/auth.js";
// import User from "../models/User.js";

const router = express.Router();

// router.get("/users", async (req, res) => {
//     const user = await User.find();
//     res.json(user);
// });
router.post("/login", login);

export default router;