import { Router } from "express";
import { addToHistory, getUserHistory, login, register } from "../controllers/user.controller.js";

const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);

// Changed to underscores to match frontend AuthContext
router.route("/add_to_activity").post(addToHistory);

// Changed to .get() because frontend uses client.get()
router.route("/get_all_activity").get(getUserHistory);

export default router;