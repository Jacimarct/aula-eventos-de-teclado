// const linkPerfil = document.getElementById("link-perfil");
//const navPerfil = document.getElementById("nav-perfil");

const voltar = document.getElementById('Voltar')

document.addEventListener('keyup', (event) => {
 console.log(event);

if(event.code === 'Backspace' ) {
    voltar.click()
  }
})