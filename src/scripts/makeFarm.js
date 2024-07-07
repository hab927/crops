$(document).ready(function(){
    farm = document.createElement('div');
    for (var i = 0; i < 9; i++) {
        plot = document.createElement('button');
        plotID = "plot" + String(i);
        $(plot).addClass('plot');
        $(plot).attr("id", plotID);
        $(plot).attr("style", "background-color: rgb(84, 44, 0)")
        $(plot).click(function(){changeColor($(this).attr('id'));});
        $('#farm').append(plot);
    }
});