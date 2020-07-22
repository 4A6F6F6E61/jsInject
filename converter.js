const speedValue2 = document.getElementById("speed-value")
const speedUnits2 = document.getElementById("speed-units")
const message = document.getElementById("your-speed-message")
const showMoreInfoT = document.getElementById("show-more-details-link")
const progressCircle = document.getElementById("speed-progress-indicator")

let divTest = document.getElementsByClassName("more-info-container")
let btn = document.createElement("BUTTON")
let num = null

btn.innerHTML = "Convert"
btn.className = "more-info-link"
btn.style = "background-color: white; margin-left: 10px;"
divTest[0].id = "test"

document.getElementById("test").style.display = "flex"
document.getElementById("test").appendChild(btn)

btn.onclick = function(){
    if (progressCircle.classList.contains("in-progress")){
        num = speedValue2.innerHTML / 8
        speedValue2.innerHTML = num.toFixed(1)
        switch (speedUnits2.innerHTML) {
            case "Mbps":
                speedUnits2.innerHTML = "Mb/s"
            break
            case "Kbps":
                speedUnits2.innerHTML = "Kb/s"
            break
        }
    } else {
        num = speedValue2.innerHTML / 8
        speedValue2.innerHTML = num.toFixed(1)
        switch (speedUnits2.innerHTML) {
            case "Mbps":
                speedUnits2.innerHTML = "Mb/s"
            break
            case "Kbps":
                speedUnits2.innerHTML = "Kb/s"
            break
        }
        btn.style.display = "none"
    }
}