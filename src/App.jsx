import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { AppLayout } from "./components/Layout/AppLayout";
import { CountryDetails } from "./components/Layout/CountryDetails";
const App = () => {
  return <RouterProvider router={route}></RouterProvider>;
};
const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorPage/>,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/About",
        element: <About />,
      },
      { path: "/Contact", element: <Contact /> },
      { path: "/Country", element: <Country /> },
      { path: "/country/:id", element: <CountryDetails/> },
    ],
  },
]);

export default App;
