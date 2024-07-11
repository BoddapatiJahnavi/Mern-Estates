import { google, signin, signup,signOut} from "../controllers/auth.controller.js";
import express from 'express';
import { updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();
router.post("/signup",signup);
router.post("/signin",signin);
router.post('/google',google);
router.get('/signout',signOut);
router.post('/user/update/:id', verifyToken, updateUser);

export default router;