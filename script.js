function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrind, usando óculos e camiseta preta, barba e fundo amarelo"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuros e camiseta preta, barba e azul e roxo"
    )
  }
}
