
$(function(){
	$("#user_form").submit(function(event){
	    // cancels the form submission
	    event.preventDefault();
	    submitForm(event);
	});

	function submitForm(event){
	    // Initiate Variables With Form Content
	    var name = $("#user_name").val();
	 
	    $.ajax({
	        type: "GET",
	        data: {user_name: name},
	        url: "/user",
	        dataType: 'json',
	        success : function(data){

	            formSuccess(data);
	        }
	    });
	}
	function formSuccess(data){

			var jsonData = JSON.parse(data);
			var $img = $("<img />");
			
			$img.attr("src", jsonData.avatar_url)


			$("#avatar").html($img);
			$("#company").text(jsonData.company);
			$("#bio").text(jsonData.bio);
			$("#location").text(jsonData.location);
			$("#login").text(jsonData.login);
	}
})

