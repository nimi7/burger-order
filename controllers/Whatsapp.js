const accountSid = 'AC7f273a705eead03d1dfd901b298bf54b';
const authToken = '53cb82fbd71317e2658bb9f9d64d3092';
const client = require('twilio')(accountSid, authToken);
const router = require("express").Router();



router.post('/whatsapp', async function (req, res, next) {
    console.log('This is Post whatsapp ')


    const { Salads,Food, Sause, Bread, Drink, Extras,FinalCost } = req.body

    Salads, Sause, Bread, Drink, Extras
    Food
    FinalCost
    client.messages
        .create({
            body: `A New Order Comes up... ^_^
            Borger order : ${Food} with ${Bread}
            Salads : ${Salads} ,
            Sause : ${Sause},
            Extras : ${Extras},
            For A Drink : ${Drink},
            And all this plasure is ${FinalCost}₪        
            this order need to be ready in 30 min `,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+972537205885'
        })
        .then(message => console.log(message.sid))
        .done();
    console.log(Massage);

    res.redirect('/');
});


module.exports = router;