import { lazy } from "react";
import { ROUTER_PATH } from "./routerLink";

//user
const Home = lazy(() => import("../pages/User/Home"));
const Shop = lazy(() => import("../pages/User/Shop"));
const Login = lazy(() => import("../pages/User/Login"));
const Detail = lazy(() => import("../pages/User/Detail"));


//admin
const Admin = lazy(() => import("../pages/Admin/Dashboard"));
const Products = lazy(() => import("../pages/Admin/Products"));
const Brands = lazy(() => import("../pages/Admin/Brands"));
const Users = lazy(() => import("../pages/Admin/Users"));
const Orders = lazy(() => import("../pages/Admin/Orders"));

// user
export const userRouter = [
  {
    path: ROUTER_PATH.HOME.path,
    isExact: true,
    component: Home,
  },
  {
    path: ROUTER_PATH.SHOP.path,
    isExact: true,
    component: Shop,
  },
  {
    path: ROUTER_PATH.LOGIN.path,
    isExact: true,
    component: Login,
  },
  {
    path: ROUTER_PATH.DETAIL.path,
    isExact: true,
    component: Detail,
  },
];

// admin
export const adminRouter = [
  {
    path: ROUTER_PATH.ADMIN.path,
    isExact: true,
    component: Admin,
  },
  {
    path: ROUTER_PATH.BRANDS.path,
    isExact: true,
    component: Brands,
  },
  {
    path: ROUTER_PATH.ORDERS.path,
    isExact: true,
    component: Orders,
  },
  {
    path: ROUTER_PATH.PRODUCTS.path,
    isExact: true,
    component: Products,
  },
  {
    path: ROUTER_PATH.USERS.path,
    isExact: true,
    component: Users,
  },
];
