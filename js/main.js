let bod = $("body").height(); //tamaño de la pagina
let he = $(window).height(); // tamaño de la ventana

let rangomovwindow = bod - he; // rango de movimiento del scroll
let rangomovtijera = $("div.tijeras-probador").outerWidth() - $("div.tijeras-probador svg").width(); //rango de movimiento de la tijera


//movimientos de la tijera y la ventana llevado a porcentaje
let movtijera = rangomovtijera/100;
let movwindow = rangomovwindow/100;

let windowpercentage = 0;

let tijerasx = 0;
let windowstate = 0;

console.log(bod + "   " + he + "   "+ rangomovwindow + "   " + rangomovtijera);

console.log(movtijera + "  " + movwindow);
$(window).scroll(function(){
	console.log("hola");

	if($(window).scrollTop() == 0){
		$("div.tijeras-probador svg").css("left", "0px");
	}
	else if ($(window).scrollTop() > 0){
		windowstate = ($(window).scrollTop() / movwindow) * movtijera;

		$("div.tijeras-probador svg").css("left", windowstate);
	}
	

});
