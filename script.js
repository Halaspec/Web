

      


const section = document.querySelector("section"),
    hireBtn  = section.querySelector("#click"),
    closeBtn = section.querySelector("#close"),
    sendBtn  = section.querySelector("#envoie"),   
    redBtn   = section.querySelector("#red"),
    greenBtn = section.querySelector("#vert"),
    blackBtn= section.querySelector("#noir"),
    blueBtn = section.querySelector("#bleu");

    hireBtn.addEventListener("click", ()=>{
          section.classList.add("show");
          }
        )

    closeBtn.addEventListener("click", ()=>{
            section.classList.remove("show")
            }
          )

   sendBtn.addEventListener("click", ()=>{
            section.classList.add("succes")
            }
          )
  
      blackBtn.addEventListener("click", ()=>{
        section.classList.add("black")
        section.classList.remove("blue")
        section.classList.remove("vert")
        section.classList.remove("red")
              }
            )
  
      blueBtn.addEventListener("click", ()=>{
        section.classList.add("blue")
        section.classList.remove("black")
        section.classList.remove("vert")
        section.classList.remove("red")
              }
            )

      greenBtn.addEventListener("click", ()=>{
        section.classList.add("vert")
        section.classList.remove("black")
        section.classList.remove("blue")
        section.classList.remove("red")
              }
            )

      redBtn.addEventListener("click", ()=>{
        section.classList.add("red")
        section.classList.remove("black")
        section.classList.remove("blue")
        section.classList.remove("vert")
              }
            )