import React from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
  </div>
);

export default ProductCard;