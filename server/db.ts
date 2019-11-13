import "reflect-metadata"
import {Connection, ConnectionOptions, createConnection} from "typeorm";
import {RequestedDocs} from "./entity/RequestedDocs";
import {IssuedDocument} from "./entity/IssuedDocument";

let connection: Connection;
let callbacks: Function[] = [];

const dbOptions: ConnectionOptions = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [
        RequestedDocs,
        IssuedDocument
    ],
    synchronize: true,
    logging: false
};

export function connect(){
    console.log("Creating Database Connection for EDI");
    createConnection(dbOptions)
        .then((conn: Connection) => {
            console.log("Database connected successfully");
            connection = conn;
            callbacks.forEach((callback: Function) => {
                callback(connection);
            });
        })
        .catch((e) => {
            console.log("Database failed to connect", e);
            process.exit(1);
        });
}

export default connection;

export const onDatabaseConnected = function(callback: Function) {
    if(connection) {
        callback(connection);
    } else {
        callbacks.push(callback);
    }
}
