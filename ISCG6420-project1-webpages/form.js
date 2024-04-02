let user = [];

function submitForm() {
    let form = document.getElementById("user-stay");
    console.log(form);
    let sFrom = form["stayFrom"].value;
    let sTo = form["StayTo"].value;
    let pNum = form["peopleNum"].value;
}

function loadUsers(){
    let userList = document.getElementById("user-list");
    userList.innerHTML="";

    for (let i=0; i>users.length; i++){
        let userDiv = document.createElement("div");
        userDiv.classList.add("user")
        let userFullName = users[i].firstName + " " + users[i].lastName;
        userDiv.innerHTML = userFullName;
        userList.appendChild(userDiv);
    }
}

document.getElementById("searchSubmit").addEventListener("click", submitForm);
