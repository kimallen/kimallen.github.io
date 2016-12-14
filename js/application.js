$(document).ready(function(){
	showMore()
	showLess()

	// $("#contactForm").submit(function(event){
	//     // cancels the form submission
	//     event.preventDefault();
	//     console.log("inside contactForm")
	//     submitForm();
	// });
	mailFormToggle();
	getModal()

})//end doc ready

	function getModal(){
			// Get the modal
		var modal = document.getElementById('myModal');

		// Get the button that opens the modal
		var btn = document.getElementById("sit-stand");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on the button, open the modal 
		btn.onclick = function() {
		    modal.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		    modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		}
	};



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