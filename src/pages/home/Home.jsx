import Chart from "../../components/charts/chart";
import Feature from "../../components/features/Feature";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://wgbubvtagllosaelppld.supabase.co/rest/v1/data-chart?select=*",
          {
            headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnYnVidnRhZ2xsb3NhZWxwcGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NTk1MzYsImV4cCI6MjA3MTQzNTUzNn0.pn-yLO_lqamjF5rzKUbVKzfB_Y9aOSCDX9laoBnYHn0",
              Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnYnVidnRhZ2xsb3NhZWxwcGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NTk1MzYsImV4cCI6MjA3MTQzNTUzNn0.pn-yLO_lqamjF5rzKUbVKzfB_Y9aOSCDX9laoBnYHn0",
            },
          }
        );
        setData(res.data);
      } catch (err) {
        console.error("Error Fetching data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

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
      <Feature />

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="size-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <Chart data={data} title={"User Analytics"} lineInfo={lineInfo} />
      )}
      <div className="flex m-5">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
