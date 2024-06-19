import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AllTasksSearchbar() {
  return (
    <div className="flex-grow">
      <div className="flex gap-3 items-center p-3 bg-blue-100 rounded-3xl">
        <FontAwesomeIcon
          height={20}
          width={20}
          className="text-secondColor "
          icon={faSearch}
        />
        <input
          type="text"
          placeholder="Search ..."
          className="outline-none text-[14px] w-full bg-blue-100 font-light text-gray-800"
        ></input>
      </div>
    </div>
  );
}

export default AllTasksSearchbar;
