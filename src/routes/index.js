const authRoutes = require('./authRoutes')
const helloRoutes = require('./helloRoutes')
const accountRoutes = require('./accountRoutes')

const routes = [authRoutes, helloRoutes, accountRoutes]
module.exports = routes
