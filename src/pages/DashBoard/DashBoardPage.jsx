import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.css';

const Dashboard = () => {
    return (
        <div className="container_dashboard">
            <div className="container_dashboard-menu">

            </div>
            <div className='container_dashboard-tab'>
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
