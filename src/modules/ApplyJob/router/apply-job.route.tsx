import { RouteObject } from "react-router-dom";
import ApplyJob from "../ui";
import MenuLayout from "../../App/components/layout/MenuLayout/MenuLayout";

const applyJob: RouteObject[] = [
  {
    path: "/apply-job/:id",
    element: (
      <MenuLayout>
        <ApplyJob />
      </MenuLayout>
    ),
  },
];

export default applyJob;
