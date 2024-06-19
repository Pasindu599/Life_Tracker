import MainStatistics from "./RightSidebar/MainStatistics";
import UserProfile from "./RightSidebar/UserProfile";
import Calender from "./RightSidebar/Calender";

function RightSidebar() {
  return (
    <div className="w-[30%] flex flex-col items-center bg-white ">
      <UserProfile />
      <MainStatistics />
      <Calender />
    </div>
  );
}

export default RightSidebar;
