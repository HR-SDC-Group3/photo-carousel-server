const Client = require('pg-native');
const pgp = require('pg-promise')();


const config = require('./config.js');
//const db = pgp('postgres://postgres:merrick@localhost:5432/sdc?');

//var connectionString = 'postgres:merrick//localhost:5432/sdc';
var conString = "postgres://lindentree:margarita@localhost:5432/lindentree";
var db = pgp(conString);
//postgres://user:postgres@host:5432/sdc?ssl=true

//postgresql://localhost/sdc?user=postgres&password=merrick
// var client2 = new Client()
// client2.connect('postgresql://postgres:merrick@localhost:5432/sdc', function(err) {
//   if(err) throw err
  
//   console.log('connected with connection string!')
// })

//await client.connect();

//get all photos route 

//var altQuery = `SELECT phototags FROM restaurants WHERE ID = ${restaurantID}`
const getRestaurantInfo = (restaurantID, callback) => {
  //let id = restaurantID.toString()
  //console.log("query", restaurantID)
  db.query(`SELECT * FROM restaurants_perf WHERE ID = ${restaurantID}`)
   .then((results) => callback(null, results))
   .catch(err => callback(err));
}

// const getRestaurantInfo = (restaurantID, callback) => {
//   //let id = restaurantID.toString()
//   console.log("query", restaurantID)
//   db.query(`SELECT * FROM restaurants WHERE ID = ${restaurantID}`)
//    .then((results) => callback(null, results))
//    .catch(err => callback(err));
// }

//update restaurant photos route 
//need to pull old info and compare against new input
//add new restaurant(s) route

//-------------------------------------------------------------------
//database curation and maintenance
//remove restaurant(s) route, should not be done carelessly
const deleteRestaurant = (restaurantID, callback) => {
  db.query("DELETE FROM restaurants WHERE ID = 1000")
    .then(() => callback(null))
    .catch(err => callback(err));
};

module.exports = {
  getRestaurantInfo,
  deleteRestaurant,
};