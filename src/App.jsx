import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1)

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

  const selectedPage = (selectedPage)=>{
    setPage(selectedPage)
  }
  return (
    <div className="container">
      {products.length > 0 && (
        <div className="card-container">
          {products.slice(page * 10 - 10, page * 10).map((elm) => (
            <div key={elm.id} className="card">
              <img src={elm.thumbnail} alt={elm.title} width={100} height={100} />
              <span>{elm.title}</span>
            </div>
          ))}


          <div>
            {products.length > 0 &&
              <div className="pagination">

                <span className="pageButton">👈</span>
                <span  className="pageButton">{[...Array(products.length/10)].map((_,i)=>{
                  return <span className="pageButton" onClick={()=>selectedPage(i+1)}  key={i}>{i + 1}</span>
                })}</span>
                <span  className="pageButton">👉</span>
              </div>
            }
          </div>
        </div>


      )}


    </div>
  );
}
