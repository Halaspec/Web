const section = document.querySelector("section"),
    hireBtn  = section.querySelector("#click"),
    closeBtn = section.querySelector("#close");

    hireBtn.addEventListener("click", ()=>{
          section.classList.add("show");
          }
        )

    closeBtn.addEventListener("click", ()=>{
            section.classList.remove("show")
            }
          )