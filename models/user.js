module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING
    });

    User.associate = function(models) {

        User.hasMany(models.Part, {
            onDelete: "cascade"
        });
    };

    return User;
};