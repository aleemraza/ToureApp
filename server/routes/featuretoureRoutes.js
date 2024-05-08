const express = require('express')
const Routes = express.Router()
const ftControler = require('../controler/featuretoureControler')


//Feature Toure Routes Handler
Routes.route('/').get(ftControler.getAllFeatureToure).post(ftControler.createFeatureToure)

module.exports = Routes