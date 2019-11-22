/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
$(document).ready(() => {
  $('.add-todo').keypress((e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      addTodo();
    }
  });

  $('.todo-list').on('click', '.btn-mark', function () {
    $(this).parent().toggleClass('list-item-done');
    $(this).toggleClass('todo__undone').toggleClass('todo__done');
    $(this).text($(this).hasClass('todo__undone') ? '完成' : '未完成');
  });

  $('.todo-list').on('click', '.todo__delete', function () {
    $(this).parent().parent().remove();
    console.log($(this));
  });
});

function addTodo(value) {
  const text = $('.add-todo').val();
  const list = [];
  list.push(value);
  $('.todo-list').append(`
    <li class="list-item">
      <div class="list-item-prepend">
        <div class="btn todo__delete">x</div>
        ${text}
      </div>
      <div class="btn todo__undone btn-mark">完成</div>
    </li>
  `);
  $('.add-todo').val('');
}
