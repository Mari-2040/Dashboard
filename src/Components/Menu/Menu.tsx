import { SiLaunchpad } from "react-icons/si";
import { IoAnalyticsSharp } from "react-icons/io5";
import { TbBrandCarbon } from "react-icons/tb";
import { CiCalculator2 } from "react-icons/ci";
import { MdOutlineReportProblem } from "react-icons/md";
import {IoLogoTableau} from "react-icons/io5"
import React from "react";

export const Menu = [
  { id: 1, title: "Launchpad", path: "/Launchpad", icon: <SiLaunchpad size={25} color="#ff0000"/> },
  { id: 2, title: "Analyze", path: "/Analyze", icon: <IoAnalyticsSharp size={25} color="#5345d1"/> },
  {
    id: 3,
    title: "Carbon",
    path: "/Carbon",
    icon: <TbBrandCarbon size={25} color="#a10000" />,
  },
  {
    id: 4,
    title: "Culator",
    path: "/Culator",
    icon: <CiCalculator2 size={25} color="#720059"/>,
  },
  {
    id: 4,
    title: "Report",
    path: "/Report",
    icon: <MdOutlineReportProblem size={25} color="#fef600"/>,
  },
  {
    id: 5,
    title: "AtherPage",
    path: "/AtherPage",
    icon: <IoLogoTableau size={25} color="#370245"/>,
  },
];
