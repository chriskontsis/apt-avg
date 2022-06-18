

fetch('https://api.coinpaprika.com/v1/tickers')
    .then(res => res.json())
    .then((info) => {
        info.forEach(item => {
            if(item.symbol == "BTC") {
                console.log(item);
            }
        });   
    });

