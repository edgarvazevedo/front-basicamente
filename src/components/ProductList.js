import Product from "../pages/Product/Product";



function ProductList() {
        return (
<div>
<select className="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

    <Product />
</div>
    );

}

export default ProductList;