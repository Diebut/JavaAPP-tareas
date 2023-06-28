// agrego un escucha del evento submit, del documento hacia el formulario agragando una funcion
document.getElementById('formTask').addEventListener('submit', guardarTarea);

function guardarTarea(e){
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value

   
     const tarea ={
        title, // title: title,
        description //description: description

      };
      //alamceno dentro del localStorage en consola y application y adentro estan los datos almacenados
      localStorage.setItem('tareas', tarea);
      
  
    e.preventDefault();
}
