import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios('https://fakestoreapi.com/products');
    setProducts(res.data);
    setLoading(false)
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(loading) return <Loader className={'p-30'}/>

  // Add to cart function
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold">Our Products</h1>
      <div className="row gy-4">
        {/* <Loader/> */}
        {products.map((item) => (
          <CardProduct key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-5">
        <h2 className="fw-bold">🛒 Cart ({cart.length})</h2>
        <ul className="list-group">
          {cart.map((c, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {c.title}
              <span className="fw-bold text-primary">${c.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;

// Card Component
const CardProduct = ({ item, addToCart }) => {
  const navigate = useNavigate();

  return (
    <div  className="group col-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm">
        <img
          src={item.image}
          alt={item.title}
          className="card-img-top p-3 group-hover:scale-110 transition-all duration-400 "
          onClick={()=>navigate(`/products/${item.id}`)}
          style={{ height: '180px', objectFit: 'contain' }}
        />
        <div className="card-body d-flex flex-column ">
          {/* Title */}
          <h6 className="card-title text-truncate mb-2 " title={item.title}>
            {item.title}
          </h6>

          {/* Price */}
          <p className="fw-bold text-primary mb-2">${item.price}</p>

          {/* Rating */}
          <div className="d-flex align-items-center mb-2">
            <span className="badge bg-success me-2">⭐ {item.rating.rate}</span>
            <small className="text-muted">{item.rating.count} reviews</small>
          </div>

          {/* Button */}
          <button
            className="btn btn-sm btn-outline-primary mt-auto"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
