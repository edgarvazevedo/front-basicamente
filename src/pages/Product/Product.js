/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProduct([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);

  return product.map((currentProduct) => {
    return (
      <article key={currentProduct.id} className="container mt-4">
        <div className="row" style={{ width: "18rem" }}>
          <div className="card">
            <img
              className="card-img-top"
              src={currentProduct.image}
              alt="image"
            />
            <div className="card-body">
              <h5 className="card-title"> {currentProduct.title} </h5>
              <p className="card-text"> {currentProduct.description} </p>
              <p>
                Price:{" "}
                {currentProduct.price.toLocaleString("pt-PT", {
                  currency: "EUR",
                  style: "currency",
                })}{" "}
              </p>
              <Link to="" className="btn btn-primary">
                Add to list
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  });
}

export default Product;
