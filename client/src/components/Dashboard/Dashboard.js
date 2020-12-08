import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { LandingPage } from '..';
import {
  AdminRoutes,
  BorrowerRoutes,
  LibrarianRoutes,
} from '../../navigation';

const TYPE_ADMIN = '000';
const TYPE_LIBRARIAN = '001';
const TYPE_BORROWER = '002';

const parseUserData = (session) => {
  /* userDataArr --> [user type, user data 1, user data 2] */
  const userDataArr = session.user.contactId.split('-').slice(0, 3);
  const userType = session.user.userType;

  switch (userType) {
    case TYPE_ADMIN:
      return {
        userType: 'Administrator',
        routes: (
          <AdminRoutes
            userType={userType}
          />
        ),
      };
    case TYPE_BORROWER:
      return {
        userType: 'Borrower',
        routes: (
          <BorrowerRoutes
            cardNo={parseInt(userDataArr[1] + userDataArr[2], 10)}
            userType={userType}
          />
        ),
      };
    case TYPE_LIBRARIAN:
      return {
        userType: 'Librarian',
        routes: (
          <LibrarianRoutes
            branchId={parseInt(userDataArr[1] + userDataArr[2], 10)}
            userType={userType}
          />
        ),
      };
    default:
      return { routes: <BorrowerRoutes /> };
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
        session={session}
        setIsSigningUp={setIsSigningUp}
        userData={parseUserData(session)}
      />
    );
  }

  return <LandingPage
    authBtn='login'
    contactId={contactId}
    isSigningUp={isSigningUp}
    session={session}
    setIsSigningUp={setIsSigningUp}
  />;
};

export default Dashboard;
