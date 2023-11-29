import React, { useState, useEffect } from "react";
import "./SalesMenu.css";
import ProductItem from "../ProductItem/ProductItem"; // Component hiển thị sản phẩm
import { useQuery } from "@tanstack/react-query";
import * as ProductService from "../../services/ProductService";
import { useDebounce } from "../../hooks/useDebounce";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
function Menu() {
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);
  const [limit, setLimit] = useState(5);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProductAll = async (searchDebounce, limit) => {
    setLoading(true);
    const res = await ProductService.getAllProduct(searchDebounce, limit);
    if (res?.status == "OK") {
      setLoading(false);
      setProducts(res?.data);
    } else {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProductAll(searchDebounce, limit);
  }, []);
  return (
    <Loading isLoading={loading}>
      <div className="Menu">
        {products?.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </Loading>
  );
}

export default Menu;
