const router = require("express").Router();
const React = require("react");
const Extention = require('../models/Extentions')
const moment = require('moment')


router.get("/Extentions", (req, res) => {
  
    return Extention.find({})   
      .then((date) => {
        res.status(200).send(date);    
        console.log('date extentions',date.id); 
        console.log('date.date extentions',date.date);   
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
      });
  });

  router.get('/Extentions/edit/:id',(req, res) => {
    console.log(req.params.id)
    Extention.findById({ _id: req.params.id }, (err, guide) => {
        if (err) {
            return res.status(400).json({ success: false, error: `guide not found` })
        }
        if (!guide) {
            return res.status(404).json({ success: false, error: `guide not found` })
        }
        return res.status(200).json({ success: true, data: guide })
    }).catch(err => console.log(err))
});
   

router.get('/Extentions/:id',(req, res) => {
 
    Extention.findOne({ _id: req.params.id }, (err, guide) => {
        if (err) {
            return res.status(400).json({ success: false, error: `guide not found` })
        }
        if (!guide) {
            return res.status(404).json({ success: false, error: `guide not found` })
        }
        return res.status(200).json({ success: true, data: guide })
    }).catch(err => console.log(err))
});

  
router.post('/Extentions', async function(req, res, next) {
  console.log('This is Post')
  const date = moment("20010704T120854").format("MMM Do YY")
  console.log(date);
  const {Food , Discription,WitheDiscription, Pic,Price,Rating} = req.body
    const post = new Extention({
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


router.delete("/Extentions/:id", (req, res) => { 
  console.log('This is Delete router')
  console.log(req.params.id)
  const id = req.params.id;
  Extention.findByIdAndRemove({ _id: id })
    .then((results) => {
      res.status(200).json(results).redirect('/');
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
    res.redirect('/');
});

router.put("/Extentions/:id",(req, res) => {  
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

  Extention.findByIdAndUpdate(
    
    req.params.id,
    updateData,
    { new: true },
    function (err, result) {
      res.send(result);
     
    }
  );
});



  module.exports = router;

