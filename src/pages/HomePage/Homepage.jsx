import React from "react"
import Flashsales from "../../components/Flashsales/Flashsales"
import SlideAnimate from "../../components/SlideAnimate/SlideAnimate"
import "./Homepage.css"
import slide1 from "../../assets/animate1.webp"
import slide2 from "../../assets/animate2.webp"
import slide3 from "../../assets/animate3.webp"
import slide4 from "../../assets/animate4.webp"
import ProductCard from "../../components/ProductCard/ProductCard"
import productData from "../../constants/products"

const Homepage = () => {
    return (
        <div className="container">
            <div className="body">
                <div>
                    <SlideAnimate
                        images={[slide1, slide2, slide3, slide4]}
                        key={1}
                    />
                </div>
                <Flashsales />
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
    )
}

export default Homepage
