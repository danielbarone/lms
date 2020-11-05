import { DataTypes, Model } from "sequelize";

import sequelize from "./connection";

export class User extends Model {}
User.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    contactId: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    passwordHash: {
      allowNull: false,
      type: DataTypes.CHAR(64)
    }
  },
  {
    defaultScope: {
      rawAttributes: { exclude: ["passwordHash"] }
    },
    modelName: "users",
    sequelize
  }
);

export class UserSession extends Model {}
UserSession.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    userId: {
      allowNull: false,
      references: {
        key: "id",
        model: "users"
      },
      type: DataTypes.UUID
    },
    expiresAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    modelName: "userSessions",
    paranoid: false,
    sequelize,
    updatedAt: false
  }
);

export class Order extends Model {}
Order.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    userId: {
      allowNull: false,
      references: {
        key: "id",
        model: "users"
      },
      type: DataTypes.UUID
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    age: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    radius: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    notes: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    app: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    status: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  { modelName: "orders", sequelize, }
);

export class Result extends Model {}
Result.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    orderId: {
      allowNull: false,
      references: {
        key: "id",
        model: "orders"
      },
      type: DataTypes.UUID
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING
    },
  },
  { modelName: "results", sequelize, }
);