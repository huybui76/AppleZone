import axios from "axios"
import { axiosJWT } from "./UserService"

export const getAllProduct = async (search, limit) => {
    let res = {}
    if (search?.length > 0) {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAllProducts?filter=name&filter=${search}&limit=${limit}`)
    } else {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAllProducts?limit=${limit}`)
    }
    return res.data
}
export const getCountProduct = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getCountProduct`)
    return res.data
}

export const getProductByType = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getProductByType/${id}`)
    return res.data
}

export const createProduct = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product/createProduct`, data)
    return res.data
}

export const getDetailsProduct = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getProduct/${id}`)
    return res.data
}

export const updateProduct = async (id, data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/product/updateProduct/${id}`, data
        // , {
        //     headers: {
        //         token: `Bearer ${access_token}`,
        //     }
        // }
    )
    return res.data
}

export const deleteProduct = async (id) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/product/deleteProduc/${id}`
        // , {
        //     headers: {
        //         token: `Bearer ${access_token}`,
        //     }
        // }
    )
    return res.data
}

export const deleteManyProduct = async (data, access_token,) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/product/deleteMany`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

