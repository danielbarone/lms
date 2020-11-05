import { addHours } from "date-fns";
import {
  Order,
  Result,
  User,
  UserSession
} from "#root/db/models";
import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";
import passwordCompareSync from "#root/helpers/passwordCompareSync";

const USER_SESSION_EXPIRY_HOURS = 1;

const setupRoutes = app => {
  app.post("/sessions", async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
      return next(new Error("Invalid username or password!"));
    }

    try {
      const user = await User.findOne({ attributes: {}, where: { email: req.body.email } });

      if (!user) return next(new Error("Invalid email!"));

      if (!passwordCompareSync(req.body.password, user.passwordHash)) {
        return next(new Error("Incorrect password!"));
      }

      const expiresAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS);

      const sessionToken = generateUUID();

      const userSession = await UserSession.create({
        expiresAt,
        id: sessionToken,
        userId: user.id
      });

      return res.json(userSession);
    } catch (e) {
      return next(e);
    }
  });
  app.post("/updatepassword", async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
      return next(new Error("Invalid username or password!"));
    }

    try {
      const user = await User.findOne({ attributes: {}, where: { email: req.body.email } });

      if (!user) return next(new Error("Invalid email!"));

      const updateUser = await user.update({
        passwordHash: hashPassword(req.body.password)
      })

      const expiresAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS);

      const sessionToken = generateUUID();

      const userSession = await UserSession.create({
        expiresAt,
        id: sessionToken,
        userId: user.id
      });

      return res.json(userSession);
    } catch (e) {
      return next(e);
    }
  });

  app.delete("/sessions/:sessionId", async (req, res, next) => {
    try {
      const userSession = await UserSession.findByPk(req.params.sessionId);

      if (!userSession) return next(new Error("Invalid session ID"));

      await userSession.destroy();

      return res.end();
    } catch (e) {
      return next(e);
    }
  });

  app.get("/sessions/:sessionId", async (req, res, next) => {
    try {
      const userSession = await UserSession.findByPk(req.params.sessionId);

      if (!userSession) return next(new Error("Invalid session ID"));

      return res.json(userSession);
    } catch (e) {
      return next(e);
    }
  });
  
  app.post("/users", async (req, res, next) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password || !req.body.contactId) {
      return next(new Error("Invalid body!"));
    }
    try {
      const newUser = await User.create({
        contactId: req.body.contactId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        id: generateUUID(),
        passwordHash: hashPassword(req.body.password)
      });

      return res.json(newUser);
    } catch (e) {
      return next(e);
    }
  });
  app.patch("/users/:userId", async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.userId);

      if (!user) return next(new Error("Invalid user ID"));

      const updatedUser = await user.set('passwordHash', hashPassword(req.body.password));

      return res.json(updatedUser);
    } catch (e) {
      return next(e);
    }
  });
  app.get("/users/:userId", async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.userId);

      if (!user) return next(new Error("Invalid user ID"));

      return res.json(user);
    } catch (e) {
      return next(e);
    }
  });
  app.get("/orders", async (req, res, next) => {
    try {
      const orders = await Order.findAll();
      return res.json(orders);
    } catch (e) {
      return next(e);
    }
  });
  app.post("/orders", async (req, res, next) => {
    if ( !req.body.userId || !req.body.firstName || !req.body.age || !req.body.address || !req.body.radius || !req.body.app ) {
      return next(new Error("Invalid body!"));
    }
    try {
      const newOrder = await Order.create({
        id: generateUUID(),
        userId: req.body.userId,
        firstName: req.body.firstName,
        age: req.body.age,
        address: req.body.address,
        radius: req.body.radius,
        notes: req.body.notes,
        app: req.body.app,
        status: 0,
      });
      return res.json(newOrder);
    } catch (e) {
      return next(e);
    }
  });
  app.get("/order/:orderId", async (req, res, next) => {
    try {
      const order = await Order.findByPk(req.params.orderId);
      if (!order) return next(new Error("Invalid order ID"));
      return res.json(order);
    } catch (e) {
      return next(e);
    }
  });
  app.get("/orders/:userId", async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.userId);
      if (!user) return next(new Error("Invalid user ID"));

      const orders = await Order.findAll({where: {userId: user.id}})
      return res.json(orders);
    } catch (e) {
      return next(e);
    }
  });
  app.get("/results/:orderId", async (req, res, next) => {
    try {
      const order = await Order.findByPk(req.params.orderId);
      if (!order) return next(new Error("Invalid order ID"));
      
      const results = await Result.findAll({where: {orderId: order.id}});
      return res.json(results);
    } catch (e) {
      return next(e);
    }
  });
  app.post("/results", async (req, res, next) => {
    if ( !req.body.orderId || !req.body.image ) {
      return next(new Error("Invalid body!"));
    }
    try {
      const newResult = await Result.create({
        id: generateUUID(),
        orderId: req.body.orderId,
        image: req.body.image,
      });
      return res.json(newResult);
    } catch (e) {
      return next(e);
    }
  });
};

export default setupRoutes;
