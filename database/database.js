import * as db from 'mysql'
import * as dotenv from 'dotenv'

dotenv.config()

// FUNCTIONS

function CONNECT_DATABASE() {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                reject(err)
            } else {
                console.log('Connected');
                resolve('Connected')
            }
        })
    })
}
function QUERY_DATABASE(query, values) {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

// DATABASE CONNECTION CONFIG
const connection = db.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

export {
    CONNECT_DATABASE,
    QUERY_DATABASE,
}