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
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Part.associate = function(models) {
    Part.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Part;
};
