/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
let list = [];
let n = 1;
$(document).ready(() => {
  $('.add-todo').keypress((e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const text = {
        id: n,
        content: $('.add-todo').val(),
        isCompleted: false,
      };
      addTodo(text);
    }
  });

  $('.todo-list').on('click', '.btn-mark', function () {
    // 找出被點擊元素的 id，然後改 isCompleted 的值
    const listId = $(this).parent().attr('id');
    list = list.filter((item) => {
      if (item.id === Number(listId)) {
        // eslint-disable-next-line no-param-reassign
        item.isCompleted = !item.isCompleted;
        return true;
      }
      return true;
    });
    render();
  });

  $('.todo-list').on('click', '.todo__delete', function () {
    const deletedId = $(this).parent().parent().attr('id');
    removeTodo(deletedId);
  });
});

function addTodo(text) {
  list.push(text);
  $('.add-todo').val('');
  render();
  n += 1;
}

function removeTodo(id) {
  list = list.filter(item => item.id !== Number(id));
  render();
}

function render() {
  $('.todo-list').empty();
  list.forEach((el) => {
    const badgeClass = el.isCompleted ? 'list-item-done' : '';
    const todoStatus = el.isCompleted ? 'todo__done' : 'todo__undone';
    const badgeText = el.isCompleted ? '未完成' : '完成';
    $('.todo-list').append(`
    <li id=${el.id} class="list-item ${badgeClass}">
      <div class="list-item-prepend">
        <div class="btn todo__delete">x</div>
        ${el.content}
      </div>
      <div class="btn ${todoStatus} btn-mark">${badgeText}</div>
    </li>`);
  });
}
