import React from "react";
import "./Products.scss";
import ProductsIcon from "./ProductsIcon";
import ArrowBottom from "../SpaServices/ArrowBottom";

const Products = () => {
  return (
    <section id="products-section">
      <div className="products-container">
        <div className="products-text-container">
          <div className="products-icon">
            <ProductsIcon />
            <p>Products</p>
          </div>
          <h3>Cezanne</h3>
          <p className="products-small-text">
            Transform your frizzy, difficult, kinky, curly hair into soft,
            manageable, beautiful locks.
          </p>
          <div className="available-products-link">
            <p>Full range of products available</p>
            <ArrowBottom />
          </div>
        </div>
        <div className="products-image-container"></div>
      </div>
    </section>
  );
};

export default Products;
