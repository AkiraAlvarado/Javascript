const hideElement = (ev) => {
  const element = ev.target;
  element.style.display = "none"
}

const addBorder = (ev) => {
  const element = ev.target
  element.style.border = "2px solid tomato"
  element.style.cursor = "pointer"
}

const removeBorder = (ev) => {
  const element = ev.target
  element.style.border = ""
}

document.body.addEventListener("click", hideElement)
document.body.addEventListener("mouseover", addBorder)
document.body.addEventListener("mouseout", removeBorder)