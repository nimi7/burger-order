const router = require("express").Router();
const Burgers = require('../models/Burgers')
const moment = require('moment')

router.get("/Burgers", (req, res) => {
    
  return Burgers.find({})   
    .then((date) => {
      res.status(200).send(date);      
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

router.get('/Burgers/edit/:id',(req, res) => {
  console.log(req.params.id)
  Burgers.findById({ _id: req.params.id }, (err, guide) => {
      if (err) {
          return res.status(400).json({ success: false, error: `guide not found` })
      }
      if (!guide) {
          return res.status(404).json({ success: false, error: `guide not found` })
      }
      return res.status(200).json({ success: true, data: guide })
  }).catch(err => console.log(err))
});
 

router.get('/Burgers/:id',(req, res) => {

Burgers.findOne({ _id: req.params.id }, (err, guide) => {
      if (err) {
          return res.status(400).json({ success: false, error: `guide not found` })
      }
      if (!guide) {
          return res.status(404).json({ success: false, error: `guide not found` })
      }
      return res.status(200).json({ success: true, data: guide })
  }).catch(err => console.log(err))
});


router.post('/Burgers', async function(req, res, next) {
console.log('This is Post')
const date = moment("20010704T120854").format("MMM Do YY")
console.log(date);
const {Food , Discription,WitheDiscription, Pic,Price,Rating} = req.body
  const post = new Burgers({
    Food,
    Discription,
    WitheDiscription,
    Pic,
    Price,
    Rating
  });
  try {
      await post.save();
  } catch(err) {
      return next(err);
  }
  res.redirect('/');
});


router.delete("/Burgers/:id", (req, res) => { 
console.log('This is Delete router')
console.log(req.params.id)
const id = req.params.id;
Burgers.findByIdAndRemove({ _id: id })
  .then((results) => {
    res.status(200).json(results).redirect('/');
  })
  .catch((err) => {
    res.status(500).json({ error: err });
  });
  res.redirect('/');
});

router.put("/Burgers/:id",(req, res) => {  
console.log('This is Put', req.params.id, req.body.id)
console.log(req.body.Food );
const updateData = {
  Food :req.body.Food ,
  Discription:req.body.Discription,
  WitheDiscription:req.body.WitheDiscription,
  Pic:req.body.Pic,
  Price : req.body.Price,
  Rating:req.body.Rating
  // modifideDate: Date.now(),
};
console.log('this is updarte',updateData);

Burgers.findByIdAndUpdate(
  
  req.params.id,
  updateData,
  { new: true },
  function (err, result) {
    res.send(result);
   
  }
);
});



module.exports = router;

  