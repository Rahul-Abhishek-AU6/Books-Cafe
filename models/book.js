module.exports = (sequelize, DataTypes) => {
    var Book = sequelize.define('Book', {
        title: DataTypes.STRING,
        name: {
            type: DataTypes.STRING,
            allowNull: false
          },
        price: DataTypes.DOUBLE,
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
        auther: {
            type: DataTypes.STRING,
            allowNull: false
          },
        title: DataTypes.STRING,
        publisher: DataTypes.STRING,
        img: DataTypes.STRING,
    },{
        freezeTableName: true
    });
    return Book;
};
