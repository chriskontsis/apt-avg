jsArray = JSON.parse(sessionStorage.getItem("jsArray"));


function setInfo() {
    document.getElementById("coinName").innerHTML = jsArray.name;
    document.getElementById("symbol").innerHTML = jsArray.symbol;
    document.getElementById("price").innerHTML = "price: " + jsArray.priceUSD;
    document.getElementById("volume_24h").innerHTML = "24h Vol: " + jsArray.volume_24h;
    document.getElementById("mkt_cap").innerHTML = "Mkt Cap " + jsArray.mkt_cap;
    document.getElementById("pctchange1hr").innerHTML = "1h " + jsArray.pctchange1hr + "% ";
    document.getElementById("pctchange24hr").innerHTML = "24h " +jsArray.pctchange24hr + "% ";
    document.getElementById("pctchange30day").innerHTML = "30d " + jsArray.pctchange30day + "% ";
    document.getElementById("pctchange1yr").innerHTML = "1yr " + jsArray.pctchange1yr + "% ";

}