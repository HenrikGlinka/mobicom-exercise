import { createBrowserRouter, RouterProvider, type DataRouter } from "react-router"
import './style/main.css';
import Dashboard from "./pages/Dashboard";

function App() {

  const router: DataRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
