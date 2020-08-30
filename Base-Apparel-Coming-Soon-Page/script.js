var form = document.getElementById("input");
var email = document.getElementById("email");

form.addEventListener("submit", e => {
    // prevents the refreshing of the page
    e.preventDefault();

    var error_icon = document.getElementById("error");
    var error_message = document.getElementById("error-message");

    console.log(email.value);
    if (email.value === "" || validateEmail(email.value) == false) {
        // dispaly: inline is default for SVG
        error_icon.style.display = "inline";
        error_message.style.display = "block";
        error_message.innerHTML= "Please provide a valid email";
    }
    else {
        error_icon.style.display = "none";
        error_message.style.display = "block";
        error_message.innerHTML= "Thank you!";
        email.value = "";
    }
})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}