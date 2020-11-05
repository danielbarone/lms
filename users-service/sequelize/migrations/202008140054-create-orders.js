module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "orders", 
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
    }, {
      charset: "utf8"
    }
  );
};

module.exports.down = queryInterface => queryInterface.dropTable("orders");