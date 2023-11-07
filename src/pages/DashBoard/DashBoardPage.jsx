import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.css';

const Dashboard = () => {
    return (
        <div className="container_dashboard">
            <div className="container_dashboard-menu">
                <ul>
                    <li>
                        <NavLink to="/dashboard" end={true} activeClassName="active">
                            Tổng quan
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/product-type" activeClassName="active">
                            Loại sản phẩm
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/product" activeClassName="active">
                            Sản phẩm
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/user" activeClassName="active">
                            Người dùng
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='container_dashboard-tab'>
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
