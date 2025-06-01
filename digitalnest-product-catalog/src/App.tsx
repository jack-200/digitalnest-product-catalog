import React, { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import { Routes, Route } from "react-router-dom";
import ProductDetailPage from "./components/ProductDetailPage";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "DigitalNest Shop";
    fetch("https://cart-api.alexrodriguez.workers.dev/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(`${data.length} products were returned`, data);
        setProducts(data);
      })
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <header className="main-header-box">
        <h1>DigitalNest Shop</h1>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h2 className="products-title">Our Products</h2>
              <div className="product-grid">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                )}
              </div>
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
