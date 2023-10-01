function toggleMode() {
  const html = document.documentElement;
  const profileImg = document.querySelector("#profile img");

  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    profileImg.style.transition = "opacity .5s";
    profileImg.style.opacity = "0";

    setTimeout(() => {
      profileImg.setAttribute("src", "./assets/avatar-light.png");
      profileImg.setAttribute(
        "alt",
        "Foto de Matheus Nascimento de perfil, usando óculos, fundo claro"
        );

      profileImg.style.opacity = "1";
    }, 500);
  } else {
    profileImg.style.transition = "opacity .5s";
    profileImg.style.opacity = "0";

    setTimeout(() => {
      profileImg.setAttribute("src", "./assets/avatar.png");
      profileImg.setAttribute(
        "alt",
        "Foto de Matheus Nascimento de frente, fundo escuro"
        
      );

      profileImg.style.opacity = "1";
    }, 500);
  }
}
