import { createBrowserRouter } from "react-router-dom";
import { Login, Register, TestComponents, Teste2, TodoList } from "../pages";
import { Sidebar } from "../shared/components";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/teste",
        element: <TestComponents></TestComponents>,
      },
      {
        path: "/teste2",
        element: <Teste2></Teste2>,
      },
      {
        path: "/todolist",
        element: <TodoList></TodoList>,
      },
    ],
  },
  {
    path: "*",
    element: <Sidebar />,
  },

  {
    path: "/cadastrar",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
