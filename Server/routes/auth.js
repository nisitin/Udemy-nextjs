import express from "express";
// controllers
import { currentUser, privateRoute } from "../Controllers/auth"
//middleware
import { findOrCreateUser } from "../middleware/index"
const router = express.Router();

router.post("/current-user", findOrCreateUser, currentUser)
router.get("/private-route", findOrCreateUser, privateRoute)

module.exports = router;