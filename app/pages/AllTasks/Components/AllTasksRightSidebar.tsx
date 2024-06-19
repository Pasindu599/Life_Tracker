import MainStatistics from "./RightSidebar/MainStatistics";
import UserProfile from "./RightSidebar/UserProfile";

function RightSidebar() {
  return (
    <div className="w-[30%] flex flex-col items-center bg-white ">
      <UserProfile />
      <MainStatistics />
    </div>
  );
}

export default RightSidebar;
