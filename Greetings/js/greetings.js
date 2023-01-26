'use strict'

function sayHello() {
    //Declare variables
    const greetings = document.getElementById("greetings")
    const sorry = document.getElementById("sorry-text")
    const reset = document.getElementById("reset-btn")
    let firstname = document.getElementById("name").value

    
    //Append html
    greetings.innerText = "Greetings " + firstname + "!"
    theForm.className = "hide"
    sorry.innerText = "I knew that..."
    reset.classList.toggle("hide")
}
//end function

function reset() {
    window.location.reload()
}

//Add event listeners
document.getElementById("submit-btn").addEventListener("click", sayHello)
document.getElementById("reset-btn").addEventListener("click", reset)

//Prevent form submit
document.getElementById("submit-btn").addEventListener("click", function(event){
    event.preventDefault()
})


