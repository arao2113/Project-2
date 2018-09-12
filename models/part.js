module.exports = function(sequelize, DataTypes) {
  var Part = sequelize.define("Part", {
    category: {
      type: DataTypes.STRING,
      defaultValue: "CPU Processors",
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    discription: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Part;
};
