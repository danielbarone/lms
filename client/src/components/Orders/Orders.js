/* React */
import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import useStyles from './Orders.styles';
import * as queries from '../../utils/queries';

import { Result } from '..';

const Orders = (props) => {
  const classes = useStyles(props);

  const [selectedOrder, setSelectedOrder] = useState();
  const { data, loading } = useQuery(queries.orders);

  if (loading) return 'Loading...';

  const OrderList = (
    <div className={classes.root}>
      {data.orders.length > 0 ? data.orders.map((order) => (
        <div key={order.id}>
          <h2
            style={{ cursor: 'pointer' }}
            onClick={(evt) => {
              evt.preventDefault();
              setSelectedOrder(order);
            }}
          >
            {order.firstName}
          </h2>
        </div>
      )) : (
      <h2>You haven&apos;t made any orders.</h2>
      )}
    </div>
  );

  return selectedOrder ? (
    <Result
      orderId={selectedOrder.id}
      name={selectedOrder.firstName}
      age={selectedOrder.age}
    />
  ) : OrderList;
};

export default Orders;
