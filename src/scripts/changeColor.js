const timers = {};

async function changeColor(plotString) {
    let plot = document.getElementById(plotString);

    if (wateringMode) {
        if (timers[plotString]) {
            clearTimeout(timers[plotString]);
        }
        $(plot).removeClass('unwatered').addClass('watered');
        timers[plotString] = setTimeout(() => {
            $(plot).removeClass('watered').addClass('unwatered');
        }, 5000);
    }
    else {
        if (!$(plot).hasClass('watered')) {
            $(plot).addClass('unwatered');
        }
    }
}