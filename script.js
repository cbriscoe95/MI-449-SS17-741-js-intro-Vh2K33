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
})

boomButton.addEventListener ('mouseenter', function(){
  boomSound.play()
})

clapButton.addEventListener ('click', function () {
  clapSound.play()
})

clapButton.addEventListener ('mouseenter', function(){
  clapSound.play()
})

hiHatButton.addEventListener ('click', function () {
  hiHatSound.play()
})

hiHatButton.addEventListener ('mouseenter', function(){
  hiHatSound.play()
})
