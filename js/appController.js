

var uiController = (function(){

var render = { 
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

                          } 
                            
                };
return render;

})();






var appController = (function(ui){


var domHandler = {

	checkbox: ".checkbox",
	
  category: [

    ".dienstleistung",
	  ".gastronomie",
	  ".einzelhandel",
	  ".lebensmittel"

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
                        
                           var allAreUnchecked = [false, false, false,false];
                           var tempState;
                           var stateSave;
                              

                            

                            for(var i = 0; i< stateHandler.state.length; i++) {

                              if (stateHandler.state[i].check === false) {
                                  allAreUnchecked[i] = true;
                              }


                              

                            };

                            for(var i = 0; i< data.mieter.length; i++) {

                                stateSave= false;

                              for(var j = 0; j< stateHandler.state.length; j++){
                                  tempState = domHandler.category[j];
                                  tempState= tempState.substr(1);

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
                              console.log("UNCHECK ALLLLL");
                              ui.renderUnchecked(data);
                            } 
                           

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
                        
                        //console.log($(domHandler.category[i]).prop('checked') + "TESTEST" + stateHandler.state[i].check );
                      }
                      
                    }





};


var dataReady = function(data){

    domEvents.filterCategory(ui.renderUnchecked, ui.renderChecked, data);
    stateHandler.stateGenerator(stateHandler.checkboxNumber);
    stateHandler.updateState(stateHandler.checkboxNumber);
    
};



var getDataJson = {

	data: function(){
			fetch('./json_mieter.json')
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
            // domEvents.filterCategory(ui.renderUnchecked, ui.renderChecked);

};


return initApp;

})(uiController);







appController(); 
