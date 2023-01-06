package ejempl.example.demosb2.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/calculator")
public class CalculadoraController {

    @GetMapping
    public String operarGet(
        Integer num1,
        String op,
        Integer num2){

            var resultado = 0;
    switch (op) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "%":
            resultado = num1 % num2;
            break;
    }
    return String.format("%,d",resultado);

    }

    // @PostMapping
    // public String operarPost(){
        
    // }
    
}
