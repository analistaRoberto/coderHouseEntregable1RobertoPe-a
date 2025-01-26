//ESTO ES NUEVO  getElementById PARA CAPTURAR EL BOTON
const iniciarAlert = document.getElementById('iniciarAlert');

// ESTO TAMBIEN addEventListener Y SE USA PARA REGISTRAR 
//UN EVENTO EN EL BOTON
iniciarAlert.addEventListener('click', function () {
    // Aquí comienza la lógica principal al hacer clic en el botón
    bienvenido(); // Llama a la función de bienvenida
    comienzoPrograma(); // Llama al simulador principal
});

// Tu función de bienvenida
function bienvenido() {
    let nombre = prompt("Ingrese su nombre");
    alert(`Bienvenid@ ${nombre} a Opticas Vision`);
    console.log(`Mostramos el valor capturado: ${nombre}`);
}

//USE ESTA FUNCION PARA Q NO SE ACTIVE AL MOMENTO DE INICIAR LA PAGINA
//SINO PARA DESPUES Q LE CLICK AL BOTON
function comienzoPrograma() {
    // DECLARANDO LAS VARIABLES A UTILIZAR
    let menu;
    // UTILIZARE UN ARRAY PARA ALMACENAR LA INFORMACIÓN MOMENTANEAMENTE
    let recetas = [];
    let nombreIngresoReceta;
    let od;
    let oi;

    // USARE UN DO WHILE PARA MANTENER FUNCIONANDO LA APLICACIÓN
    // HASTA QUE EL CLIENTE DECIDA SALIR
    do {
        // AGREGO UN MINI MENÚ PARA UTILIZAR DIFERENTES OPCIONES
        //ME ASEGURO DE CONVERTIR EN NUMERO LO INGRESADO
        menu = parseInt(prompt('Ingrese una opción:\n 1. Ingresar receta \n 2. Buscar receta \n 3. Mostrar todas las recetas \n 4. Salir'));
        //SERIA MEJOR USAR SWICHT PERO ESTA PRIMERA VERSION SERA CON IF
        if (menu === 1) {
            // INGRESA LOS DATOS
            nombreIngresoReceta = prompt('Ingrese el nombre del Paciente');
            od = prompt('Ingrese Dioptría Ojo Derecho (OD)');
            oi = prompt('Ingrese Dioptría Ojo Izquierdo (OI)');

            // VOY GUARDANDO LOS DATOS EN EL ARRAY CON PUSH
            recetas.push({
                nombre: nombreIngresoReceta,
                od: od,
                oi: oi
            });
            alert('Receta guardada exitosamente');
            console.log(`Valores almacenados:`, recetas);
            //EN EL SUGUNDO MENU BUSCARE AL PACIENTE
        } else if (menu === 2) {
            console.log('Seleccionó "Buscar receta".');
            //ALMACENO EL NOMBRE DEL PACIENTE EN UNA VARIABLE
            let nombreBuscar = prompt('Ingrese el nombre del Paciente');
            //LUEGO LA BUSCO EN EL EL ARRAY CON .FIND
            let recetaEncontrada = recetas.find(receta => receta.nombre === nombreBuscar);
            //SI LA ENCUENTRO IMPRIMO LOS VALORES 
            if (recetaEncontrada) {
                alert(`Receta encontrada:\nNombre: ${recetaEncontrada.nombre}\nOD: ${recetaEncontrada.od}\nOI: ${recetaEncontrada.oi}`);
            } else {
                alert('No se encontró ninguna receta para ese nombre.');
            }
            console.log(`Valores buscados: ${nombreBuscar}`);
            //EL TERCERO MUESTRA LA INFO Q ESTA EN EL ARRAY
        } else if (menu === 3) {
            console.log('Seleccionó "Mostrar todas las recetas".');
            if (recetas.length > 0) {
                console.log('Recetas almacenadas:');
                //LO HAGO HACIENDO UN RECORRIDO POR TODO EL ARRAY Y Q IMPRIMA LO Q ENCUENTRE
                recetas.forEach((receta, index) => {
                    alert(`${index + 1}. Nombre: ${receta.nombre}, OD: ${receta.od}, OI: ${receta.oi}`);
                });
            } else {
                console.log('No se encontraron recetas almacenadas.');
            }
        } else if (menu === 4) {
            console.log('Saliendo del programa...');
        } else {
            console.log('Opción no válida. Intente nuevamente.');
        }
        //MANTENGO FUNCIONANDO LA APLICACIO HASTA Q USUARIO QUIERA SALIR
        //Y TAMBIEN SI OPRIME UN NUMERO Q NO ESTE EN EL MENU
    } while (menu !== 4);

    console.log('Programa finalizado.');
}
