import express from 'express'
import { LOGIN_USER, GET_USERS, SIGNUP_USER, DELETE_USER, CHANGE_PASSWORD } from '../controllers/Users.js'

const router = express.Router()

router.get('/login', LOGIN_USER)
router.get('/getusers', GET_USERS)
router.post('/signup', SIGNUP_USER)
router.delete('/deleteUser', DELETE_USER)
router.put('/changepassword', CHANGE_PASSWORD)

export {
    router
}