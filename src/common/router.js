import { lazy } from "react";
import { ROUTER_PATH } from "./routerLink";

//user
const Home = lazy(() => import("../pages/User/Home"));
const Shop = lazy(() => import("../pages/User/Shop"));
const Login = lazy(() => import("../pages/User/Login"));


//admin
const Admin = lazy(() => import("../pages/Admin/Dashboard"));

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
];

// admin
export const adminRouter = [
    {
      path: ROUTER_PATH.ADMIN.path,
      isExact: true,
      component: Admin,
    },
  ];
