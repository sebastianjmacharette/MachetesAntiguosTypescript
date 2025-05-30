//permite almacenar listas de valores constantes o estaticos que no cambian durante la ejecución del programa
var UserRole;
(function (UserRole) {
    UserRole[UserRole["EmployedUser"] = 0] = "EmployedUser";
    UserRole[UserRole["ManagerUser"] = 1] = "ManagerUser";
    UserRole[UserRole["AdminUser"] = 2] = "AdminUser";
})(UserRole || (UserRole = {}));
;
var myUser = UserRole.EmployedUser; // asignar un valor del enum a una variable
console.log(myUser); // imprimir el valor del enum 
