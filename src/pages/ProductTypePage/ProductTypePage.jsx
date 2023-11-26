import React, { useState, useEffect } from "react";
import "./ProductTypePage.css";
import slide1 from "../../assets/animate1.webp";
import slide2 from "../../assets/animate2.webp";
import slide3 from "../../assets/animate3.webp";
import {  WrapperProducts } from './style'
import { Col, Pagination, Row } from 'antd'
import appleIcon from "../../assets/apple.jpg";
import slide4 from "../../assets/animate4.webp";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";
import { productData } from "../../constants/list";
import { productData1 } from "../../constants/list";
import { productData2 } from "../../constants/list";
import { useQuery } from '@tanstack/react-query'
import * as ProductService from "../../services/ProductService"
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useDebounce } from '../../hooks/useDebounce'
const ProductTypePage = (props) => {

  // Watch: 655ac5d41ad762f698f5e415
  

  let typeOfProdduct = "";
  const { product } = useParams();
  const [productsByType, setProductsByType] = useState([]);
  const [products, setProducts] = useState([])
  const searchProduct = useSelector((state) => state?.product?.search)
  const searchDebounce = useDebounce(searchProduct, 500)
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(6)
  const [typeProducts, setTypeProducts] = useState([])
  const [panigate, setPanigate] = useState({
    page: 0,
    limit: 10,
    total: 1,
})
const onChange = (current, pageSize) => {
  setPanigate({...panigate, page: current - 1, limit: pageSize})    
}
  // const fetchProductByType = async (id) => {
  //   const res = await ProductService.getProductByType(id);
  //   setProductsByType(res);
  //   return res
  // }

  let data = [];
  console.log(product);
  switch (product) {
      case "Iphone":
      data = productData;
      typeOfProdduct = "655ac58e1ad762f698f5e409"
      // fetchProductByType(typeOfProdduct);
      break;
      case "Ipad":
      data = productData2;
      typeOfProdduct = "655ac58e1ad762f698f5e409"
      // fetchProductByType(typeOfProdduct);
      break;
      case "Watch":
      data = productData1;
      typeOfProdduct = "655ac58e1ad762f698f5e409"
      // fetchProductByType(typeOfProdduct);
      break;
    default:
      break;
  }

//   export const getAllProduct = async (search, limit) => {
//     let res = {}
//     if (search?.length > 0) {
//         res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAllProducts?filter=name&filter=${search}&limit=${limit}`)
//     } else {
//         res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAllProducts?limit=${limit}`)
//     }
//     return res.data
// }
  // Xử lí lấy dữ liệu
  const fetchProductAll = async(context) => {
    const limit = context?.queryKey && context?.queryKey[1]
    const search = context?.queryKey && context?.queryKey[2]
    const res = await ProductService.getAllProduct(search, limit)
    return res
  }
  
  const { isLoading, data: listProduct, isPreviousData } = useQuery({
    queryKey: ['products', limit, searchDebounce],
    queryFn: fetchProductAll,
    options: { retry: 3, retryDelay: 1000, keepPreviousData: true }
  })
  
  console.log(listProduct);
  // console.log(productsByType);
  
  // const fetchProductType = async (type, page, limit) => {
  //   setLoading(true)
  //   const res = await ProductService.getProductByType(type, page, limit)
  //   if(res?.status == 'OK') {
  //       setLoading(false)
  //       setProducts(res?.data)
  //       setPanigate({...panigate, total: res?.totalPage})
  //   }else {
  //       setLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   if(product){
  //       fetchProductType(product, panigate.page, panigate.limit)
  //   }
  // }, [product,panigate.page, panigate.limit])



  return (
    <div className="product-page">
      <div className="product">
        <img className="product-image" src={slide1} alt="" />
        <div className="logo">
          <img
            src={appleIcon}
            alt="search icon"
            style={{ width: "60px", backgroundColor:"none" }}
          />
          <h1 className="titleText">{product}</h1>
        </div>
      </div>
      {/* <Loading isLoading={loading}> */}
            <div style={{ marginLeft:'150px',marginBottom:'50px', width: '100%' }}>
                <div style={{ width: '1270px', margin: '0 auto', height: '100%' }}>
                    <Row style={{ flexWrap: 'nowrap', paddingTop: '10px',height: 'calc(100% - 20px)' }}>
                        <Col span={20} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <WrapperProducts >
                            {data.map((product) => (
                                <ProductCard
                                  key={product.id}
                                  image={product.image}
                                  name={product.name}
                                  price={product.price}
                                  totalSales={product.totalSales}
                                  timeLeft={product.timeLeft}
                                  rating={product.rating}
                                  discount={product.discount}
                                />
                              ))}
                            </WrapperProducts>
                            <Pagination defaultCurrent={panigate.page + 1} total={panigate?.total} onChange={onChange} style={{ textAlign: 'center', marginTop: '10px' }} />
                        </Col>
                    </Row>
                </div>
            </div>
        {/* </Loading> */}
      <Footer />
    </div>
  );
};

export default ProductTypePage;
