//Un custom type en TypeScript es otra forma de definir la estructura de un dato, pero usando type en lugar de interface. También permite combinar varios tipo
type PersonaTypes = {
  nombre: string;
  edad: number;
  direccion?: string; // Propiedad opcional
  telefono: string | number; // Puede ser string o número
};

let usuario1: PersonaTypes = {
  nombre: "Lucía",
  edad: 27,
  telefono: "123-456-789",
};

let usuario2: PersonaTypes = {
  nombre: "Miguel",
  edad: 35,
  direccion: "Av. Siempre Viva 123",
  telefono: 987654321,
};

console.log(usuario1, usuario2);

//convinacion de 4 tipos
type CustomType = string | number | boolean | null;
let valor1: CustomType = "Hola";
let valor2: CustomType = 42;
