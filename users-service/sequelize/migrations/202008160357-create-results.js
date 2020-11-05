module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "results", 
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

module.exports.down = queryInterface => queryInterface.dropTable("results");