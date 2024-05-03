const mangoose = require('mongoose')
const bookingSchema = new mangoose.Schema({
    tour:{
        type: mangoose.Schema.ObjectId,
        ref:"Toure",
        required:[true, 'Booking must belong to a Tour!']
    },
    user:{
        type:mangoose.Schema.ObjectId,
        ref:'User',
        required:[true, "Booking Must Belong to a User"]
    },
    price: {
        type: Number,
        require: [true, 'Booking must have a price.']
      },
    createdAt: {
        type: Date,
        default: Date.now()
      },
    paid: {
        type: Boolean,
        default: true
      }
})

bookingSchema.pre(/^find/, function(next) {
  this.populate('user').populate({
    path: 'tour',
    select: 'name'
  });
  next();
});
//bookingSchema.pre(/^find/, function(next){
  //this.populate('user').populate({
    //path:"tour",
    //select:"name"
  //})
  //next()
//})
const Bookings = mangoose.model('Bookings', bookingSchema)
module.exports = Bookings;