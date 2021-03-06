import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Filter product</option>
                <option value="1">Men's clothing</option>
                <option value="2">Jewelery</option>
                <option value="3">Electronics</option>
                <option value="3">Women's clothing</option>
              </select>
            </ul>
            <input
              type="text"
              className="input search-bar"
              name="search"
              placeholder="Search Product"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
