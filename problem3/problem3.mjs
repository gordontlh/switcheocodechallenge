
import axios from "axios";
import { Datasource } from "./Datasource.mjs";


const ds = new Datasource(); //instantiate utility class object
//ds.getPrices('https://static.ngnrs.io/test/prices')

//const data = axios.get('https://static.ngnrs.io/test/prices')
// console.log(data)


ds.getPrices() //use object to call getPrices method 
    .then(prices => {
        prices.forEach(price => {
            
            function mid(){
                return (price.high + price.low)/2; 
            };

            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.log(error);
    });