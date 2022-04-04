var express = require('express');
var router = express.Router();
const stripe = require('stripe')('sk_test_51KjezqCKa4Cmp4ydCQzPBk7VWXWxYIqn3nEVIt4453uQ1AGng4KH6tuX63QSRQX6Xg1m5KxktCbv6211vldMkeyo00OxkxqbkB')

var dataBike = [
  { name: 'BIKO45', urlImage: '/images/bike-1.jpg', price: 679, mea: true },
  { name: 'ZOOK7', urlImage: '/images/bike-2.jpg', price: 799, mea: true },
  { name: 'LIKO89', urlImage: '/images/bike-3.jpg', price: 839, mea: true },
  { name: 'GEWO8', urlImage: '/images/bike-4.jpg', price: 1249, mea: true },
  { name: 'KIWIT', urlImage: '/images/bike-5.jpg', price: 899, mea: true },
  { name: 'NASAY', urlImage: '/images/bike-6.jpg', price: 1399, mea: true }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'BikeShop - Home', dataBike: dataBike});
});

router.get('/shop', function(req, res, next) {
  if(!req.session.dataCardBike) req.session.dataCardBike = [];
  var status = false;

  for (var i = 0; i < req.session.dataCardBike.length; i++) {
    if (req.session.dataCardBike[i].name == req.query.name) {
      req.session.dataCardBike[i].quantity += 1;
      status = true;
    }
  }

  if (status == false) {
    req.session.dataCardBike.push({
      name: req.query.name,
      urlImage: req.query.urlImage,
      price: req.query.price,
      mea: req.query.mea,
      quantity: 1,
    });
  }
  res.render('shop', {title: 'BikeShop - Shop', dataCardBike: req.session.dataCardBike});
});

router.get('/delete-shop', function(req, res, next){
  req.session.dataCardBike.splice(req.query.id, 1)
  res.render('shop', {title: 'BikeShop - Shop', dataCardBike: req.session.dataCardBike})
})

router.post('/quantity', function(req, res){
  let newQuantity = req.body.quantity;
  req.session.dataCardBike[req.body.quantityId].quantity = newQuantity;
  res.render('shop', {title: 'BikeShop - Shop', dataCardBike: req.session.dataCardBike})
})

router.post('/create-checkout-session', async (req, res) => {
  let stripeItems = [];

  for (let i = 0; i < req.session.dataCardBike.length; i++) {
    stripeItems.push({
      price_data: {
        currency: 'eur',
        product_data: {
          name: req.session.dataCardBike[i].name,
        },
        unit_amount: req.session.dataCardBike[i].price * 100,
      },
      quantity: req.session.dataCardBike[i].quantity,
    });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: stripeItems,
    mode: "payment",
    success_url: "http://localhost:3000/sucsess",
    cancel_url: "http://localhost:3000/cancel",
  });
 
  res.redirect(303, session.url);
});

router.get('/success', (req, res) => {
  res.render('success');
});

router.get('/cancel', (req, res) => {
  res.render('cancel');
});

module.exports = router;