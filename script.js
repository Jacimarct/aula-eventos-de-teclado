// const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

const linkParaDadosPerfil = document.getElementById('link-perfil-dados')

document.addEventListener("keyup", (event) => {
// console.log(event);

if(event.code === 'Digit1' || event.code === 'Numpad1') {
  if(navPerfil.style.display === "block")  {
    linkParaDadosPerfil.click()
  } else {
    navPerfil.style.display = "block"
  }
 
}
//   if (event.code === 'Escape') {
//   navPerfil.style.display = "none"

// }
  // navPerfil.style.display = "block"
})