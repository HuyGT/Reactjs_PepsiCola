/* eslint-disable jsx-a11y/alt-text */
import { Rate, Tag } from "antd";
import { PaymentTypes, Status } from "./types";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { BsCashStack, BsPaypal } from "react-icons/bs";
import { GrVisa } from "react-icons/gr";

export const columnsAll = {
  columnCart: [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={image} style={{ width: "50px", height: "80px" }}></img>
      ),
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Quantity",
      dataIndex: "cartQuantity",
      key: "cartQuantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_, record) => <div>${record.price}</div>,
    },
  ],
  columnBrand: [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={image} style={{ width: "80px", height: "80px" }}></img>
      ),
    },
    {
      title: "Name",
      dataIndex: "brandName",
      key: "brandName",
    },
  ],
  columnPro: [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={image} style={{ width: "50px", height: "80px" }}></img>
      ),
    },
    {
      title: "Name",
      dataIndex: "productName",
      key: "productName",
      width: "30%",
    },

    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      render: (_, record) => <div>{record.price}$</div>,
    },
    {
      title: "Sold",
      key: "sold",
      dataIndex: "sold",
      sorter: (a, b) => a.sold - b.sold,
    },
  ],
  columnProSort: [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={image} style={{ width: "80px", height: "80px" }}></img>
      ),
    },
    {
      title: "Name",
      dataIndex: "productName",
      key: "productName",
      width: "30%",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_, record) => <div>{record.price}$</div>,
    },
    {
      title: "Sold",
      key: "sold",
      dataIndex: "sold",
    },
  ],
  columnUser: [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (_, record) =>
        record.avatar ? (
          <img
            src={record.avatar}
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          ></img>
        ) : (
          <img
            src="https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2020/08/1596889687_145_Anh-avatar-dep-va-doc-dao-lam-hinh-dai-dien.jpg"
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          ></img>
        ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
      sorter: (a, b) => a.role - b.role,
      render: (role) => {
        let color = "geekblue";
        let icon = "";
        if (role === "admin") {
          color = "processing";
          icon = <UserOutlined />;
        } else if (role === "user") {
          color = "cyan";
          icon = <UsergroupAddOutlined />;
        }

        return (
          <Tag
            icon={icon}
            color={color}
            key={role}
            className="d-flex justify-content-center align-items-center w-50 "
            style={{ fontSize: "2rem", fontWeight: "500", padding: "10px" }}
          >
            {role?.toUpperCase()}
          </Tag>
        );
      },
    },
  ],
  columnOrder: [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },

    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Address",
      key: "address",
      dataIndex: "address",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        let color = "";
        let icon = "";
        if (status === Status.PROCESSING) {
          color = "processing";
          icon = <SyncOutlined spin />;
        } else if (status === Status.SHIPPING) {
          color = "cyan";
          icon = <ClockCircleOutlined spin />;
        } else if (status === Status.DELIVERED) {
          color = "success";
          icon = <CheckCircleOutlined />;
        } else if (status === Status.CANCELED) {
          color = "error";
          icon = <CloseCircleOutlined />;
        }

        return (
          <Tag
            icon={icon}
            color={color}
            key={status}
            className="d-flex justify-content-center align-items-center gap-2"
            style={{
              fontSize: "1.8rem",
              fontWeight: "500",
              padding: "10px",
              width: "200px",
            }}
          >
            {status}
          </Tag>
        );
      },
    },

    {
      title: "Payment",
      key: "payment",
      dataIndex: "payment",
      render: (payment) => {
        let color = "geekblue";
        let icon = "";
        if (payment === PaymentTypes.PAYPAL) {
          color = "blue";
          icon = <BsPaypal />;
        } else if (payment === PaymentTypes.VISA) {
          color = "purple";
          icon = <GrVisa />;
        } else if (payment === PaymentTypes.CASH) {
          icon = <BsCashStack />;
          color = "green";
        }

        return (
          <Tag
            color={color}
            key={payment}
            icon={icon}
            className="d-flex justify-content-center align-items-center gap-2"
            style={{
              fontSize: "1.8rem",
              fontWeight: "500",
              padding: "10px",
              width: "150px",
            }}
          >
            {payment?.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Total",
      key: "total",
      dataIndex: "total",
      sorter: (a, b) => a.total - b.total,
      render: (_, record) => <div>{record.total}$</div>,
    },
  ],
  columnDetailOrder: [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <img
          src={record.image}
          style={{ width: "60px", height: "80px" }}
        ></img>
      ),
    },
    {
      title: "Product name",
      key: "productName",
      dataIndex: "productName",
    },
   
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      render: (_, record) => <div>{record.price}$</div>,
    },
    {
      title: "Quantity",
      key: "cartQuantity",
      dataIndex: "cartQuantity",
    },
    {
      title: "Amount",
      key: "amount",
      dataIndex: "amount",
      sorter: (a, b) => a.price - b.price,
      render: (_, record) => <div>{record.price * record.cartQuantity}$</div>,
    },
    
  ],
  columnRat: [
    {
      title: "Rating Id",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Product Id",
      dataIndex: "productId",
      key: "productId",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
    },
    {
      title: "Star",
      dataIndex: "rate",
      key: "rate",
      render: (_, record) => <Rate disabled value={record.rate} />,
    },
  ],
};
