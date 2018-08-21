/**
 * Created by t.geiger on 14.06.2017.
 */
$.getJSON('json_mieter.json', function(data) {


    //COLORING MAP

    for (i = 0; i < data.mieter.length + 1; i++) {

        numa = i + 1;
        var na = numa.toString();

        if (data.mieter[i].vermietet === "true") {

            $('#map-' + na).css({"fill": "#404040"});
        }
        else if (data.mieter[i].reserviert === "true") {

            $('#map-' + na).css({"fill": "#404040"});
        }
        else {

            $('#map-' + na).css({"fill": "#96C31E"});

        }
    }
});



