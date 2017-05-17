document.getElementById("boton").addEventListener("click", function(){
    document.getElementById("contenedor").innerHTML = "HolO mundo :3!";
});

window.addEventListener("load", function(){  
  alert("La pagina está cargada");
});

document.getElementById("input1").addEventListener("mouseout", function(){
  alert("Estás sobre mi");
});


function noSobreTi(){
	alert("No estás sobre mi");
}