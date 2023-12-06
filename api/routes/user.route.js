import express from 'express';
import {test} from '../controllers/user.controller.js';
const router = express.Router();
router.get('/test',test) //first router created
export default router;