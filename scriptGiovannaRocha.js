//Função BomdiaMundo
bDia()
function bDia(){
    alert("Bom dia mundo!!!")
}

//02-Calculo cubo do numero
function calculoCubodoNumero() {
    let cubo =parseFloat(document.getElementById("cubo").value);
    let result = Math.pow(cubo, 3);
    alert("é igual a= "+result);
}

//03-Fahrenheit (F) para Celsius (C)
function FparaC() {
    let F = parseFloat(document.getElementById("F").value);
    let C =(F-32)*0.5556.toFixed(2);
    alert("A temperatura em Celsius(C) é="+C)
}

// 04-Calculo area do triangulo
var areaT 
function calculoAreaTriangulo(){
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);

    areaT = (base*altura)/2;
    se()
    
}

function se(){
    if(areaT<=100){
        alert("A área do triangulo ="+areaT+" este triângulo pertence ao Grupo1.")
    }
    else if((areaT>100)&&(areaT<=400)){
        alert("A area do triangulo ="+areaT+" este triângulo pertence ao Grupo2")
    }    
    else if((areaT>400)&&(areaT<=600)){
        alert("A area do triangulo ="+areaT+" este triângulo pertence ao Grupo3")
    }
    else if((areaT>600)&&(areaT<=1000)){
        alert("A area do triangulo ="+areaT+" este triângulo pertence ao Grupo4");
    }    
    else {
       alert("A area do triangulo ="+areaT+" este triângulo pertence ao Grupo5");
    } 
}


//05-Calculo area do circulo
function calculoAreaCirculo() {
    let raio = parseFloat(document.getElementById("raio").value);
    let areaC = (Math.PI*(raio*raio)).toFixed(2);

    if(areaC<=100){
        alert("A área do circulo ="+areaC+" este circulo pertence ao Grupo1.")
    }
    else if((areaC>100)&&(areaC<=400)){
        alert("A area do circulo ="+areaC+" este circulo pertence ao Grupo2")
    }    
    else if((areaC>400)&&(areaC<=600)){
        alert("A area do circulo ="+areaC+" este circulo pertence ao Grupo3")
    }
    else if((areaC>600)&&(areaC<=1000)){
        alert("A area do circulo ="+areaC+" este circulo pertence ao Grupo4");
    }    
    else {
       alert("A area do circulo ="+areaC+" este circulo pertence ao Grupo5");
    } 
}

//06-5% de desconto
function desconto(){
    let valor= parseFloat(document.getElementById("valor").value);
    let resultado= valor*0.05;
    alert("valor do desconto é de= "+resultado);
}

//07-Maior ou menor de idade
function idade(){
    let ano= parseFloat(document.getElementById("ano").value);
    let conta= 2023-ano;
    if (conta<=17){
        alert("Você tem "+conta+" anos, portanto é menor de idade." )
    }
    if (conta>=18){
        alert("Você tem "+conta+" anos, portanto é maior de idade.")
    }
}

//08- Carro economico
function carroEconomico(){
    let dinheiro= parseFloat(document.getElementById("dinheiro").value);
    let litro= dinheiro/5;
    let km= litro*20;
    alert("Você pode comprar "+litro+" litros de combustível e andar "+km+" kilometros")
}


