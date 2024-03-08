import Icons from "../../assets/icons/sidebar";
const index = [
  {
    title: "Dashboards",
    Icon: Icons.DashboardIcon,
    children: [
      {
        name: "Learning Management",
        path: "/dashboard",
      },
      {
        name: "Job Management",
        path: "/dashboard/job-management",
      },
      {
        name: "CRM",
        path: "/dashboard/crm",
      },
      {
        name: "Sales",
        path: "/dashboard/sales",
      },
    ],
  },
];
export default index;
