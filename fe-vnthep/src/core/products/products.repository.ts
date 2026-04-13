import { api } from "@/client/api-client";

export interface Response {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface ProductResponse extends Response {
  id: string;
  seller: string;
  sellerInitial: string;
  sellerColor: string;
  verified: boolean;
  badge?: "HOT" | "MỚI" | "VIP" | string; // badge label
  badgeColor?: string;
  name: string;
  tags: string[];
  price: number; // VND/kg or unit
  originalPrice?: number;
  unit?: string;
  views: number;
  location: string;
  discount?: number;
  icon?: string;
}
export type ProductsListResponse = ProductResponse[];

export const ProductsRepository = () => {
  const getProducts = async () => {
    const response = await api.get("posts").json<ProductsListResponse>();
    console.log(response);
    return response;
  };

  return {
    getProducts,
  };
};
