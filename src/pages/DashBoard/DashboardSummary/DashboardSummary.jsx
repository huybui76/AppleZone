import React from 'react';
import { UserOutlined, AppstoreOutlined, FileAddOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import * as ProductService from '../../../services/ProductService';
import * as UserService from '../../../services/UserService';
import * as ProductTypeService from '../../../services/ProductTypeService';

const DashboardSummary = () => {
    const queryUserCount = useQuery({
        queryKey: ['userCount'],
        queryFn: UserService.getAllUser,
    });

    const queryProductCount = useQuery({
        queryKey: ['productCount'],
        queryFn: ProductService.getCountProduct,
    });

    const queryProductTypeCount = useQuery({
        queryKey: ['productTypeCount'],
        queryFn: ProductTypeService.getCountProductType,
    });

    const userCount = queryUserCount.data?.data?.length || 0;
    const productCount = queryProductCount.data?.data || 0;
    const productTypeCount = queryProductTypeCount.data?.data?.length || 0;

    const summaryItems = [
        { key: 'dashboardSummary', icon: <AppstoreOutlined />, name: 'Tổng quan', count: '' },
        { key: 'productTypes', icon: <FileAddOutlined />, name: 'Loại sản phẩm', count: productTypeCount },
        { key: 'products', icon: <AppstoreOutlined />, name: 'Sản phẩm', count: productCount },
        { key: 'users', icon: <UserOutlined />, name: 'Người dùng', count: userCount },
    ];

    return (
        <div style={{ display: 'flex', gap: '30px', padding: '20px' }}>
            {summaryItems.map((item) => (
                <Card key={item.key} style={{ width: 300, backgroundColor: '#e3d9d9' }}>
                    <div style={{ display: 'flex', gap: '20px' }}>

                        <span style={{ fontSize: '28px' }}>{item.icon}</span>
                        <span style={{ fontSize: '28px', color: '#1e6bc3' }}>{item.name}</span>

                    </div>

                    <p style={{ justifyContent: 'center', alignSelf: 'center' }}>
                        {item.count && <span style={{ fontSize: '68px', color: '#ec510f' }}>{item.count}</span>}
                    </p>


                </Card>
            ))
            }
        </div >
    );
};

export default DashboardSummary;
