import gql from 'graphql-tag';

const userSession = gql`
  {
    userSession(me: true) {
      id
      user {
        contactId
        email
        id
        firstName
        lastName
        userType
      }
    }
  }
`;

export {
  userSession,
};
