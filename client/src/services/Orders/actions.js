import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import * as actionTypes from './actionTypes';

const query = gql`
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

export const grabOrdersStart = () => ({
  type: actionTypes.GRAB_ORDERS_START,
});

export const grabOrdersSuccess = (data) => ({
  type: actionTypes.GRAB_ORDERS_SUCCESS,
  data,
});
export const grabOrdersFail = (error) => ({
  type: actionTypes.GRAB_ORDERS_FAIL,
  error,
});

export const grabOrders = () => (
  (dispatch) => {
    try {
      dispatch(grabOrdersStart());
      const { data } = useQuery(query, {
        variables: {
          orderId: 'c5c1988b-e1db-4a46-9a52-2a042ac67d2f',
        },
      });
      dispatch(grabOrdersSuccess(data.results));
    } catch (e) {
      dispatch(grabOrdersFail(e));
    }
  }
);
