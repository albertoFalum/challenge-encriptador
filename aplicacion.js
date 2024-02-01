let llavesDesencriptar = ["ai", "enter", "imes", "ober", "ufat"];
let vocales = ['a', 'e', 'i', 'o', 'u'];

function limpiarTextAreas(){
    document.getElementById('textoInput').value = "";
    document.getElementById('textoResultado').value = "";
}

function validarTexto(texto) {
    if (texto.trim() === "") {
        alert("Debe ingresar un texto");
        limpiarTextAreas();
        return false;
    }

    if (/[^a-z\u0061-\u007A\s]/.test(texto.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
        alert('No se pueden ingresar letras mayúsculas ni caracteres especiales');
        limpiarTextAreas();
        return false;
    }

    return true;
}


function codificarTexto() {
    let textoAEncriptar = document.getElementById('textoInput').value;

    if (validarTexto(textoAEncriptar)) {
        let textoEncriptado = "";

        for (let i = 0; i < textoAEncriptar.length; i++) {
            let letra = textoAEncriptar[i];

            switch (letra) {
                case "a":
                    textoEncriptado += "ai";
                    break;
                case "e":
                    textoEncriptado += "enter";
                    break;
                case "i":
                    textoEncriptado += "imes";
                    break;
                case "o":
                    textoEncriptado += "ober";
                    break;
                case "u":
                    textoEncriptado += "ufat";
                    break;
                default:
                    textoEncriptado += letra;
                    break;
            }
        }
        /*alert("Texto encriptado con éxito");*/
        document.getElementById('textoResultado').value = textoEncriptado;
    }
}

function decodificarTexto() {

    let textoADecodificar = document.getElementById('textoInput').value;

    if (validarTexto(textoADecodificar)) {
        let textoOriginal = textoADecodificar;

        for (let i = 0; i < llavesDesencriptar.length; i++) {
            let llave = llavesDesencriptar[i];

            if (textoOriginal.includes(llave)) {
                textoOriginal = textoOriginal.replace(new RegExp(llave, 'g'), vocales[i]);
            }
        }
        /*alert("Texto desencriptado con éxito");*/
        document.getElementById('textoResultado').value = textoOriginal;
        
    }

}

function copiarTexto() {
    let textoACopiar = document.getElementById("textoResultado");

    if (textoACopiar.value.trim() === "") {
        alert('No hay texto para copiar');
        return;
    }

    textoACopiar.select();

    try {
        document.execCommand('copy');
        alert('Texto copiado');
        limpiarTextAreas()
    } catch (err) {
        console.error('No se pudo copiar al portapapeles:', err);
    }
}

