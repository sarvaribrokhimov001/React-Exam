import { useEffect, useState } from 'react';
import axios from 'axios';
import "../App.css";

const Products = () => {
  const [products , setProducts] = useState([]);
  
   useEffect(() => {
    
    axios
    .get('https://fakestoreapi.com/products')
    .then((data) => {
      setProducts(data);
    }).catch((error) => {
      console.log(error);
    })
  } , [])

  return (
    <div>
      <div className="products__container">
        {products.map((item) => (
          <div key={item.id} className="product__card">
            <img src={item.image} alt={item.title} width="100" height={'140px'} />
            <h3>{item.title}</h3>
            <p>{item.price} $ </p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Products