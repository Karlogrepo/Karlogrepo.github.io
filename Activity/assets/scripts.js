let btnMorning = document.getElementById("btn-morning");
btnMorning.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
     
    document.getElementById("h1-output").innerText = "Good Morning,";
    document.getElementById("p-output").innerText = "Fullname: " + FullName;
    console.log(Output);
});



let btnAfternoon = document.getElementById("btn-afternoon");
btnAfternoon.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
     
    document.getElementById("h1-output").innerText = "Good Afternoon, ";
    document.getElementById("p-output").innerText = "Fullname: " + FullName;
    console.log(Output);
});

let btnEvening = document.getElementById("btn-evening");
btnEvening.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
     
    document.getElementById("h1-output").innerText = "Good Evening, ";
    document.getElementById("p-output").innerText = "Fullname: " + FullName;
    console.log(Output);
});

