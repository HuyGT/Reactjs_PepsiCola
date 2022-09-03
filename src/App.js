import { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import { adminRouter, userRouter } from "./common/router";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";

function App() {
  return (
    <div className="App">
      <Suspense >
        <Switch>
          {userRouter.map((page, index) => {
            const Component = page.component;
            return (
              <Route
                key={index}
                exact={page.isExact}
                path={page.path}
                render={() => (
                  <UserLayout>
                    <Component />
                  </UserLayout>
                )}
              />
            );
          })}
          {adminRouter.map((c, index) => {
            const Component = c.component;
            return (
              <Route
                key={index}
                exact={c.isExact}
                path={c.path}
                render={() => (
                  <AdminLayout>
                    <Component />
                  </AdminLayout>
                )}
              ></Route>
            );
          })}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
