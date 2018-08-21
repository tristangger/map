

jQuery("#Slider11").slider({
    from: 0,
    to: 100,
    step: 0.1,
    smooth: true,
    round: 0,
    skin: "round",



    onstatechange: function (ui) {


        $(".strategie01").css({height: 100 - ui*0.4});
        $(".strategie02").css({height: 160 + ui*0.20});
        $(".strategie03").css({height: 140 - ui*0.18});
        $(".strategie04").css({height: 80 + ui*0.05});
        $(".strategie05").css({height: 40 - ui*0.08});
    }



});








jQuery("#Slider12").slider({
    from: 0,
    to: 100,
    step: 0.1,
    smooth: true,
    round: 0,
    skin: "round",



    onstatechange: function (ui) {


        $(".diagram-1").css( {opacity: 1-ui*0.01 });
        $(".diagram-2").css( {opacity: ui*0.01 });
    }



});