const speedValue = document.getElementById(speed-value);
const speedUnits = document.getElementById(speed-units);

switch (speedUnits) {
    case "Mbps":
        speedUnits.innerHTML = "Mb/s";
    break;
    case "Kbps":
        speedUnits.innerHTML = "Kb/s";
    break;
}