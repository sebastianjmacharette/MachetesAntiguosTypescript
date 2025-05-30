//sirven para definir la estructura de un objeto. Son como un molde que indica qué propiedades debe tener y de qué tipo
interface Persona {
  nombre: string;
  apellido?: string; // propiedad opcional
  edad: number;
  saludo: () => string; // método que devuelve un saludo no ejecuta nada 

}

let usuario: Persona = { 
    nombre: "Juan", 
    edad: 30,
    saludo: function() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    } 
};
