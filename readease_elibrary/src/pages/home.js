import logos from "../images/logo.png";
import "./css/home.css";
import "../index.css";
import "../fontAwesome/css/all.min.css";
import about from "../images/about.png";
import About from "../components/homeComponents/about/about";
import Blogs from "../components/homeComponents/blogs/blogs";
import Featured from "../components/homeComponents/featured/featured";
import Opinions from "../components/homeComponents/opinions/opinions";

function Home() {
  return (
    <div>
  <section className="section-1">

        <div className=" container-fluid p-0  con">


         

          <a href="#" className="logo">
            <img src={logos} alt="Logo" />
          </a>
          <nav>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-align-right text-dark"></i>
         </button>
       
            <ul>
              <li>
                <a className="active" href="#">
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
              <li className="log">
              <a href="#">Log In</a>
              </li>
            </ul>
            <div className="form">
            <i className="fa-solid fa-user login-button" id="login-button" ></i>
          </div>

          </nav>
      </div>
       

      <div className="container text-center">

         <div className="row">
            <div className="col-md-7 col-sm-12  text-dark">
              <h1>Browse &</h1>
              <h1>Select E-Books</h1>
              <p>
                 Discover the best e-books from your favorite writers and explore hundreds of books across various categories. Find captivating stories, insightful knowledge, and thrilling adventures at your fingertips
               </p>
                <button className="btn btn-light px-5 py-2 btn-outline-primary ">
                   Signup to read </button>
           </div> 

              <div className="col-md-5 col-sm-12  h-25 ">
               <img src={about} alt="Book" />
                </div>


           </div>

      </div>

   
    </section>
    <About />
      <Featured />
      <Opinions />
      <Blogs />
    </div>
  );
}

export default Home;
