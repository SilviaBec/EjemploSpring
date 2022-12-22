function abrirCalculadora(){
    const main = document.getElementsByTagName("main").item(0)
    // console.log("main:", main)
    let body = "<h1>Calculadora</h1>";
    body += "<form>";
    body += "<div class='row'>";
    body += "<div class='col'><input name='num1' type='number' class='form-control' placeholder='Numero 1' required></div>";
    body += "<select name='op' class='col' form-control>";
    body += "<option value ='+'>Suma</option>";
    body += "<option value ='-'>Resta</option>";
    body += "<option value ='*'>Multiplicación</option>";
    body += "<option value ='/'>Division</option>";
    body += "<option value ='%'>Residuo</option>";
    body += "</select>"
    body += "<div class='col'><input name='num2' type='number' class='form-control' placeholder='Numero 2' required></div>";
    body += "</div>";
    body += "</form>";

    main.innerHTML =body;
                                                                            
}

