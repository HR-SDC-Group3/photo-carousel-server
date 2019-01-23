import http from "k6/http";
import { sleep } from "k6";

const generateRandomNumber = function (min, max) {
    
   let random_number = Math.random() * (max-min) + min;
    return Math.floor(random_number);
}

export default function() {
  let randomRestaurant = generateRandomNumber(1000, 10000000)
  http.get(`http://localhost:3003/api/restaurants/${randomRestaurant}/photos`);
  sleep(1);
};