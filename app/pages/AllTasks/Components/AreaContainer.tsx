import { useGlobalContextProvider } from "@/app/ContextApi";
import { AreaType } from "@/app/types/MenuItemType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import zIndex from "@mui/material/styles/zIndex";
import React, { useEffect } from "react";

function AreaContainer() {
  const { allAreasObject } = useGlobalContextProvider();
  const { allAreas } = allAreasObject;
  const [selectedArea, setSelectedArea] = React.useState<{
    [key: number]: boolean;
  }>({});

  const toggleSelection = (id: number) => {
    const selectedAreaCopy = { ...selectedArea };

    Object.keys(selectedAreaCopy).forEach((key) => {
      selectedAreaCopy[parseInt(key)] = false;
    });

    selectedAreaCopy[id] = true;
    setSelectedArea(selectedAreaCopy);
  };

  useEffect(() => {
    const initialSeletedArea: { [key: number]: boolean } = {};
    allAreas.forEach((_, index) => {
      initialSeletedArea[index] = false;
    });

    initialSeletedArea[0] = true;
    setSelectedArea(initialSeletedArea);
  }, [allAreas]);

  console.log(selectedArea);

  return (
    <div className="p-5 gb-white rounded-md flex gap-3 items-center transition-all mt-5 text-sm">
      {allAreas.map((area: AreaType, index) => (
        <div onClick={() => toggleSelection(index)} key={index}>
          <SingleAreaContainer
            singleArea={area}
            isSelected={selectedArea[index]}
          />
        </div>
      ))}
    </div>
  );
}

export default AreaContainer;

function SingleAreaContainer({
  singleArea,
  isSelected,
}: {
  singleArea: AreaType;
  isSelected: boolean;
}) {
  return (
    <div
      className={`rounded-md p-2 px-3 flex gap-1 border border-mainColor items-center  cursor-pointer ${
        isSelected ? "bg-mainColor text-white" : ""
      }`}
    >
      <FontAwesomeIcon icon={singleArea.icon} />
      <span>{singleArea.name}</span>
    </div>
  );
}
