import "../../../index2.css";
import "./featured.css";
import bookimg from "../../../images/IMG-20240325-WA0047.jpg";

function Featured() {
  return (
    <div>
      <section class="featured section" id="featured">
        <h2 class="section__title">Featured Books</h2>
        <div class="featured__container container">
          <div class="featured__swiper">
            <div>
              <article class="featured__card">
                <img src={bookimg} alt="photo1" class="featured__img" />
                <h2 class="featured__title">Featured Book</h2>
                <button>Add to Cart</button>
              </article>
              <article class="featured__card">
                <img src={bookimg} alt="photo2" class="featured__img" />
                <h2 class="featured__title">Featured Book</h2>
                <button>Add to Cart</button>
              </article>
              <article class="featured__card">
                <img src={bookimg} alt="photo3" class="featured__img" />
                <h2 class="featured__title">Featured Book</h2>
                <button>Add to Cart</button>
              </article>
              <article class="featured__card">
                <img src={bookimg} alt="photo4" class="featured__img" />
                <h2 class="featured__title">Featured Book</h2>
                <button>Add to Cart</button>
              </article>
              <article class="featured__card">
                <img src={bookimg} alt="photo5" class="featured__img" />
                <h2 class="featured__title">Featured Book</h2>
                <button>Add to Cart</button>
              </article>
              <article class="featured__card">
                <img src={bookimg} alt="photo6" class="featured__img" />
                <h2 class="featured__title">Featured Book</h2>
                <button>Add to Cart</button>
              </article>
              <article class="featured__card">
                <img src={bookimg} alt="photo7" class="featured__img" />
                <h2 class="featured__title">Featured Book</h2>
                <button>Add to Cart</button>
              </article>
              <article class="featured__card">
                <img src={bookimg} alt="photo8" class="featured__img" />
                <h2 class="featured__title">Featured Book</h2>
                <button>Add to Cart</button>
              </article>
              <article class="featured__card">
                <img src={bookimg} alt="photo9" class="featured__img" />
                <h2 class="featured__title">Featured Book</h2>
                <button>Add to Cart</button>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featured;
