import React from "react";
import "./Category.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Card from "../Card/Card";
import Btn from "../Btn/Btn";

const Category = () => {
  return (
    <>
      <section className="category">
        <div className="container">
          <div id="arrivals">
            <SectionTitle position="center"> NEW ARRIVALS</SectionTitle>
          </div>

          <div className="category__wrapper">
            <Card
              image={"/card-1.png"}
              name="T-SHIRT WITH TAPE DETAILS"
              rate="4.5"
              price="120"
              stars="⭐⭐⭐🌟"
            />
            <Card
              image={"/card-2.png"}
              name="SKINNY FIT JEANS"
              rate="3.5"
              price="120"
              stars="⭐⭐⭐🌟"
            />
            <Card
              image={"/card-3.png"}
              name="CHECKERED SHIRT"
              rate="4.5"
              price="120"
              stars="⭐⭐⭐🌟"
            />
            <Card
              image={"/card-4.png"}
              name="SLEEVE STRIPED T-SHIRT"
              rate="4.5"
              price="120"
              stars="⭐⭐⭐🌟"
            />
          </div>
          <Btn>View All</Btn>
          <hr style={{ margin: "60px 0" }} />
          <div id="selling">
            <SectionTitle position="center"> Top selling</SectionTitle>
          </div>
          <div className="category__wrapper">
            <Card
              image={"/card-5.png"}
              name="T-SHIRT WITH TAPE DETAILS"
              rate="4.5"
              price="120"
              stars="⭐⭐⭐🌟"
            />
            <Card
              image={"/card-6.png"}
              name="SKINNY FIT JEANS"
              rate="3.5"
              price="120"
              stars="⭐⭐⭐🌟"
            />
            <Card
              image={"/card-7.png"}
              name="CHECKERED SHIRT"
              rate="4.5"
              price="120"
              stars="⭐⭐⭐🌟"
            />
            <Card
              image={"/card-8.png"}
              name="SLEEVE STRIPED T-SHIRT"
              rate="4.5"
              price="120"
              stars="⭐⭐⭐🌟"
            />
          </div>
          <Btn>View All</Btn>
        </div>
      </section>
    </>
  );
};

export default Category;
