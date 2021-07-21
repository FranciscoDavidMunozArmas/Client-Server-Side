import { createPool } from 'mysql2/promise';

export const connect = async () => {
    const connection = await createPool({
        host: <string>process.env.SQL_HOST,
        user: <string>process.env.SQL_USER,
        password: <string>process.env.SQL_PASSWORD,
        database: <string>process.env.SQL_NAME,
        connectionLimit: 10
    });

    return connection;
}