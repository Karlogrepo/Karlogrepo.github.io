let txtFirstNumber = document.getElementById("english");
let txtSecondNumber = document.getElementById("mathematics");
// let txtSecondNumber = document.getElementById("data");
// let txtSecondNumber = document.getElementById("comprog");
// let txtSecondNumber = document.getElementById("web");

txtFirstNumber.addEventListener('keyup', function() {
    let total = parseFloat(txtFirstNumber.value) + parseFloat(txtSecondNumber.value);
    document.getElementById("total").innerText = total;
});

txtSecondNumber.addEventListener('keyup', function() {    
    let total = parseFloat(txtFirstNumber.value) + parseFloat(txtSecondNumber.value);
    document.getElementById("total").innerText = total;
});

