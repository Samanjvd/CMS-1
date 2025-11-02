import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Feature = () => {
  return (
    <div className="w-full flex justify-between mx-4 pl-18 pr-24">
      <div className="w-full max-w-56 flex-1 mx-5 p-4 rounded-xl shadow-custom">
        <span className="text-xl text-gray-700">Revanue</span>
        <div className="flex items-center my-2.5">
          <span className="text-2xl font-semibold">$2,415</span>
          <span className="text-gray-600 flex items-center ml-4.5">
            -11.4
            <ArrowDownwardIcon className="ml-1.25 text-red-500" />
          </span>
        </div>
        <span className="text-sm text-gray-400">Compared to last month</span>
      </div>
      <div className="w-full max-w-56 flex-1 mx-5  p-4 rounded-xl shadow-custom">
        <span className="text-xl text-gray-700">Sales</span>
        <div className="flex items-center my-2.5">
          <span className="text-2xl font-semibold">$4,415</span>
          <span className="text-gray-600 flex items-center ml-4.5">
            -1.4
            <ArrowDownwardIcon className="ml-1.25 text-red-500" />
          </span>
        </div>
        <span className="text-sm text-gray-400">Compared to last month</span>
      </div>
      <div className="w-full max-w-56 flex-1 mx-5  p-4 rounded-xl shadow-custom">
        <span className="text-xl text-gray-700">Cost</span>
        <div className="flex items-center my-2.5">
          <span className="text-2xl font-semibold">$2,225</span>
          <span className="text-gray-600 flex items-center ml-4.5">
            2.4
            <ArrowUpwardIcon className="ml-1.25 text-green-500" />
          </span>
        </div>
        <span className="text-sm text-gray-400">Compared to last month</span>
      </div>
    </div>
  );
};

export default Feature;
