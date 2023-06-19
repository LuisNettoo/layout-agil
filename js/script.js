const buttonDay = document.querySelector(".button-day");
const buttonNight = document.querySelector(".button-night");

const formDay = document.querySelector(".form-day");
const formNight = document.querySelector(".form-night");

const buttonSubmit = document.querySelector("button[type=submit]")
const newTaskDay = document.querySelector("#new-task-day")
const newTaskNight = document.querySelector("#new-task-night")

const listDay = document.querySelector(".list-day")
const listNight = document.querySelector(".list-night")

const createTaskDay = (text) => {
  const task = document.createElement("li")
  task.textContent = text
  listDay.appendChild(task)
}

const createTaskNight = (text) => {
  const task = document.createElement("li")
  task.textContent = text
  listNight.appendChild(task)
}


buttonDay.addEventListener("click", () => {
  buttonDay.style.display = 'none'
  formDay.style.display = "block"
})

buttonNight.addEventListener("click", () => {
  buttonNight.style.display = 'none'
  formNight.style.display = "block"
})

formDay.addEventListener("submit", (event) => {
  event.preventDefault();

  buttonDay.style.display = "block"
  formDay.style.display = "none"

  createTaskDay(newTaskDay.value)

  newTaskDay.value = ""
})

formNight.addEventListener("submit", (event) => {
  event.preventDefault();

  buttonNight.style.display = "block"
  formNight.style.display = "none"

  createTaskNight(newTaskNight.value)

  newTaskNight.value = ""
})