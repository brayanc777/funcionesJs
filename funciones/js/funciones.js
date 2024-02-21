function calcularSalario() {
    let valorHora = parseFloat(prompt("Ingrese el valor de la hora:"))
    let cantidadHoras = parseInt(prompt("Ingrese la cantidad de horas trabajadas:"))
    console.log("Salario $: " +  valorHora * cantidadHoras)
}

function numerosPares() {
    let n = parseInt(prompt("Ingrese el valor de n:"))
    let m = parseInt(prompt("Ingrese el valor de m:"))
    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
function calculadora(){
    let num1, num2
    function sumar(){
        num1 = Number(prompt("Ingrese el primer número:"))
        num2 = Number(prompt("Ingrese el segundo número:"))
        console.log("Suma: " + (num1 + num2))
    }
           
    function restar(){
        num1 = Number(prompt("Ingrese el primer número:"))
        num2 = Number(prompt("Ingrese el segundo número:"))
        console.log("Resta: " + (num1 - num2))
    }
        
    function multiplicar(){
        num1 = Number(prompt("Ingrese el primer número:"))
        num2 = Number(prompt("Ingrese el segundo número:"))
        console.log("Multiplicación: " + (num1 * num2))
    }
          
    function dividir(){
        num1 = Number(prompt("Ingrese el primer número:"))
        num2 = Number(prompt("Ingrese el segundo número:"))
        console.log("Division: " + num1 / num2)
    }

    let opcionCalculadora = Number(prompt("Ingrese la operación que desea realizar: \n1. Suma \n2. Resta \n3. Multiplicación \n4. División \n5. Salir"))
    switch(opcionCalculadora){
        case 1:
        sumar()
        break
    case 2:
        restar()
        break
    case 3:
        multiplicar()
        break
    case 4:
        dividir()
        break
    }
}


let nombre, apellido, edad, cargo
function ingresarNombre() {
    nombre = prompt("Ingrese su nombre:")
}
        
function ingresarApellido() {
    apellido = prompt("Ingrese su apellido:")
}
        
function ingresarEdad() {
    edad = prompt("Ingrese su edad:")
}
        
function ingresarCargo() {
    cargo = prompt("Ingrese su cargo:")
}
        
function datosPersona() {
    console.log("Nombre: " + nombre)
    console.log("Apellido: " + apellido)
    console.log("Edad: " + edad)
    console.log("Cargo: " + cargo)

}

let numero
function tablaMultiplicar() {
    numero = Number(prompt("Número a multiplicar:"))
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i))
    }
}

function calcularAreaPerimetro() {
    let area, perimetro, opcionFigura, base, altura
    opcionFigura = Number(prompt("Seleccione la figura: \n1. Cuadrado \n2. Triángulo \n3. Rectángulo"))
    base = parseFloat(prompt("Ingrese la base:"))
    altura = parseFloat(prompt("Ingrese la altura:"))
    switch (opcionFigura) {
        case 1:
            area = base * base
            perimetro = 4 * base
            break
        case 2:
            area = (base * altura) / 2
            perimetro = base * 3
            break
        case 3:
            area = base * altura
            perimetro = 2 * (base + altura)
            break
        default:
            console.log("Opción no válida.")
    }
    console.log("El area es: " + area)
    console.log("El perimetro es: " + perimetro)
}


function menu() {
    let opcion;
    let ejecuciones = {};
    do {
        opcion = prompt("Menú de opciones: \n1. Calcular salario de un empleado \n2. Mostrar números pares \n3. Calculadora \n4. Ingresar datos de una persona \n5. Mostrar tabla de multiplicar \n6. Calcular área y perímetro de una figura \n7. Finalizar");
        opcion = Number(opcion)
        switch (opcion) {
            case 1:
                calcularSalario()
                break
            case 2:
                numerosPares()
                break
            case 3:
                calculadora()
                break
            case 4:
                ingresarNombre()
                ingresarApellido()
                ingresarEdad()
                ingresarCargo()
                datosPersona()
                break
            case 5:
                tablaMultiplicar()
                break
            case 6:
                calcularAreaPerimetro()
                break
            case 7:
                console.log("Finalizando programa.")
                break
            default:
                console.log("Opcion no valida")
        }
        ejecuciones[opcion] = (ejecuciones[opcion] || 0) + 1;
    } while (opcion !== 7);

    console.log("Cantidad de ejecuciones por opción:");
    for (let key in ejecuciones) {
        console.log(`Opción ${key}: ${ejecuciones[key]} veces`);
    }
}

menu()
