import express from 'express';
import { createPost, getPosts } from '../controllers/postController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', auth, createPost);
router.get('/', getPosts);
export default router;
