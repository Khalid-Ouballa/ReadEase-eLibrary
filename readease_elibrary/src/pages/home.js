import logos from "../images/logo.png";
import "./css/home.css";

function Home() {
  return (
    <div>
      <header>
        <div class="container">
          <a href="#" class="logo">
            <img src={logos} alt="Logo" />
          </a>
          <nav>
            <i class="fas fa-bars toggle-menu"></i>
            <ul>
              <li>
                <a class="active" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Sign up</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Home;
