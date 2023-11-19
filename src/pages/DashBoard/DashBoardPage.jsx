import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useQueries } from '@tanstack/react-query';
import { Menu } from 'antd';
import { getItem } from '../../utils';
import { UserOutlined, AppstoreOutlined, FileAddOutlined } from '@ant-design/icons';

import ProductPage from '../../pages/DashBoard/Product/ProductPage';
import ProductTypePage from '../../pages/DashBoard/ProductType/ProductTypePage';
import UserPage from '../../pages/DashBoard/User/UserPage';

import * as ProductService from '../../services/ProductService';
import * as UserService from '../../services/UserService';

const Dashboard = () => {
    const user = useSelector((state) => state?.user);


    const items = [
        getItem('Loại sản phẩm', 'productTypes', <FileAddOutlined />),
        getItem('Sản phẩm', 'products', <AppstoreOutlined />),
        getItem('Người dùng', 'users', <UserOutlined />),
    ];

    const [keySelected, setKeySelected] = useState('');

    const getAllProducts = async () => {
        const res = await ProductService.getAllProduct();
        console.log('res1', res);
        return { data: res?.data, key: 'products' };
    };

    const getAllUsers = async () => {
        const res = await UserService.getAllUser(user?.access_token);
        console.log('res', res);
        return { data: res?.data, key: 'users' };
    };

    const queries = useQueries({
        queries: [
            { queryKey: ['products'], queryFn: getAllProducts, staleTime: 1000 * 60 },
            { queryKey: ['users'], queryFn: getAllUsers, staleTime: 1000 * 60 },
        ]
    });

    const memoCount = useMemo(() => {
        const result = {};
        try {
            if (queries) {
                queries.forEach((query) => {
                    result[query?.data?.key] = query?.data?.data?.length;
                });
            }
            return result;
        } catch (error) {
            return result;
        }
    }, [queries]);

    const renderPage = (key) => {
        switch (key) {
            case 'users':
                return <UserPage />;
            case 'products':
                return <ProductPage />;
            case 'productTypes':
                return <ProductTypePage />;
            default:
                return <></>;
        }
    };

    const handleOnClick = ({ key }) => {
        setKeySelected(key);
    };

    console.log('memoCount', memoCount);

    return (
        <>
            <div style={{ display: 'flex', overflowX: 'hidden', marginTop: 100 }}>
                <Menu
                    mode="inline"
                    style={{
                        width: 256,
                        boxShadow: '1px 1px 2px #ccc',
                        height: '100vh'
                    }}
                    items={items}
                    onClick={handleOnClick}
                />
                <div style={{ flex: 1, padding: '15px 0 15px 15px' }}>
                    {renderPage(keySelected)}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
