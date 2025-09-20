import Home from "./pages/home/Home";
import NewUser from "./pages/NewUser/NewUser";
import UserList from "./pages/user/UserList";
import Products from "./pages/products/Products";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
];

export default routes;
