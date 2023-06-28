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
    
    e.preventDefault();
}

//creamos una funcion obtener tareas, hace una consulta por localStorage y una vez q obtenga los datos lo muestra por pantalla
function getTareas(params) {
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    let vistaTareas = document.getElementById('task');// ID del index.html

    vistaTareas.innerHTML = ''; //limpiarlo al contenido

    for (let i = 0; i < tareas.length; i++) { //recorriendo las tareas q tenemos en el localStorage
        console.log(tareas[i])
        
    }
}
getTareas();