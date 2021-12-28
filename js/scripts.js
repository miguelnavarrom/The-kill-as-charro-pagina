
// function prueba(){
//   alert("Prueba exitosa");
//   return true;
// }



document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validacion); 
});


// VALIDACIÓN DEL FORMULARIO

function validacion() {

   var nombreJS = document.getElementById('nombre').value;
   var emailJS = document.getElementById('email').value;
   var mensajeJS = document.getElementById('mensaje').value;
   var bandera = 0;

   emailJS = emailJS.toString();
   nombreJS = nombreJS.toString();

   var patronEmail = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
   var patronNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

     var respuesta = patronNombre.test(nombreJS);

     if (!respuesta){
      bandera = 1;
      alert("El nombre no tiene el formato correcto");
     }

       respuesta = patronEmail.test(emailJS);

       if (!respuesta){
        bandera = 1;
        alert("Email inavildo");
       }

  if (bandera == 0){
    return true;
  }else{
    return false;
  }

  // Si el script ha llegado a este punto, todas las condiciones
  // se han cumplido, por lo que se devuelve el valor true
  
}