
let employees = [];
let acceptEmployees = [];
let selectedIndex = -1;

function addEmployee(){
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let age = document.getElementById("age").value;
    let price = document.getElementById("price").value;
    let position = document.getElementById("position").value;

    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("price").value = "";
    document.getElementById("position").value = "";

    let newEmployee = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        price: price,
        position: position
    }

    if (selectedIndex >= 0){
        acceptEmployees[selectedIndex] = newEmployee;
        selectedIndex = -1;
    } else {
        employees.push(newEmployee);
    }
    drawPage();
    progress();
}


function drawPage(){
    let result = "";

    for (let i = 0; i < employees.length; i++){
        result +=
            "<div class='col-6 mt-3'>" +
            "<div class='card'>" +
            "<div class='card-header'><h5>"+ employees[i].firstName + " " + employees[i].lastName +"</h5></div>" +
            "<div class='card-body'>" +
            "<p>Age: <b>"+ employees[i].age +"</b></p>" +
            "<p>Price: <b>"+ employees[i].price +"</b></p>" +
            "<p>Position: <b>"+ employees[i].position +"</b></p>" +
            "</div>" +
            "<div class='card-footer'>" +
            "<button type='button' class='btn btn-success btn-block' onclick='acceptEmployee("+ i +")'>Accept</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result1").innerHTML = result;

    let result2 = "";

    for (let i = 0; i < acceptEmployees.length; i++){
        result2 +=
            "<div class='col-6 mt-3'>" +
            "<div class='card'>" +
            "<div class='card-header'><h4>"+ acceptEmployees[i].firstName + " " + acceptEmployees[i].lastName +"</h4></div>" +
            "<div class='card-body'>" +
            "<p>Age: <b>"+ acceptEmployees[i].age +"</b></p>" +
            "<p>Price: <b>"+ acceptEmployees[i].price +"</b></p>" +
            "<p>Position: <b>"+ acceptEmployees[i].position +"</b></p>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between align-items-center'>" +
            "<button type='button' class='btn btn-success' onclick='editEmployee("+ i +")' data-toggle='modal' data-target='#demo'>Edit</button>" +
            "<button type='button' class='btn btn-danger' onclick='deleteEmployee("+ i +")'>Delete</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result2").innerHTML = result2;
}

function acceptEmployee(index){
    acceptEmployees.push(employees[index]);
    employees.splice(index, 1);
    drawPage();
    progress();
}

function deleteEmployee(index){
    acceptEmployees.splice(index, 1);
    drawPage();
    progress();
}

function editEmployee(index){
    document.getElementById("first-name").value = acceptEmployees[index].firstName;
    document.getElementById("last-name").value = acceptEmployees[index].lastName;
    document.getElementById("age").value = acceptEmployees[index].age;
    document.getElementById("price").value = acceptEmployees[index].price;
    document.getElementById("position").value = acceptEmployees[index].position;
    selectedIndex = index;
}

function progress(){
    let percent = acceptEmployees.length * 100 / (employees.length + acceptEmployees.length);
    document.getElementById("progress").style.width = percent + "%";
}


