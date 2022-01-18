import Product from "../Product/Product";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div>
      <Navbar />
      <Product />
      <div>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <Link className="page-link" to="#" tabindex="-1">
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              1
            </Link>
          </li>
          <li className="page-item active">
            <Link className="page-link" to="#">
              2 <span className="sr-only"></span>
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
     </div>
  );
}

export default HomePage;
