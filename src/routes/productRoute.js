import express from 'express';
import {getProducts, getProductById} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.route('/:code').get(getProductById);

export default router;