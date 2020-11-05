import UsersService from "#root/adapters/UsersService";

const createOrderResolver = async (obj, { userId, firstName, age, address, radius, app }, context) => {
  if (!context.res.locals.userSession) throw new Error("Not logged in!");
  return await UsersService.createOrder({ userId, firstName, age, address, radius, app });
};

export default createOrderResolver;
