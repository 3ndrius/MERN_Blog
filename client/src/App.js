import React from "react";
import Header from "./components/Header";
import Register from './pages/Register';
import Login from './pages/Login';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import { useFetch } from './hooks/index';
 import { ToastContainer } from 'react-toastify';
function App() {
  const {data, isLoading} = useFetch();
  // console.log(data, isLoading);
  return (
    <>
    <AuthProvider>
      <Header />
      <Switch>
          <Route path="/signup" exact component={Register} />
          <Route path="/signin" exact component={Login} />
      </Switch>
    </AuthProvider>
      <ToastContainer/>
    </>
  );
}

export default App;
