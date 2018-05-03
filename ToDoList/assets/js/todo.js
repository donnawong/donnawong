// Check off specific todos by clicking

$("ul").on("click", "li",(function(){
	$(this).toggleClass("completed");
//	$(this).css("color", "grey");
//	$(this).css("text-decoration", "line-through");
}));


//click on X to delete Todo
$("ul").on("click", "span", (function(event){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	event.stopPropagation();
}));

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		//grabbing new tdoo text from input
		var todoText = $(this).val();
		//clear input text
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>"+todoText+"</li>");
	}
});




$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})