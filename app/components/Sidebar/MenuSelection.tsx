import { useGlobalContextProvider } from "@/app/ContextApi";
import { MenuItemType } from "@/app/types/MenuItemType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function MenuSelection() {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;
  return (
    <div className="mt-[180px]">
      {menuItems.map((menuItem: MenuItemType, menuItemIndex: number) => (
        <div key={menuItemIndex} className="">
          <SingleMenuItem menuItemProp={menuItem} />
        </div>
      ))}
    </div>
  );
}

function SingleMenuItem({ menuItemProp }: { menuItemProp: MenuItemType }) {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems, setMenuItems } = menuItemsObject;
  function handleClickedItem() {
    const copyMenuItems = menuItems.map((menuItem) => {
      if (menuItemProp.name === menuItem.name) {
        return {
          ...menuItem,
          isSelected: true,
        };
      }
      return {
        ...menuItem,
        isSelected: false,
      };
    });
    setMenuItems(copyMenuItems);
  }

  return (
    <div
      onClick={handleClickedItem}
      className={`flex gap-2 items-center p-2 mb-3 ml-8 cursor-pointer rounded-md w-36 hover:text-blue-900 ${
        menuItemProp.isSelected ? "bg-[#5A639C] text-white" : "text-[#5A639C]"
      }`}
    >
      <FontAwesomeIcon icon={menuItemProp.icon} width={20} height={20} />
      <div>{menuItemProp.name}</div>
    </div>
  );
}

export default MenuSelection;
