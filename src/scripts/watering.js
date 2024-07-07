var wateringMode = false;

function watering() {
    wateringMode = !wateringMode;
    canButton = document.getElementById("can-button");
    tooltip = document.getElementById("tooltip-color");

    if (wateringMode) {
        $(canButton).addClass('active');
        tooltip.style.color = "darkgreen";
        tooltip.innerHTML = "ON";
    }
    else {
        $(canButton).removeClass('active');
        tooltip.style.color = "darkblue";
        tooltip.innerHTML = "OFF";
    }
}