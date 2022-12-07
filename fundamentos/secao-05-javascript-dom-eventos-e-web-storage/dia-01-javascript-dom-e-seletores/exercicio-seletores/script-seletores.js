document.getElementById("header-container").style.background = "#00b069";

document.getElementsByClassName("emergency-tasks")[0].style.background = "#ff9f84";

document.getElementsByClassName("no-emergency-tasks")[0].style.background = "#f9db5e";

document.getElementById("footer-container").style.background = "#003533";

let tagH3 = document.getElementsByTagName("h3");

for (let index = 0; index <= tagH3.length; index += 1) {
    if (index <= 1) {
        tagH3[index].style.background = "#a500f3";
    } else {
        tagH3[index].style.background = "black";
    }
}

