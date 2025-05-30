//Las clases en TypeScript son plantillas para crear objetos con propiedades y métodos. 
// Son como un molde que define cómo debe ser un objeto y qué puede hacer.
//no son especificas de typescript, son multiparadigma de programación

class Persona {
    // Propiedades
    nombre: string;
    edad: number;

    // Constructor
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método
    saludar(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}   

// Crear una instancia de la clase Persona
const persona1 = new Persona("Juan", 30);   
// Llamar al método saludar
console.log(persona1.saludar()); // "Hola, mi nombre es Juan y tengo 30 años."
