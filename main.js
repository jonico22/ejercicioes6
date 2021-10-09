// Datos iniciales
let alumnos = ['Juan Soto', 'Sofía Pérez', 'Miguel Nuñez', 'Pablo Silva'];
let registros = [];
let promedios = [];
let estados = {
"Aprobados": [],
"Desaprobados": []
};

let select = document.getElementById("listAlumnos");
let btn1 =  document.getElementById("addNota");


// Solicitar las notas por alumno
//Aquí va tu código

function GetSelectedValue(){
    let elem = document.getElementById("listAlumnos");
    return elem.options[elem.selectedIndex].value;
}

function GetSelectedText(){
    var e = document.getElementById("listAlumnos");
    return e.options[e.selectedIndex].text;
}

function GetPromedio(a,b){
    return (parseInt(a) + parseInt(b) )/2
   
}

function GetStatus(prom){
    return  Math.round(prom) >= 13 ? 'Aprobado' : 'Desaprobado' ;
}


btn1.addEventListener('click',()=>{
    let persona = GetSelectedValue()
    let txt = GetSelectedText()
    if ( persona !== "") {
        
        let nota1 = prompt(`¿Ingresa la primera nota para ${txt}?` );
        if (nota1 === "") {
            alert ("No puede estar vacio el campo")
            return false
        } 
        let nota2 = prompt(`¿Ingresa la segunda nota para ${txt}?`);
        if (nota2 === "") {
            alert ("No puede estar vacio el campo")
            return false
        } 
      
        registros.push(
            {
                alumno : persona,
                nota1,
                nota2
            }
        )
        
        console.log(registros)
    } else {
        alert('Debe seleccionar un alumno')
    }
})

console.log(registros);
// Obtener los promedios de la lista de registros

function getProm (){
    registros.forEach((value) => { 
       let {alumno,nota1,nota2} = value
       let prom =  GetPromedio(nota1,nota2);
       let status= GetStatus(prom)
        promedios.push(
            {
                alumno : alumno,
                promedio: prom,
                estado: status
            }
        )
    });
    console.log(promedios);
}
//en consola ejecutar la funcion
//Aquí va tu código
console.log(promedios);
//Obtener la lista de cantidad de alumnos aprobados y desaprobados
//Aquí va tu código
function getStatus (){
   
    promedios.forEach((value) => { 
        let { estado, alumno ,promedio} = value
        if (estado === "Aprobado") {
            estados.Aprobados.push({
                alumno, promedio
            })
        } else {
            estados.Desaprobados.push({
                alumno, promedio
            })
        }
    });
    console.log(estados);
}
//en consola ejecutar la funcion

console.log(estados);

function getAlumnos() {
    alumnos.forEach((value) => { 
        let el = document.createElement("option");
        el.textContent = value;
        el.value = value;
        select.appendChild(el);
    });
}

getAlumnos()