//permite almacenar listas de valores constantes o estaticos que no cambian durante la ejecución del programa
enum UserRole {
  EmployedUser,
  ManagerUser,
  AdminUser,
};
const myUser = UserRole.EmployedUser; // asignar un valor del enum a una variable
console.log(myUser); // imprimir el valor del enum 
