import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { LandingPage } from '..';
import {
  AdminRoutes,
  BorrowerRoutes,
  LibrarianRoutes,
  Routes,
  UnauthRoutes,
} from '../../navigation';

const TYPE_ADMIN = '000';
const TYPE_LIBRARIAN = '001';
const TYPE_BORROWER = '002';

const getUserType = (session) => {
  const userData = session.user.contactId.split('-').slice(0, 3);
  const userType = userData[0];

  switch (userType) {
    case TYPE_LIBRARIAN:
      return {
        userType: 'Librarian',
        routes: <LibrarianRoutes />,
        branchId: parseInt(userData[1]) + parseInt(userData[2]),
      };
    case TYPE_ADMIN:
      return {
        userType: 'Administrator',
        routes: <AdminRoutes />,
      };
    case TYPE_BORROWER:
      return {
        userType: 'Borrower',
        routes: <BorrowerRoutes />,
        cardNo: parseInt(userData[1]) + parseInt(userData[2]),
      };
    default:
      return {routes: <UnauthRoutes />};
  }
};

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
        userData={getUserType(session)}
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
