import { useState , useEffect } from 'react';
import ProductCard from './ProductCard'

function Shop() {
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    
     /*useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((response) => setProducts(response))
        .catch((error) => console.log(error));
     }, []);  */

     useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json();
    })
    .then((data) => setProducts(data.products))
    .catch((error) => console.error(error));
}, []);

    return (
    <div>
        <h1>shop</h1>

     <div className = "products">
         {products.map((product) => (
               <ProductCard key = { product.id } product = { product }/>
         ))}

           </div>
        </div>
        );
     }

export default Shop;