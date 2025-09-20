import Chart from "../../components/charts/chart";
import Featuer from "../../components/featuers/Featuer";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import WidgetSm from "../../components/widgetSm/WidgetSm";

function Home() {
  const data = [
    { name: "Jan", active_User: 400, sale: 100 },
    { name: "Feb", active_User: 300, sale: 180 },
    { name: "Mar", active_User: 200, sale: 300 },
    { name: "Apr", active_User: 278, sale: 400 },
    { name: "May", active_User: 189, sale: 150 },
    { name: "Jun", active_User: 239, sale: 100 },
    { name: "Jul", active_User: 349, sale: 50 },
    { name: "Aug", active_User: 200, sale: 680 },
    { name: "Sep", active_User: 100, sale: 280 },
    { name: "Oct", active_User: 320, sale: 250 },
    { name: "Nov", active_User: 280, sale: 180 },
    { name: "Dec", active_User: 450, sale: 100 },
  ];

  const lineInfo = [
    {
      dataKey: "active_User",
      stroke: "#1976D2",
      name: "User Active",
      icon: AccessibilityIcon,
    },
    {
      dataKey: "sale",
      stroke: "#558B2F",
      name: "Purchase",
      icon: LocalMallIcon,
    },
  ];

  return (
    <div className="flex-[5]">
      <Featuer />
      <Chart data={data} title={"User Analytics"} lineInfo={lineInfo} />
      <div className="flex m-5">
        <WidgetSm />
      </div>
    </div>
  );
}

export default Home;
