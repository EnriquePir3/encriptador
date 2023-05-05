

function encriptar(){

    let texto = document.getElementById("texto").value;
    let mayusculas = /[A-Z]/;
    let acentos = /[áéíóú]/;
    let resultado = "prueba";

    if (texto == ""){ 

        console.log("no hay un nada manito");
    
    } else if ( 
            mayusculas.test(document.getElementById("texto").value) ||
            acentos.test(document.getElementById("texto").value )) {

        console.log("no puedes usar letras mayusculas ni acentos, por favor escribe tu texto tomando en cuenta estas restricciones.Gracias.");

    } else {
        resultado = encrypt(texto);
    }
    
   // Mostrar el área de texto encriptado y asignar el valor encriptado al campo correspondiente
   document.getElementById("contenido-pantalla-encriptado").style.display =
   "none";
 document.getElementById("area-texto-encriptado").style.display = "block";
 document.getElementById("mensaje-encriptado").value = resultado;
}

function encrypt(text) {
    let encrypted = text.replace(/e/g, "enter");
    encrypted = encrypted.replace(/i/g, "imes");
    encrypted = encrypted.replace(/a/g, "ai");
    encrypted = encrypted.replace(/o/g, "ober");
    encrypted = encrypted.replace(/u/g, "ufat");
    return encrypted;
  }







