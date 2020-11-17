const { Pool } = require('pg'); 
const myURI = process.env.ELEPHANTPASSWORD;
const pool = new Pool({
    connectionString: myURI
});

module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
};

// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     login_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//     given_name TEXT,
//     family_name TEXT,
//     username TEXT,
// );
// CREATE TABLE admins (
//     id SERIAL PRIMARY KEY,
//     login_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//     given_name TEXT,
//     family_name TEXT,
//     username TEXT,
// );