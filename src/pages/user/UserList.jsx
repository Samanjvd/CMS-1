import axios from "axios";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function UserList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const res = await axios.get(
        "https://wgbubvtagllosaelppld.supabase.co/rest/v1/userList?select=*",
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

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://wgbubvtagllosaelppld.supabase.co/rest/v1/userList?id=eq.${id}`,
        {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnYnVidnRhZ2xsb3NhZWxwcGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NTk1MzYsImV4cCI6MjA3MTQzNTUzNn0.pn-yLO_lqamjF5rzKUbVKzfB_Y9aOSCDX9laoBnYHn0",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnYnVidnRhZ2xsb3NhZWxwcGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NTk1MzYsImV4cCI6MjA3MTQzNTUzNn0.pn-yLO_lqamjF5rzKUbVKzfB_Y9aOSCDX9laoBnYHn0",
          },
        }
      );
      await fetchData();
    } catch (err) {
      console.error("Error deleting row:", err);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 250,
      renderCell: (user) => {
        return (
          <>
            <Link to="/">
              <div className="flex items-center gap-3">
                <img
                  src={user.row.avatar}
                  className="size-10 rounded-full object-cover"
                />
                <span>{user.row.username}</span>
              </div>
            </Link>
          </>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 120,
    },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params) => {
        return (
          <div className="flex justify-between items-center px-7">
            <Link to={`/user/${params.row.id}`}>
              <button>
                <EditIcon className="text-green-900 p-0.5 rounded cursor-pointer hover:bg-green-100" />
              </button>
            </Link>

            <DeleteIcon
              className="text-red-900 p-0.5 rounded cursor-pointer hover:bg-red-100"
              onClick={() => {
                handleDelete(params.row.id);
              }}
            />
          </div>
        );
      },
      width: 150,
    },
  ];

  return (
    <>
      {loading ? (
        <div className="w-full flex justify-center items-center py-10">
          <div className="size-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="flex-[4] h-fit mt-4">
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 4,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </div>
      )}
    </>
  );
}

export default UserList;
