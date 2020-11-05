import UsersService from "#root/adapters/UsersService";

const Order = {
  user: async order => {
    return await UsersService.fetchUser({ userId: order.userId });
  }
};

export default Order;