import React, { useState, useEffect } from "react";
import { Button, Form, Modal, Space, message } from "antd";
import { useQuery } from "@tanstack/react-query";
import TableComponent from "../../../components/TableComponent/TableComponent";
import * as OrderService from "../../../services/OrderService";
import * as ProductService from "../../../services/ProductService";
import { useMutationHooks } from "../../../hooks/useMutationHooks";

import "./index.css";

const Order = () => {
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [deletingOrderId, setDeletingOrderId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const queryOrder = useQuery({
        queryKey: ["orders"],
        queryFn: OrderService.getAllOrder,
    });
    const { data: orders } = queryOrder;

    const queryProduct = useQuery({
        queryKey: ["products"],
        queryFn: ProductService.getCountProduct,
    });
    const { data: products } = queryProduct;

    const showDeleteConfirmation = (orderId) => {
        setDeletingOrderId(orderId);
        setIsDeleteModalVisible(true);
    };

    const handleDeleteConfirmed = async () => {
        const productToDel = orders?.data?.find((order) => order._id === deletingOrderId)
        const response = await OrderService.cancelOrder(deletingOrderId, productToDel?.orderItems);

        queryOrder.refetch();
        setIsDeleteModalVisible(false);
        if (response.status === "OK") {
            message.success("Xoá Đơn Hàng Thành Công!");
            console.log("Xoá Đơn Hàng Thành Công!");
        }
    };
    const getNameProduct = (productId) => {
        const product = products?.data?.find(
            (product) => product._id === productId
        );
        return product ? product.name : "...";
    };
    const handleDeleteManyProducts = (ids) => {
        Modal.confirm({
            title: "Xác nhận xoá",
            content: "Bạn có chắc chắn muốn xoá tất cả sản phẩm?",
            okText: "Xoá",
            cancelText: "Hủy",
            onOk: async () => {

            },
        });
    };
    const GetTime = (time) => {
        const dateObject = new Date(time);

        // Lấy thông tin về ngày và giờ
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần cộng thêm 1
        const day = dateObject.getDate();
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes();

        return (
            <div >{hours}:{minutes} / {day}-{month}-{year}</div>
        )

    }

    const columns = [
        {
            title: "STT",
            dataIndex: "index",
            key: "index",
            render: (_, __, index) => (currentPage - 1) * pageSize + index + 1,
        },
        // Add other columns based on the structure of your order data
        {
            title: "Địa chỉ nhận hàng",
            dataIndex: "shippingAddress",
            key: "shippingAddress",
            render: (shippingAddress) => (
                <>
                    <div>Tên: {shippingAddress.fullName}</div>
                    <div>Địa chỉ: {shippingAddress.address}</div>
                    <div>Số điện thoại: {shippingAddress.phone}</div>
                </>
            ),
        },
        {
            title: "Danh sách sản phẩm",
            dataIndex: "orderItems",
            key: "orderItems",
            render: (orderItems) => (
                <>
                    {orderItems.map((item, index) => (
                        <div key={index}>
                            <div>{getNameProduct(item.product)} - SL: {item.amount}</div>
                            {/* <p>{item.amount}</p> */}
                        </div>
                    ))}
                </>
            ),
        },
        {
            title: "PTNH",
            dataIndex: "shippingMethod",
            key: "shippingMethod",

        },
        {
            title: "Giá",
            dataIndex: "itemsPrice",
            key: "itemsPrice",
        },
        // {
        //     title: "Phí giao hàng",
        //     dataIndex: "shippingPrice",
        //     key: "shippingPrice",
        // },
        {
            title: "Kết Toán",
            dataIndex: "totalPrice",
            key: "totalPrice",
        },
        {
            title: "Thời Gian",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (createdAt) => (
                GetTime(createdAt)
            ),
        },
        {
            title: "Thao tác",
            key: "action",
            render: (_, record) => (
                <Space className="action-icons-container" size="middle">
                    {/* Add any other actions you want to include */}
                    <a onClick={() => showDeleteConfirmation(record._id)}>Xoá</a>
                </Space>
            ),
        },
    ];

    const isLoadingOrders = queryOrder.isLoading;

    const dataTable = orders?.data
        // ?.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        ?.map((order) => ({
            key: order._id,
            _id: order._id,
            shippingAddress: order.shippingAddress,
            orderItems: order.orderItems,
            shippingMethod: order.shippingMethod,
            itemsPrice: order.itemsPrice,
            shippingPrice: order.shippingPrice,
            totalPrice: order.totalPrice,
            createdAt: order.createdAt
        }))




    return (
        <div className="dashboard_category">
            <h2 className="dashboard_category-title">Danh sách tất cả đơn hàng</h2>
            <div className="dashboard_category-show-product">
                {orders && orders.data ? (
                    <div style={{ marginTop: "20px" }}>
                        <TableComponent
                            handleDeleteMany={handleDeleteManyProducts}
                            columns={columns}
                            isLoading={isLoadingOrders}
                            data={dataTable}

                            pagination={{
                                current: currentPage,
                                pageSize: pageSize,
                                total: orders.total,
                                onChange: (page, pageSize) => {
                                    setCurrentPage(page);
                                },
                            }}
                        />
                    </div>
                ) : (
                    <p>...</p>
                )}
            </div>
            {/* Delete Confirmation Modal */}
            <Modal
                title="Xác nhận xoá"
                open={isDeleteModalVisible}
                onOk={handleDeleteConfirmed}
                onCancel={() => setIsDeleteModalVisible(false)}
            >
                <p>Bạn có chắc chắn muốn xoá đơn hàng này?</p>
            </Modal>
        </div>
    );
};

export default Order;
