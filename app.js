const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => res.send('Hello World!'))


module.exports = {
    app
  }



searchResults = [{Name:,description:, url:}]
