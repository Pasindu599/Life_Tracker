import MainStatistics from "./RightSidebar/MainStatistics";
import UserProfile from "./RightSidebar/UserProfile";
import Calender from "./RightSidebar/Calender";

function RightSidebar() {
  return (
    <div className="max-lg:flex-grow  lg:w-[30%] flex flex-col items-center bg-white m-5 rounded-lg p-2">
      <UserProfile />
      <MainStatistics />
      <Calender />
    </div>
  );
}

export default RightSidebar;
