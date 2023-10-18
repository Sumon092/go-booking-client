import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
} from "@ant-design/icons";

import { USER_ROLE } from "../constants/role";
import { Link } from "react-router-dom";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link to={`${role}/profile`}>Account Profile</Link>,
          key: `${role}/profile`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link to={`/dashboard/${role}/manage-booking`}>Manage Booking</Link>,
      icon: <TableOutlined />,
      key: `/dashboard/${role}/manage-booking`,
    },
    {
      label: <Link to={`/dashboard/${role}/manage-user`}>Manage user</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-user`,
    },
    {
      label: <Link to={`/dashboard/${role}/manage-service`}>Manage service</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-service`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
   
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: <Link to={`/${role}/manage-admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-admin`,
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link to={`/dashboard/${role}/service-history`}>Service History</Link>,
      icon: <TableOutlined />,
      key: `/${role}/`,
    },
  ];


  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
