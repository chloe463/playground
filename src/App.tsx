import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LayoutAnimation } from "./pages/LayoutAnimation";

const routes = [
  {
    key: "home",
    path: "/",
    component: LayoutAnimation,
  },
  {
    key: "layoutAnimation",
    path: "/layout-animation",
    component: LayoutAnimation,
  },
];

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => {
          return (
            <Route key={route.key} path={route.path} component={route.component} />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default function App() {
  return <AppRouter />;
};
