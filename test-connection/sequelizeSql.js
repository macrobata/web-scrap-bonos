const Sequelize = require('sequelize');

var sequelize = new Sequelize('admin', 'sa', 'local', {
    host: '10.210.40.196',
    dialect: 'mssql'
});
/*
sequelize.authenticate()
    .then(() => {
        console.log('Conectado')
    })
    .catch(err => {
        console.log('No se conecto')
    });
*/

var Credito = sequelize.define('ViCredito', {
        idCredito: {
            type: Sequelize.INTEGER,
            field: 'IdCredito'
        },
        descripcion: {
            type: Sequelize.STRING,
            field: 'Descripcion'
        }
    }, {
        tableName: 'ViCredito'
    }
)

Credito.findAll({attributes: ['idCredito','descripcion']})
    .then(res => {
        console.log(res.dataValues)
    })
    .catch(err => {
        console.log(err)
    })

