require('newrelic');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('../database/index.postgres_dev.js');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/restaurants/:id/', express.static(`${__dirname}/../client/dist`));
//app.use('/restaurants/:id', express.static('client/dist/'));
app.use(cors());

//get all photos associated with that restaurant
app.get(`/api/restaurants/:id/photos`, (req, res) => {
  console.log("server", req.params.id)
  db.getRestaurantInfo(req.params.id, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      //console.log("route",  results.data)
      res.send(results);
    }
  });
  
});

//add photo to a restaurant's entry
app.post(`/api/restaurants/:id/submit`, (req, res) => {
  
});

//delete a photo from a restaurant's entry
app.delete(`/api/restaurants/photoID=:photoID&date=:date`, (req, res) => {
	
});

//update a partcular photo in the database
app.put(`/api/restaurants/photoID=:photoID&date=:date`, (req, res) => {
	
});

const port = 3003;
app.listen(port, () => {
  console.log(`listening on port ${port}, SDC project`);
});