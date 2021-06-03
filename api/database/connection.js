const mongoose = require("mongoose");
const databaseURL = 'mongodb://localhost/crudjs';
//connect DB HERE
mongoose.connect(databaseURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(() => {
  console.log('Connection Success');
}).catch((e) => {
  console.log('No Connection');
})