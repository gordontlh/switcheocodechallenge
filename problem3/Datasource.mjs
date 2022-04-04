import axios from "axios";

class Datasource{ //create Datasource utility class
    
    
    constructor(){

    }

    async getPrices(){
        return axios.get('https://static.ngnrs.io/test/prices') //perform asynchronous GET operation from endpoint
         .then(data => {
             console.log(data.data.data.prices);
             const transformedData = [] //create new array 
             data.data.data.prices.forEach(price =>{ //create new price object and mid, quote methods for them 
                 const newPrice = {
                     buy: price.buy, 
                     sell: price.sell, 
                     id: price.id, 
                     pair: price.pair, 
                     timestamp: price.timestamp, 
                     mid: ()=> (price.buy+ price.sell)/2, 
                     quote: () =>(price.pair.slice(3)) //only last 3 characters
                 }
                 transformedData.push(newPrice); //push into new array before returning 
             } )
             return transformedData; 
        })
        
    //     //return this as this is the object of prices required. 
    }
        
}


export {Datasource}