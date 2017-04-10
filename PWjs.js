$(document).ready(function(){
	$('.button1').on('click',function(){
		$('.smile').text(":D");
		$(this).remove();
	})
})