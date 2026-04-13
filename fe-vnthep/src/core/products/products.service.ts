import { ProductsRepository } from "./products.repository";
const productsRepository = ProductsRepository();

export const ProductsService = () => {
  const getProducts = async () => {
    try {
      const response = await productsRepository.getProducts();
      return response;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };
  return {
    getProducts,
  };
};
