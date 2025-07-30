import express from 'express';
import {
  getAllProducts,
  getProductById,
  getFeaturedProducts,
  createProduct,
  createManyProducts
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/featured', getFeaturedProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.post('/bulk', createManyProducts);

export default router;
