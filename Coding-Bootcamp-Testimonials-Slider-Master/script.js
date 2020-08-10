var information_users = { 
    0: { 
        "description": "“ I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. ”",
        "picture": "images/image-tanya.jpg",
        "name": "Tanya Sinclair",
        "job": "UX Engineer"
    },
    1: {
        "description": "“ If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        "picture": "images/image-john.jpg",
        "name": "John Tarkpor",
        "job": "Junior Front-end Developer"
    },
};


var current_id = 0;

function ChangeInfo() {

    var arrow_left = document.getElementById("arrow-left");
    var arrow_right = document.getElementById("arrow-right");

    arrow_left.addEventListener("click", PrevInfo);
    arrow_right.addEventListener("click", NextInfo);
}

function PrevInfo() {
    var description = document.getElementById("description");
    var picture = document.getElementById("profile");
    var name = document.getElementById("name");
    var job = document.getElementById("job");

    var current_id = window.current_id;

    if (current_id != 0 && current_id > 0) {
        current_id = window.current_id - 1;

        description.innerHTML = information_users[current_id]["description"];
        picture.src = information_users[current_id]["picture"];
        name.innerHTML = information_users[current_id]["name"];
        job.innerHTML = information_users[current_id]["job"];
    }

    window.current_id = current_id;
}

function NextInfo() {
    var description = document.getElementById("description");
    var picture = document.getElementById("profile");
    var name = document.getElementById("name");
    var job = document.getElementById("job");

    var current_id = window.current_id;

    if (current_id < Object.keys(information_users).length - 1) {
        current_id =  window.current_id + 1;

        description.innerHTML = information_users[current_id]["description"];
        picture.src = information_users[current_id]["picture"];
        name.innerHTML = information_users[current_id]["name"];
        job.innerHTML = information_users[current_id]["job"];
    
    }
    
    window.current_id = current_id;
}

function ChangeInfoKeyboard(e) {
    if (e.keyCode.toString() == "37") { // Left
        PrevInfo();
    }
    else if (e.keyCode.toString() == "39") { // Right
        NextInfo();
    }

}

function AlwaysUpdate() {
    // Should happen every time you change something in DOM
    var arrow_left = document.getElementById("arrow-left");
    var arrow_right = document.getElementById("arrow-right");

    if (window.current_id == 0) {
        arrow_left.style.backgroundColor = "#ebebeb";
        // borderTopLeftRadius borderTopRightRadius borderBottomRightRadius borderBottomLeftRadius
        arrow_left.style.borderRadius = "50px 0 0 50px";
    }
    else {
        arrow_left.style.backgroundColor = "white";
        arrow_left.style.borderRadius = "50px 0 0 50px";
    }

    if (window.current_id == Object.keys(information_users).length - 1) {
        arrow_right.style.backgroundColor = "#ebebeb";
        arrow_right.style.borderRadius = "0 50px 50px 0";
    }
    else {
        arrow_right.style.backgroundColor = "white";
        arrow_right.style.borderRadius = "0 50px 50px 0";
    }
}

window.addEventListener('keydown', ChangeInfoKeyboard);

window.addEventListener('click', AlwaysUpdate);
window.addEventListener('keydown', AlwaysUpdate);