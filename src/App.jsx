import NavBar from "./components/navBar/NavBar";
import SeeStory from "./pages/see_story/SeeStory"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Story from "./components/story/Story";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react";
import { DarkMode } from "./context/darkMode";
import { AuthContext } from "./context/authContext";
import { ProfileContext } from "./context/profileContext";
import Share_modal from "./components/share-post/Share_modal";

import OwnProfile from "./pages/ownProfile/OwnProfile";
import Friends from "./pages/friends/Friends";
import Groups from "./pages/groups/Groups";
import Messages from "./pages/messages/Messages";
import Watch from "./pages/watch/Watch";
import Gaming from "./pages/gaming/Gaming";
import ProfileEdit from "./components/profile_edit/ProfileEdit";

function App() {
 // const { currentUser } = useContext(AuthContext);
     const currentUser = true;
  const { darkMode } = useContext(DarkMode);

  const { shareModal } = useContext(ProfileContext);
  const { editModal } = useContext(ProfileContext); 
 

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`} >
        {shareModal && <Share_modal />}
        {editModal && <ProfileEdit />}
        <NavBar />
        <div>
          <Outlet />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
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
        {
          path: "/own-profile",
          element: <OwnProfile />,
        },
        {
          path: "/own-story",
          element: <Story />,
        },
        {
          path: "/see_story",
          element: <SeeStory />,
        },
        {
          path: "/friends",
          element: <Friends />,
        },
        {
          path: "/groups",
          element: <Groups />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
        {
          path: "/gaming",
          element: <Gaming />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
