import logos from "../images/logo.png";
import "./css/home.css";
import '../index.css';
import "../fontAwesome/css/all.min.css";
import about  from "../images/about.png";
import About from "../components/homeComponents/about/about"



function Home() {
  return (
    <div>
      <header>
        <div class="container">
          <a href="#" class="logo">
            <img src={logos} alt="Logo" />
          </a>
          <nav>
       
            <ul>
              <li>
                <a class="active" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Books</a>
              </li>
              <li>
                <a href="#">Opinions</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="form">
            <i className="fa-solid fa-user login-button" id="login-button" ></i>
          </div>

          </nav>
        </div>
      </header>

      <div className="landing">
        <div className="content">
          <div className="text"></div>
          <h1>Hello world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            ducimus porro modi atque iste sapiente? Voluptatum nobis, deserunt
            quo s laboriosam quas eum impedit minus modi labore officia fuga
            quibusdam nisi!
          </p>
        </div>
        <img src={about} alt="about" />
      </div>
      <About />
     </div>
  );
}

export default Home;
