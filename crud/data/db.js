var db ={
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '55555',
        database: 'my_db'
    }
};


exports.value = db;