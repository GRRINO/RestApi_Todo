import { Router } from 'express';
import { getUserProfile, logoutUser, registerUser, updateUserProfile, userLogin } from '../controllers/user';
import { protect } from '../middlewares/authMiddleware';


const router = Router()

router.post("/register",registerUser);
router.post("/loginUser",userLogin)

router.route("/update").get(protect,getUserProfile).put(protect,updateUserProfile)

export default router;

