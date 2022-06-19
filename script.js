let ticker = "BTC";
let itemId;

async function formdata() {
   const tickerInfo = await document.getElementById("ticker-txt").value;
   event.preventDefault();
   const response = await fetch('https://api.coinpaprika.com/v1/tickers');
   const json = await response.json();
   const userInputTickerId = await findTicker(json, tickerInfo);
   console.log(userInputTickerId);
}

function findTicker(json, tickerInfo) {
    for(let key of json) {
       if(key.symbol == tickerInfo) {
        return key.id;
       }
    }
}

