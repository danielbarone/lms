import UsersService from "#root/adapters/UsersService";

const orderResolver = async (parent, args, context, info) => {
  if (!context.res.locals.userSession) throw new Error("No user session!");
  return await UsersService.fetchOrder({orderId: args.id});
};

export default orderResolver;
