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
      <article key={currentProduct.id}>
        <div className="card container pt-5" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={currentProduct.image}
            alt="image"
          />
          <div className="card-body">
            <h5 className="card-title"> {currentProduct.title} </h5>
            <p className="card-text"> {currentProduct.description} </p>
            <p>Price: $ {Number(currentProduct.price)} </p>
            <Link to="" className="btn btn-primary">
              {" "}
              Adicionar à lista de desejo
            </Link>
          </div>
        </div>
      </article>
    );
  });
}

export default Product;
