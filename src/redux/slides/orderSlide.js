import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems: [],

    shippingAddress: {},
    paymentMethod: "",
    itemsPrice: 0,
    shippingPrice: 0,

    totalPrice: 0,
    phone: "",
    isSucessOrder: false,
};

export const orderSlide = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrderProduct: (state, action) => {
            const { orderItem } = action.payload;
            const itemOrder = state?.orderItems?.find(
                (item) => item?.product === orderItem.product
            );
            if (itemOrder) {
                if (itemOrder.amount <= itemOrder.countInstock) {
                    itemOrder.amount += orderItem?.amount;
                    state.isSucessOrder = true;
                    state.isErrorOrder = false;
                }
            } else {
                state.orderItems.push(orderItem);
            }
        },
        resetOrder: (state) => {
            state.isSucessOrder = false;
        },
        increaseAmount: (state, action) => {
            const { idProduct } = action.payload;
            const itemOrder = state?.orderItems?.find(
                (item) => item?.product === idProduct
            );
            const itemOrderSelected = state?.orderItemsSlected?.find(
                (item) => item?.product === idProduct
            );
            itemOrder.amount++;
            if (itemOrderSelected) {
                itemOrderSelected.amount++;
            }
        },
        decreaseAmount: (state, action) => {
            const { idProduct } = action.payload;
            const itemOrder = state?.orderItems?.find(
                (item) => item?.product === idProduct
            );
            const itemOrderSelected = state?.orderItemsSlected?.find(
                (item) => item?.product === idProduct
            );
            itemOrder.amount--;
            if (itemOrderSelected) {
                itemOrderSelected.amount--;
            }
        },
        removeOrderProduct: (state, action) => {
            const { idProduct } = action.payload;

            const itemOrder = state?.orderItems?.filter(
                (item) => item?.product !== idProduct
            );
            const itemOrderSeleted = state?.orderItemsSlected?.filter(
                (item) => item?.product !== idProduct
            );

            state.orderItems = itemOrder;
            state.orderItemsSlected = itemOrderSeleted;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    addOrderProduct,
    increaseAmount,
    decreaseAmount,
    removeOrderProduct,
    resetOrder,
} = orderSlide.actions;

export default orderSlide.reducer;
