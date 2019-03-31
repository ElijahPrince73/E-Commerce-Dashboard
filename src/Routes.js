/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './Pages/Home'
import ProductPage from './Pages/Products'
import Sidebar from './Containers/SidebarContainer'

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
        )}
    />
);

const AdminLayout = (props) => {
  const localToken = localStorage.getItem('token');
  if (localToken) {
    window.location.href = '/products';
  }

    return (
        <div>
            {props.children}
        </div>
    );
};

const MainLayout = (props) => {
  const localToken = localStorage.getItem("token");
  if (!localToken) {
    window.location.href = "/products";
  }
    return (
        <div>
          <Sidebar component={props.children}/>
        </div>
    );
};

const Routes = () => {  
  return (
    <div>
      <BrowserRouter>
        <div>
          <AppRoute
            exact
            path="/"
            layout={AdminLayout}
            component={HomePage}
          />
          <AppRoute
            exact
            path="/products"
            layout={MainLayout}
            component={ProductPage}
          />
          <AppRoute
            exact
            path="/products/:id"
            layout={MainLayout}
            component={ProductPage}
          />
          <AppRoute
            exact
            path="/categories"
            layout={MainLayout}
            component={ProductPage}
          />
          <AppRoute
            exact
            path="/categories/:id"
            layout={MainLayout}
            component={ProductPage}
          />
          <AppRoute
            exact
            path="/orders"
            layout={MainLayout}
            component={ProductPage}
          />
          <AppRoute
            exact
            path="/orders/:id"
            layout={MainLayout}
            component={ProductPage}
          />
          <AppRoute
            exact
            path="/new-product"
            layout={MainLayout}
            component={ProductPage}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
