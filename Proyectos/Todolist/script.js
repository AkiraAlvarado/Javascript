const input = document.getElementById("input")
const urgentColumn = document.getElementById("urgent-column")
const aplazableColumn = document.getElementById("aplazable-column")
const tipoTarea = document.getElementById("tipoTarea");
const botonEnter = document.getElementById("button-add")
const buttonAplazable = "aplazable"
const buttonurgent = "urgent"
const check = "fa-circle-check"
const uncheck = "fa-circle"
let id = 0
const agregarTarea = () => {
  const tarea = tipoTarea.value
  const text = input.value
  let typeofButton
  if (!text.trim()) {
    alert("Por favor, ingrese una tarea.");
    return;
  }
  if (tarea === "aplazable") {
    typeofButton = buttonAplazable
    column = "aplazableColumn"
  } else if (tarea === "urgent") {
    typeofButton = buttonurgent
    column = "urgentColumn"
  }

  const container = document.createElement("div")
  container.classList.add("task")

  container.innerHTML = `<div id="${id}" class="task-display">
                            <i class="${typeofButton} fa-solid fa-circle"></i>
                            <p class="text">${text}</p>
                          </div>
                          <div class="task-display">
                              <i data="eliminar" class=" fa-solid fa-trash"></i>
                              <i data="completar" class="fa-regular ${uncheck}"></i>
                          </div>`
  if (tarea === "urgent") {
    urgentColumn.appendChild(container)
  } else if (tarea === "aplazable") {
    aplazableColumn.appendChild(container)
  }
  input.value = ""
}

botonEnter.addEventListener("click", () => {
  agregarTarea()
  id++
})

const eliminarTarea = element => {
  element.closest('.task').remove()
}

const completarTarea = element => {
  if (element.classList.contains(check)) {
    element.classList.remove(check);
    element.classList.add(uncheck);
  } else {
    element.classList.remove(uncheck);
    element.classList.add(check);
  }

  element.parentNode.parentNode.querySelector(".text").classList.toggle("line")
}

urgentColumn.addEventListener('click', event => {
  const element = event.target
  const elementData = element.attributes.data.value


  if (elementData == 'eliminar') {
    eliminarTarea(element)
  }
  else if (elementData == 'completar') {
    element.classList.remove("fa-circle")
    completarTarea(element)
  }
})

aplazableColumn.addEventListener('click', event => {
  const element = event.target
  const elementData = element.attributes.data.value

  if (elementData == 'eliminar') {
    eliminarTarea(element)
  }
  else if (elementData == 'completar') {
    completarTarea(element)
  }
})

