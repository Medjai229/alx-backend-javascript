const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.end(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.use(express.json())
app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
})

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
