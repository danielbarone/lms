import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { LandingPage } from '..';
import { Routes, UnauthRoutes } from '../../navigation';

const Dashboard = () => {
  const session = useSelector((state) => state.session);
  const location = useLocation();
  const contactId = location.search.replace('?contactId=', '');
  const [isSigningUp, setIsSigningUp] = useState(!!contactId);

  if (session) {
    return (
      <LandingPage
        authBtn='logout'
        contactId={contactId}
        isSigningUp={isSigningUp}
        routes={<Routes />}
        session={session}
        setIsSigningUp={setIsSigningUp}
      />
    );
  }

  return <LandingPage
    authBtn='login'
    contactId={contactId}
    isSigningUp={isSigningUp}
    routes={<UnauthRoutes />}
    session={session}
    setIsSigningUp={setIsSigningUp}
  />;
};

export default Dashboard;
