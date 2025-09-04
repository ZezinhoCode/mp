import { RouterProvider } from "react-router-dom";
import { route } from "./routes";
import "./App.css";

export function App() {
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}
