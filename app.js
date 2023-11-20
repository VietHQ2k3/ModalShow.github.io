var open__modal = document.querySelector('.open__modal')
var iconclose = document.querySelector('.modal__header i')
var Close = document.querySelector('.modal__footer button ')
var modal = document.querySelector('.modal')

function toggleModal(){
    modal.classList.toggle('hide')
}

function Modal(){
    modal.classList.toggle('modal')
}

open__modal.addEventListener('click',toggleModal)
iconclose.addEventListener('click',toggleModal)
Close.addEventListener('click',toggleModal)

