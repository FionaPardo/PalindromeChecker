//Espero corra todo el html hasta ejecutar el js
document.addEventListener('DOMContentLoaded', () => {
    //Busco el botón submit
        const formSubmit = document.getElementById('check-btn');
    //Asocio acciones al darse el click del usuario en submit
        formSubmit.addEventListener('click', () => {
    //Reconozco donde se halla el dato que quiero, lo traigo y lo guardo 
          const inputElement = document.getElementById('text-input');
          const dato = inputElement.value;
    //Ubico dónde quiero mostrar la salida 
          const resultado = document.getElementById('result');
          if (dato === '') {
              alert("Please input a value");
          } else {
    //Le aplico el formato al dato
            const datoInicio = transformarInput(dato);
    //Invierto el orden del dato
            const datoFin = invertirStr(datoInicio);
    //Determino la salida según un resultado booleano
            if (datoInicio === datoFin){
              resultado.textContent = dato + " is a palindrome"
          } else {
              resultado.textContent = dato + " is not a palindrome"
          }
          };
            });
    });
    
    //Declaro una funcion para formatear el dato, sin mayúsculas y alfanumérico de manera estricta
    function transformarInput(a) {
    //Quito los caracteres inválidos
        let datoTransformado = a.replace(/[^a-zA-Z0-9]/g, '');
        return datoTransformado.toLowerCase()
        };
    
    //Declaro una función para invertir el orden del dato
    function invertirStr(b) {
    //Genero un str vacio
        let datoInvertido = '';
    //Le adjunto, uno a uno, al str vacio, los caracteres de derecha a izquierda
        for (let i = b.length - 1; i >= 0; i--) {
            datoInvertido += b[i];
        };
        return datoInvertido;
        };