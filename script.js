let nombrePouceHaut = 0; 
let nombrePouceBas = 0;

const section = document.querySelector("section"),
  hireBtn = section.querySelector("#click"),
  closeBtn = section.querySelector("#close"),
  sendBtn = section.querySelector("#envoie"),
  redBtn = section.querySelector("#red"),
  greenBtn = section.querySelector("#vert"),
  blackBtn = section.querySelector("#noir"),
  blueBtn = section.querySelector("#bleu"),
  pop = section.querySelector("#status"),
  containpop = section.querySelector("#contain-pop"),
  nbbas= section.querySelector("#nbrbas"),
  nbhaut= section.querySelector("#nbrhaut");

hireBtn.addEventListener("click", () => {
  section.classList.add("show");
}
)

closeBtn.addEventListener("click", () => {
  section.classList.remove("show")
  section.classList.remove("succes")

}
)

containpop.addEventListener("click", () => {
  event.stopPropagation();
}
)

pop.addEventListener("click", () => {
  section.classList.remove("show")
  section.classList.remove("succes")

}
)


sendBtn.addEventListener("click", () => {
  section.classList.add("succes")
}
)

blackBtn.addEventListener("click", () => {
  section.classList.add("black")
  section.classList.remove("blue")
  section.classList.remove("vert")
  section.classList.remove("red")
}
)

blueBtn.addEventListener("click", () => {
  section.classList.add("blue")
  section.classList.remove("black")
  section.classList.remove("vert")
  section.classList.remove("red")
}
)

greenBtn.addEventListener("click", () => {
  section.classList.add("vert")
  section.classList.remove("black")
  section.classList.remove("blue")
  section.classList.remove("red")
}
)

redBtn.addEventListener("click", () => {
  section.classList.add("red")
  section.classList.remove("black")
  section.classList.remove("blue")
  section.classList.remove("vert")
}
)

nbhaut.addEventListener("click", () => {
  nombrePouceHaut++;
  nbhaut.innerHTML= nombrePouceHaut;
  nbbas.innerHTML= nombrePouceBas;
  section.classList.add("pouce")
}
)

nbbas.addEventListener("click", () => {
  nombrePouceBas++;
  nbbas.innerHTML= nombrePouceBas;
  nbhaut.innerHTML= nombrePouceHaut;
  section.classList.add("pouce")
}
)