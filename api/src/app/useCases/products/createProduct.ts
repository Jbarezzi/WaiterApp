import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export default async function createProduct(req: Request, res: Response) {
  const imagePath = req.file?.filename;
  const { name, description, price, category, ingredients } = req.body;
  const productData = {
    imagePath,
    name,
    description,
    price: Number(price),
    category,
    ingredients: ingredients ? JSON.parse(ingredients) : [],
  };

  const product = await Product.create(productData);

  res.status(201).json(product);
}
