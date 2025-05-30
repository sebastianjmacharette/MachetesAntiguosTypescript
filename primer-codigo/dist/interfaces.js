var usuario = {
    nombre: "Juan",
    edad: 30,
    saludo: function () {
        return "Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    }
};
