/**
 * Created by t.geiger on 22.06.2017.
 */



var datafirst = 0;
var datasecond = 0;

$("#slider1").slider({
    range: "min",
    value: 0,
    step: 0.1,
    min: 0,
    max: 100,
    slide: function( ev, ui ) {
        datafirst = ui.value;
        $("#bar").text( datafirst );

        $(".diagram-1").css( {opacity: 1-ui.value*0.01 });
        $(".diagram-2").css( {opacity: ui.value*0.01 });





    }
});

$("#slider2").slider({
    range: "min",
    value: 0,
    step: 0.1,
    min: 0,
    max: 100,
    slide: function( ev, ui ) {
        datasecond = ui.value;
        $("#yeartotal").text( ui.value );








        $("#strategie01").css({height: 50 - ui.value*0.1});


        $("#strategie02").css({height: 90 + ui.value*0.10});


        $("#strategie03").css({height: 70 - ui.value*0.18});


        $("#strategie04").css({height: 40 + ui.value*0.01});

        $("#strategie05").css({height: 20 - ui.value*0.02});




    }




});


