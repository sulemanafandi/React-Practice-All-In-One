import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

function SingleProduct({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) return <Loader className="p-30" />;

  if (!product || !product.id) {
    return <p className="text-center mt-5">Product not found.</p>;
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid shadow-sm rounded"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>

        {/* Text Column */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{product.title}</h2>
          <h4 className="text-primary fw-bold mb-3">${product.price}</h4>
          <p className="text-muted mb-4">{product.description}</p>

          {product.rating && (
            <div className="d-flex align-items-center mb-4">
              <span className="badge bg-success me-2">⭐ {product.rating.rate}</span>
              <small className="text-muted">{product.rating.count} reviews</small>
            </div>
          )}

          <button
            className="btn btn-lg btn-outline-primary"
            onClick={() => addToCart && addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
