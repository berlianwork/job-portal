import { createBrowserRouter, RouteObject } from "react-router-dom";
import AppEntryPoint from "../ui/AppEntryPoint";

const loadRoutes = (): RouteObject[] => {
  const routes: RouteObject[] = [];
  const modules = import.meta.glob("/**/*route.*", { eager: true });

  for (const path in modules) {
    routes.push(...(modules[path] as { default: RouteObject[] }).default);
  }

  return routes;
};

const router = createBrowserRouter([
  ...loadRoutes(),
  {
    path: "/",
    element: <AppEntryPoint />,
  },
]);

export default router;
