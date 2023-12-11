// App.js
import React, { useState } from "react";
import { Button, Table } from "antd";

const ProductLab = () => {
  const [data, setData] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
        setData([]);
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
    const rows = content.split("\n");
    const parsedData = rows.map((row) => {
      const columns = row.split("|");
      return {
        ID: columns[0],
        name: columns[1],
        price: parseFloat(columns[2]),
        brand : columns[3],
        countInStock: parseFloat(columns[4]),
        description: columns[5],
        image: columns[6],
      };
    });

    return parsedData;
  };

  const columns = [
    { title: "STT", dataIndex: "ID", key: "ID",align:'center'},
    {
        title: "Tên sản phẩm",
        dataIndex: "info",
        key: "info",
        render: (text, record) => (
          <div style={{ display: "flex", alignItems: "center" , maxWidth:'400px'}}>
            <img
              alt=""
              src={record.image}
              style={{ width: "30%", height: "auto", marginRight: "8px" }}
            />
            <div>
              <div>
                <strong style={{color:'#ae0303'}}>{record.name}</strong>
              </div>
              <div>{record.description}</div>
            </div>
          </div>
        ),
      },
    
    {
        title: "Giá",
        dataIndex: "price",
        key: "price",
        render: (price) => {
          const formattedPrice = price.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&,");
          return <strong>{`${formattedPrice} VNĐ`}</strong>;
        },
      },
      
      
    {
      title: "Tình trạng",
      dataIndex: "countInStock",
      key: "countInStock",
      align:'center',
      render: (countInStock) => {
        return countInStock === 0 ? (
          <div style={{ color: "#fc0000" }}>
            <b>Hết Hàng </b>({countInStock})
          </div>
        ) : (
          <div style={{ color: "#000000" }}>
            <b>Còn Hàng </b>({countInStock})
          </div>
        );
      },
    },
    { title: "Thương hiệu", dataIndex: "brand", key: "brand",align:'center' },
    {
        title: "",
        dataIndex: "countInStock",
        key: "countInStock",
        align:'center',
        render: (countInStock) => {
          return countInStock === 0 ? (
            <Button type="link" disabled>Thêm vào giỏ hàng</Button>
          ) : (
            <Button type="link">Thêm vào giỏ hàng</Button>
          );
        },
      }
      ,
  ];

  return (
    <div>
      <h1>Products</h1>
      <h1>Reading Data from a File</h1>
      <input type="file" accept=".txt" onChange={handleFileChange} />
      <div style={{padding:'30px'}}>

      <Table dataSource={data} columns={columns} bordered  />
      </div>
    </div>
  );
};

export default ProductLab;
