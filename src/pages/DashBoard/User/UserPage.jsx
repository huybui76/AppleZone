import React, { Component } from 'react'
import { NavLink, useLocation, useParams, Switch, Route, Outlet } from 'react-router-dom';
import './index.css'
const User = () => {
    return (
        <div className="container_dashboard">
            <div className="container_dashboard-menu">
                <ul>
                    dsfsd
                </ul>
            </div>
            <div className='container_dashboard-tab'>
                <Outlet />
            </div>
        </div>
    )
}

export default User