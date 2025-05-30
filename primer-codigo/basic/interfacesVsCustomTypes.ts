// Definición de una interfaz en TypeScript
// Las interfaces establecen la estructura de un objeto y pueden extender otras interfaces.
interface Persona {
  nombre: string; // Propiedad de tipo string
  edad: number; // Propiedad de tipo número
}

// La interfaz "Empleado" extiende "Persona", heredando sus propiedades
interface Empleado extends Persona {
  puesto: string; // Nueva propiedad específica de "Empleado"
}

// Creación de un objeto "trabajador" que cumple con la interfaz "Empleado"
let trabajador: Empleado = {
  nombre: "Ana",
  edad: 29,
  puesto: "Desarrolladora",
};

console.log(trabajador); // Imprime el objeto en la consola

// 🔹 Custom Types (type)
// Los "types" permiten definir estructuras más flexibles, incluyendo combinaciones de tipos como string | number.
type PersonaTypes = {
  nombre: string; // Propiedad de tipo string
  edad: number; // Propiedad de tipo número
};

// Se pueden combinar "types" usando "&" para extender la estructura
type EmpleadoTypes = PersonaTypes & {
  puesto: string; // Nueva propiedad específica de "EmpleadoTypes"
};

// Creación de un objeto "trabajador" basado en el "type" EmpleadoTypes
let trabajadorType: EmpleadoTypes = {
  nombre: "Luis",
  edad: 35,
  puesto: "Ingeniero",
};

console.log(trabajadorType); // Imprime el objeto en la consola
