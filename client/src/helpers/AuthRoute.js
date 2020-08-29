import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuthAccess } from '../contexts/AuthContext'

export function PrivateRoute({ component: Component, authenticated, ...rest }) {
  const { auth } = useAuthAccess();
  return (
    <Route
      {...rest}
      render={(props) => auth === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />}
    />
  )
}
export function PublicRoute({ component: Component, authenticated, ...rest }) {
  const { auth } = useAuthAccess();
  return (
    <Route
      {...rest}
      render={(props) => auth === false
        ? <Component {...props} />
        : <Redirect to='/' />}
    />
  )
}