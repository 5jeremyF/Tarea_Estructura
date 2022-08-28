alert("A continuacion dele click en Aceptar para ver el contenido")
const contenido = document.getElementById("contenido");
let nombre = "FRANCISCO JEREMY ROBLES MIRANDA";
let edad = 19;

let edades =[23,45,2,42,89,55];

addContent(`<h2>${nombre}</h2><h3>${edad}</h3>`);


for(let i = 0; i<edades.length; i++){
    addContent(`<h3>la edad es de ${edades[i]} años</h3>` );
}


//for(let i = 6; i<=10; i++){
//    addContent(`<h3>la edad es de ${i} años</h3>` );`<h3>la edad es de ${i}</h3>` ;
//}


function addContent(newContent){
    contenido.innerHTML += newContent;
}
//let condition = true; 

//if(edad > 18){
    //alert("puedes ingresar");
//}else if(edad>13){
    //alert("puedes entrar con un adulto");
//}else{
    //alert("no puedes entrar");
//}

//const COLOR_ROJO = "#FF000";

//let resultado = "nombre: " + nombre;

//console.log(nombre);

//alert("Nombre: "+ nombre);

//nombre = "Valeria Cuenca";

//console.log(nombre);


//alert( nombre);