jsArray = JSON.parse(sessionStorage.getItem("jsArray"));


function setInfo() {
    document.getElementById("coinName").innerHTML = jsArray.name;
    document.getElementById("symbol").innerHTML = jsArray.symbol;
    document.getElementById("price").innerHTML = jsArray.priceUSD;
    document.getElementById("volume_24h").innerHTML = jsArray.volume_24h;
    document.getElementById("mkt_cap").innerHTML = jsArray.mkt_cap;
    document.getElementById("pctchange1hr").innerHTML = jsArray.pctchange1hr;
    document.getElementById("pctchange24hr").innerHTML = jsArray.pctchange24hr;
    document.getElementById("pctchange30day").innerHTML = jsArray.pctchange30day;
    document.getElementById("pctchange1yr").innerHTML = jsArray.pctchange1yr;

}