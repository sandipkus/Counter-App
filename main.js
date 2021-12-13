let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let number = document.getElementById('number');
let container = document.getElementById('container');

let integer = 0;

increment.addEventListener('click', function(){
    integer +=1;
    number.innerHTML = integer;
})

decrement.addEventListener('click', function(){
    integer -=1;
    number.innerHTML = integer;
})