import React from "react"
import Header from "./components/Header"
import Register from './pages/Register'
import Login from './pages/Login'
import { Switch, Route } from 'react-router-dom'
import { AuthProvider } from "./contexts/AuthContext"
import { ToastContainer } from 'react-toastify'
import Dashboard from './pages/Dashboard'
import { PublicRoute, PrivateRoute } from './helpers/AuthRoute'
import Home from './pages/Home'
import AddPost from './pages/AddPost'
import SinglePost from './pages/SinglePost'
import User from './pages/User'

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts/:id" exact component={SinglePost} />
          <PublicRoute path="/signup" exact component={Register}></PublicRoute>
          <PublicRoute path="/signin" exact component={Login}></PublicRoute>
          <PrivateRoute path="/dashboard" exact component={Dashboard}></PrivateRoute>
          <PrivateRoute path="/add" exact component={AddPost}></PrivateRoute>
          <PrivateRoute path="/user" exact component={User}></PrivateRoute>
        </Switch>
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;
