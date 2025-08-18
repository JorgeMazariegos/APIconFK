const db = require("../models"); 
const Alquiler = db.alquiler;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.id_cliente) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const alquiler = {
        id_cliente: req.body.id_cliente,
        id_vehiculo: req.body.id_vehiculo,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin,
        precio_diario: req.body.precio_diario,
        total: req.body.total,
        devuelto: req.body.devuelto
    };

    Alquiler.create(alquiler)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the alquiler."
            });
        });
};

exports.findAll = (req, res) => {
    const id_cliente = req.query.id_cliente;
    var condition = id_cliente ? { id_cliente: { [Op.iLike]: `%${id_cliente}%` } } : null;

    Alquiler.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving alquileres."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Alquiler.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving alquiler with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Alquiler.update(req.body, {
        where: { id_alquiler: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Alquiler was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Alquiler with id=${id}. Maybe Alquiler was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Alquiler with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Alquiler.destroy({
        where: { id_alquiler: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Alquiler was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Alquiler with id=${id}. El alquiler no fue encontado!`
                });
            }
        })
        .catch(err => {
            resb.status(500).send({
                message: "Could not delete Alquiler with id=" + id
            });
        });
};