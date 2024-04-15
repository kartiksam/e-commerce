const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
//same fields name in frontend in inout in the name="email" like this and same in usestate
//token -req.user.id or others fields req.body
const userSchema = new mongoose.Schema({
  yname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("not valid email address");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  cpassword: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  carts: Array,
});
//userSchema call pre method of mongoose -save "user data store db before that function call  before save then middlware call then hash our password" here also =async (next)=>{}

userSchema.pre("save", async function (next) {
  //coditipon if we want to modify password then only encrypt
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});
//collection name if given "USER",userSchema-then saves in format users
const Users = new mongoose.model("users", userSchema);

module.exports = Users;
