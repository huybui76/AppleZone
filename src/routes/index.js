import Homepage from "../pages/HomePage/Homepage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Dashboard from "../pages/DashBoard/DashBoardPage.jsx";
import ProductType from "../pages/DashBoard/ProductType/ProductTypePage";
import Product from "../pages/DashBoard/Product/ProductPage";
import User from "../pages/DashBoard/User/UserPage";
export const routes = [
  {
    path: '/',
    page: Homepage,
    isNavbar: true,
    isFooter: true


  },
  {
    path: '/order',
    page: OrderPage,
    isNavbar: true,
    isFooter: true
  },
  {
    path: '/products',
    page: ProductsPage,
    isNavbar: true,
    isFooter: true
  },
  {
    path: '/SignIn',
    page: SignInPage,
    isNavbar: false,
    isFooter: true
  },
  {
    path: '/SignUp',
    page: SignUpPage,
    isNavbar: false,
    isFooter: true
  },
  {
    path: '/dashboard',
    page: Dashboard,
    isNavbar: true,
    children: [
      {
        path: 'product-type',
        page: ProductType,
        isNavbar: true,
        isFooter: true,
      },
      {
        path: 'product',
        page: Product,
        isNavbar: true,
        isFooter: true,
      },
      {
        path: 'user',
        page: User,
        isNavbar: true,
        isFooter: true,
      },
    ],
  },
  {
    path: '*',
    page: NotFoundPage
  }
]
