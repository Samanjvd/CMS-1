import Home from "./pages/home/Home";
import NewUser from "./pages/NewUser/NewUser";
import UserList from "./pages/user/UserList";
import Products from "./pages/products/Products";
import Product from "./pages/product/product";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:productID", element: <Product /> },
];

export default routes;
