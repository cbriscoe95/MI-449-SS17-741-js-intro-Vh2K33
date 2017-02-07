// HTML buttons
var boomButton = document.getElementById('boom-button')
var clapButton = document.getElementById('clap-button')
var hiHatButton = document.getElementById('hi-hat-button')

// Sound files
var boomSound = document.getElementById('boom-sound')
var clapSound = document.getElementById('clap-sound')
var hiHatSound = document.getElementById('hi-hat-sound')

boomButton.addEventListener ('click', function(){
  boomSound.play()
  console.log('Boom click!')
})

boomButton.addEventListener ('mouseenter', function(){
  boomSound.play()
  console.log('Boom Mouseover')
})

clapButton.addEventListener ('click', function () {
  clapSound.play()
  console.log('Clap!')
})

clapButton.addEventListener ('mouseenter', function(){
  clapSound.play()
  console.log('Clap Mouseover')
})

hiHatButton.addEventListener ('click', function () {
  hiHatSound.play()
  console.log('Whatever sound a hi hat makes!')
})

hiHatButton.addEventListener ('mouseenter', function(){
  hiHatSound.play()
  console.log('Hi Hat Mouseover')
})
