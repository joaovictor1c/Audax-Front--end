import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ProtoTypes from 'prop-types';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';


export default function RoutesWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed  = !!localStorage.getItem('TOKEN');

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props}/>
        </Layout>
      )}
    />
  );
}

RoutesWrapper.propTypes = {
  isPrivate: ProtoTypes.bool,
  component: ProtoTypes.oneOfType([ProtoTypes.element, ProtoTypes.func])
    .isRequired,
};

RoutesWrapper.defaultProps = {
  isPrivate: false,
};
