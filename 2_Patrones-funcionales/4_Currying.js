const suma = (a, b) => a + b;

const cSuma = (a) => (b) => a + b;

const suma1 = cSuma(1);
console.log(suma1(5));
