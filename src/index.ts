/*
calcular el área de un rectángulo pero para cualquier base o altura
El usuario debe ingresar la base y altura por teclado
El área debe guardarse en una variable 
El resultado debe ser mostrado por pantalla
*/

let inpL1 = document.getElementById("l1");
let inpL2 = document.getElementById("l2");
let btncal = document.getElementById("btncal");
let p = document.getElementById("parraf");
let resultado = 0;
let L1 = Number(inpL1.value);
let L2 = Number(inpL2.value);

btncal?.addEventListener("click", () => {
  resultado = L1 * L2;

  p.innerText = `El area del rectanculo es: ${resultado}`;
});



/* RESOLUCION CON PROMPT
*/

let inpL1 = prompt("ingrese la base");
let inpL2 = prompt("ingrese la altura");
let resultado: number = 0 ;
let L1 = Number(inpL1);
let L2 = Number(inpL2);
resultado = L1 * L2
console.log(`El area del rectangulo es ${resultado}`);
