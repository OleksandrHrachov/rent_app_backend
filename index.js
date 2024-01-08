require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require('mongoose');
const {offerModel} = require("./schema/offer");


const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  const offers = await offerModel.find();
  res.send(offers);
})

app.post('/', async (req, res) => {
  const body = req.body;

  if (!body.info) {
    res.sendStatus(404);
  } else {
    const offer = new offerModel({
      info: {
        id: body.info.id || '',
        city: body.info.city || '',
        street: body.info.street || '',
        name: body.info.name || '',
        phone: body.info.phone || '',
        email: body.info.email || '',
        title: body.info.title|| '',
        price: body.info.price|| 1,
        description: body.info.description || '',
        imageUrl: body.info.imageUrl|| '',
      },
      coords: {
        lat: body.coords.lat|| 1,
        lon: body.coords.lon || 1,
      },
    });
  
    await offer.save();
    res.sendStatus(200);
  }
})

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MONGO_DB - connected");

    app.listen(PORT, () => {
      console.log("listening on port =>", PORT);
    });
  } catch (error) {
    console.warn('ERROR =>', error);
  }
}

start();
