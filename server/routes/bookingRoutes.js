const express = require('express');
const bookingControler = require('../controler/bookingControler');
const routes = express.Router();

routes.route('/').get(bookingControler.getAllBooking).post(bookingControler.createBooking)

routes.route('/:id').get(bookingControler.getBooking).patch(bookingControler.getUpdate).delete(bookingControler.getDelete);


module.exports = routes;
