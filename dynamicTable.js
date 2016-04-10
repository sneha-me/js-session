function generateTable(rows,cols,servicesObj,selectorId){
		//	var selectorId = $(div).attr("id");
			//alert(selectorId);
			var table = $('<table/>').attr("border","1").addClass("main_table");
			var service = servicesObj.service;
			for(i=0;i<rows;i++){
				var row = $('<tr/>');
				for(j=0; j<cols ; j++){
					if(j == 0){
						var col = $(row).append('<td class="colRows">' + servicesObj[i] + '</td>');
						$('#'+selectorId).append($(table).append(col));
					}
					else{
						var col = $(row).append('<td class="col"> <input type="checkbox"></td>');
						$('#'+selectorId).append($(table).append(col));
					}
				}
				
			}
		}
		
		
/* 		$(document).ready(function(){
			var servicesObj = {
				0 : "Loyalty",
				1 : "Reservation",
				2 : "Location",
				3 : "Module",
				4 : "hello"
				
			}
			var count = 0;
			for(k in servicesObj){
				if(servicesObj.hasOwnProperty(k)){
				 ++count;
				
				}
				
			}
			//alert(count);
			generateTable(count,3,servicesObj);
		}); */