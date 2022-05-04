function add(num) {
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;
}

function clean() {
    document.getElementById('result').innerHTML = '';
}

function equal() {
    var result = document.getElementById('result').innerHTML;
    if (result) {
        document.getElementById('result').innerHTML = eval(result)  
    } else {
        alert ('Digite alguma expressão primeiro!')
    }
}