import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from '../pages/SignInPage/signIn.js';
import SignUp from '../pages/SignUpPage/signUp.js';



const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <SignIn />
                </Route>

                <Route exact path="/cadastro">
                    <SignUp />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;