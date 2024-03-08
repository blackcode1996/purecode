import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import useSettings from "./hooks/useSettings";
import LoadingScreen from "./components/LoadingScreen";
import LayoutV1 from "./layouts/layout-v1/DashboardLayout";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const CRM = Loadable(lazy(() => import("./pages/dashboards/crm")));
const Sales = Loadable(lazy(() => import("./pages/dashboards/sales")));
const JobManagement = Loadable(
  lazy(() => import("./pages/dashboards/job-management"))
);
const LearningManagement = Loadable(
  lazy(() => import("./pages/dashboards/learning-management"))
); // account

const ActiveLayout = () => {
  const { settings } = useSettings();

  if (settings.activeLayout == "layout1") {
    return <LayoutV1 />;
  }
};

const routes = () => {
  return [
    ...authRoutes,
    {
      path: "dashboard",
      element: <ActiveLayout />,
      children: dashboardRoutes,
    },
    {
      path: "*",
      element: <Error />,
    },
  ];
};

const authRoutes = [
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
];
const dashboardRoutes = [
  {
    path: "",
    element: <LearningManagement />,
  },
  {
    path: "job-management",
    element: <JobManagement />,
  },
  {
    path: "sales",
    element: <Sales />,
  },
  {
    path: "crm",
    element: <CRM />,
  },
];
export default routes;
