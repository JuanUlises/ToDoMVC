
init();
$('input').keyup(function(e) {
	var todoText = $(this).val();
	if(todoText && e.keyCode===13){
		var trabajos = {
			texto: todoText,
			id:0,
			estado: false
		}
		save(trabajos.texto);
		var nombreTr= trabajos.texto;
		$(this).val('');
		var miArray = getTodos();
		trabajos.id = miArray.indexOf(nombreTr);
		

		//guardar la informacion en localStorage
		
		var inputs = $('<h3><input style="float: left" type="checkbox">').append(trabajos.texto)
		.append('<input type="button" class="btn btn-danger" style="float:right" value="X" onclick="eliminar('+trabajos.id+')">');
		$('.todo-list').append($('<div>').append(inputs));
		
	}
});
function save(todoText){
	var todo = getTodos();
	todo.push(todoText)
	localStorage.setItem('todo',JSON.stringify(todo));
}
//[]
function getTodos(){
	if(!localStorage.todo)
		return [];
	return 	JSON.parse(localStorage.todo);
}

function init(){
	var todo = getTodos();
	var id;
	$('.todo-list').empty();
	$('.Recargar').empty();
	$('.Recargar').append('<a href="index.html"><input id="re" class="btn btn-primary" type="button" value="Recargar"></a>');
	todo.forEach(function(position){
		id= todo.indexOf(position);
		var inputs = $('<h3><input style="float: left" type="checkbox" id="chek">').append(position)
		.append('<input type="button" class="btn btn-danger" style="float:right" value="X" onclick="eliminar('+id+')">');
		$('.todo-list').append($('<div>').append(inputs));
	})
}

function eliminar(id){
	var recuperar = getTodos();
	recuperar.splice(id, 1);
	localStorage.todo=JSON.stringify(recuperar);
	init();
}
		

/*(function id(){
	var miArray= getTodos();
	var texto= miArray[1];
	var nro=miArray.indexOf(texto);
	console.log(nro);
})();
*/