const express = require('express')
const app = express()
const rutasMain = require('./routes/main.js')
const rutasUsers = require('./routes/users.js')

const path = require('path')
const publicPath = path.resolve(__dirname, "../public")

app.use(express.static(publicPath))
app.set('view engine', 'ejs')
// app.set('views', path.resolve(__dirname, './views'))

app.listen(process.env.PORT || 3000, function (){
    console.log('Servidor Corriendo')
})

app.use("/", rutasMain)
app.use("/user", rutasUsers)
