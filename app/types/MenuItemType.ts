import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Area } from "recharts";

export type MenuItemType = {
  name: string;
  isSelected: boolean;
  icon: IconProp;
};

export type FrequencyType = {
  type: string;
  days?: string[];
  numberOfWeeks?: number;
};

export type AreaType = {
  id: number;
  icon: IconProp;
  name: string;
};

export type TaskType = {
  _id: string;
  name: string;
  icon: IconProp;
  frequency: FrequencyType[];
  notificationTime: string;
  isNotification: boolean;
  areas: AreaType[];
};
