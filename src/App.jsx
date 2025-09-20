import TopBar from "./components/top-bar/TopBar";
import SideBar from "./components/side-bar/SideBar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  let router = useRoutes(routes);

  return (
    <div className="size-full">
      <TopBar />
      <div className="px-5 pt-6 flex">
        <SideBar />
        {router}
      </div>
    </div>
  );
}

export default App;
