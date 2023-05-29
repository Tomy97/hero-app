import { createBrowserRouter } from "react-router-dom";
import { HomeViews } from "../views/Home/HomeViews";
import { LoginViews } from "../views/Login/LoginViews";
import { MyTeamViews } from "../views/MyTeam/MyTeamViews";

export const router = createBrowserRouter([
  { path: "/", element: <HomeViews /> },
  { path: "login", element: <LoginViews />, index: true },
  { path: "myteam", element: <MyTeamViews /> },
]);
