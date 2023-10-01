import Homepage from "../pages/HomePage/Homepage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const routes = [
  {
    path: '/',
    page: Homepage,
    isNavbar: true
  },
  {
    path: '/order',
    page: OrderPage,
    isNavbar: true
  },
  {
    path: '/products',
    page: ProductsPage,
    isNavbar: true
  },
  {
    path: '*',
    page: NotFoundPage
  }
]
