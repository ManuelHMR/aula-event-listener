document.querySelector('.click').addEventListener('click', greenBack)
document.querySelector('.mouseup').addEventListener('mouseup', greenBack)
document.querySelector('.mousedown').addEventListener('mousedown', greenBack)
document
  .querySelector('.dblclick')
  .addEventListener('dblclick', greenBack, false)
// document.querySelector('.keydown').addEventListener('keydown', greenBack)
document.querySelector('.keypress').addEventListener('keypress', greenBack)
// document.querySelector('.keyup').addEventListener('keyup', greenBack)

function greenBack() {
  const button = document.querySelector('.pocButton')
  button.classList.toggle('green')
}
