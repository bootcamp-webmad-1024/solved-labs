const DURATION = 10
let remainingTime = DURATION
let timer = null

const startButton = document.getElementById("start-btn")
startButton.addEventListener("click", startCountdown)

function startCountdown() {

  startButton.disabled = true

  const timeTag = document.getElementById("time")

  timer = setInterval(() => {
    remainingTime--
    timeTag.innerText = remainingTime
    if (remainingTime === 0) {
      clearInterval(timer)
      showToast('Finished!')
    }
  }, 200)
}



function showToast(message) {

  const toast = document.getElementById("toast")
  const toastText = document.querySelector('#toast-message')
  toastText.textContent = message

  toast.classList.add("show")

  setTimeout(() => {
    toast.classList.remove("show")
    startButton.disabled = false
  }, 3000)
}