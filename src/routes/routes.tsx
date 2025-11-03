import { createBrowserRouter } from "react-router-dom";
import {
  CreateTodo,
  Login,
  Register,
  TestComponents,
  Teste2,
  GetPasswordCode,
  RecoverPassword,
  AtribuidoAmim,
  MinhaSemana,
  Rotinas,
  Importante,
} from "../pages";
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
        path: "/criartarefa",
        element: <CreateTodo></CreateTodo>,
      },
      {
        path: "atribuido-a-mim",
        element: <AtribuidoAmim></AtribuidoAmim>,
      },
      {
        path: "minha-semana",
        element: <MinhaSemana></MinhaSemana>,
      },
      {
        path: "rotinas",
        element: <Rotinas></Rotinas>,
      },
      {
        path: "importante",
        element: <Importante></Importante>,
      },
    ],
  },
  {
    path: "*",
    element: <Login />,
  },

  {
    path: "/cadastrar",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/codigo",
    element: <GetPasswordCode></GetPasswordCode>,
  },
  {
    path: "recuperar-senha",
    element: <RecoverPassword></RecoverPassword>,
  },
]);
