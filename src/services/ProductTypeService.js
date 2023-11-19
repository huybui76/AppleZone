import axios from "axios"
import { axiosJWT } from "./UserService"

export const getAllProductType = async () => {


    const res = await axios.get(`${process.env.REACT_APP_API_URL}/productType/getAllProductsType`)

    return res.data
}


export const createProductType = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/productType/createProductType`, data)
    return res.data
}

export const getDetailsProductType = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/productType/getProductType/${id}`)
    return res.data
}

export const updateProductType = async (id, data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/productType/updateProductType/${id}`, data, {

    })
    return res.data
}

export const deleteProductType = async (id) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/productType/deleteProductType/${id}`, {

    })
    return res.data
}

