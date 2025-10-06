import VisibilityIcon from "@mui/icons-material/Visibility";
import data from "./../../data";

const WidgetSm = () => {
  return (
    <div className="flex-1 p-5 mr-5 shadow-custom">
      <span className="text-xl font-normal">New Join Members</span>
      <ul>
        {data.map((user) => (
          <li key={user.id} className="flex justify-between items-center my-4">
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
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
