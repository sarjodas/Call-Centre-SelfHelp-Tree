/*$(document).ready(function(){
	//$("#start").hide();
    $("#help").click(function(){
        //$("#start").show();
    	//$("#start").load("first.html #first");
    	 $.ajax({url: "first.html #first", success: function(result){
    	        $("#start").html(result);
    	    }});
    });  
});*/

$(document).ready(function() {
	$("#start").hide();
	$("#ids").hide();
	$("#help").click(function() {
		$("#start").show();
		$.ajax({
			url : "data.json",
			// force to handle it as text
			dataType : "text",
			success : function(data) {

				var json = $.parseJSON(data);
				// alert(json[0].question+" ,"+json[0].id);
				$("#question").text(json[0].question);
				$("#yes").attr('id', json[0].yes);
				$("#no").attr('id', json[0].no);
				$("#ids").val(json[0].yes + "," + json[0].no);
				//alert($( "#ids" ).val());
			}
		});
	});
});

function callQuestion(id) {
	$.ajax({
		url : "data.json",
		// force to handle it as text
		dataType : "text",
		success : function(data) {

			var json = $.parseJSON(data);
			var idvalues = $("#ids").val();
			var res = idvalues.split(",");
			// alert(json[0].question+" ,"+json[0].id);
			for ( var i in json) {
				if (res[0] == 'support' && res[1] == 'support') {
					$("#start").load("first.html #ticket");
				}
				else if (res[0] == 'second') {
					window.location.href = "second.html";
				} 
				
				if (id == json[i].id) {
					//alert(json[i].id)
					//alert (res);
					 var idYes = "#" + res[0];
						var idNo = "#" + res[1];
						//alert(id+" "+json[i].id+" "+json[i].yes, " ,"+idYes+" ,"+idNo);
						$("#question").text(json[i].question);
						$(idYes).attr('id', json[i].yes);
						$(idNo).attr('id', json[i].no);
						$("#ids").val(json[i].yes + "," + json[i].no);
					
				}
			}
		}
	});
}