import React from "react";
import "./Category.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Card from "../Card/Card";
import Btn from "../Btn/Btn";
import Products from '/public/products.json'
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <section className="category">
        <div className="container">
          <div id="arrivals">
            <SectionTitle position="center"> NEW ARRIVALS</SectionTitle>
          </div>

          <div className="category__wrapper">



{
Products.slice(0,4).map((card,i)  => (
  <Link to={`/product/${card.id}`} key={i} className="category__card">

  <Card
              image={card.image}
              name={card.name}
              rate="4.5"
              price={card.price}
              stars="⭐⭐⭐🌟"
            />
  </Link>
))
}


   

          </div>
          <Btn>View All</Btn>
          <hr style={{ margin: "60px 0" }} />
          <div id="selling">
            <SectionTitle position="center"> Top selling</SectionTitle>
          </div>
          <div className="category__wrapper">
       {   Products.slice(5,9).map((card,i) => (
 <Link to={`/product/${card.id}`} key={i} className="category__card">

  <Card
              image={card.image}
              name={card.name}
              rate="4.5"
              price={card.price}
              stars="⭐⭐⭐🌟"
            />
  </Link>
))
}

          </div>
          <Btn>View All</Btn>
        </div>
      </section>
    </>
  );
};

export default Category;
