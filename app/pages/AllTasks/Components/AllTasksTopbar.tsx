import AllTasksSearchbar from "./AllTasksSearchbar";
import DarkMode from "./DarkMode";

function AllTasksTopBar() {
  return (
    <div className="bg-white p-5 rounded-md flex justify-between">
      <div className="flex flex-col">
        <span className="text-xl">
          <span className="font-bold">Hi There</span>
          <span className="text-secondColor">, Pasindu</span>
        </span>
        <span className="text-secondColor text-[12px] font-light">
          Welcome Back
        </span>
      </div>
      <div className="w-[50%] flex gap-3 justify-between">
        <AllTasksSearchbar />
        <DarkMode />
      </div>
    </div>
  );
}

export default AllTasksTopBar;
