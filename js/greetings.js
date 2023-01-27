function sayHello() {
    //Declare variables
    const greetings = document.getElementById("greetings");
    const sorry = document.getElementById("sorry-text");
    const reset = document.getElementById("reset-btn");
    const firstname = document.getElementById("name").value;
    const nameInput = document.getElementById("name");
    const nameLabel = document.getElementById("name-label");

    if (firstname == "") {
        nameLabel.className = "error";
        greetings.innerText = "😡";
        sorry.innerText = "Don't mess with me.";
        nameInput.className = "input-error";
    }

    else{
  
    //Append html
    greetings.innerText = "Greetings " + firstname + "!";
    theForm.className = "hide";
    sorry.innerText = "I knew that...";
    reset.classList.toggle("hide");
    }
}
//end function

function reset() {
    window.location.reload();
}

//Add event listeners
document.getElementById("submit-btn").addEventListener("click", sayHello);
document.getElementById("reset-btn").addEventListener("click", reset);

//Prevent form submit
document.getElementById("submit-btn").addEventListener("click", function(event){
    event.preventDefault();
});


