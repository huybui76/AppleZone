import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DeleteTwoTone, EditOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
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
    const [category, setCategory] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stateProduct, setStateProduct] = useState(INITIAL_STATE);
    const [form] = Form.useForm();
    const mutation = useMutationHooks((data) => {
        const { name, image } = data;
        const res = ProductTypeService.createProductType({ name, image });
        return res;
    });

    // Move getAllProductType below the useMutationHooks
    const getAllProductType = async () => {
        const res = await ProductTypeService.getAllProductType();
        return res;
    };

    const mutationUpdate = useMutationHooks((data) => {
        const { id, token, ...rests } = data;
        const res = ProductTypeService.updateProductType(id, token, { ...rests });
        return res;
    });

    const queryProduct = useQuery({
        queryKey: ['productType'],
        queryFn: getAllProductType,
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axiosClient.get('productType/getAllProductsType');
            setCategory(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const deleteCategory = async (_id) => {
        await axiosClient.delete(`productType/deleteProductType/${_id}`, { _id });
        const newCategoryList = category.filter((cat) => cat._id !== _id);
        setCategory(newCategoryList);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setStateProduct(INITIAL_STATE);
        form.resetFields();
    };

    const onFinish = async () => {
        const params = {
            name: stateProduct.name,
            image: stateProduct.image,
        };

        // Check if the product type name already exists
        const isNameExists = category.some((item) => item.name.toLowerCase() === stateProduct.name.toLowerCase());

        if (isNameExists) {
            // Display an error message or handle the duplication in a way that fits your application
            alert('Danh mục này đã tồn tại!');
            return;
        }

        // Continue with the mutation if the name is unique
        mutation.mutate(params, {
            onSuccess: (data) => {
                if (data?.status === 'OK') {
                    handleCancel();
                    alert('ProductType created successfully');
                    queryProduct.refetch();
                }
            },
            onError: (error) => {
                console.error('Error creating ProductType:', error);
            },
        });
    };


    const handleOnchange = (e) => {
        setStateProduct({
            ...stateProduct,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnchangeAvatar = async ({ fileList }) => {
        const file = fileList[0];
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateProduct({
            ...stateProduct,
            image: file.preview,
        });
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
                        <InputComponent value={stateProduct['name']} onChange={handleOnchange} name="name" />
                    </Form.Item>
                    <Form.Item
                        label="Hình ảnh"
                        name="image"
                        rules={[{ required: true, message: 'Chọn hình ảnh!' }]}
                    >
                        <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                            <Button>Select File</Button>
                            {stateProduct?.image && (
                                <img
                                    src={stateProduct?.image}
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
                {category &&
                    category.map((cate) => (
                        <div key={cate._id} className="dashboard_category-show--content">
                            <img src={cate.image} alt="" />
                            <h3>{cate.name}</h3>
                            <NavLink to={`/dashboard/category/${cate._id}`}>
                                <EditOutlined />
                            </NavLink>
                            <DeleteTwoTone className="delete_icon" onClick={() => deleteCategory(cate._id)} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ProductType;