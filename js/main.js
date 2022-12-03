let nombre = prompt("Ingrese su nombre");

let correo = "correo@gmail.com";
let contraseña = 123;

alert("Ten en cuenta que si falas tres veces, no podrás loguearte");

let correoIngresado = prompt(nombre + ", ingrese su correo :D");
let contraseñaIngresada = prompt("Ingrese su contraseña");

function evaluar() {
  for (let x = 0; x < 2; x++) {
    if (correo == correoIngresado && contraseña == contraseñaIngresada) {
      alert("Accediendo...credenciales ingresadas correctamente");
      break;
    } else {
      alert("Usted ingreso un correo o contraseña incorrecto, vuelva a ingresar");
      correoIngresado = prompt(nombre + ", ingrese su correo nuevamente ._.");
      contraseñaIngresada = prompt("Ingrese su contraseña");
    }
  }
}

evaluar();
