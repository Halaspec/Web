const section = document.querySelector("section"),
    hireBtn  = section.querySelector("#click"),
    closeBtn = section.querySelector("#close"),
    sendBtn  = section.querySelector("#envoie");

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