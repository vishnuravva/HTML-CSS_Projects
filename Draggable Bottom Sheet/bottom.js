const showModalBtn = document.querySelector('.show-modal')
const bottomSheet = document.querySelector('.bottom-sheet')
const cancel = document.querySelector('.cancel')
function showBottomSheet(){
    bottomSheet.classList.add('show')
}
function removeBottomSheet(){
    bottomSheet.classList.remove('show')

}
cancel.addEventListener('click',removeBottomSheet)
showModalBtn.addEventListener('click',showBottomSheet)