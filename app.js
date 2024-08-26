const textArea = document.querySelector(".text-area__section__main");
const mensaje = document.querySelector(".mensaje__section__main");
const texto1 = document.querySelector(".texto1");
const texto2 = document.querySelector(".texto2");
const mostrarBoton = document.querySelector(".boton-copiar");



// REFERENCIAS
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function botonEncriptar(){

    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    texto1.remove();
    texto2.remove();
    /*mostrar boton copiar boton */
    mostrarBoton.style.visibility = "visible"
}

// Funcion de encriptacion
function encriptar (stringEncriptado){

    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0 ; i < matrizCodigo.length ; i ++ ){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptado
}


function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar (stringDesencriptado){

    let matrizCodigo = [
    ["a" , "ai"],
    ["e" , "enter" ] ,
    ["i" , "imes"] , 
    ["o" , "ober"] , 
    ["u" , "ufat"]
    ];

    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0 ; i < matrizCodigo.length ; i ++ ){
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);

        }
    }
    return stringDesencriptado

}



// Boton con funcion de Copiado 
function copiarTexto(){
    let textoParaCopiar = document.querySelector(".mensaje__section__main")
    
    let copiarDatos = document.querySelector(".boton-copiar");

    navigator.clipboard.writeText(textoParaCopiar.value)
}
