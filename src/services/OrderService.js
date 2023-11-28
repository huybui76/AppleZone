import { axiosJWT } from "./UserService";

export const createOrder = async (data) => {
    const res = await axiosJWT.post(
        `${process.env.REACT_APP_API_URL}/order/create-order`,
        data,
        {}
    );
    return res.data;
};

export const getOrderByPhone = async (id) => {
    const res = await axiosJWT.get(
        `${process.env.REACT_APP_API_URL}/order/get-order-by-phone/${id}`,
        {}
    );
    return res.data;
};

export const getDetailsOrder = async (id) => {
    const res = await axiosJWT.get(
        `${process.env.REACT_APP_API_URL}/order/get-details-order/${id}`,
        {}
    );
    return res.data;
};

export const cancelOrder = async (id, orderItems, userId) => {
    const data = { orderItems };
    const res = await axiosJWT.delete(
        `${process.env.REACT_APP_API_URL}/order/cancel-order/${id}`,
        { data },
        {}
    );
    return res.data;
};

export const getAllOrder = async () => {
    const res = await axiosJWT.get(
        `${process.env.REACT_APP_API_URL}/order/get-all-order`,
        {}
    );
    return res.data;
};
