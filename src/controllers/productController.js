import Product from '../model/Product.js';

export const getProducts = async(req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch(err) {
    res.status(500).json({
      message: err.message
    });
  }
}

export const getProductById = async (req, res) => {
  try {
    const { code } = await req.params;

    const product = await Product.findOne({code: code});

    res.status(200).json(product);
  } catch(err) {
    res.status(500).json({
      message: err.message,
    });
  }
}