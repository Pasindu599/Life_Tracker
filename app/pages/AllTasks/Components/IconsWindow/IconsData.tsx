import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faClock,
  faExclamationTriangle,
  faFlag,
  faList,
  faPen,
  faPlus,
  faSearch,
  faSortAmountDown,
  faSortAmountUp,
  faSortNumericDown,
  faSortNumericUp,
  faSortUp,
  faSquare,
  faStar,
  faTimes,
  faTrash,
  faUser,
  faUserCircle,
  faUserPlus,
  faUserTimes,
  IconPrefix,
} from "@fortawesome/free-solid-svg-icons";

type iconData = {
  faIcon: IconProp;
  isSelect: boolean;
};

export const iconsData: iconData[] = [
  {
    faIcon: faCheckSquare,
    isSelect: true,
  },
  {
    faIcon: faClock,
    isSelect: false,
  },
  {
    faIcon: faExclamationTriangle,
    isSelect: false,
  },
  {
    faIcon: faFlag,
    isSelect: false,
  },
  {
    faIcon: faList,
    isSelect: false,
  },
  {
    faIcon: faPen,
    isSelect: false,
  },
  {
    faIcon: faPlus,
    isSelect: false,
  },
  {
    faIcon: faSearch,
    isSelect: false,
  },
  {
    faIcon: faSortAmountDown,
    isSelect: false,
  },
  {
    faIcon: faSortAmountUp,
    isSelect: false,
  },
  {
    faIcon: faSortNumericDown,
    isSelect: false,
  },
  {
    faIcon: faSortNumericUp,
    isSelect: false,
  },
  {
    faIcon: faSortUp,
    isSelect: false,
  },
  {
    faIcon: faSquare,
    isSelect: false,
  },
  {
    faIcon: faStar,
    isSelect: false,
  },
  {
    faIcon: faTimes,
    isSelect: false,
  },
  {
    faIcon: faTrash,
    isSelect: false,
  },
  {
    faIcon: faUser,
    isSelect: false,
  },
  {
    faIcon: faUserCircle,
    isSelect: false,
  },
  {
    faIcon: faUserPlus,
    isSelect: false,
  },
  {
    faIcon: faUserTimes,
    isSelect: false,
  },
];
