import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router,
  Routes,
  Link,
  Switch,
  BrowserRouter,
} from "react-router-dom";

import TopBar from "./components/topbar/Topbar";
import "./index.css";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/homepage/Home";

export default function App() {
  const user = true;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />

        <Route path="/login" element={user ? <Home /> : <Login />} />

        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settimgs" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}
