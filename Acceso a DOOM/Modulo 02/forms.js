const myForm = document.getElementById("formulario")

const a = myForm.querySelector("#username").value // Devuelve el valor que hay en el input username
console.log(a)


//Con esta funcioanlidad podemos cambiar el tipo para que cambie de contraseña a verse
myForm.querySelector("#password").type = "Text"
// Esta funcionalidad es la del ojito para ver o no ver la contraseña
myForm.querySelector("#password").type = "password"

// LOS RADIO BUTTONO CHECKBOX, NO SE PUEDE OBTENER SU VALUE
// SE USA CHECKED y solo da true o false si esta checked o no 
const b = myForm.querySelector("#password")
b.checked = true 