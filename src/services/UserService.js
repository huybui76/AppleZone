import axios from "axios"

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, data)
    return res.data
}

export const signupUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/signUp`, data)
    return res.data
}

export const getDetailsUser = async (id) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/user/getDetailsUser/${id}`
        // , 
        // {
        //     headers: {
        //         token: `Bearer ${access_token}`,
        //     }
        // }
        ,)
    return res.data
}

export const deleteUser = async (id, data) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/user/deleteUser/${id}`, data
        // , {
        //     headers: {
        //         token: `Bearer ${access_token}`,
        //     }
        // }
        ,)
    return res.data
}

export const getAllUser = async () => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/user/getAllUsers`
        // , {
        //     headers: {
        //         token: `Bearer ${access_token}`,
        //     }
        // }
        ,)
    return res.data
}


export const refreshToken = async (refreshToken) => {
    console.log('refreshToken', refreshToken)
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/refreshToken`, {}
        // , {
        //     headers: {
        //         token: `Bearer ${refreshToken}`,
        //     }
        // }
    )
    return res.data
}

export const logoutUser = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/logout`)
    return res.data
}

export const updateUser = async (id, data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/user/updateUser/${id}`, data
        // , {
        //     headers: {
        //         token: `Bearer ${access_token}`,
        //     }
        // }
    )
    return res.data
}

export const deleteManyUser = async (data) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/user/deleteMany`, data
        // , {
        //     headers: {
        //         token: `Bearer ${access_token}`,
        //     }
        // }
    )
    return res.data
}