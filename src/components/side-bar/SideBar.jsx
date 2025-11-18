import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import MovingIcon from "@mui/icons-material/Moving";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";

import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sticky top-13 flex-1 blue-sidebar h-[calc(100vh-50px)]">
      <div className="pt-4 pl-5">
        <div>
          <h5 className="text-xs text-gray-400 mb-1.5">Dashboard</h5>
          <ul className="flex flex-col ml-2 pb-3">
            <Link to="/">
              <li className="flex text-gray-500 mb-1 text-[13px] items-center gap-2 cursor-pointer hover:bg-neutral-50 hover:text-gray-800 py-0.5">
                <span className="size-5 flex items-center text-xl">
                  <LineStyleIcon fontSize="inherit" />
                </span>
                Home
              </li>
            </Link>
            <Link>
              <li className="flex text-gray-500 mb-1 text-[13px] items-center gap-2 cursor-pointer hover:bg-neutral-50 hover:text-gray-800 py-0.5">
                <span className="size-5 flex items-center text-xl">
                  <TimelineIcon fontSize="inherit" />
                </span>
                Analytics
              </li>
            </Link>
            <Link>
              <li className="flex text-gray-500 mb-1 text-[13px] items-center gap-2 cursor-pointer hover:bg-neutral-50 hover:text-gray-800 py-0.5">
                <span className="size-5 flex items-center text-xl">
                  <MovingIcon fontSize="inherit" />
                </span>
                Sales
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h5 className="text-xs text-gray-400 mb-1.5">Quick Menu</h5>
          <ul className="flex flex-col ml-2 pb-3">
            <Link to="/users">
              <li className="flex text-gray-500 mb-1 text-[13px] items-center gap-2 cursor-pointer hover:bg-neutral-50 hover:text-gray-800 py-0.5">
                <span className="size-5 flex items-center text-xl">
                  <PermIdentityIcon fontSize="inherit" />
                </span>
                User
              </li>
            </Link>
            <Link to="/newUser">
              <li className="flex text-gray-500 mb-1 text-[13px] items-center gap-2 cursor-pointer hover:bg-neutral-50 hover:text-gray-800 py-0.5">
                <span className="size-5 flex items-center text-xl">
                  <PermIdentityIcon fontSize="inherit" />
                </span>
                New User
              </li>
            </Link>
            <Link to="/products">
              <li className="flex text-gray-500 mb-1 text-[13px] items-center gap-2 cursor-pointer hover:bg-neutral-50 hover:text-gray-800 py-0.5">
                <span className="size-5 flex items-center text-xl">
                  <StorefrontIcon fontSize="inherit" />
                </span>
                Products
              </li>
            </Link>
            <Link>
              <li className="flex text-gray-500 mb-1 text-[13px] items-center gap-2 cursor-pointer hover:bg-neutral-50 hover:text-gray-800 py-0.5">
                <span className="size-5 flex items-center text-xl">
                  <AttachMoneyIcon fontSize="inherit" />
                </span>
                Transactions
              </li>
            </Link>
            <Link>
              <li className="flex text-gray-500 mb-1 text-[13px] items-center gap-2 cursor-pointer hover:bg-neutral-50 hover:text-gray-800 py-0.5">
                <span className="size-5 flex items-center text-xl">
                  <BarChartIcon fontSize="inherit" />
                </span>
                Reports
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h5 className="text-xs text-gray-400 mb-1.5">Notifications</h5>
          <ul className="flex flex-col ml-2 pb-3">
            <Link>
              <li className="flex text-gray-500 mb-1 text-[13px] items-center gap-2 cursor-pointer hover:bg-neutral-50 hover:text-gray-800 py-0.5">
                <span className="size-5 flex items-center text-xl">
                  <MailOutlineIcon fontSize="inherit" />
                </span>
                Mail
              </li>
            </Link>
            <Link>
              <li className="flex text-gray-500 mb-1 text-[13px] items-center gap-2 cursor-pointer hover:bg-neutral-50 hover:text-gray-800 py-0.5">
                <span className="size-5 flex items-center text-xl">
                  <DynamicFeedIcon fontSize="inherit" />
                </span>
                Feedback
              </li>
            </Link>
            <Link>
              <li className="flex text-gray-500 mb-1 text-[13px] items-center gap-2 cursor-pointer hover:bg-neutral-50 hover:text-gray-800 py-0.5">
                <span className="size-5 flex items-center text-xl">
                  <ChatBubbleOutlineIcon fontSize="inherit" />
                </span>
                Messages
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h5 className="text-xs text-gray-400 mb-1.5">Staff</h5>
          <ul className="flex flex-col ml-2 pb-3">
            <Link>
              <li className="flex text-gray-500 mb-1 text-[13px] items-center gap-2 cursor-pointer hover:bg-neutral-50 hover:text-gray-800 py-0.5">
                <span className="size-5 flex items-center text-xl">
                  <WorkOutlineIcon fontSize="inherit" />
                </span>
                Manage
              </li>
            </Link>
            <Link>
              <li className="flex text-gray-500 mb-1 text-[13px] items-center gap-2 cursor-pointer hover:bg-neutral-50 hover:text-gray-800 py-0.5">
                <span className="size-5 flex items-center text-xl">
                  <TimelineIcon fontSize="inherit" />
                </span>
                Analytics
              </li>
            </Link>
            <Link>
              <li className="flex text-gray-500 mb-1 text-[13px] items-center gap-2 cursor-pointer hover:bg-neutral-50 hover:text-gray-800 py-0.5">
                <span className="size-5 flex items-center text-xl">
                  <ReportIcon fontSize="inherit" />
                </span>
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
