import axios from "axios";
import { useEffect, useState } from "react";

function WidgetLg() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const statusStyles = {
    Approved: "text-green-600 bg-green-100",
    Declined: "text-red-600 bg-red-100",
    Pending: "text-yellow-600 bg-yellow-100",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://wgbubvtagllosaelppld.supabase.co/rest/v1/transAction?select=*",
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
    <div className="flex-[2] p-5 shadow-custom">
      <h3 className="text-xl font-normal">Latest Transactions</h3>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="size-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <table className="w-full border-separate border-spacing-y-3">
          <thead>
            <tr>
              <th className="text-start">Customer</th>
              <th className="text-start">Date</th>
              <th className="text-start">Amount</th>
              <th className="text-start">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="text-sm w-full">
                <td className="text-center">
                  <div className="flex items-center  gap-3">
                    <img
                      className="size-10 rounded-full object-cover"
                      src={item.img}
                      alt={item.name}
                    />
                    <span>{item.name}</span>
                  </div>
                </td>
                <td className="font-light ">{item.date}</td>
                <td className="font-light ">{`$${item.amount}`}</td>
                <td className="rounded-xs flex ">
                  <button
                    className={`w-full max-w-20 py-1 rounded-md text-sm font-medium cursor-pointer ${
                      statusStyles[item.status] || ""
                    }`}
                  >
                    {item.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default WidgetLg;
