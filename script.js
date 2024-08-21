const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}


function encriptar(stringEncriptada) {
    // Expresión regular para detectar caracteres acentuados
    const acentos = /[áéíóúÁÉÍÓÚñÑ]/g;

    // Verificar si hay acentos en el valor de stringEncriptada
    if (acentos.test(stringEncriptada)) {
        alert('El texto no debe contener acentos.');
        return ''; // O podrías devolver un valor alternativo, dependiendo de tu necesidad
    }

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";

}


function desencriptar(stringDesencriptada) {
    // Expresión regular para detectar caracteres acentuados
    const acentos = /[áéíóúÁÉÍÓÚñÑ]/g;

    // Verificar si hay acentos en el valor de stringDesencriptada
    if (acentos.test(stringDesencriptada)) {
        alert('El texto no debe contener acentos.');
        return ''; // O podrías devolver un valor alternativo, dependiendo de tu necesidad
    }

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}


function btnCopiar() {
    // Selecciona el texto del área de mensaje
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto al portapapeles
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            // Opcional: Puedes añadir una notificación o algún feedback al usuario
            console.log('Texto copiado al portapapeles!');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}


