require('dotenv').config()
const cluster = require('cluster')
const mongoose = require('mongoose')
const server = require('./app')
const PORT = process.env.PORT || 8080

const DB_CONNECT = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@nodetut.n6pqp.mongodb.net/Jobs?retryWrites=true&w=majority`

if (cluster.isMaster) {
    cluster.fork()
    cluster.fork()
} else {
    const startServer = async () => {
        try {
            const DB_CONNECTED = await mongoose.connect(DB_CONNECT)
            if (!DB_CONNECTED) {
                throw new Error('DB connection with the URL was not successful')
            }
            server.listen(PORT, () => {
                console.log(`DB is connected on port ${PORT}`)
            })
        } catch (e) {
            throw new Error('DB connection was not successful')
        }
    }
    // INVOKE SERVER FUNC
    startServer()
}
