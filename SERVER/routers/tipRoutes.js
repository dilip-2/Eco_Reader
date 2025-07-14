import express from 'express';
import { addTip, getTips,deleteTip } from '../controllers/tipController.js';

const router = express.Router();
router.post('/', addTip);
router.get('/', getTips );
router.delete('/:id', deleteTip )
export default router;
