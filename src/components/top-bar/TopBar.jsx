import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const TopBar = () => {
  return (
    <div className="w-full h-13 bg-white sticky top-0 z-100">
      <div className="h-full flex items-center justify-between px-5">
        <div className="text-3xl font-extrabold font-nunito text-blue-800 cursor-pointer">
          AdminPanel ❤
        </div>
        <div className="flex gap-2 items-center">
          <div className="relative cursor-pointer text-gray-500">
            <NotificationsNoneIcon />
            <span className="bg-red-800/90 rounded-full size-3.5 text-white flex items-center justify-center text-[8px] absolute top-0 right-px z-10">
              2
            </span>
          </div>
          <div className="relative cursor-pointer text-gray-500">
            <LanguageIcon />
            <span className="bg-red-800/90 rounded-full size-3.5 text-white flex items-center justify-center text-[8px] absolute top-0 right-px z-10">
              2
            </span>
          </div>
          <div className="relative cursor-pointer text-gray-500">
            <SettingsIcon />
          </div>
          <div className="size-10 flex items-center justify-center cursor-pointer shadow-xl/20 rounded-full">
            <img
              src="images\profile.jfif"
              alt="profile"
              className="rounded-full"
            />
            {/* <AccountCircleIcon /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
