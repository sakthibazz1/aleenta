import React from "react";
import { Switch, Route, BrowserRouter} from "react-router-dom";

// import PrivateRoute from "./PrivateRoute";
// import './assets/css/main.css';
// import './assets/js/main.js'
import Layout from "./Layout";

// import Header from "./headerBar";

import Welcome from "./components/Welcome";
import About from "./components/about/About";
import Blogs from "./components/Blogs/Blogs";
import Program from "./components/program/Program";
import Contact from "./components/Contact/Contact"
import CorporatePrograms from "./components/program/corporatePrograms"
import IndividualPrograms from "./components/program/individualPrograms"
import GroupPrograms from "./components/program/GroupPrograms"

// import Explore from "./components/SignIn_SignUp/Explore";
// import SignIn from "./components/SignIn_SignUp/SignIn";
// import SignUp from "./components/SignIn_SignUp/SignUp";
// import Program from "./components/program/program";
// import ForgotPassword from "./components/SignIn_SignUp/ForgotPassword";
// import PasswordReset from "./components/SignIn_SignUp/PasswordReset";

// import PaymentProcess from "./components/PaymentProcess/paymentProcess";

// import Dashboard from "./components/Dashboard/Dashboard";

// Admin Routes
// import AdminRoutes from "./AdminRoutes";

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      {/**---- Admin Main Route ----**/}
      {/* <PrivateRoute path="/admin" component={AdminRoutes} /> */}
      <Layout>
      {/* <Header> */}
        <Route exact path="/" component={Welcome} />
        <Route path="/about-us" component={About} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/program" component={Program} />
        <Route path="/contact" component={Contact} />
        <Route path="/corporatePrograms" component={CorporatePrograms} />
        <Route path="/individualPrograms" component={IndividualPrograms} />
        <Route path="/groupPrograms" component={GroupPrograms} />
        {/*<PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/paymentProcess/:programId" component={PaymentProcess} /> */}
      </Layout>
      {/* </Header> */}
    </Switch>
    </BrowserRouter>
  );
};

export default App;
