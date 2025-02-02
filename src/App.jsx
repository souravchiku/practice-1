import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products"); // Corrected endpoint
    const data = await res.json();
    if (data.products) {
      setProducts(data.products);
    }
  };

  return (
    <div className="container">
      {products.length > 0 && (
        <div className="card-container">
          {products.map((elm) => (
            <div key={elm.id} className="card">
              <img src={elm.thumbnail} alt={elm.title} width={100} height={100} />
              <span>{elm.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
