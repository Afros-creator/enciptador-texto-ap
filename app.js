/* Código desarrollado para encriptar un texto*/ 

/*
let prueba = prompt("Ingrese una palabra");  
let prueba2 = prueba.replace("a", "e").toUpperCase();
console.log(prueba2)
*/

function encriptarTexto() {
    let texto = document.getElementById("textoAEncriptar").value;
    //let intento2 = document.getElementById("textoAEncriptar"); 
    let intento2 = texto.toLowerCase().replaceAll("i","imes").replaceAll("a", "ai").replaceAll("e","enter").replaceAll("o","ober").replaceAll("u","ufat");
    esconderImagen(); 
    return document.getElementById("textarea2").value = "   " + intento2;
}

function desencriptarTexto() {
    let textoaDesencriptar = document.getElementById("textoAEncriptar").value; 
    let textoDesencriptado = textoaDesencriptar.replaceAll("imes","i").replaceAll("ai", "a").replaceAll("enter","e").replaceAll("ober","o").replaceAll("ufat","u");
    esconderImagen(); 
    return document.getElementById("textarea2").value = "   " + textoDesencriptado;
}

function esconderImagen() {
    document.getElementById("lupaImagen").style.display = "none";
}

