import gql from 'graphql-tag';

const orders = gql`
  {
    orders {
      id
      user {
        id
      }
      firstName
      age
      address
      radius
      notes
      app
      status
      createdAt
      updatedAt
    }
  }
`;

const results = gql`
  query Result($orderId: ID!) {
    results(orderId: $orderId) {
      id
      order {
        id
      }
      image
    }
  }
`;

export {
  orders,
  results,
};
