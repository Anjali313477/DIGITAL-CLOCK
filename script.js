let interval = setInterval(fun ,1000)
function fun() {
    let date = new Date();
    let currenttime = date.toLocaleTimeString();
    document.querySelector("#time").innerHTML = currenttime
}
