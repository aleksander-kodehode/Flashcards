import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import Stacks from "../components/Stacks";
import Layout from "../Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/stacks/:stackId",
        element: <Stacks />,
      },
    ],
  },
]);
