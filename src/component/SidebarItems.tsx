import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
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
      label: <Link to={`/${role}/manage-student`}>Manage user</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-user`,
    },
    {
      label: <Link to={`/${role}/manage-service`}>Manage service</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-service`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "Manage academic",
      key: "manage-academic",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link to={`/${role}/academic/faculty`}>Faculties</Link>,
          key: `/${role}/academic/faculty`,
        },
        {
          label: <Link to={`/${role}/academic/department`}>Departments</Link>,
          key: `/${role}/academic/department`,
        },
        {
          label: <Link to={`/${role}/academic/semester`}>Semesters</Link>,
          key: `/${role}/academic/semester`,
        },
      ],
    },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link to={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
        {
          label: <Link to={`/${role}/building`}>Building</Link>,
          key: `/${role}/building`,
        },
        {
          label: <Link to={`/${role}/room`}>Rooms</Link>,
          key: `/${role}/room`,
        },
        {
          label: <Link to={`/${role}/course`}>Course</Link>,
          key: `/${role}/course`,
        },
        {
          label: (
            <Link to={`/${role}/semester-registration`}>
              Semester registration
            </Link>
          ),
          key: `/${role}/semester-registration`,
        },
        {
          label: <Link to={`/${role}/offered-course`}>Offered courses</Link>,
          key: `/${role}/offered-course`,
        },
        {
          label: (
            <Link to={`/${role}/offered-course-section`}>
              Course sections
            </Link>
          ),
          key: `/${role}/offered-course-section`,
        },
        {
          label: (
            <Link to={`/${role}/offered-course-schedule`}>
              Course schedules
            </Link>
          ),
          key: `/${role}/offered-course-schedule`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: <Link to={`/${role}/manage-admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-admin`,
    },
    {
      label: <Link to={`/${role}/manage-user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-user`,
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link to={`/dashboard/${role}/manage-user`}>Manage user</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-user`,
    },
  ];


  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
