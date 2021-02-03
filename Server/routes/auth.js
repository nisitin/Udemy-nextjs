import express from "express";
import { currentUser } from "../Controllers/auth"

const router = express.Router();

router.post("/current-user", currentUser)

module.exports = router;