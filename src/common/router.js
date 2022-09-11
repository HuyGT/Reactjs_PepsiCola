import { lazy } from "react";
import { ROUTER_PATH } from "./routerLink";

//user
const Home = lazy(() => import("../pages/User/Home"));
const Shop = lazy(() => import("../pages/User/Shop"));
const Login = lazy(() => import("../pages/User/Login"));
const Detail = lazy(() => import("../pages/User/Detail"));
const Profile = lazy(() => import("../pages/User/Profile"));
const ChangePassword = lazy(() =>
  import("../pages/User/Profile/ChangePassword")
);
const Cart = lazy(() => import("../pages/User/Cart"));
const OrderUser = lazy(() => import("../pages/User/OrderUser"));
const DetailOrderUser = lazy(() =>
  import("../pages/User/OrderUser/DetailOrder")
);

//admin
const Admin = lazy(() => import("../pages/Admin/Dashboard"));
const Products = lazy(() => import("../pages/Admin/Products"));
const Brands = lazy(() => import("../pages/Admin/Brands"));
const Users = lazy(() => import("../pages/Admin/Users"));
const Orders = lazy(() => import("../pages/Admin/Orders"));
const DetailOrder = lazy(() => import("../pages/Admin/Orders/DetailOrder"));

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
  {
    path: ROUTER_PATH.PROFILE.path,
    isExact: true,
    component: Profile,
  },
  {
    path: ROUTER_PATH.CHANGE_PASSWORD.path,
    isExact: true,
    component: ChangePassword,
  },
  {
    path: ROUTER_PATH.CART.path,
    isExact: true,
    component: Cart,
  },
  {
    path: ROUTER_PATH.ORDER_USER.path,
    isExact: true,
    component: OrderUser,
  },
  {
    path: ROUTER_PATH.DETAIL_ORDER_USER.path,
    isExact: true,
    component: DetailOrderUser,
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
  {
    path: ROUTER_PATH.DETAIL_ORDER.path,
    isExact: true,
    component: DetailOrder,
  },
];
