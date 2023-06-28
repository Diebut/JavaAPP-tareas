// agrego un escucha del evento submit, del documento hacia el formulario agragando una funcion
document.getElementById('formTask').addEventListener('submit', guardarTarea);

function guardarTarea(e){
    let title = document.getElementById('title').value

    let description = document.getElementById('description').value

    console.log(title, description)
   
    // const tarea ={
    //     title, // title: title,
    //     description //description: description

    // };
    // if(localStorage.getItem('tareas') === null){

    //     let tareas =[];
    //     tareas.push(tarea);
    //     localStorage.setItem('tareas', JSON.stringify(tareas));
    // }else{
    //     let tareas = JSON.parse(localStorage.getItem('tareas'));
    //     tareas.push(tarea);
    //     localStorage.setItem('tareas', JSON.stringify(tareas));
    //    }
    //    getTareas();
    //    document.getElementById('formTask').reset(); // reseteo el formulario
    e.preventDefault();
}
