
temp=0;

    function testScroll(evesa) {
        if (window.pageYOffset > 400) {
                    temp+=1;
            console.log("Haltepunkt");
        console.log(temp);

        if(temp==1) {
        $('.count-1').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });




        });
        }

        }


    }


    window.onscroll = testScroll










