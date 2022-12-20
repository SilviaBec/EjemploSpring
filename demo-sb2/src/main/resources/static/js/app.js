function abrirCalculadora(){
    const main = document.getElementsByTagName("main").item(0)
    // console.log("main:", main)
    let body = "<h1>Calculadora</h1>";
    body += "<form>";
    body += "<div class='row'>";
    body += "<div class='col'><input name='num1' type='number' placeholder='Numero 1' required></div>";
    body += "<select></select>"
    body += "<div class='col'><input name='num2' type='number' placeholder='Numero 2' required></div>";
    body += "</div>";
    body += "</form>";

    main.innerHTML =body;
                                                                            
}

