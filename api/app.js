const express = require("express")
require("dotenv").config();

const morgan = require("morgan")

const cors = require("cors")


const server = express()

server.use(cors())
server.use(morgan("dev"))
server.use(express.json)




module.exports = {server}