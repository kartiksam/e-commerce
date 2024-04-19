const express = require("express");
const router = new express.Router();
const Products = require("./../models/productSchema");
const Users = require("./../models/userSchema");
const bcrypt = require("bcryptjs");
//get products data
router.get("/getproducts", async (req, res) => {
  try {
    const productdata = await Products.find();
    console.log(productdata);
    // what the mistake was i have sent productdata earlier using json({productdata }) so it has created object with key property product data and values but we only return array of objects not any object  that why mapping not happend
    res.status(201).json(productdata);
    // //from here get array of all objects and products.map((e)=>{
    //   now this e coorespond to array each ele means each object
    // })
  } catch (error) {
    console.log("error" + error.message);
  }
});
//get individual data
router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //console.log(id);
    const inddata = await Products.findOne({ id });
    //here get only one object
    res.status(201).json(inddata);
    //this is result we got in frontedn and display and in frontend body in fetch method data pass instred postman ans ame work body point of view chnges
  } catch (error) {
    console.log("error" + error.message);
  }
});
// user signup callbaclk -async ()=>{}
router.post("/register", async (req, res) => {
  // console.log(req.body); its a object

  const { yname, email, mobile, password, cpassword } = req.body;
  //chk if any of the fields not enter in body
  if (!yname || !email || !mobile || !password || !cpassword) {
    res.status(422).json({ error: "fill the all data" });
    //these what we get in postman or errors in frontend like this w get data but when we got these error how to show it on frontend
  }
  try {
    //1st email is db email prop and second that enter in a abody
    const preUser = await Users.findOne({ email: email });
    if (preUser) {
      res.status(422).json({ error: "this userr is already exist" });
    } else if (password != cpassword) {
      res.status(422).json({ error: "passsowrd amd cpassword not match" });
    } else {
      //yname:yname or yname bs or yname:req.body.yname
      const newUser = new Users({
        yname,
        email,
        mobile,
        password,
        cpassword,
      });
      //password hashing process as data generate before saving to db encrypted form before saving to db and there in mw we have called next then  here below process execute
      const storedata = await newUser.save();
      console.log(storedata);
      res.status(201).json(storedata);
    }
  } catch (error) {
    res.status(422).json({ error: "error in saving the data" });
  }
});

//Login user api
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "fill the all data" });
  }

  try {
    const userLogin = await Users.findOne({ email: email });

    if (userLogin) {
      //compare pass word come fro, frontend and userlogin ka pass
      const isMatch = await bcrypt.compare(password, userLogin.password);
      //await means wait here until this promise is not reloved and then go to next line first resolve it
      //how to show thee error msgs sent in frontend
      console.log(isMatch);
      console.log(userLogin);
      //token generate and when user login then userlogi will found and till that tokens empty and in that user tokens section token will be added and in previous once user sigup or login then in notes we add tjhat userobj id and from onre tokenm many otes and then we find all notes corresponding to userobj id store  from one token many notesd and from one login then we can fetch tht all notes
      const token = await userLogin.generateAuthToken();
      console.log("token" + token);
      if (!isMatch) {
        //if not match then this msg go to frontend in data
        res.status(400).json({ error: "Invalid details" });
      } else {
        res.status(201).json(userLogin);
      }
    } else {
      res.status(400).json({ error: "Invalid details" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid details" });
  }
});
module.exports = router;
