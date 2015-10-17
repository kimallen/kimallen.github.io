$(document).ready(function(){
	// $('section').css({'background-color': 'pink'})
	$('#git_diagram').mouseenter(function(){
	    $(this).animate({
	    height:"80%",
	    width:"80%",
		});
   	});

	$('#git_diagram').mouseleave(function(){
	    $(this).animate({
	    height:"257px",
	    width:"320px",
	});
   });

    // $("git_diagram").mouseleave(function(){

    // }
// $('#git_diagram').on('mouseover', function(e){
//     e.preventDefault()
//     $(this).attr('src', '../imgs/farside.png');
//   })

//  $('#git_diagram').on('mouseleave', function(e){
//     e.preventDefault()
//     $(this).attr('src', '../imgs/git_flow.jpg')
//   })
});