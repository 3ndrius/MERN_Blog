import React, {useState} from "react";
import Header from "./components/Header";
import Register from './pages/Register';
import Login from './pages/Login';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import { useFetch } from './hooks/index';
 import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />}
    />
  )
}
function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}


function App() {
  const {data, isLoading} = useFetch();
  // console.log(data, isLoading);
  const [authenticated, setAuthenticated] = useState(JSON.parse(localStorage.getItem("auth")) || false)
  console.log(authenticated)
  return (
    <>
    <AuthProvider>
      <Header />
      <Switch>
          <PublicRoute path="/signup" exact authenticated={authenticated} component={Register}></PublicRoute>
          <PublicRoute path="/signin" exact authenticated={authenticated} component={Login}></PublicRoute> 
          <PrivateRoute path="/dashboard" exact authenticated={authenticated} component={Dashboard}></PrivateRoute>
      </Switch>
    </AuthProvider>
      <ToastContainer/>
    </>
  );
}

export default App;
