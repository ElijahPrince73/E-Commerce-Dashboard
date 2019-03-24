/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from './Pages/Home'
import ProductPage from './Pages/Products'
import Sidebar from './Components/Sidebar'

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
    return (
        <div>
            {props.children}
        </div>
    );
};

const MainLayout = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

const Routes = () => (
  <div>
    <BrowserRouter>
      <div>
        <Sidebar />
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
        {/* <AppRoute
          exact
          path="/create-survey"
          layout={MainLayout}
          component={SurveyCreate}
        />
        <AppRoute
          exact
          path="/draft"
          layout={MainLayout}
          component={SurveyDraft}
        />
        <AppRoute
          exact
          path="/draft/:id"
          layout={MainLayout}
          component={SurveyDraft}
        />
        <AppRoute
          exact
          path="/view-survey/:id"
          layout={MainLayout}
          component={ViewSurvey}
        />
        <AppRoute
          exact
          path="/thanks"
          layout={MainLayout}
          component={ThankYou}
        /> */}
      </div>
    </BrowserRouter>
  </div>
);

export default Routes;
