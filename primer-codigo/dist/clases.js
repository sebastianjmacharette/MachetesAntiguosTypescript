//Las clases en TypeScript son plantillas para crear objetos con propiedades y métodos. 
// Son como un molde que define cómo debe ser un objeto y qué puede hacer.
//no son especificas de typescript, son multiparadigma de programación
var Persona = /** @class */ (function () {
    // Constructor
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Método
    Persona.prototype.saludar = function () {
        return "Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    };
    return Persona;
}());
// Crear una instancia de la clase Persona
var persona1 = new Persona("Juan", 30);
// Llamar al método saludar
console.log(persona1.saludar()); // "Hola, mi nombre es Juan y tengo 30 años."
