import axios from 'axios'
import { axiosJWT } from './UserService'

export const getAllProduct = async (search, limit) => {
  let res = {}
  if (search?.length > 0) {
    res = await axios.get(`${import.meta.env.VITE_BASE_URL_API}/products?filter=name&filter=${search}&limit=${limit}`)
  } else {
    res = await axios.get(`${import.meta.env.VITE_BASE_URL_API}/products?limit=${limit}`)
  }
  return res.data
}
export const getProductsType = async (type, page, limit) => {
  let res = {}
  if (type) {
    res = await axios.get(`${import.meta.env.VITE_BASE_URL_API}/products?filter=type&filter=${type}&limit=${limit}&page=${page}`)
    return res.data
  }
}

export const getProductByType = async (id) => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL_API}/productTypes/${id}`)
  return res.data
}

export const getProductType = async (type, page, limit) => {
  if (type) {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL_API}/products?filter=type&filter=${type}&limit=${limit}&page=${page}`)
    return res.data
  }
}
export const createProduct = async (data) => {
  const res = await axios.post(`${import.meta.env.VITE_BASE_URL_API}/products`, data)
  return res.data
}

export const getDetailsProduct = async (id) => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL_API}/products/${id}`)
  return res.data
}

export const updateProduct = async (id, data) => {
  const res = await axiosJWT.put(`${import.meta.env.VITE_BASE_URL_API}/products/${id}`, data
    // , {
    //     headers: {
    //         token: `Bearer ${access_token}`,
    //     }
    // }
  )
  return res.data
}

export const deleteProduct = async (id) => {
  const res = await axiosJWT.delete(`${import.meta.env.VITE_BASE_URL_API}/products/${id}`
    // , {
    //     headers: {
    //         token: `Bearer ${access_token}`,
    //     }
    // }
  )
  return res.data
}

export const deleteManyProduct = async (data, access_token) => {
  const res = await axiosJWT.post(`${import.meta.env.VITE_BASE_URL_API}/products`, data, {
    headers: {
      token: `Bearer ${access_token}`
    }
  })
  return res.data
}

