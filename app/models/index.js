const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const DataTypes = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions:{
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },  
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.clientes =  require("./client.model.js")(sequelize,Sequelize);
db.vehiculos =  require("./vehicle.model.js")(sequelize,Sequelize);
db.alquiler =  require("./alquiler.model.js")(sequelize,Sequelize);

//Cargar Modelos

const Cliente = require("./client.model.js")(sequelize, DataTypes);
const Vehiculo = require("./vehicle.model.js")(sequelize, DataTypes);
const Alquiler = require("./alquiler.model.js")(sequelize, DataTypes);

Cliente.hasMany(Alquiler, {foreignKey:'id_cliente'});
Alquiler.belongsTo(Cliente, {foreignKey:'id_cliente'});
Vehiculo.hasMany(Alquiler, {foreignKey:'id_vehiculo'});
Alquiler.belongsTo(Vehiculo, {foreignKey:'id_vehiculo'});


module.exports = db;