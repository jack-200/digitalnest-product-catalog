import React from "react";
import { Link } from "react-router-dom";

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
  <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-name">{product.name}</div>
      <span className="product-price">${product.price.toFixed(2)}</span>
    </div>
  </Link>
);

export default ProductCard;