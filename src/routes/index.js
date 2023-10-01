import Homepage from "../pages/HomePage/Homepage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";

export const routes = [
  {
    path: '/',
    page: Homepage
  },
  {
    path: '/order',
    page: OrderPage
  },
  {
    path: '/products',
    page: ProductsPage
  }
]
