module.exports = function(sequelize, DataTypes) {
  var Part = sequelize.define("Part", {
    category: {
      type: DataTypes.STRING,
      defaultValue: "CPU Processors",
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Part.associate = function(models) {
    Part.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Part;
};
