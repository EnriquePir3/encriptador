document.getElementById("area-texto-encriptado").style.display = "none";
document.getElementById("texto").focus();
function encriptar(){
    let texto = document.getElementById("texto").value;
    let mayusculas = /[A-Z]/;
    let acentos = /[áéíóú]/;
    

    if (texto == ""){ 

        alert("ningun mensaje ha sido escrito");
    
    } else if ( 
          mayusculas.test(document.getElementById("texto").value) ||
            acentos.test(document.getElementById("texto").value )) {

              alert("no puedes usar letras mayusculas ni acentos, por favor escribe tu texto tomando en cuenta estas restricciones.Gracias.");

    } else {
    let textoEncriptado = encriptarTexto(texto);
    
          
          
        document.getElementById("contenido-pantalla-encriptado").style.display = "none";
        
           document.getElementById("area-texto-encriptado").style.display = "block";
            
                document.getElementById("mensaje-encriptado").value = textoEncriptado;
}
    }
    

function desencriptar(){
    
    textoEncriptado = document.getElementById("texto").value;

    if (textoEncriptado == ""){
        alert("no hay nada que descifrar");
    }
        
   let textoDesencriptado = desencriptarTexto(textoEncriptado)

    document.getElementById("mensaje-encriptado").value = textoDesencriptado; 

} 

function encriptarTexto(texto) {
    let encriptar = texto.replace(/e/g, "enter");
    encriptar = encriptar.replace(/i/g, "imes");
    encriptar = encriptar.replace(/a/g, "ai");
    encriptar = encriptar.replace(/o/g, "ober");
    encriptar = encriptar.replace(/u/g, "ufat");
    return encriptar;
  }

  function desencriptarTexto(texto) {
    let desencriptar = texto.replace(/enter/g, "e");
    desencriptar = desencriptar.replace(/imes/g, "i");
    desencriptar = desencriptar.replace(/ai/g, "a");
    desencriptar = desencriptar.replace(/ober/g, "o");
    desencriptar = desencriptar.replace(/ufat/g, "u");
    return desencriptar;
}

function copiarTexto(idtexto) {
    let texto = document.getElementById("mensaje-encriptado");
    texto.select();
    document.execCommand("copy");
  }

  



/* fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!*/