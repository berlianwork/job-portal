import { RouteObject } from "react-router-dom";
import HomeUI from "../ui";
import MenuLayout from "../../App/components/layout/MenuLayout/MenuLayout";

const homeRouter: RouteObject[] = [
  {
    path: "/",
    element: (
      <MenuLayout>
        <HomeUI />
      </MenuLayout>
    ),
  },
];

export default homeRouter;
