const mongoose = require('mongoose')

const app = require('./app')

const { DB_HOST } = process.env;
console.log(DB_HOST)
mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3333, () => {
      console.log("Database connection successful");
    });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
        })  


