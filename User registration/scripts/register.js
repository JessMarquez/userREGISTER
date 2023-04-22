let estudiantes=[];
//crear constructor
let contador =0;
function Estudiante (nombreP, correoP, sexoP, campusP, calificacionAp, calificacionBp, calificacionCp){
    this.nombre=nombreP;
    this.correo=correoP;
    this.sexo=sexoP;
    this.campus=campusP;
    this.calificacionA=calificacionAp;
    this.calificacionB=calificacionBp;
    this.calificacionC=calificacionCp;
    this.id=contador++;

}

//valor de los inputs
function registrar() { 
    console.log("Registrando nuevo alumno");
let inputNombre=document.getElementById("txtNombre").value;
let inputCorreo=document.getElementById("txtCorreo").value;
let inputSexo=document.getElementById("selSexo").value;
let inputCampus=document.getElementById("selCampus").value;
let inputCalificacionA=document.getElementById("txtCalificacionA").value;
let inputCalificacionB=document.getElementById("txtCalificacionB").value;
let inputCalificacionC=document.getElementById("txtCalificacionC").value;

    //crear objeto newalumno
let newalumno=new Estudiante(inputNombre, inputCorreo, inputSexo, inputCampus, inputCalificacionA, inputCalificacionB, inputCalificacionC);

console.log(newalumno);
estudiantes.push(newalumno);
imprimirAlumnos();
limpiar();

}
// crear función registrar
function validacion(Alumno){
    let valida=true;  // todo bien
    inputNombre.classList.remove("error");
    inputNombre.classList.remove("error");

if(Alumno.nombre == ""){//Comparación (Utilizar == > < >= <= !=)
    //si entro aqeí no es válida la mascota
    inputNombre.classList.add= ("error");
    console.log("error");
    valida=false;
 }
 if (Alumno.nombre== ""){ 
    inputNombre.classList.add("error");
    console.log("Error, debe escribir un nombre");
    alert("La captura del SERVICIO es obligario");
    valida=false
}
 }

function imprimirAlumnos(){
    let row="";
    for(let i=0; i<estudiantes.length; i++){
        let estudiante= estudiantes[i];
        row +=` 
        <tr id="${estudiante.id}">
            <td> ${estudiante.nombre}</td>
            <td> ${estudiante.calificacionA}</td>
            <td> ${estudiante.calificacionB}</td>
            <td> ${estudiante.calificacionC}</td>
            <td> ${(Number (estudiante.calificacionA)+ Number (estudiante.calificacionB)+ Number (estudiante.calificacionC))/3}</td>
            <TD><button class="btn btn-danger btn-sm"onclick="borrarAlumno(${estudiante.id});">Borrar</button></td>

        </tr>
        ` ;
    }
    document.getElementById("alumnosTabla").innerHTML= row;
}
function limpiar (){
    document.getElementById("txtNombre").value="";
    document.getElementById("txtCorreo").value="";
    document.getElementById("txtCalificacionA").value="";
    document.getElementById("txtCalificacionB").value="";
    document.getElementById("txtCalificacionC").value="";
    document.getElementById("selCampus").value="";
    document.getElementById("selSexo").value="";

}
function borrarAlumno(identificador){
    document.getElementById(identificador).remove();
    estudiantes.splice(identificador,1);  
}

function init() { 
    //CONSTRUCTOR ESTUDIANTE
let newalumno= new Estudiante("jose", "jose@uabc.edu.mx", "M", "Mexicali",90,100,99);
  estudiantes.push(newalumno);
  imprimirAlumnos(); 
 }

// crear función inil
 


// ejecutar funcion init
window.onload=init;
// ejecución cuando renderiza el HTML