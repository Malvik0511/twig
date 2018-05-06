$('document').ready(function(){	
	let currentTaskId = '';
	let input = $(".todo__input");
	let acceptBtn = $('.todo__accept-task');
	let clearInpBtn = $('.todo__clear-input');
	let defaultContainer = $('.todo__task-container')[0];
	//console.log(defaultContainer);
	let lastTaskNumber = $('.todo__task-container').length;
	let list = $(".todo__todo-list");

	$(".todo__delete-task").on('click', function(){
		$(this).closest('.todo__task-container').remove();
	})

	$(".todo__edit-task").on('click', function(){
		currentTaskId = '#' + $(this).closest('.todo__task-container').attr('id');
		let text = $(currentTaskId).find('.todo-task').text();
		$(input).focus().val(text);
	})

	$(clearInpBtn).on("click", clearInput);
	$(acceptBtn).on("click", acceptTask);

	function clearInput(){
		$(input).val('');
		let currentTaskId = '';
	}

	function acceptTask(){
		let task = $(input).val();
		if (task === "" ) return;
		else if (currentTaskId){
			$(currentTaskId).find('.todo-task').text(task);
		}
		else{
			lastTaskNumber += 1;
			let template = $(defaultContainer).clone(true).attr('id', `task-${lastTaskNumber}`).
				find('.todo-index').text(lastTaskNumber).end().find('.todo-task').text(task).end();
			$(list).append(template);
		}
		clearInput();
	}










})