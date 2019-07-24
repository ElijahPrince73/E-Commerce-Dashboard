/* eslint-disable */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/Home'
import ProductsPage from './Pages/Products'
import ProductDetailPage from './Pages/ProductDetailPage'
import NewProductPage from './Pages/NewProduct'
import CategegoriesPage from './Pages/Categories'
import CategoryDetailPagee from './Pages/CategoryDetail'
import NewCategoryPage from './Pages/NewCategory'
import OrdersPage from './Pages/Orders'
import OrderDetailPage from './Pages/OrderDetail'
import Sidebar from './Containers/SidebarContainer'
import axios from 'axios'

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
  axios
    .get(`${process.env.REACT_APP_API_URL}api/me`, {
      headers: { "x-auth": localStorage.getItem("token") }
    })
    .then(res => {
      window.location.href = "/products";
    });

    return (
        <div>
            {props.children}
        </div>
    );
};

const MainLayout = (props) => {
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
        <Switch>
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
            component={ProductsPage}
          />
          <AppRoute
            exact
            path="/products/new"
            layout={MainLayout}
            component={NewProductPage}
          />
          <AppRoute
            exact
            path="/products/:id"
            layout={MainLayout}
            component={ProductDetailPage}
          />
          <AppRoute
            exact
            path="/categories"
            layout={MainLayout}
            component={CategegoriesPage}
          />
          <AppRoute
            exact
            path="/categories/new"
            layout={MainLayout}
            component={NewCategoryPage}
          />
          <AppRoute
            exact
            path="/categories/:id"
            layout={MainLayout}
            component={CategoryDetailPagee}
          />
          <AppRoute
            exact
            path="/orders"
            layout={MainLayout}
            component={OrdersPage}
          />
          <AppRoute
            exact
            path="/orders/:id"
            layout={MainLayout}
            component={OrderDetailPage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
