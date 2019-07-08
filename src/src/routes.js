// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";

import { istioAppDesignation } from "variables/general.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard - App 1",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: () => {
      window.location.href = `${process.env.PUBLIC_URL.replace(istioAppDesignation, "/app1")}/admin/dashboard`; 
      return null;
    },
    layout: "/admin",
    isExternal: false
  },
  {
    path: "/table",
    name: "Daily Checklists - App 2",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
    isExternal: true
  },
  {
    path: "/user",
    name: "User Profile - App 1",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: () => {
      window.location.href = `${process.env.PUBLIC_URL.replace(istioAppDesignation, "/app1")}/admin/user`; 
      return null;
    },
    layout: "/admin",
    isExternal: true
  },
  {
    path: "/logout",
    name: "Logout",
    rtlName: "قائمة الجدول",
    icon: "exit_to_app",
    component: () => {
      window.location.href = process.env.PUBLIC_URL.replace(istioAppDesignation, "/Home"); 
      return null;
    },
    layout: "/admin",
    isExternal: true
  }
];

export default dashboardRoutes;
