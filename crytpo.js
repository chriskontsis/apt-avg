jsArray = JSON.parse(sessionStorage.getItem("jsArray"));


function setInfo() {
    document.getElementById("coinName").innerHTML = jsArray.name;
}