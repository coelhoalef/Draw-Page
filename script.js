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
let list = document.getElementById("container2")

loadTask();

function uploadArray(){
    arrayNames.push(inputName.value);
    document.getElementById("inputName").value = "";
    localStorage.setItem("arrayNames", JSON.stringify(arrayNames));
    updateScreen();
}

function updateScreen() {
    list.innerHTML = ""
    arrayNames.forEach(task => {
        list.innerHTML += `<li>${task}<button class="btnDelete" onclick="deleteTask(this,'${task}')"><p class="delete">X</p></button></li>`
    })
    
}

function drawName(){
    let numberNames = arrayNames.length - 1;

    let drawNames = Math.round(Math.random() * numberNames);

    document.getElementById("resultName").innerHTML = arrayNames[drawNames];

    
}

//Limpar resultados 

function cleanup(){
    document.getElementById("resultNumber").innerHTML = "-";
    document.getElementById("resultName").innerHTML = "-";
    document.getElementById("inputNumber").value = "";
    location.reload();
}

function deleteTask(element, task) {
    arrayNames = arrayNames.filter(value => value != task)
    localStorage.setItem("arrayNames", JSON.stringify(arrayNames));
    updateScreen();
}

function loadTask() {
    arrayNames = JSON.parse(localStorage.getItem('arrayNames')) || []
    updateScreen();
}
