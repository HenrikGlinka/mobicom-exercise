import { createBrowserRouter, RouterProvider, type DataRouter } from "react-router"
import './style/main.css';
import Dashboard from "./pages/Dashboard";
import dashboardLoader from "./loaders/dashboardLoader";

function App() {

  const router: DataRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      loader: dashboardLoader
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
