let bdAlumnos = []
let bdGrupos = []

document.getElementById("btnAlumnos").addEventListener("click", function() {
    document.getElementById("btnConsultaal").style.display = "block";
    document.getElementById("btnAlta").style.display = "block";
    document.getElementById("btnlistadoAl").style.display = "block";
    document.getElementById("btnCreargrupo").style.display = "none";
    document.getElementById("btnPromgpo").style.display = "none";
    document.getElementById("altaAl").style.display = "none";
    document.getElementById("altaMateria").style.display = "none";
    document.getElementById("calificar").style.display = "none";
    document.getElementById("promedioAlumno").style.display = "none";
    document.getElementById("crearGrupo").style.display = "none";
    document.getElementById("asignarGrupo").style.display = "none";
    document.getElementById("consultaAlumno").style.display = "none";
    document.getElementById("promedioGrupo").style.display = "none";
    document.getElementById("listaAlumnos").style.display = "none";
    document.getElementById("listadoAlumnos").style.display = "none";
    document.getElementById("infoAlumno").style.display = "none"
    document.getElementById("accionesAlumno").style.display = "none";
    const listaContainer2 = document.getElementById('grupoAlumno');
    const listaContainer = document.getElementById('listaAlumno');
    const listaContainer3 = document.getElementById('promedio');
    listaContainer2.innerText = ("");
    listaContainer.innerText = ("")
    listaContainer3.innerText = ("")
    
});

document.getElementById("btnGrupos").addEventListener("click", function() {
    document.getElementById("btnAlta").style.display = "none";
    document.getElementById("btnConsultaal").style.display = "none";
    document.getElementById("btnlistadoAl").style.display = "none";
    document.getElementById("btnCreargrupo").style.display = "block";
    document.getElementById("btnPromgpo").style.display = "block";
    document.getElementById("altaAl").style.display = "none";
    document.getElementById("altaMateria").style.display = "none";
    document.getElementById("calificar").style.display = "none";
    document.getElementById("promedioAlumno").style.display = "none";
    document.getElementById("crearGrupo").style.display = "none";
    document.getElementById("asignarGrupo").style.display = "none";
    document.getElementById("consultaAlumno").style.display = "none";
    document.getElementById("listaAlumnos").style.display = "none";
    document.getElementById("listadoAlumnos").style.display = "none";
    document.getElementById("infoAlumno").style.display = "none"
    document.getElementById("accionesAlumno").style.display = "none";
    const listaContainer2 = document.getElementById('grupoAlumno');
    const listaContainer = document.getElementById('listaAlumno');
    const listaContainer3 = document.getElementById('promedio');
    listaContainer2.innerText = ("");
    listaContainer.innerText = ("")
    listaContainer3.innerText = ("")
});

document.getElementById("btnAlta").addEventListener("click", function() {
    document.getElementById("altaAl").style.display = "block";
    document.getElementById("consultaAlumno").style.display = "none";
    document.getElementById("listaAlumnos").style.display = "none";
    document.getElementById("listadoAlumnos").style.display = "none";
});

document.getElementById("btnConsultaal").addEventListener("click", function() {
    document.getElementById("altaAl").style.display = "none";
    document.getElementById("btnlistadoAl").style.display = "block";
    document.getElementById("consultaAlumno").style.display = "block";
    document.getElementById("listaAlumnos").style.display = "none";
    document.getElementById("btnAlta").style.display = "block";
    document.getElementById("listadoAlumnos").style.display = "none";
    document.getElementById("accionesAlumno").style.display = "none";
    document.getElementById('nombre6').value = "";
    document.getElementById('apellido6').value = "";
    
});

document.getElementById("btnlistadoAl").addEventListener("click", function() {
    document.getElementById("listaAlumnos").style.display = "block";
    document.getElementById("consultaAlumno").style.display = "none";
    document.getElementById("altaAl").style.display = "none";
});

document.getElementById("btnCreargrupo").addEventListener("click", function() {
    document.getElementById("crearGrupo").style.display = "block";
    document.getElementById("promedioGrupo").style.display = "none";
    document.getElementById("listadoAlumnos").style.display = "none";

});


document.getElementById("btnPromgpo").addEventListener("click", function() {
    document.getElementById("crearGrupo").style.display = "none";
    document.getElementById("promedioGrupo").style.display = "block";
    document.getElementById("listadoAlumnos").style.display = "none";

});

document.getElementById("administrar").addEventListener("click", function() {
    let nombre6= document.getElementById('nombre6').value;
    let apellido6 = document.getElementById('apellido6').value;
    

        for(let i = 0; i< bdAlumnos.length; i++)
            {
                if (nombre6 == bdAlumnos[i].nombre || apellido6 ==  bdAlumnos[i].apellido)
                {
                    document.getElementById("btnAlta").style.display = "none";
                    document.getElementById("altaAl").style.display = "none";
                    document.getElementById("altaMateria").style.display = "block";
                    document.getElementById("calificar").style.display = "block";
                    document.getElementById("promedioAlumno").style.display = "block";
                    document.getElementById("asignarGrupo").style.display = "block";
                    document.getElementById("crearGrupo").style.display = "none";
                    document.getElementById("btnlistadoAl").style.display = "none";
                    document.getElementById("infoAlumno").style.display = "block";
                    document.getElementById("consultaAlumno").style.display = "flex";
                    document.getElementById("accionesAlumno").style.display = "grid";
                    if(bdAlumnos[i].promedio){
                        calcPromedio()
                        }
                        else{
                            let contenedorPromedio = document.getElementById('promedio');
                    contenedorPromedio.innerText = ("")
                        }
                }
            }

});




class Alumno {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.materias = [];
        this.calificaciones = []; 
        this.promedio;
        this.grupo = "";
    }


    inscribirAlumno(materia){
        this.materias.push(materia)
        alert("Inscripcion exitosa, revise lista de alumnos para confirmar")
    }

    asignarCalificacion(materia, calificacion){
        this.calificaciones.push({materia: materia, calificacion: calificacion})
        let suma = 0;
        let promedio = 0
        for(let i = 0; i< this.calificaciones.length; i++)
        {
            suma += Number(this.calificaciones[i].calificacion);
        }
        this.promedio = suma / this.calificaciones.length;
        alert("Calificacion asignada con exito, la informacion del alumno ha sido actualizada")
        calcPromedio()
    }

    calcularPromedio(){
        
        let contenedorPromedio = document.getElementById('promedio');
    contenedorPromedio.innerText = ("")
    contenedorPromedio.innerText = (this.promedio.toFixed(1))
        return this.promedio
    }
}



function crearAlumno() {
    // Obtener los valores del formulario
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = parseInt(document.getElementById('edad').value);

    // Crear el objeto utilizando la clase Persona
    const alumno = new Alumno(nombre, apellido, edad);

    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('edad').value = "";

    // Mostrar el objeto en la consola (solo para fines de demostración)
    bdAlumnos.push(alumno)
    console.log(bdAlumnos);
    alert("Alta de alumno exitosa, consulte la lista de alumnos para confirmar")
    }

function inscribirMateria() {
        // Obtener los valores del formulario
    let nombre2= document.getElementById('nombre6').value;
    let apellido2 = document.getElementById('apellido6').value;
    let materia = document.getElementById('materia').value;

    for(let i = 0; i< bdAlumnos.length; i++)
        {
            if (nombre2 == bdAlumnos[i].nombre && apellido2 ==  bdAlumnos[i].apellido){
                bdAlumnos[i].inscribirAlumno(materia)
            }
    }
        

    document.getElementById('materia').value = "";
    
        // Mostrar el objeto en la consola (solo para fines de demostración)
    console.log(bdAlumnos);
        
    }

    function calificar() {
        // Obtener los valores del formulario
    let nombre3= document.getElementById('nombre6').value;
    let apellido3 = document.getElementById('apellido6').value;
    let materia2 = document.getElementById('materia2').value;
    let calificacion = document.getElementById('calificacion').value;

    for(let i = 0; i< bdAlumnos.length; i++)
        {
            if (nombre3 == bdAlumnos[i].nombre && apellido3 ==  bdAlumnos[i].apellido){
                bdAlumnos[i].asignarCalificacion(materia2, calificacion)
            }
    }
    document.getElementById('materia2').value = "";
    document.getElementById('calificacion').value = "";
    
        // Mostrar el objeto en la consola (solo para fines de demostración)
    console.log(bdAlumnos);
    consultaAlumno()    
    }

    function calcPromedio(){
    let nombre4= document.getElementById('nombre6').value;
    let apellido4 = document.getElementById('apellido6').value;
    for(let i = 0; i< bdAlumnos.length; i++)
        {
            if (nombre4 == bdAlumnos[i].nombre && apellido4 ==  bdAlumnos[i].apellido){
                bdAlumnos[i].calcularPromedio()
            }
    }
    }

    
    function consultaAlumno(){
        let nombre6= document.getElementById('nombre6').value;
        let apellido6 = document.getElementById('apellido6').value;
        let verificador = false;
        let indice;
        if(bdAlumnos.length == 0){
    
            verificador = false;
        
        }
        else{
        for(let i = 0; i< bdAlumnos.length; i++)
            {
                if (nombre6 == bdAlumnos[i].nombre || apellido6 ==  bdAlumnos[i].apellido)
                {
                    verificador = true;
                    indice = i;
                }
        }   

    }

    if(verificador === true){
        const listaContainer2 = document.getElementById('grupoAlumno');
                const listaContainer = document.getElementById('listaAlumno');
                listaContainer2.innerText = (`Grupo: ${bdAlumnos[indice].grupo} \n\n Materias y calificaciones \n`);
                listaContainer.innerText = ("")
    // Iterar sobre las propiedades del objeto y agregarlas como elementos de lista (li)
                for (let j in bdAlumnos[indice].calificaciones)
                    {
                    listaContainer.innerText += (`${bdAlumnos[indice].calificaciones[j].materia}: ${bdAlumnos[indice].calificaciones[j].calificacion} \n`);

                    }
                    if(bdAlumnos[indice].promedio){
                        calcPromedio()
                    }
                    else{
                        document.getElementById('promedio').value = "";
                    }
    }

    else{
        alert("El alumno indicado no esta dado de alta")
        document.getElementById('nombre6').value = "";
        document.getElementById('apellido6').value = "";
    }

    }


    class Grupo {
        constructor(nombre){
            this.nombre = nombre;
            this.alumnos = [];
            this.promedioGpo;
        }

    agregarAlumno(alumno){
        this.alumnos.push(alumno);
        alert("El grupo ha sido asignado con exito")
    }

    calcularPromgpo(){
        let suma = 0;
        for(let i = 0; i< this.alumnos.length; i++)
        {
            suma += Number(this.alumnos[i].promedio);
        }
        this.promedioGpo = suma / this.alumnos.length;
        if(this.promedioGpo){
            let contenedorPromediogpo = document.getElementById('promedioGpo');
        contenedorPromediogpo.innerText = ("")
        contenedorPromediogpo.innerText = (this.promedioGpo.toFixed(1))
        return this.promedioGpo
            
        }
        else{
            alert("No hay promedio aun")
        }
    }
    }

    function crearGpo(){
            // Obtener los valores del formulario
            let nombreGrupo = document.getElementById('nomgpo').value;
            verificador = false;
            if(bdGrupos.length == 0){
                const grupo = new Grupo(nombreGrupo);
                document.getElementById('nomgpo').value = "";
                bdGrupos.push(grupo)
                alert("Grupo creado con exito")
                console.log(bdGrupos)
            }
            else{
            for(let i = 0; i< bdGrupos.length; i++)
                {
                    if(bdGrupos[i].nombre == nombreGrupo)
                        {
                            verificador = true;
                        }
                }
            
            if(verificador == true){
                alert("Este grupo ya existe, intenta con otro nombre")
                document.getElementById('nomgpo').value = "";
            }

            else{
                const grupo = new Grupo(nombreGrupo);
                document.getElementById('nomgpo').value = "";
                bdGrupos.push(grupo)
                alert("Grupo creado con exito")
                console.log(bdGrupos)
            }
        }
            
            }
                

    
        
function asignarGrupo(){
    let nombre5= document.getElementById('nombre6').value;
    let apellido5 = document.getElementById('apellido6').value;
    let nomgpo2 = document.getElementById('nomgpo2').value;
    let verificador = false;
    let indice;
    let indice2;

    if(bdGrupos.length ==0){
        verificador = false;
    }
    else{
        for(let i = 0; i< bdAlumnos.length; i++)
            {
                if (nombre5 == bdAlumnos[i].nombre && apellido5 ==  bdAlumnos[i].apellido){
                    indice2 = i;
                    for(let j = 0; j < bdGrupos.length; j++)
                        {
                            if(nomgpo2 == bdGrupos[j].nombre)
                                
                                {
                                    verificador = true;
                                    indice = j;
                                }
                        }
    }
            }
        }
            
        if(verificador == true){

                    bdAlumnos[indice2].grupo = nomgpo2;
                    bdGrupos[indice].agregarAlumno(bdAlumnos[indice2])
                    verificador = false;
                    
                }
            else
                {
                    alert("El grupo indicado no existe, primero debe crearlo en la seccion de Administrar Grupos")
                }
            


        
    document.getElementById('nomgpo2').value = "";
    
        // Mostrar el objeto en la consola (solo para fines de demostración)
    console.log(bdGrupos);
    console.log(bdAlumnos);
    consultaAlumno() 
}

    function calcPromgpo(){
    let nomgpo3= document.getElementById('nomgpo3').value;
    let indice = 0;
    let verificador = false;
    for(let i = 0; i< bdGrupos.length; i++)
        {
            if (nomgpo3 == bdGrupos[i].nombre){
                verificador = true;
                indice = i;
            }
    }

    if(verificador == false){
        alert("No hay promedio de Grupo o no existe el Grupo")
    }
    else{
        bdGrupos[indice].calcularPromgpo()
    }
    }

    function mostrarAlumnos(){
        document.getElementById("listadoAlumnos").style.display = "block";

        const listainscritos = document.getElementById('listadoAlumnos');

        if(bdAlumnos == 0){
            alert("No existen alumnos inscritos")
            console.log(bdAlumnos)
        }
        else{
        const copiaBdalumnos = bdAlumnos;

        const arrayAlumnos = Object.values(copiaBdalumnos);
        arrayAlumnos.sort((a,b) => a.promedio - b.promedio);


        listainscritos.innerText = ("")

        for(let i = 0; i< arrayAlumnos.length; i++)
            {
                if(!arrayAlumnos[i].promedio)
                    {
                        if(!arrayAlumnos[i].grupo)
                            {
                                listainscritos.innerText += (`${arrayAlumnos[i].nombre} ${arrayAlumnos[i].apellido}: Sin calificaciones | Grupo: Sin grupo asignado \n`);
                            }
                        else{
                            listainscritos.innerText += (`${arrayAlumnos[i].nombre} ${arrayAlumnos[i].apellido}: Sin calificaciones | Grupo: ${arrayAlumnos[i].grupo} \n`);
                        }
                    
                    }
                else if(!arrayAlumnos[i].grupo)
                {
                    listainscritos.innerText += (`${arrayAlumnos[i].nombre} ${arrayAlumnos[i].apellido}: ${arrayAlumnos[i].promedio} | Grupo: Sin grupo asignado\n`);
                }

                else{
                    listainscritos.innerText += (`${arrayAlumnos[i].nombre} ${arrayAlumnos[i].apellido}: ${arrayAlumnos[i].promedio} | Grupo: ${arrayAlumnos[i].grupo}\n`);
                }


            }
        }
        }   