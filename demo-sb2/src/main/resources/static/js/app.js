function abrirCalculadora() {
    const main = document.getElementsByTagName("main").item(0);
    // console.log("main:", main)
    let body = "<h1>Calculadora</h1>";
    body += "<form>";
    body += "<div class='row'>";
    body +=
        "<div class='col'><input name='num1' type='number' class='form-control' placeholder='Numero 1' required></div>";
    body += "<select name='op' class='col' form-control>";
    body += "<option value ='+'>Suma</option>";
    body += "<option value ='-'>Resta</option>";
    body += "<option value ='*'>Multiplicación</option>";
    body += "<option value ='/'>Division</option>";
    body += "<option value ='%'>Residuo</option>";
    body += "</select>";
    body +=
        "<div class='col'><input name='num2' type='number' class='form-control' placeholder='Numero 2' required></div>";
    body += "</div>";
    body += "<div class='row'>";
    body +=
        "<button type='button' class='btn btn-primary' onClick='realizarOperacion()'>Calcular</button>";
    body += "</div>";
    body += "<div id='resultado' class='row'></div>";
    body += "</form>";

    main.innerHTML = body;
}

function realizarOperacion() {
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

    const num1 = document.getElementsByName("num1").item(0).value;
    const num2 = document.getElementsByName("num2").item(0).value;
    const op = document.getElementsByName("op").item(0).value;
    const tagResultado = document.getElementById("resultado");

    const alert = (message, type) => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            "</div>",
        ].join("");
    
        alertPlaceholder.append(wrapper);
    };



    if (num1 === "") {
        alert("El número 1 no puede estar vacío","danger");
        return;
    }
    if (num2 === "") {
        alert("El número 2 no puede estar vacío", "danger");
        return;
    }

    console.log(num1, op, num2);

    let resultado = 0;
    switch (op) {
        case "+":
            resultado = parseInt(num1) + parseInt(num2);
            break;
        case "-":
            resultado = parseInt(num1) - parseInt(num2);
            break;
        case "/":
            resultado = parseInt(num1) / parseInt(num2);
            break;
        case "*":
            resultado = parseInt(num1) * parseInt(num2);
            break;
        case "%":
            resultado = parseInt(num1) % parseInt(num2);
            break;
    }
    tagResultado.innerText = resultado;
}



const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
        alert("Nice, you triggered this alert message!", "success");
    });
}
