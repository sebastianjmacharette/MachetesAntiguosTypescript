//clases de tipos de datos
//inferencia de datos es cuando el compilador deduce el tipo de dato de una variable
let edad: number = 25; // número
let nombre: string = "John"; // cadena de texto
let estaActivo: boolean = true; // booleano
let pasatiempos: string[] = ["leer", "jugar", "programar"]; // arreglo de cadenas de texto
let usuario: { nombre: string; edad: number } = { nombre: "Alice", edad: 30 }; // objeto con propiedades específicas
let arregloObjetos: Array<{ nombre: string; edad: number }> = [
  { nombre: "Bob", edad: 28 },
]; // arreglo de objetos con propiedades específicas
let fecha: Date = new Date(); // objeto de fecha
let nulo: null = null; // valor nulo
let response: any = "Esto puede ser cualquier cosa"; // tipo any, puede ser cualquier tipo de dato
let indefinido: undefined = undefined; // valor indefinido

function saludar(): void {
  console.log("Hola, mundo!"); // función que no retorna nada
};
// Función que retorna un número
function sumar(a: number, b: number): number {
  return a + b; // retorna la suma de dos números
};

let desconocido: unknown; // tipo desconocido, se debe verificar antes de usar

//convinar diferentes tipos de datos
let combinacion: (string | number)[] = ["texto", 42, "otro texto"]; // arreglo que puede contener cadenas de texto o números
combinacion?.toString(); // llamar a toString si combinacion no es undefined o null

//crear un tipo de dato personalizado
type ResponseTypeService = string | undefined;
let variablecambiable: ResponseTypeService = "respuesta del servicio"; // variable que puede ser una cadena de texto o undefined
let responsePartners: ResponseTypeService;
responsePartners?.concat(" - respuesta adicional"); // concatenar si responsePartners no es undefined

//type assertion casteo de tipos
let valor: any = "Esto es un texto";
(valor as string).toUpperCase(); // convertir a mayúsculas usando type assertion
//lo mismo pero metedo alternativo
let message: any= "";
let messageUpercase =<string>message; // convertir a string usando type assertion
messageUpercase.toUpperCase(); // convertir a mayúsculas
//para manejo del dom el casteo de tipos es muy útil
//por ejemplo, al seleccionar un elemento del DOM
let elemento = document.getElementById("miElemento");// puede ser canvas o null
let elementoCasteado = <HTMLCanvasElement>document.getElementById("miElemento"); // ya le decimos quees camvas
let elementoCasteado2 = document.getElementById("miElemento") as HTMLCanvasElement; // otra forma de hacer el casteo
