import Homepage from "../pages/HomePage/Homepage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
// import SignInPage from "../pages/SignInPage/SignInPage";
// import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Cart from "../pages/Cart/Cart";
import Dashboard from "../pages/DashBoard/DashBoardPage";
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
  // {
  //   path: '/SignIn',
  //   page: SignInPage,
  //   isNavbar: false,
  //   isFooter: true
  // },
  // {
  //   path: '/SignUp',
  //   page: SignUpPage,
  //   isNavbar: false,
  //   isFooter: true
  // },
  {
    path: '/dashboard',
    page: Dashboard,
    isNavbar: true,
    isFooter: false
  },
  {
    path: '*',
    page: NotFoundPage
  },
  {
    path: '/cart',
    page: Cart,
    isNavbar: false,
    isFooter: true
  }
]
