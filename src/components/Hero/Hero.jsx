import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.scss';

const Hero = () => {
  // Инициализация AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      once: true,     // Анимация запускается только один раз
    });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            {/* Анимация заголовка */}
            <div className="hero__box" data-aos="fade-right">
              <h1>
                FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
              </h1>
              <p className="hero__text">
                Browse through our diverse range of meticulously crafted garments, designed <br />
                to bring out your individuality and cater to your sense of style.
              </p>
              <button data-aos="zoom-in">Shop Now</button>
              <div className="hero__inner" data-aos="fade-up">
                <div>
                  <h3>200+</h3>
                  <p>International Brands</p>
                </div>
                <div>
                  <h3>2,000+</h3>
                  <p>High-Quality Products</p>
                </div>
                <div>
                  <h3>30,000+</h3>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
            {/* Анимация изображения */}
            <img
              className="hero__img"
              src="./hero-img.png"
              alt="Hero"
              data-aos="fade-left"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
