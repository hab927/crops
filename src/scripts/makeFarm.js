$(document).ready(function(){
    farm = document.createElement('div');
    for (var i = 0; i < 9; i++) {
        plot = document.createElement('button');
        plotID = "plot" + String(i);
        $(plot).addClass('plot').addClass('unwatered');
        $(plot).attr("id", plotID);
        $(plot).click(function(){changeColor($(this).attr('id'));});
        $('#farm').append(plot);
    }
});