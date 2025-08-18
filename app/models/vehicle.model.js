const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {

    const Vehiculo = sequelize.define("vehiculo", {
        id_vehiculo:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        marca:{
            type: DataTypes.STRING(50)
        },
        modelo:{
            type: DataTypes.STRING(50)
        },
        anio:{
            type: DataTypes.INTEGER
        },
        tipo:{
            type: DataTypes.STRING(30)
        },
        matricula:{
            type: DataTypes.STRING(15),
            unique: true
        },
        disponible:{
            type: Sequelize.BOOLEAN,
            default: true
        }
    });
    return Vehiculo;
};
