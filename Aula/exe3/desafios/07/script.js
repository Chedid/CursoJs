const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");




btnLogin.addEventListener("click", (event) =>{
    event.preventDefault();
    /* INICIO VALIDACAO NO-NO*/
        /* Criei um Array */

        const fields = [...document.querySelectorAll(".input-block input")]
        /*Vai procurar no Array se existe algum campo vazio */

        fields.forEach(field => {
            if (field.value === "") form.classList.add("validate-error")
        });

        const formError = document.querySelector(".validate-error")
        if(formError){
            formError.addEventListener("animationend", event => {
            if(event.animationName === "nono") {
                formError.classList.remove("validate-error");
            }
            });
        } else {
            form.classList.add("form-hide");
        }
    /* FIM VALIDACAO NO-NO*/
});



/* VALIDACAO PARA FORM SAIR DA TELA */
form.addEventListener("animationstart", event =>{
    if(event.animationName === "down") {
        document.querySelector("body").style.overflow = "hidden"
    }
})


form.addEventListener("animationend", event =>{
    if(event.animationName === "down"){
        form.style.display = "none";
        document.querySelector("body").style.overflow = "none"
    }
});
/* FIM VALIDACAO PARA FORM*/

const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 11; i++){
    const li = document.createElement("li");

    const random = (min, max) => Math.random() * (max - min) - min;

    const size = Math.floor(random(10, 120));
    const position = random(1, 99);
    const delay  = random(2, 0.1);
    const duration  = random(24, 12);


    li.style.width = `${size}px`; 
    li.style.height = `${size}px`; 
    li.style.bottom = `-${size}px`;
    
    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
    ulSquares.appendChild(li);
}
