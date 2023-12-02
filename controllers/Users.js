import { QUERY_DATABASE } from '../database/database.js'
import {
    GET_USER_DATA_QUERY,
    GET_ALL_USERS_DATA_QUERY,
    INSERT_USER_DATA_QUERY,
    DELETE_USER_DATA_QUERY,
    CHANGE_PASSWORD_QUERY
} from '../database/query.js'

const LOGIN_USER = async (req, res) => {
    const { Username, Password } = req.body
    QUERY_DATABASE(GET_USER_DATA_QUERY, [Username, Password]).then(response => {
        if (response.length == 0) {
            return res.status(404).json({ message: 'User not found!' })
        }
        return res.status(200).json(response)
    }).catch(err => {
        return res.status(500).json({ message: 'Server error!', error: err })
    })
}

const CHANGE_PASSWORD = async (req, res) => {
    const { Username, Password } = req.body
    QUERY_DATABASE(CHANGE_PASSWORD_QUERY, [Password, Username]).then(response => {
        if (response.affectedRows == 0) {
            return res.status(404).json({ message: 'User not found!' })
        }
        return res.status(200).json({ message: 'Password Changed', response })
    }).catch(err => {
        return res.status(500).json({ message: 'Server error!', error: err })
    })
}

const DELETE_USER = async (req, res) => {
    const { Username } = req.body
    QUERY_DATABASE(DELETE_USER_DATA_QUERY, Username).then(response => {
        if (response.affectedRows == 0) {
            return res.status(404).json({ message: 'User not found!' })
        }
        return res.status(200).json({ message: 'User deleted successfully', response })
    }).catch(err => {
        return res.status(500).json({ message: 'Server error!', error: err })
    })
}

const SIGNUP_USER = async (req, res) => {
    const { Username, Password, Name, CNIC_no, Phone_no, Age, Address, City, Country } = req.body
    QUERY_DATABASE(INSERT_USER_DATA_QUERY, [Username, Password, Name, CNIC_no, Phone_no, Age, Address, City, Country]).then(response => {
        return res.status(200).json({ message: 'Successful SignUp', response })
    }).catch(err => {
        return res.status(500).json({ message: 'Server error!', error: err })
    })
}

const GET_USERS = async (req, res) => {
    QUERY_DATABASE(GET_ALL_USERS_DATA_QUERY, []).then(response => {
        if (response.length == 0) {
            return res.status(404).json({ message: 'User not found!' })
        }
        return res.status(200).json(response)
    }).catch(err => {
        return res.status(500).json({ message: 'Server error!', error: err })
    })
}

export {
    LOGIN_USER,
    GET_USERS,
    SIGNUP_USER,
    DELETE_USER,
    CHANGE_PASSWORD
}