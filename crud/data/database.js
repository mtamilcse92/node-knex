var pg = require('pg');
module.exports = {
    // database: () => {
    //     var config = {
    //         user: 'postgres',
    //         database: 'my_db',
    //         password: '55555',
    //         port: 5432,
    //         max: 10,
    //         idleTimeoutMillis: 30000,
    //     };
    //     var client = new pg.Client(config);
    //     client.connect((err, client) => {
    //         if (err) {
    //             console.log(err, 500);
    //         }
    //         console.log("connected");
    //     });
    // }


    database: () => {
        var knex = require('knex')({
            client: 'pg',
            connection: {
                host: 'localhost',
                port: 5432,
                user: 'postgres',
                password: '55555',
                database: 'my_db'
            }
        });

        knex.schema.createTableIfNotExists('users', function(table) {
                table.increments('id');
                table.string('user_name');
            })
            .catch(function(e) {
                console.error(e);
            });
    }

};
