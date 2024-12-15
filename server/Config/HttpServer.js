const express = require('express')
const app = express()
const HttpServer = () => {
    app.listen(4000, () => {
        console.log('Server is Connected')
    })
}
module.exports = { HttpServer }