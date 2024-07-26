// CREANDO UN ARRAY EN JAVASCRIPT:

// LOS ÍNDICES (INDEX) DE UN ARRAY:

//             0       1     2    3      4     5

let array = ['Carl', 'Mike', 45, 140, 'Maria', 20];

// ES IMPORTANTE SABER QUE, EN JAVASCRIPT, EL INDEX DE LOS ARRAYS EMPIEZA EN 0.

// LEEREMOS UN VALOR DENTRO DE UN ARREGLO:

console.log(array);
console.log(`El primer elemento del Array es: ${array[0]}`);
console.log("El segundo elemento del Array es: "+ array[1]);
console.log("El tercer elemento del Array es: " + array[2]);
console.log("El cuarto elemento del Array es: " + array[3]);
console.log("El quinto elemento del Array es: " + array[4]);
console.log("EL sexto elemento del Array es: " + array[5]);

// LUEGO, INTERCAMBIAREMOS UN ELEMENTO DENTRO DE UN ARREGLO MEDIANTE SU POSICIÓN (INDEX):

array[1] = 'Connor';
console.log("El segundo elemento del Array es: "+ array[1]);
console.log(array);

// FINALMENTE, LE RESTAREMOS A 1 UN ELEMENTO DEL ARREGLO YA DECLARADO, REEMPLAZANDO DICHO VALOR QUE ESTÁ AL FINAL DE DICHO ARREGLO...

array[array.length - 1] = "Hola";
console.log(array);

array.push('John');

// EL MÉTODO push() AÑADE 1 O MÁS ELEMENTOS AL FINAL DE UN ARREGLO Y DEVUELVE LA NUEVA LONGITUD DE DICHO ARREGLO...

// EL MÉTODO pop() ELIMINA EL ÚLTIMO ELEMENTO DE UN ARREGLO Y ÉSTE DEVUELVE SU VALOR AL MÉTODO QUE LO LLAMÓ...

let array2 = [44, 'Hello', 20, 7];

array2.pop();
console.log(array2);

array2.pop();
console.log(array2);

// EL MÉTODO shift() ELIMINA EL PRIMER ELEMENTO DEL ARREGLO Y ÉSTE LO RETORNA.

// TAMBIÉN MODIFICA LA LONGITUD DEL ARREGLO.

let array3 = ['Miami', 44, 'London', 52];

// SE PUEDE VER QUE, AL EJECUTAR EL MÉTODO shift(), HEMOS ELIMINADO EL TÉRMINO 'Miami' DENTRO DE ESTE ARREGLO.

array3.shift();
console.log(array3);

array3.shift();
console.log(array3);

// OBSERVA COMO HEMOS PASADO DE UN ARREGLO ORIGINAL DE 4 ELEMENTOS A UN ARREGLO FINAL DE 2 ELEMENTOS.

// SI HAS ENTENDIDO COMO FUNCIONA EL MÉTODO shift(), ENTONCES YA PODRÁS DEDUCIR CUÁL SERÁ EL FUNCIONAMIENTO DEL MÉTODO unshift()!

// EL MÉTODO unshift() AGREGA 1 O MÁS ELEMENTOS AL INICIO DEL ARREGLO, Y ÉSTE DEVUELVE LA NUEVA LONGITUD DE DICHO ARREGLO.

lastArray = [67, 25, "Hello", 88];
lastArray.unshift("Hola");
console.log(lastArray);
