import UsersService from "#root/adapters/UsersService";

const resultsResolver = async (parent, args, context, info) => {
  if (!context.res.locals.userSession) throw new Error("No user session!");
  return await UsersService.fetchAllResults({orderId: args.orderId});
};

export default resultsResolver;
