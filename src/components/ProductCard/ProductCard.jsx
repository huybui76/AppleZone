import React from "react"
import {
    FaStar,
    FaFireAlt,
    FaShoppingCart,
    FaRegBookmark,
} from "react-icons/fa"
import "./ProductCard.css"

const ProductCard = (props) => {
    return (
        <div className="productList">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" key={props.id} className="productCard">
                <img
                    src={props.image}
                    alt="hello"
                    className="productImage"
                ></img>
                <FaShoppingCart className={"productCard_cart"} />
                {/* <FaRegBookmark className={"productCard_wishlist"} /> */}
                <FaFireAlt className={"productCard_fastSelling"} />
                <div className="productCard_content">
                    <h3 className="productName">{props.name}</h3>
                    <div className="displayStack_1">
                        <div className="productPrice">${props.price}</div>
                        <div className="productSale">
                            {props.totalSales} units sold
                        </div>
                    </div>
                    <div className="displayStack_1">
                        <div className="productRating">
                            {[...Array(props.rating)].map((index) => (
                                <FaStar id={index + 1} key={index} />
                            ))}
                        </div>
                        <div className="productTime">
                            {props.timeLeft} days left
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProductCard
