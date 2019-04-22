import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import AppliedRoute from "./components/AppliedRoute";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import FAQ from "./containers/FAQ"
import About from "./containers/About";
import Partner from "./containers/Partner"
import DashBoard from "./containers/Dashboard";
import Test from "./containers/Test";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
	<AppliedRoute path="/about" exact component={About} props={childProps} />
	<AppliedRoute path="/FAQ" exact component={FAQ} props={childProps} />
  <AppliedRoute path="/Test" exact component={Test} props={childProps} />
	<AppliedRoute path="/partner" exact component={Partner} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
	<UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
	<AuthenticatedRoute path="/notes/new" exact component={NewNote} props={childProps} />
	<AuthenticatedRoute path="/notes/:id" exact component={Notes} props={childProps} />
	<AuthenticatedRoute path="/dashboard" exact component={DashBoard} props={childProps} />
	{ /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
