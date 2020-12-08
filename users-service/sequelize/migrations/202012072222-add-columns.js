module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.addColumn(
    'users', // table name
    'userType', // new field name
    {
      type: DataTypes.STRING,
      allowNull: true,
    },
  );
};

module.exports.down = queryInterface => queryInterface.removeColumn('users', 'userType');