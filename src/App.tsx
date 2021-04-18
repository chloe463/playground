import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { LayoutAnimation } from "./pages/LayoutAnimation";
import { ListToDetail } from "./pages/ListToDetail";
import { VirtualizedList } from "./pages/VirtualizedList";

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
    key: "virtualizedList",
    path: "/virtualized-list",
    component: VirtualizedList,
  },
  {
    key: "listToDetail",
    path: ["/list-to-detail", "/list-to-detail/:id"],
    component: ListToDetail,
  },
];

const AppRouter = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "80px" }}>
        <BrowserRouter>
          <Switch>
            {routes.map((route) => {
              return (
                <Route key={route.key} path={route.path} component={route.component} exact={route.exact} />
              );
            })}
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default function App() {
  return <AppRouter />;
};
