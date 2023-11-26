import React from "react";
import "./CartItem.css";
const priceDiscount = (item, discountPercentage) => {
    const discountedPrice = item - (item * discountPercentage) / 100;
    return discountedPrice.toLocaleString()
}
const priceTotal = (price, count) => {
    const priceTotal = price * count;
    return priceTotal.toLocaleString(); // Thêm dấu phẩy phân tách hàng nghìn
};
function CartItem({ item }) {
    return (
        <div className="item-container">
            {/* <div className="item-space1"></div> */}
            <div className="item__img-name">
                <div className="item__img-name1">
                    <div className="item__img-container">
                        <img src={item.img} alt={item.name} className="item-img" />
                    </div>
                    <div className="item-container-name">
                        <div className="item-name">{item.name}</div>
                        {/* <div className="item-detail">{item.detail}</div> */}
                    </div>
                </div>

            </div>

            <div className="item-price">

                <div className="item-price1">{item.price.toLocaleString()}</div>
                <div className="item-price2">{priceDiscount(item.price, item.discount)}</div>
            </div>
            <div className="item-quantity">
                <div className="item-quantity1">
                    <button className="minus">
                        <img src="/minus.png" alt="minus" className="minus-icon" />
                    </button>

                    <div className="quantity">{item.amount}</div>
                    <button className="plus">
                        <img src="/plus.png" alt="plus" className="plus-icon" />
                    </button>
                </div>
            </div>

            <div className="total">{priceTotal(item.price, item.amount)}</div>
            <div className="remove-item-area">

                <button className="remove-item-btn">
                    <img src="/close.png" alt="cancer" className="cancer" />
                </button>
            </div>
        </div>
    );
}

export default CartItem;
