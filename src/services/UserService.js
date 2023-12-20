import axios from 'axios'

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
  const res = await axios.post(`${import.meta.env.VITE_BASE_URL_API}/user/login`, data)
  return res.data
}

export const signupUser = async (data) => {
  const res = await axios.post(`${import.meta.env.VITE_BASE_URL_API}/user/signUp`, data)
  return res.data
}

export const getDetailsUser = async (id) => {
  const res = await axiosJWT.get(`${import.meta.env.VITE_BASE_URL_API}/user/${id}`
    // ,
    // {
    //     headers: {
    //         token: `Bearer ${access_token}`,
    //     }
    // }
  )
  return res.data
}

export const deleteUser = async (id, data) => {
  const res = await axiosJWT.delete(`${import.meta.env.VITE_BASE_URL_API}/user/${id}`, data
    // , {
    //     headers: {
    //         token: `Bearer ${access_token}`,
    //     }
    // }
  )
  return res.data
}

export const getAllUser = async () => {
  const res = await axiosJWT.get(`${import.meta.env.VITE_BASE_URL_API}/users`
    // , {
    //     headers: {
    //         token: `Bearer ${access_token}`,
    //     }
    // }
  )
  return res.data
}


export const refreshToken = async (refreshToken) => {

  const res = await axios.post(`${import.meta.env.VITE_BASE_URL_API}/users/refreshToken`, {}
    // , {
    //     headers: {
    //         token: `Bearer ${refreshToken}`,
    //     }
    // }
  )
  return res.data
}

export const logoutUser = async () => {
  const res = await axios.post(`${import.meta.env.VITE_BASE_URL_API}/users/logout`)
  return res.data
}

export const updateUser = async (id, data) => {
  const res = await axiosJWT.put(`${import.meta.env.VITE_BASE_URL_API}/users/${id}`, data
    // , {
    //     headers: {
    //         token: `Bearer ${access_token}`,
    //     }
    // }
  )
  return res.data
}

export const deleteManyUser = async (data) => {
  const res = await axiosJWT.post(`${import.meta.env.VITE_BASE_URL_API}/users`, data
    // , {
    //     headers: {
    //         token: `Bearer ${access_token}`,
    //     }
    // }
  )
  return res.data
}