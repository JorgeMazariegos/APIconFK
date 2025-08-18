const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
        id_cliente:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.STRING(100),
        },
        email:{
            type: DataTypes.STRING(100)
        },
        telefono:{
            type: DataTypes.STRING(20)
        },
        direccion:{
            type: DataTypes.STRING(150)
        },
    });
    return Cliente;
};
