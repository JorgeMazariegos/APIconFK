const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Alquiler = sequelize.define("alquiler", {
        id_alquiler:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_cliente:{
            type: DataTypes.INTEGER,
            references: {
                model: 'clientes',
                key: 'id_cliente'
            }
        },
        id_vehiculo:{
            type: DataTypes.INTEGER,
            references: {
                model: 'vehiculos',
                key: 'id_vehiculo'
            }
        },
        fecha_inicio:{
            type: DataTypes.DATE
        },
        fecha_fin:{
            type: DataTypes.DATE
        },
        precio_diario:{
            type: DataTypes.NUMERIC(10,2)
        },
        total:{
            type: DataTypes.NUMERIC(10,2)

        },
        devuelto:{
            type: DataTypes.BOOLEAN,
            default: true
        }
    });
    return Alquiler;
};
