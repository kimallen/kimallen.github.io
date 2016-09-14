$(document).ready(function(){
	showMore()
	showLess()

	// $("#contactForm").submit(function(event){
	//     // cancels the form submission
	//     event.preventDefault();
	//     console.log("inside contactForm")
	//     submitForm();
	// });
	mailFormToggle()
})//end doc ready

	function mailFormToggle(){
		$('#contact').on('click', '#envelope', function(e){
			e.preventDefault();
			$('#form-container').toggle()
		})
	}
	function showMore(){
		$('section#about').on('click', '#more-about-button', function(e){
			e.preventDefault();
			$('#more-about-button').hide()
			$('#more-about').show()
			$('#less-about-button').show()

		})
	}

function showLess(){
	$('section#about').on('click', '#less-about-button', function(e){
		e.preventDefault();
		$('#more-about-button').show()
		$('#more-about').hide()
		$('#less-about-button').hide()

	})
}


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
 
    $.ajax({
        type: "POST",
        url: "http://formspree.io/fakimallen@email.com",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}

function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}