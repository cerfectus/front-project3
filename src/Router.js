import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Auth from "./components/auth/Auth";
import Profile from "./components/profile/Profile";
import '../src/App.css';
import Register from './components/register/Register'
import mapContainer from './Maps/Maps'
import EditForm from './components/Form/EditForm'
import Click from './components/Click/Click'

const Router = () => (
    <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/api/posts" component={Form}/>
        <Route exact path="/" component={Auth}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path='/Profile' component={Profile}/>
        <Route exact path='/maps' component={mapContainer}/>
        <Route exact path='/api/edit' component={EditForm}/>
        <Route exact path='/click' component={Click}/>



    </Switch>
);

export default Router;