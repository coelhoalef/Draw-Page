//Sorteio números
let inputNumber = document.getElementById("inputNumber");

function drawNumber(){
    let number = inputNumber.value;

    let drawNumber = Math.round(Math.random() * number);

    document.getElementById("resultNumber").innerHTML = drawNumber;

}


//Sorteio nomes
let inputName = document.getElementById("inputName");
let arrayNames = [];

function uploadArray(){
    arrayNames.push(inputName.value);
    console.log(arrayNames)
    document.getElementById("inputName").value = "";
}

function drawName(){
    let numberNames = arrayNames.length - 1;

    let drawNames = Math.round(Math.random() * numberNames);

    document.getElementById("resultName").innerHTML = arrayNames[drawNames];

    
}

//Limpar resultados para

function cleanup(){
    document.getElementById("resultNumber").innerHTML = "-";
    document.getElementById("resultName").innerHTML = "-";
    document.getElementById("inputNumber").value = "";
    location.reload();
}