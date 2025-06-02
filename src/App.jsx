import "./App.css";
import Faskes from "./pages/Faskes";
import Laporan from "./pages/Laporan";
import Form from "./pages/Form";
import Evidence from "./pages/Evidence";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Link } from "react-router";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Faskes />,
    },
    {
      path: "/laporan",
      element: <Laporan />,
    },
    {
      path: "/form",
      element: <Form />,
    },
    {
      path: "/evidence",
      element: <Evidence />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
