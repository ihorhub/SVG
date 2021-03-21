const gearIcon = new Vivus('gears', {
  type: 'delayed',
  duration: 200,
})
function playGears() {
  gearIcon.stop().reset().play()
}
