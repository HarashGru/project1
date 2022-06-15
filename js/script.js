// калькулятор
let inputCalc = document.querySelector('.output_screen'); 

function insert(i){
    inputCalc.value = inputCalc.value + i;
}

function equal(){

    if (eval(inputCalc.value) == undefined){
        inputCalc.value = '';
    }
    else if(eval(inputCalc.value) == Infinity){
        inputCalc.value = 'division by zero';
    }
    
    inputCalc.value = eval(inputCalc.value).toFixed(2);

    if (eval(inputCalc.value) == NaN){
        inputCalc.value = '';
    }
}

function del(){
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length - 1);
}

function clean(){
    inputCalc.value = '';
}