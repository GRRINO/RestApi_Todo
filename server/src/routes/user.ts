import { Router } from 'express';
import {  registerUser, userLogin } from '../controllers/user';

const router = Router()

router.post("/register",registerUser)
router.post("/loginUser",userLogin)


export default router;