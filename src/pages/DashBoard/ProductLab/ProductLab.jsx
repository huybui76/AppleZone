// App.js
import React, { useState } from 'react';
import { Button, Table, message } from 'antd';

const ProductLab = () => {
    const [data, setData] = useState([]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target.result;
                const parsedData = parseTxtData(content);
                setData(parsedData);
            };
            reader.readAsText(file);
        }
    };

    const parseTxtData = (content) => {
        const rows = content.split('\n');
        const parsedData = rows.map((row) => {
            const columns = row.split('|');
            return {
                ID: columns[0],
                'Tên sản phẩm': columns[1],
                price: parseFloat(columns[2]),
                'Thương hiệu': columns[3],
                'countInStock': parseFloat(columns[4]),
                'mô tả': columns[5],
                'image': columns[6],
            };
        })

        return parsedData;
    };

    const columns = [
        { title: 'STT', dataIndex: 'ID', key: 'ID' },
        {
            title: 'Hình ảnh', dataIndex: 'image', key: 'image',
            render: (image) => (
                <img
                    src={image}
                    style={{ width: "50px", height: "auto" }}
                />
            ),
        },
        { title: 'Tên sản phẩm', dataIndex: 'Tên sản phẩm', key: 'Tên sản phẩm' },
        { title: 'Giá', dataIndex: 'price', key: 'price', render: (price) => price.toLocaleString("vi-VN") },
        {
            title: 'Số lượng', dataIndex: 'countInStock', key: 'countInStock',
            render: (countInStock) => {
                return countInStock === 0 ? <div style={{ color: '#fc0000' }}><b>Hết Hàng </b>({countInStock})</div>
                    : <div style={{ color: '#000000' }}><b>Còn Hàng </b>({countInStock})</div>;
            },
        },
        { title: 'Thương hiệu', dataIndex: 'Thương hiệu', key: 'Thương hiệu' },
        {
            title: 'Chức năng', dataIndex: 'price', key: 'price1', render: (price) => {
                return price === 0 ? <div>Thêm vào giỏ hàng</div> : <div><a>Thêm vào giỏ</a></div>;

            }
        },
    ];

    return (
        <div>
            <h1>Products</h1>
            <h1>Reading Data from a File</h1>
            <input type="file" accept=".txt" onChange={handleFileChange} />
            <Table dataSource={data} columns={columns} />
        </div>
    );
};

export default ProductLab;
