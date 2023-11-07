import React, { Component } from 'react'
import { NavLink, useLocation, useParams, Switch, Route, Outlet } from 'react-router-dom';
import './index.css'
const Product = () => {
    return (
        <div className="container_dashboard">
            <div className="container_dashboard-menu">
                <ul>
                    dfsf
                </ul>
            </div>
            <div className='container_dashboard-tab'>
                <Outlet />
            </div>
        </div>
    )
}

export default Product