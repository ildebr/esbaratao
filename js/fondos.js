$("div.miembro").each(function(){
     var i = $(this).prop("id");

     $("div.miembro#" + i + ">div.imagen").css("background-image", "url(img/" + i + ".jpg)");
console.log(i);});