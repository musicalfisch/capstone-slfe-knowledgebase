const  express = require('express');
const  mongoose = require('mongoose');
const  bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const enterprises = require('./routes/api/enterprises');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//Connect to Mongo
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('connected to db...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/enterprises', enterprises);

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Do'}
    ];

    res.json(customers);
});

app.listen(port, () => console.log(`Server started on port ${port}`));

