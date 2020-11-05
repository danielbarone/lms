import UsersService from "#root/adapters/UsersService";

const Result = {
  order: async result => {
    return await UsersService.fetchOrder({ orderId: result.orderId });
  }
};

export default Result;