import "../../../index2.css";
import "./featured.css";
import bookimg1 from "../../../images/feature-img01.jpg";
import bookimg2 from "../../../images/feature-img02.jpg";
import bookimg3 from "../../../images/feature-img03.jpg";
import bookimg4 from "../../../images/feature-img04.jpg";
import bookimg5 from "../../../images/feature-img05.jpg";
import bookimg6 from "../../../images/feature-img06.jpg";
import bookimg7 from "../../../images/feature-img07.jpg";
import bookimg8 from "../../../images/feature-img08.jpg";
import bookimg9 from "../../../images/feature-img09.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Featured() {
  return (
    <div>
      <section class="featured section" id="featured">
        <h2 class="section__title">Featured Books</h2>
        <div class="featured__container container">
          <div class="featured__swiper swiper">
            <div class="featured__wrapper">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                loop={true}
                spaceBetween={20}
                slidesPerView={"auto"}
                centeredSlides={"auto"}
                grapCursor={true}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <article class="featured__card">
                    <img src={bookimg1} alt="photo1" class="featured__img" />
                    <h2 class="featured__title">Radical Gardening</h2>
                    <div class="book__author">
                      <span class="author">George McKay</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article class="featured__card">
                    <img src={bookimg2} alt="photo2" class="featured__img" />
                    <h2 class="featured__title">Shattered</h2>
                    <div class="book__author">
                      <span class="author">Dick Francis</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article class="featured__card">
                    <img src={bookimg3} alt="photo3" class="featured__img" />
                    <h2 class="featured__title">Free Fall</h2>
                    <div class="book__author">
                      <span class="author">Peter Cawdron</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article class="featured__card">
                    <img src={bookimg4} alt="photo4" class="featured__img" />
                    <h2 class="featured__title">Cleverlands</h2>
                    <div class="book__author">
                      <span class="author">Lucy Crehan</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article class="featured__card">
                    <img src={bookimg5} alt="photo5" class="featured__img" />
                    <h2 class="featured__title">Red Queen</h2>
                    <div class="book__author">
                      <span class="author">Victoria Aveyard</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article class="featured__card">
                    <img src={bookimg6} alt="photo6" class="featured__img" />
                    <h2 class="featured__title">Boring Girls</h2>
                    <div class="book__author">
                      <span class="author">Sara Taylor</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article class="featured__card">
                    <img src={bookimg7} alt="photo7" class="featured__img" />
                    <h2 class="featured__title">The Ruins of Gorlan</h2>
                    <div class="book__author">
                      <span class="author">John Flanagan</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article class="featured__card">
                    <img src={bookimg8} alt="photo8" class="featured__img" />
                    <h2 class="featured__title">The Wright Brothers</h2>
                    <div class="book__author">
                      <span class="author">David McCullough</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article class="featured__card">
                    <img src={bookimg9} alt="photo9" class="featured__img" />
                    <h2 class="featured__title">The Giver</h2>
                    <div class="book__author">
                      <span class="author">Lois Lowry</span>
                    </div>
                    <button>Add to List</button>
                  </article>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featured;
