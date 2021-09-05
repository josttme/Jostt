let burgerAnimate = document.getElementById('nav-icon3')
let navhidde = document.getElementById('navhidde')

burgerAnimate.addEventListener('click', () => {
  burgerAnimate.classList.toggle('open')
  navhidde.classList.toggle('navhidde')
})