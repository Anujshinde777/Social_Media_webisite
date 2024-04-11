import LeftBar from "./Compoenets/LeftBar/LeftBar";
import NavBar from "./Compoenets/NavBar/NavBar";
import RightBar from "./Compoenets/RightBar/RightBar";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const currentUser = useContext(AuthContext);
  const Layout = () => {
    return (
      <>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </>
    );
  };
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Login />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Registration />,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  );
}

export default App;
