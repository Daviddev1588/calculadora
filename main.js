const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(botones => {
    botones.addEventListener("click", ()=>{
        const botonesApretados = botones.textContent;

        if (botones.id ==="C") {
            pantalla.textContent = "0";
            return;
        }

        if (botones.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0"                
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
            return;            
        }

        if (botones.id ==="igual" ) {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!"                
            }
           
            return;
        }

       if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonesApretados;
       } else {
            pantalla.textContent += botonesApretados;
        
       }
    })
})