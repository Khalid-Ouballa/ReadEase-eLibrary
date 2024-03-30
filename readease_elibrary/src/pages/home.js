import logos from "../images/logo.png";
import "./css/home.css";
import "../fontAwesome/css/all.min.css";

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
      <div class="landing">
        <div class="overlay"></div>
        <div class="text">
          <div class="content">
            <h2>Hello World!!</h2>
            <p>
              Welcome to our website, dedicated to helping readers, new and
              experienced, continue their reading habit. We offer a vast
              collection of ebooks across different categories, giving you
              endless choices. Our platform provides tools, resources,
              personalized plans, and recommendations to support your reading
              journey. Join us today and embrace the joy of reading with ease
              and fulfillment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
