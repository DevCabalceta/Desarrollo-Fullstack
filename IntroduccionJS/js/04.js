// String o Cadena de texto

const producto = 'Monitor de 20 Pulgadas';
const producto2 = String('Monitor de 30 Pulgadas');
const producto3 = new String('Monitor de 50 Pulgadas');

console.log(typeof producto);
console.log(typeof producto2);
console.log(producto.length);

// IndexOf (retorna posicion)
console.log(producto.indexOf('Monitor'));

// Includes (retorna true o false)
console.log(producto.includes('Monitor'));