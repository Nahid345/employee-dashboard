import { RxDashboard } from "react-icons/rx";
import { IoTimerOutline } from "react-icons/io5";
import { MdTimelapse } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { TbUsersGroup } from "react-icons/tb";

export const SidebarData = [
  {
    icon: RxDashboard,
    headling: "Overview",
  },
  {
    icon: IoTimerOutline,
    headling: "Timeline",
  },
  {
    icon: MdTimelapse,
    headling: "Dashboard",
  },
  {
    icon: FaRegUser,
    headling: "Users",
  },
  {
    icon: MdMessage,
    headling: "Message",
  },
  {
    icon: RiMessengerFill,
    headling: "Activity",
  },
  {
    icon: IoSettingsOutline,
    headling: "Settting",
  },
  {
    icon: MdLogout,
    headling: "Logout",
  },
];

export const CardsData = [
  {
    title: "Total Employees",
    value: 500,
    lastmonth: 400,
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%,#c484f3 100%",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    png: FaUsers,
  },
  // {
  //   title: "Contract Employee",
  //   value: 200,
  //   lastmonth: 150,
  //   color: {
  //     backGround: "linear-gradient(180deg, #FF919D 0%,#FC929D 100%",
  //     boxShadow: "0px 10px 20px 0px #FDC0C7",
  //   },
  //   png: FaUsersGear,
  // },
  {
    title: "Remote Employee",
    value: 80,
    lastmonth: 60,
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%,#FC929D 100%",
      boxShadow: "0px 10px 20px 0px #FFCCCB",
    },
    png: FaUsersGear,
  },
  {
    title: "Intern Employee",
    value: 50,
    lastmonth: 60,
    color: {
      backGround:
        "linear-gradient(rgb(248,212,154), -146.42%, rgb(255,202,113) -46.42%",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    png: TbUsersGroup,
  },
];
