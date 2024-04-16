import "./footer.css";
import "../../../fontAwesome/css/all.min.css";
import logo from "../../../images/logo2.png";
import "../../../index2.css";

function Footer() {
  return (
    <div class="theFooter">
      <div class="footer__container myContainer grid">
        <div>
          <a href="#" class="footer__logo">
            <img src={logo} alt="logo" />
          </a>
          <p class="footer__description">
            Find and explore the best
            <br />
            eBooks from all your
            <br />
            favourite writers.
          </p>
        </div>
        <div class="footer__data grid">
          <div>
            <h3 class="footer__title">About</h3>
            <ul class="footer__links">
              <li>
                <a href="#" class="footer__Link">
                  Awards
                </a>
              </li>
              <li>
                <a href="#" class="footer__Link">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" class="footer__Link">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" class="footer__Link">
                  Terms of services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="footer__title">Company</h3>
            <ul class="footer__links">
              <li>
                <a href="#" class="footer__Link">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" class="footer__Link">
                  Community
                </a>
              </li>
              <li>
                <a href="#" class="footer__Link">
                  Our team
                </a>
              </li>
              <li>
                <a href="#" class="footer__Link">
                  Help center
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__data grid">
          <div>
            <h3 class="footer__title">Contact</h3>
            <ul class="footer__links">
              <li class="special">
                <address class="footer__info">
                  Campus Mghilla, BP 523
                  <br />
                  Beni Mellal 23000
                  <br />
                  Morocco
                </address>
              </li>
              <li>
                <address class="footer__info">
                  ReadEase@gmail.com
                  <br />
                  0606779898
                </address>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="footer__title">Contact</h3>
            <div class="footer__social">
              <a
                href="https://www.facebook.com/"
                target="blank"
                class="footer__social-link"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="blank"
                class="footer__social-link"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="blank"
                class="footer__social-link"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <span class="footer__copy">&#169; ALL Rights Reserved By ReadEase</span>
    </div>
  );
}
export default Footer;
