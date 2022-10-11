function httpGet(theUrl) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", theUrl, false); 
  xmlHttpReq.send(null);
  return xmlHttpReq.responseText;
}


var count = httpGet("balance.txt")

function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
} 

function action() {
    count = count * 1 + (randomNumber(0, 1) / 13179);
	hashes = "(BTG) Mh/s : " + Math.round(randomNumber(48, 67));
	document.getElementById("Counter").innerHTML = count;
	document.getElementById("Hashes").innerHTML = hashes;
}

action()

setInterval(action, randomNumber(60000, 300000));