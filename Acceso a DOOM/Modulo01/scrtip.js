console.log(document.body.children[0].innerText)

const bodyChildren = document.body.children
bodyChildren[0].innerText = "Texto nuevo"

// document.body.style.backgroundColor = "tomato"
// document.styleSheets[0].cssRules[0].style.backgroundColor = "red"

let flag = true
const animation = () => {
  if (flag) {
    document.body.style.backgroundColor = "red"
  } else {
    document.body.style.backgroundColor = "blue"
  }
  flag = !flag
}

setInterval(animation, 1000)