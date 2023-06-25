const express = require('express');
const { connectToMongoDB } = require('./connect');
const cors = require('cors');
const urlRoute = require('./routes/url');
const URL = require('./models/url');

const app = express();

app.use(cors()); // Enable CORS

connectToMongoDB('mongodb+srv://siddiq:siddiq12345@cluster0.4ghwomw.mongodb.net/?retryWrites=true&w=majority').then(() =>
  console.log('Mongodb connected')
);

app.use(express.json());
app.use('/url', urlRoute);

app.get('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(5000, () => console.log('server is running on port 5000'));
