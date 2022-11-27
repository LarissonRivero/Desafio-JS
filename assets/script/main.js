const boton = document.getElementById("btn");
var color = document.querySelector(".caja");
var color2= document.querySelector(".card");
var capture=document.querySelector(".cantidad").value;
var nCantidad=document.querySelector(".cantidad").value;
var cambioColor=document.querySelector(".color1").value;

    boton.addEventListener("click", function(){
        var colorC=document.querySelector(".color").value;
        color.style.backgroundColor = colorC;
        color2.style.backgroundColor = colorC;
    });

    boton.addEventListener("click", function(){
        var capture=document.querySelector(".cantidad").value;
        var capture2 = capture * 400000;
        document.querySelector("span").innerHTML = `\$${capture2}`;
    });

    boton.addEventListener("click", function(){
        var capture1=document.querySelector(".cantidad").value;
        document.querySelector(".nCantidad").innerHTML = capture1;
    });
