import express from 'express';
import { userRegister } from '../controller/authController.js';
import { otp_verify } from '../controller/authController.js';
import { getusers } from '../controller/authController.js';
import { otpGenerate } from '../controller/authController.js';
import { login } from '../controller/authController.js';

const router = express.Router();

router.post("/register", userRegister)
router.get("/users", getusers)
router.post("/otp-verify", otp_verify)  
router.get("/otp-generate", otpGenerate) // to generate otp for user registration
router.post("/login", login) // to generate otp for user login

export default router;