import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://cart-api.alexrodriguez.workers.dev/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then(setProduct)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return null;

  return (
    <div className="product-detail">
      <Link to="/" className="back-link">← Back to Products</Link>
      <div className="product-detail-content">
        <img src={product.image} alt={product.name} className="product-detail-image" />
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <div className="product-detail-price">${product.price.toFixed(2)}</div>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}