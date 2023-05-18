import Product from "../models/Product";
import ProductStat from "../models/ProductStat";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const prodcutsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await Product.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(prodcutsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
