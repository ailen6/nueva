function showAlert() { alert("¡ Hola, esta es una alerta desde JavaScript"); }

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) 
{event.preventDefault(); validateFor ();});


function validateFor() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    if(!validateEmail) {
        alert("por favor ingrese un correo electronico valido.")
    }
    else{
        alert("correo electronico enviado correctamente.");
    }
}
document.querySelector (button-menu-toggle)