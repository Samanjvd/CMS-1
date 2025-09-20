import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetSm = () => {
  return (
    <div>
      <span>New Join Members</span>
      <ul>
        <li>
          <img src="images/profile.jfif" alt="profile" className="" />
          <div>
            <span>Qadir Yolme</span>
            <span>Hacker</span>
          </div>
          <button>
            <VisibilityIcon />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
