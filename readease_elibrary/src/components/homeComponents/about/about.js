import "../../../index2.css";
import "./about.css";
import image  from "../../../images/img_about3.jpeg";

function About() {
  return <div>
    <div className="container">
           <h2 className="section__title"  id="title">  About Us</h2>
          <div className='img' > <img id='image'   src= {image} alt=" Ok" /></div>
          <div className='parag'><p>Readease was born out of the shared passion and vision of three students determined to make reading an effortless and exhilarating experience for all. Our mission is simple yet powerful: to transform the way people engage with books and ignite a love for reading that knows no bounds.

At Readease, we believe that reading is more than just words on a page—it is an immersive journey of discovery and wonder. Our magical library beckons you to embark on that journey, where you can explore captivating tales, uncover hidden gems, and immerse yourself in the joy of turning pages. We invite you to join us as we celebrate the sheer magic and power of words. 📚✨
</p></div>
               

         </div>

  </div>;
}

export default About;
