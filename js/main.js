$("div.barras").click(function(){
	$("svg#barra-navegacion").toggleClass("oculto");
	$("svg#barra-navegacion-x").toggleClass("mostrar");
	$("body").toggleClass("overf");
	$("div.links").toggleClass("mostrar");

	/*
	$("div.links").css("top", function(){
		return $(window).scrollTop();
	})

	*/
})

$("div.miembro").each(function(){
     var i = $(this).prop("id");

     $("div.miembro#" + i + ">div.imagen").css("background-image", "url(img/" + i + ".jpg)");
console.log(i);});