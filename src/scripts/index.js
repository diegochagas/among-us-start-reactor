const loadButton = document.getElementById('loadButton')
const startButton = document.getElementById('startButton')

loadButton.addEventListener('click', () => {
  startReactor.load()
  loadButton.style.display = 'none'
  startButton.style.display = ''
})

startButton.addEventListener('click', () => {
  startReactor.start()
  startButton.style.display = 'none'
})