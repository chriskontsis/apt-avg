let ticker = "BTC";
let tickerId;
let dataArr = {
    name:"",
    symbol:"",
    priceUSD:"",
    volume_24h:"",
    mkt_cap:"",
    pctchange1hr: "",
    pctchange24hr:"",
    pctchange30day:"",
    pctchange1yr:""
};

/* this function gets the user input from the forum and gets the correct id for the ticker specified in the input
in order to use id to get the information for the specified ticker */
async function formdata() {
   const tickerInfo = await document.getElementById("ticker-txt").value;
   event.preventDefault();
   const response = await fetch('https://api.coinpaprika.com/v1/tickers');
   const json = await response.json();
   tickerId = await findTicker(json, tickerInfo); 
   let data = await cryptoPage(tickerId);
    console.log(data)
  
  
}

// loops throguh json to find the id.
function findTicker(json, tickerInfo) {
    for(let key of json) {
       if(key.symbol == tickerInfo) {
        return key.id;
       }
    }
}


async function cryptoPage(tickerId) {
    let fetcher = await fetch('https://api.coinpaprika.com/v1/tickers/' + tickerId);
    let json = fetcher.json();
    dataArr = await parseJSON(json);
    return dataArr;
}

async function parseJSON(json) {
    let data = await json

    dataArr.name = await data.name;
    dataArr.symbol = await data.symbol;
    dataArr.mkt_cap = await data.quotes.USD.market_cap;
    dataArr.priceUSD =  await data.quotes.USD.price;
    dataArr.volume_24h = await data.quotes.USD.volume_24h;
    dataArr.pctchange1hr = await data.quotes.USD.percent_change_1h;
    dataArr.pctchange24hr = await data.quotes.USD.percent_change_24h;
    dataArr.pctchange30day = await data.quotes.USD.percent_change_30d;
    dataArr.pctchange1yr = await data.quotes.USD.percent_change_1y;
    
    return dataArr;
}

async function newWindow() {
    window.location = await 'http://127.0.0.1:5500/crypto.html';
    document.onload = await writeHTML();
}

function writeHTML() {
    document.getElementById("coinName").innerHTML = dataArr.name;
}