/*     $('[id^="map-"]').click(function()
    {
         var temp=$(this).attr('id');

        var res = temp.slice(4);
        $('#area').load('content/area'+res+'.html');
        $(".a1").modal();



    });
*/




var uiController = (function(){


var renderMap = { 

                renderUnchecked: function(){
                                  $('g[id^="map-"]').fadeTo(1000, 0.5);
                                },

            
                renderChecked: {
                                fadeIn: function(data, field) {
                                  
                                  field=field + 1;
                                  field=field.toString();
                                  $('#map-' + field).fadeTo(1000, 1.0);
                                   
                                },
                                fadeOut: function(data, field) {
                                  
                                  field=field + 1;
                                  field=field.toString();
                                  $('#map-' + field).fadeTo(1000, 0.1);
                                
                                }

                          },


                  renderInitialState: {

                                    grey: function(field) {  
                                          
                                     $('#map-' + field).css({"fill": "#404040"})
                                    },

                                    blue: function(field) 
                                    { 
                                      $('#map-' + field).css({"fill": "#558a8e"})
                                    },

                                    lightblue: function(field) {  
                                      
                                     $('#map-' + field).css({"fill": "#186c96"})
                                   }

                  },




                  displayModal: function(that, modalContent, modalContainer, data) {

                                var temp,
                                    res,
                                    content,
                                    template;
                              
                                temp= $(that).attr('id');
                                res = temp.slice(4);

                                content = document.getElementById(modalContent);
                                content.innerHTML="";
                                
                                template = "<p>" + "Das ist die ID " + data.mieter[res].id  + 
                                "</p>" + "<p>"  + data.mieter[res].qm + " qm"  + "</p>" +
                                "<p>" + data.mieter[res].name + "</p>";                  
                                
                                content.insertAdjacentHTML("afterbegin", template);
                                                              
                                 $(modalContainer).modal();

                  }
                            
                };

return renderMap;

})();






var appController = (function(ui){


var domHandler = {

  modalContent: "modalId",

  modalContainer: ".modal",

	checkbox: ".checkbox",
	 
  category: [

    ".sidebar__checkbox__a",
	  ".sidebar__checkbox__b",
	  ".sidebar__checkbox__c",
	  ".sidebar__checkbox__d"

   ],

   categoryName: [
   "categroyA",
   "categroyB",
   "categroyC",
   "categroyD"

   ]




};


var domEvents = {

	
		filterCategory: function(renderUnchecked, renderChecked, data){
                                $(domHandler.checkbox).on("change", function () {
                                  stateHandler.updateState(stateHandler.checkboxNumber);
							                    domEvents.stateCheck(data);
                                });
                		          },

    stateCheck: function(data){
                        
                           var allAreUnchecked,
                               tempState,
                               stateSave;
                              
                            allAreUnchecked = [false, false, false,false];
                            

                            for(var i = 0; i< stateHandler.state.length; i++) {

                              if (stateHandler.state[i].check === false) {
                                  allAreUnchecked[i] = true;
                              }
                            
                            };


                            for(var i = 0; i< data.mieter.length; i++) {

                                stateSave= false;

                              for(var j = 0; j< stateHandler.state.length; j++){
                                  tempState = domHandler.categoryName[j];
                                  
                                if((stateHandler.state[j].check == true) && (data.mieter[i][tempState] == "true")) {
                               
                                    stateSave=true;
                                  }
                                
                              };

                              if(stateSave) {
                                ui.renderChecked.fadeIn(data, i)
                              }
                              else {
                                ui.renderChecked.fadeOut(data, i)
                              };

                              };




                            if(allAreUnchecked.every(Boolean)) {
                              
                              ui.renderUnchecked(data);
                            } 
                           

                    },



      initialStateCheck: function(data){

                              
                              for (var i = 0; i < data.mieter.length; i++) {
                                    
                               var field = i + 1;
                                   field = field.toString();

                              if (data.mieter[i].vermietet === "true") {
                                                              
                                  ui.renderInitialState.grey(field);
                                                                
                              } 
                              else if (data.mieter[i].reserviert === "true") 
                              {
                                 ui.renderInitialState.lightblue(field);
                              }
                              else {
                                ui.renderInitialState.blue(field);
                              }

                              };

                          },


        modalCheck: function(data){

                    $('[id^="map-"]').click(function(){
                      var that = this;
                       ui.displayModal(that, domHandler.modalContent, domHandler.modalContainer, data);
                    });

        }







      
};



var stateHandler = { 

      state: [],

      checkboxNumber: domHandler.category.length,

      stateGenerator: function(checkboxNumber){

                      for(var i = 0; i< checkboxNumber; i++) {
                                                
                        stateHandler.state.push({check: false});
                        
                      }

                    },

      updateState: function(checkboxNumber) {


                      for(var i = 0; i< checkboxNumber; i++) {
                       
                         
                        stateHandler.state[i].check = $(domHandler.category[i]).prop('checked');
                      }
                      
                    }





};


var dataReady = function(data){
    domEvents.initialStateCheck(data);
    domEvents.filterCategory(ui.renderUnchecked, ui.renderChecked, data);
    domEvents.modalCheck(data);
    stateHandler.stateGenerator(stateHandler.checkboxNumber);
    stateHandler.updateState(stateHandler.checkboxNumber);
    
    
};



var getDataJson = {

	data: function(){
			fetch('./json_example.json')
  			.then(
    			function(response) {
     	 			if (response.status !== 200) {
        			console.log('Looks like there was a problem. Status Code: ' +
         			 response.status);
        			return;
     	 			}

      				// Examine the text in the response
     				 response.json().then(function(data) {
      		 		 console.log(data);
               dataReady(data);

     				 });
    			}
  		)
  			.catch(function(err) {
    		console.log('Fetch Error :-S', err);
  			});
		}

};







var initApp = function(){
             getDataJson.data();
            };


return initApp;

})(uiController);







appController(); 
