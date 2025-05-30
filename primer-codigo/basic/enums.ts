//permite almacenar listas de valores constantes o estaticos que no cambian durante la ejecución del programa
enum UserRole {
  EmployedUser = "empleado",
  ManagerUser = "gerente",
  AdminUser = "administrador",

};
const myUser = UserRole.EmployedUser; // asignar un valor del enum a una variable
console.log('el usuario es:' + myUser); // imprimir el valor del enum 
