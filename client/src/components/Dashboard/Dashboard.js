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
  const userDataArr = session.user.contactId.split('-').slice(0, 3);
  const fullName = `${session.user.firstName} ${session.user.lastName}`;
  const userType = session.user.userType;

  switch (userType) {
    case TYPE_ADMIN:
      return {
        userType: 'Admin',
        fullName,
        routes: (
          <AdminRoutes
            session={session}
            userType={userType}
          />
        ),
      };
    case TYPE_BORROWER:
      return {
        userType: 'Borrower',
        fullName,
        routes: (
          <BorrowerRoutes
            cardNo={parseInt(userDataArr[1] + userDataArr[2], 10)}
            session={session}
            userType={userType}
          />
        ),
      };
    case TYPE_LIBRARIAN:
      return {
        userType: 'Librarian',
        fullName,
        routes: (
          <LibrarianRoutes
            branchId={parseInt(userDataArr[1] + userDataArr[2], 10)}
            session={session}
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
