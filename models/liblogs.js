module.exports = (sequelize, DataTypes) => {
    var LLog = sequelize.define('LLog', {
        userId:{
            type:DataTypes.STRING,
             allowNull: false
              },
          bookId:{
              type:DataTypes.STRING,
              allowNull: false
              },
        returnStatus:{
            type: DataTypes.BOOLEAN,
            allowNull:false
             } ,
        } , 
        {
            freezeTableName: true
        }
      );
    return LLog;
};
