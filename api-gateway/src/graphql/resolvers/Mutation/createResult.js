import UsersService from "#root/adapters/UsersService";

const createResultResolver = async (obj, { orderId, image }, context) => {
  if (!context.res.locals.userSession) throw new Error("Not logged in!");
  return await UsersService.createResult({ orderId, image });
};

export default createResultResolver;
