import React, { lazy, Suspense } from "react"
import { Switch, Route } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from './helpers/AuthRoute'
import Header from "./components/Header"
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from "./contexts/AuthContext"
import Skeleton from 'react-loading-skeleton'

const Home = (lazy(() => (import('./pages/Home'))))
const SinglePost = (lazy(() => (import('./pages/SinglePost'))))
const Dashboard = (lazy(() => (import('./pages/Dashboard'))))
const Login = (lazy(() => (import('./pages/Login'))))
const Register = (lazy(() => (import('./pages/Register'))))
const AddPost = (lazy(() => (import('./pages/AddPost'))))
const User = (lazy(() => (import('./pages/User'))))

const Loadings = () => (
  <div className="container text-center">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
)

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Suspense fallback={<Loadings />} >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts/:id" exact component={SinglePost} />
            <PublicRoute path="/signup" exact component={Register}></PublicRoute>
            <PublicRoute path="/signin" exact component={Login}></PublicRoute>
            <PrivateRoute path="/dashboard" exact component={Dashboard}></PrivateRoute>
            <PrivateRoute path="/add" exact component={AddPost}></PrivateRoute>
            <PrivateRoute path="/user" exact component={User}></PrivateRoute>
          </Switch>
        </Suspense>
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;
