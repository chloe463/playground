import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LayoutAnimation } from "./pages/LayoutAnimation";
import { ListToDetail } from "./pages/ListToDetail";

const routes = [
  {
    key: "home",
    path: "/",
    component: LayoutAnimation,
    exact: true,
  },
  {
    key: "layoutAnimation",
    path: "/layout-animation",
    component: LayoutAnimation,
  },
  {
    key: "listToDetail",
    path: ["/list-to-detail", "/list-to-detail/:id"],
    component: ListToDetail,
  },
];

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => {
          return (
            <Route key={route.key} path={route.path} component={route.component} exact={route.exact} />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default function App() {
  return <AppRouter />;
};
