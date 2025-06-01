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
    <div className="product-name">{product.name}</div>
    <span className="product-price">${product.price.toFixed(2)}</span>
  </div>
);

export default ProductCard;