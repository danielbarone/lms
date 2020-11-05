import UsersService from "#root/adapters/UsersService";

const ordersResolver = async (parent, args, context, info) => {
  if (!context.res.locals.userSession) throw new Error("No user session!");
  return await UsersService.fetchAllOrders({userId: context.res.locals.userSession.userId});
};

export default ordersResolver;
