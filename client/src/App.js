import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Claim from './components/Claim/Claim';
import Terms from './components/Terms/Terms';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScree';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';




const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path='/tags/:name'component={CreatorOrTag} />
          <Route path='/creators/:name' component={CreatorOrTag} />
          <Route path="/login" exact component={() => (!user ? <LoginScreen /> : <Redirect to="/posts" />)} />
          <Route path="/claim" exact component={Claim} />
          <Route path="/termsandconditions" exact component={Terms} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/forgotpassword"component={ForgotPasswordScreen} />
          <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen} />
       </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;