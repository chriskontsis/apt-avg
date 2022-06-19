let ticker = "BTC";
let tickerId;
let dataArr;

/* this function gets the user input from the forum and gets the correct id for the ticker specified in the input
in order to use id to get the information for the specified ticker */
async function formdata() {
   const tickerInfo = await document.getElementById("ticker-txt").value;
   event.preventDefault();
   const response = await fetch('https://api.coinpaprika.com/v1/tickers');
   const json = await response.json();
   tickerId = await findTicker(json, tickerInfo); 
   const data = await cryptoPage(tickerId);
   console.log(data);
  
}

// loops throguh json to find the id.
function findTicker(json, tickerInfo) {
    for(let key of json) {
       if(key.symbol == tickerInfo) {
        return key.id;
       }
    }
}


async function cryptoPage() {
    let fetcher = await fetch('https://api.coinpaprika.com/v1/tickers/' + tickerId);
    let json = fetcher.json();
    dataArr = await parseJSON(json);
    return dataArr;
}
