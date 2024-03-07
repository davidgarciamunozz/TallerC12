let num1 = prompt("digita el primer número");
let num2 = prompt ("digita el segundo número");
let num3 = prompt ("digita el tercer número");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

const parrafo = document.querySelector("#parrafo");
console.log(parrafo);


if (num1 > num2 && num1 > num3) {
    parrafo.innerHTML =" El número más grande es  " + num1;
} else if (num2 > num1 && num2 > num3) {
    parrafo.innerHTML =" El número más grande es  " + num2;
} else if (num3 > num1 && num3 > num2) {
    parrafo.innerHTML =" El número más grande es  " + num3;
} else {
    parrafo.innerHTML =" Los números son iguales  "
}

