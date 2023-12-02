import express from 'express'
import { router } from './routes/Users.js'
import { CONNECT_DATABASE } from './database/database.js'

const app = express()

// MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/user', router)

const START = async () => {
    await CONNECT_DATABASE()
    app.listen(2000, () => { console.log('Server started...'); })
}
START()
