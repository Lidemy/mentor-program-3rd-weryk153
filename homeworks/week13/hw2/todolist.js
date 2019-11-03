/* eslint-disable no-undef */
function getTodoHTML(value) {
  return `
    <li class="list-item">
      <div class="list-item-prepend">
        <div class="btn todo__delete">x</div>
        ${value}
      </div>
      <div class="todo__undone">完成</div>
    </li>`;
}
function addTodo(value) {
  const newTodo = getTodoHTML(value);
  $('.add-todo').val('');
  $('.todo-list').append(newTodo);
}


$('.add-todo').keypress((e) => {
  if (e.key === 'Enter' && e.target.value !== '') {
    addTodo(e.target.value);
  }
});

$('.todo-list').click((e) => {
  const element = $(e.target);
  if (element.hasClass('todo__delete')) {
    element.parent().parent().remove();
  } else if (element.hasClass('todo__undone')) {
    element.parent().addClass('list-item-done');
    element.addClass('todo__done');
    element.removeClass('todo__undone');
    element.text('未完成');
  } else {
    element.addClass('todo__undone');
    element.removeClass('todo__done');
    element.parent().removeClass('list-item-done');
    element.text('完成');
  }
});
