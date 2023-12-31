// agrego un escucha del evento submit, del documento hacia el formulario agragando una funcion
document.getElementById('formTask').addEventListener('submit', guardarTarea);

function guardarTarea(e){
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value

   
     const tarea ={
        title, // title: title,
        description //description: description

      };
    // almaceno un arreglo y un objecto dentro localStorage
    if(localStorage.getItem('tareas') === null){

        let tareas =[];
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }else{
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
       }
       getTareas();
       document.getElementById('formTask').reset(); // reseteo el formulario
    e.preventDefault();
}

//creamos una funcion obtener tareas, hace una consulta por localStorage y una vez q obtenga los datos lo muestra por pantalla
function getTareas(params) {
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    let vistaTareas = document.getElementById('task');// ID del index.html

    vistaTareas.innerHTML = ''; //limpiarlo al contenido

    for (let i = 0; i < tareas.length; i++) { //recorriendo las tareas q tenemos en el localStorage
        let title = tareas[i].title;
        let description = tareas[i].description;
        //cada tarea q recorra +- se va guardando dentro del vistaTarea y muestra en pantalla.
        vistaTareas.innerHTML += `<div class="card mb-3"> 
        <div class="card-body">
            <p>${title} - ${description}</p>
            <a class="btn btn-danger" onclick="deleteTareas('${title}')">
                DELETE
            </a>
        </div>
    </div>`
    
   }
        
    
}
function deleteTareas(title){
    let tareas = JSON.parse(localStorage.getItem('tareas'));

    for (let i = 0; i < tareas.length; i++) { //recorro las tareas en el localStorage
        if (tareas[i].title == title) { // si existe
            tareas.splice(i, 1); //splice se encarga de quitar un dato en q indice
        }
        
    }
    localStorage.setItem('tareas', JSON.stringify(tareas)); //volver almacenarlo para verlo en la interfaz
    getTareas();
}
getTareas();
