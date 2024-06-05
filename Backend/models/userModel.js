const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name : {
      type :String,
    required : true,
    } ,
    email : {
        type :String,
        unique : true,
      required : true,
      },
      role: {
        type : String,
        default : 'user'
      },
      password : {
        type : String,
        reuired : true
      },
});

const User = mongoose.model('User', userSchema);

module.exports = User;