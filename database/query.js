const GET_USER_DATA_QUERY = 'SELECT * FROM Users WHERE Username=? AND Password=?;'
const GET_ALL_USERS_DATA_QUERY = 'SELECT * FROM Users;'
const INSERT_USER_DATA_QUERY = 'INSERT INTO Users VALUES (0,?,?,?,?,?,?,?,?,?);'
const DELETE_USER_DATA_QUERY = 'DELETE FROM Users WHERE Users.Username=?;'
const CHANGE_PASSWORD_QUERY = 'UPDATE Users SET Password=? WHERE Username=?;'

export {
    GET_USER_DATA_QUERY,
    GET_ALL_USERS_DATA_QUERY,
    INSERT_USER_DATA_QUERY,
    DELETE_USER_DATA_QUERY,
    CHANGE_PASSWORD_QUERY
}