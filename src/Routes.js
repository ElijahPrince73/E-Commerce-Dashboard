/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from './Pages/Home'


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

// const LoginRegisterLayout = (props) => {
//     return (
//         <div>
//             <Helmet>
//                 {/* <style type="text/css">
//                     {`
//             body {
//                   background: linear-gradient(#0069ff,#1633ff);
//                   background-repeat: no-repeat;
//                   background-size: cover;
//                   background-position: center;
//                   height: 100vh;
//             }
//             nav {
//               background-color: transparent !important;
//             }
//         `}

//                 </style> */}
//             </Helmet>
//             {props.children}
//         </div>
//     );
// };
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
            <AppRoute exact path="/" layout={MainLayout} component={HomePage} />
        {/* <AppRoute
                    exact
                    path="/surveys"
                    layout={MainLayout}
                    component={Dashboard}
                />
                <AppRoute
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
