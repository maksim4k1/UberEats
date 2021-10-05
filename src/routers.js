import Error404 from "./pages/errors/Error404";
import Error500 from "./pages/errors/Error500";
import Places from "./pages/Places";
import Restaurant from "./pages/Restaurant";

const routers = [
  {path: "/", component: Places, exact: true},
  {path: "/restaurant/:id", component: Restaurant, exact: true},
  {path: "/error/404", component: Error404, exact: true},
  {path: "/error/500", component: Error500, exact: true},
];

export default routers;