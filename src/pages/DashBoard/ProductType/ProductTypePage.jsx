import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DeleteTwoTone, EditOutlined } from '@ant-design/icons';
import { Button, Form, Modal } from 'antd';
import axiosClient from '../../../services/axiosClient';
import ModalComponent from '../../../components/ModalComponent/ModalComponent';
import { useQuery } from '@tanstack/react-query';
import InputComponent from '../../../components/InputComponent/InputComponent';
import { WrapperHeader, WrapperUploadFile } from './style';
import { getBase64 } from '../../../utils';

import './index.css';
import * as ProductTypeService from '../../../services/ProductTypeService';
import { useMutationHooks } from '../../../hooks/useMutationHooks';

const INITIAL_STATE = {
    name: '',
    image: '',
};

const ProductType = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProductTypeId, setEditingProductTypeId] = useState(null);
    const [form] = Form.useForm();
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [deletingCategoryId, setDeletingCategoryId] = useState(null);

    const mutation = useMutationHooks(async (data) => {
        const { name, image } = data;
        if (editingProductTypeId) {
            // If editing, update the existing product type
            const res = await ProductTypeService.updateProductType(editingProductTypeId, { name, image });
            return res;
        } else {
            // If creating, create a new product type
            const res = await ProductTypeService.createProductType({ name, image });
            return res;
        }
    });

    const queryProductType = useQuery({
        queryKey: ['productType'],
        queryFn: ProductTypeService.getAllProductType,
    });
    const { data: productTypes } = queryProductType;

    const showDeleteConfirmation = (categoryId) => {
        setDeletingCategoryId(categoryId);
        setIsDeleteModalVisible(true);
    };

    const deleteCategory = async (_id) => {
        setDeletingCategoryId(_id);
        setIsDeleteModalVisible(true);
    };

    const handleDeleteConfirmed = async () => {
        await axiosClient.delete(`productType/deleteProductType/${deletingCategoryId}`, { _id: deletingCategoryId });

        queryProductType.refetch();
        setIsDeleteModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setEditingProductTypeId(null);
        form.resetFields();
    };

    const onFinish = async (values) => {
        const isNameExists = productTypes?.data?.some(
            (item) => item.name.toLowerCase() === values.name.toLowerCase() && item._id !== editingProductTypeId
        );

        if (isNameExists) {
            alert('Danh mục này đã tồn tại!');
            return;
        }

        try {
            const data = await mutation.mutateAsync(values);

            if (data?.status === 'OK' && data?.message === 'ProductType created successfully') {
                handleCancel();
                alert('Thêm danh mục thành công');
                // Update the query to refetch data after mutation
                queryProductType.refetch();
            }

            if (data?.status === 'OK' && data?.message === 'UPDATE PRODUCT TYPE SUCCESS') {
                handleCancel();
                alert('Sửa danh mục thành công');
                // Update the query to refetch data after mutation
                queryProductType.refetch();
            }
        } catch (error) {
            console.error('Error creating ProductType:', error);
        }
    };

    const handleOnchangeAvatar = async ({ fileList }) => {
        const file = fileList[0];
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        form.setFieldsValue({
            image: file.preview,
        });
    };
    const editCategory = (productTypeId) => {
        const selectedProductType = productTypes.data.find((item) => item._id === productTypeId);
        if (selectedProductType) {
            setIsModalOpen(true);
            setEditingProductTypeId(productTypeId);
            form.setFieldsValue({
                name: selectedProductType.name,
                image: selectedProductType.image,
            });
        }
    };

    return (
        <div className="dashboard_category">
            <div className="dashboard_category-add">
                <button onClick={() => setIsModalOpen(true)}>Thêm mới</button>
            </div>
            <ModalComponent
                forceRender
                title="Tạo sản phẩm"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 9 }}
                    wrapperCol={{ span: 14 }}
                    onFinish={onFinish}
                    autoComplete="on"
                    form={form}
                >
                    <Form.Item
                        label="Tên loại sản phẩm"
                        name="name"
                        rules={[{ required: true, message: 'Tên loại sản phẩm!' }]}
                    >
                        <InputComponent />
                    </Form.Item>
                    <Form.Item
                        label="Hình ảnh"
                        name="image"
                        rules={[{ required: true, message: 'Chọn hình ảnh!' }]}
                    >
                        <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                            <Button>Select File</Button>
                            {form.getFieldValue('image') && (
                                <img
                                    src={form.getFieldValue('image')}
                                    style={{
                                        height: '60px',
                                        width: '60px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        marginLeft: '10px',
                                    }}
                                    alt="avatar"
                                />
                            )}
                        </WrapperUploadFile>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </ModalComponent>
            <h2 className="dashboard_category-title">Danh sách tất cả danh mục</h2>
            <div className="dashboard_category-show">
                {productTypes && productTypes.data ? (
                    productTypes.data.map((productTypeData) => (
                        <div key={productTypeData._id} className="dashboard_category-show--content">
                            <img src={productTypeData.image} alt="" />
                            <h3>{productTypeData.name}</h3>
                            <div className="button-container">
                                <EditOutlined className="edit_icon" onClick={() => editCategory(productTypeData._id)} />
                                <DeleteTwoTone className="delete_icon" onClick={() => showDeleteConfirmation(productTypeData._id)} />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            {/* Delete Confirmation Modal */}
            <Modal
                title="Xác nhận xoá"
                visible={isDeleteModalVisible}
                onOk={handleDeleteConfirmed}
                onCancel={() => setIsDeleteModalVisible(false)}
            >
                <p>Bạn có chắc chắn muốn xoá danh mục này?</p>
            </Modal>
        </div>
    );
};

export default ProductType;
