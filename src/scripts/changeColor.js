const unwatered = "rgb(84, 44, 0)";
const watered   = "rgb(54, 24, 0)";

async function changeColor(plotString) {
    let plot = document.getElementById(plotString);
    if (wateringMode) {
        plot.style.backgroundColor = watered;
        await new Promise(res => setTimeout(res, 5000));
        plot.style.backgroundColor = unwatered;
    }
}