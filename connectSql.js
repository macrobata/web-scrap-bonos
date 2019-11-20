

const config = {
    user: 'sa',
    password: 'local',
    server: '10.210.40.196', // You can use 'localhost\\instance' to connect to named instance
    database: 'Admin',
}

const sql = require('mssql')

sql.on('error', err => {
    // ... error handler
})

sql.connect(config).then(pool => {
    // Query

    return pool.request()
        .query('select * from ViCredito where IdCredito = 12')
}).then(result => {
    console.log(result)
}).catch(err => {
    // ... error checks
    console.log(err)
});
