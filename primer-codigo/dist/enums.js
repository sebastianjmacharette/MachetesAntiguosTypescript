//permite almacenar listas de valores constantes o estaticos que no cambian durante la ejecución del programa
var UserRole;
(function (UserRole) {
    UserRole["EmployedUser"] = "empleado";
    UserRole["ManagerUser"] = "gerente";
    UserRole["AdminUser"] = "administrador";
})(UserRole || (UserRole = {}));
;
var myUser = UserRole.EmployedUser; // asignar un valor del enum a una variable
console.log('el usuario es:' + myUser); // imprimir el valor del enum 
