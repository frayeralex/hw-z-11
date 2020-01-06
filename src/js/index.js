const form = document.getElementById('form');
const list = document.getElementById('todo-list');
const input = document.getElementById('todo-text');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    console.log(input);
    console.dir(input);

    const item = document.createElement('li');
    //add attribute
    // item.setAttribute('class', 'foo');
    // classList
    // item.classList.remove('foo');
    // item.classList.add('bar');
    item.classList.add('todo-item');

    if (input.value.length >= 10) {
        item.classList.add('--large');
    }

    if (input.value.includes('foo')) {
        item.classList.add('--foo');
    }

    const span = document.createElement('span');
    span.classList.add('item-content');

    const editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    editInput.classList.add('edit-input');

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'X';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', handleRemoveBtnClick);

    const editBtn = document.createElement('button');
    editBtn.innerText = 'edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', handleEditBtnClick);

    const editBtnSubmit = document.createElement('button');
    editBtnSubmit.innerText = 'Submit';
    editBtnSubmit.classList.add('submit-btn');
    editBtnSubmit.addEventListener('click', handleEditBtnSubmmitClick);

    span.innerText = input.value;
    editInput.value = input.value;
    input.value = '';

    item.appendChild(span);
    item.appendChild(editBtn);
    item.appendChild(removeBtn);
    item.appendChild(editInput);
    item.appendChild(editBtnSubmit);

    list.appendChild(item);
}

function handleRemoveBtnClick(event) {
    list.removeChild(event.target.parentElement);
}

function handleEditBtnClick(event) {
    event.target.parentElement.classList.add('edit-mode');
}

function handleEditBtnSubmmitClick(event) {
    const item = event.target.parentElement;
    const input = item.querySelector('input.edit-input');
    const span = item.querySelector('span.item-content');
    span.innerHTML = input.value;
   item.classList.remove('edit-mode');

}