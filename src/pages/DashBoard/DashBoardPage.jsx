import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useQueries } from '@tanstack/react-query';
import { Menu } from 'antd';
import { getItem } from '../../utils';
import { UserOutlined, AppstoreOutlined, FileAddOutlined, DashboardOutlined } from '@ant-design/icons';

import ProductPage from '../../pages/DashBoard/Product/ProductPage';
import ProductTypePage from '../../pages/DashBoard/ProductType/ProductTypePage';
import UserPage from '../../pages/DashBoard/User/UserPage';
import DashboardSummary from '../../pages/DashBoard/DashboardSummary/DashboardSummary';


const Dashboard = () => {
    const user = useSelector((state) => state?.user);
    const [keySelected, setKeySelected] = useState('dashboard');

    const items = [
        getItem('Tổng quan', 'dashboard', <DashboardOutlined />),
        getItem('Loại sản phẩm', 'productTypes', <FileAddOutlined />),
        getItem('Sản phẩm', 'products', <AppstoreOutlined />),
        getItem('Người dùng', 'users', <UserOutlined />),
    ];

    const handleOnClick = ({ key }) => {
        setKeySelected(key);
    };

    const renderPage = (key) => {
        switch (key) {
            case 'users':
                return <UserPage />;
            case 'products':
                return <ProductPage />;
            case 'productTypes':
                return <ProductTypePage />;
            case 'dashboard':
                return <DashboardSummary />;
            default:
                return;
        }
    };

    return (
        <>
            <div style={{ display: 'flex', overflowX: 'hidden', marginTop: 100 }}>
                <Menu
                    mode="inline"
                    style={{
                        width: 200,
                        boxShadow: '1px 1px 2px #ccc',
                        height: '100vh'
                    }}
                    items={items}
                    onClick={handleOnClick}
                    defaultSelectedKeys={['dashboard']}
                />
                <div style={{ flex: 1, padding: '15px 0 15px 15px' }}>
                    {renderPage(keySelected)}
                </div>
            </div>
        </>
    );
};



export default Dashboard;
