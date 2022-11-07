import { Pool } from "pg";
 
const connectionString = 'postgres://ocfejtci:0znqZyHe8QnoXuWu5CTckrkBcun5DDp8@babar.db.elephantsql.com/ocfejtci';
 
const db = new Pool({ connectionString });
 
export default db;
 
// Só isso que tem que fazer para conectar o banco de dados
