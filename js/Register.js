const formulario = document.getElementById("registerForm")

registerForm.onsubmit=function (event) {
    
  //evita que el navegador se recargue solo
    event.preventDefault();

    const email = document.getElementById("inputP").value
    const pass = document.getElementById("inputS").value
    let usuario = JSON.parse(localStorage.getItem("usuario"))||[]
    if (usuario.find(usuario=>usuario.email===email)) {
      alert("el usuario ya existe") 
      return 
    }
    usuario.push({email,pass})
    localStorage.setItem('usuario', JSON.stringify(usuario))
    alert("se registro correctamente")

    window.location.href='login.html'

    formulario.reset()
}


