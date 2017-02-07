var boomButton = document.getElementById('boom-button')

boomButton.addEventListener('click', function () {
  console.log('Boom click!')
})

boomButton.addEventListener('mouseenter', function(){
  console.log('Boom Mouseover')
})

var clapButton = document.getElementById('clap-button')
clapButton.addEventListener('click', function () {
  console.log('Clap!')
})

clapButton.addEventListener('mouseenter', function(){
  console.log('Clap Mouseover')
})

var hiHatButton = document.getElementById('hi-hat-button')
hiHatButton.addEventListener('click', function () {
  console.log('Whatever sound a hi hat makes!')
})

hiHatButton.addEventListener('mouseenter', function(){
  console.log('Hi Hat Mouseover')
})
