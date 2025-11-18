import TopBar from "./components/top-bar/TopBar";
import SideBar from "./components/side-bar/SideBar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  let router = useRoutes(routes);

  return (
    <>
      <TopBar />
      <div className="size-full pr-1 flex">
        <SideBar />
        {router}
      </div>
    </>
  );
}

export default App;
