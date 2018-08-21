
"use strict";

$(document).ready(function () { 






     $('[id^="map-"]').click(function()
    {
         var temp=$(this).attr('id');

        var res = temp.slice(4);
        $('#area').load('content/area'+res+'.html');
        $(".a1").modal();



    });


        
     });





/* INTERAKTIEVE KARTE
    * aus JSON wird anhand von Attributen (z.B:dienstleistung /ture false) classenatrribute gesteuert 
    */
    





        $.getJSON('json_mieter.json', function(data) {

       


            var anzahlbase= 53;
          
         

            // BASE TABLE

            var contentbase = "<tr>";

            for (var j = 0; j < anzahlbase; j++) {

                contentbase += '<td>' + data.mieter[j].id + " " + data.mieter[j].name + '</td>';

                if (((j + 1) % modulo === 0) && (j !== 0)) {
                    contentbase += '</tr>' + '<tr>';

                }

            }
            contentbase += '</tr>';

            $('#baseTable tbody').append(contentbase);



       






            $(".checkbox").on("change", function () {


                if ((!$('#dienstleistung').prop('checked')) && (!$('#einzelhandel').prop('checked')) && (!$('#gastronomie').prop('checked')) && (!$('#lebensmittel').prop('checked'))) {

                    console.log("success");
                    $('g[id^="map-"]').fadeTo(1000, 0.5);

                }
                else {


                    for (i = 0; i < data.mieter.length; i++) {
                        num = i + 1;
                        var n = num.toString();


                        if (((data.mieter[i].dienstleistung === "true") && ($('#dienstleistung').is(':checked'))) || ((data.mieter[i].einzelhandel === "true") && ($('#einzelhandel').is(':checked'))) || ((data.mieter[i].gastronomie === "true") && ($('#gastronomie').is(':checked'))) || ((data.mieter[i].lebensmittel === "true") && ($('#lebensmittel').is(':checked')))) {

                            // $('.map-'+ n).css('opacity',1.0);
                            $('#map-' + n).fadeTo(1000, 1.0);
                        }
                        else {
                            // $('.map-'+ n).css('opacity',0.2);
                            $('#map-' + n).fadeTo(1000, 0.1);
                        }

                    }

                }


            });

        });
                
   




    