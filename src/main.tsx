import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./modules/App/routes";
import "../src/assets/styles/global.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { AppContextProvider } from "./context/AppContext";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppContextProvider>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={Router} />
    </ClerkProvider>
  </AppContextProvider>
);
