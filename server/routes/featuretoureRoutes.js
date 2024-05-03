const express = require('express')
const Routes = express.Router()
const ftControler = require('../controler/featuretoureControler')
Routes.post(ftControler.createFeatureToure)

module.exports = Routes