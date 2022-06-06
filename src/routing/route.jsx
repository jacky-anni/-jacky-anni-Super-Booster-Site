import { Route } from "react-router-dom";
import Layout from "./../components/layout/layout";
import LayoutLoginRegister from "./../components/layout/layoutLoginRegister";

export const LoginLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <LayoutLoginRegister>
          <Component {...matchProps} />
        </LayoutLoginRegister>
      )}
    />
  );
};

export const AppLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};
