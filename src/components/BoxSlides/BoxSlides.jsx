import React from "react"
import appleIcon from "../../assets/appleIcon.png"
import productData from "../../constants/products"
import ProductCard from "../ProductCard/ProductCard"
import "./BoxSlides.css"

const BoxSlides = (props) => {
    return (
        <div className="box-slide">
            <a
                href="https://youtu.be/dQw4w9WgXcQ"
                className="logo-cate"
                target="_blank"
            >
                <img
                    src={appleIcon}
                    alt="search icon"
                    style={{ width: "50px" }}
                />
                <h2 className="titleText">iPhone</h2>
            </a>
            <div className="blocks-display">
                <div className="slides">
                    <div className="slides-display">
                        <div className="ProductList">
                            {productData.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    totalSales={product.totalSales}
                                    timeLeft={product.timeLeft}
                                    rating={product.rating}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="button-move"></div>
            </div>
        </div>
    )
}

export default BoxSlides
