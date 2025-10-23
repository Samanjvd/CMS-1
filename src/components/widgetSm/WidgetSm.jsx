import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import { useEffect, useState } from "react";

const WidgetSm = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://wgbubvtagllosaelppld.supabase.co/rest/v1/new-members?select=*",
          {
            headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnYnVidnRhZ2xsb3NhZWxwcGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NTk1MzYsImV4cCI6MjA3MTQzNTUzNn0.pn-yLO_lqamjF5rzKUbVKzfB_Y9aOSCDX9laoBnYHn0",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnYnVidnRhZ2xsb3NhZWxwcGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NTk1MzYsImV4cCI6MjA3MTQzNTUzNn0.pn-yLO_lqamjF5rzKUbVKzfB_Y9aOSCDX9laoBnYHn0",
            },
          }
        );

        setData(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex-1 p-5 mr-5 shadow-custom">
      <span className="text-xl font-normal">New Join Members</span>
      <ul>
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="size-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          data.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center my-4"
            >
              <img
                src={user.img}
                alt="profile"
                className="size-10 rounded-full shadow-custom object-cover"
              />
              <div className="flex flex-col">
                <span className="font-semibold">{user.name}</span>
                <span className="font-light">{user.title}</span>
              </div>
              <button className="flex items-center rounded-xl py-1.5 px-2.5 bg-[#eeeef7] text-[#555] cursor-pointer">
                <VisibilityIcon className="!text-base " />
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default WidgetSm;
