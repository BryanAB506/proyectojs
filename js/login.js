// Obtiene el formulario de inicio de sesión del DOM
const formulario = document.getElementById("formLogin");

// Asigna una función para manejar el evento de envío del formulario
formLogin.onsubmit = function (event) {
    // Previene el comportamiento predeterminado del formulario (recarga de la página)
    event.preventDefault();

    // Obtiene los valores ingresados en los campos de email y contraseña
    const email = document.getElementById("inputP").value;
    const pass = document.getElementById("inputS").value;

    // Obtiene la lista de usuarios almacenada en el localStorage, o un array vacío si no existe
    let usuario = JSON.parse(localStorage.getItem("usuario")) || [];

    // Busca un usuario que coincida con el email y la contraseña ingresados
    const usuarios = usuario.find(usuarios => usuarios.email === email && usuarios.pass === pass);

    // Verifica si se encontró un usuario válido
    if (usuarios) {
        // Muestra un mensaje de éxito y redirige a la página vista.html
        alert("inicio correctamente");
        window.location.href = 'vista.html';
    } else {
        // Muestra un mensaje de error si los datos son inválidos
        alert("los datos son invalidos");
    }

    // Resetea el formulario después de la validación
    formulario.reset();
}





