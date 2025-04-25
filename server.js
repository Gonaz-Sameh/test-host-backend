
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

// express app
const app = express();


// Connect with db


// Enable other domains to access your application
app.use(cors());


// Checkout webhook
/*app.post(
  '/webhook-checkout',
  express.raw({ type: 'application/json' }),
  webhookCheckout
);*/

// Middlewares
app.use(express.json());

app.get("/", (req,res)=>{
res.status(200).json({status:"success"})
})

const PORT = process.env.PORT || 3001;
 app.listen(PORT, () => {
  console.log(`App running running on port ${PORT}`);
});

