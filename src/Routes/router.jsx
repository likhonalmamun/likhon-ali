import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div>error element</div>,
    children: [
      {
        index: true,
        element: <div>home</div>,
      },
    ],
  },
]);
