import mysql from "mysql2/promise";

export async function connectDB() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",        // your MySQL username
    password: "",        // your MySQL password
    database: "userdb",  // database name
  });
  return connection;
}