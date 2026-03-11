const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        if(button.classList.contains("number") || button.classList.contains("operator")){
            display.value += value;
        }

        if(button.classList.contains("clear")){
            display.value = "";
        }

        if(button.classList.contains("delete")){
            display.value = display.value.slice(0,-1);
        }

        if(button.classList.contains("equal")){
            try{
                display.value = eval(display.value);
            }catch{
                display.value = "Error";
            }
        }

    });

});

document.addEventListener("keydown", (e)=>{

    if(!isNaN(e.key) || "+-*/.".includes(e.key)){
        display.value += e.key;
    }

    if(e.key === "Enter"){
        display.value = eval(display.value);
    }

    if(e.key === "Backspace"){
        display.value = display.value.slice(0,-1);
    }

    if(e.key === "Escape"){
        display.value = "";
    }

});
