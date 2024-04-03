const formpage1 = document.getElementById("form-page1");
const formpage2 = document.getElementById("form-page2");
const formpage3 = document.getElementById("form-page3");
const formpage4 = document.getElementById("form-page4");

const progressBar = document.querySelector("progress");

const summaryName = document.getElementById("summary-name");
const summaryEmail = document.getElementById("summary-email");
const summaryStay = document.getElementById("summary-stay");
const summaryPeopleNum = document.getElementById("summary-peopleNum");
const summaryCooking = document.getElementById("summary-cooking");
const summaryEquip = document.getElementById("summary-equip");

const formData = document.getElementById("collected-data");

function showPage(pageNumber) {
    switch (pageNumber) {
        case 1:
            formpage1.style.display = 'block';
            formpage2.style.display = 'none';
            formpage3.style.display = 'none';
            formpage4.style.display = 'none';
            progressBar.value=10;
            break;

        case 2:
            formpage1.style.display = 'none';
            formpage2.style.display = 'block';
            formpage3.style.display = 'none';
            formpage4.style.display = 'none';
            progressBar.value=40;
            break;

        case 3:
            formpage1.style.display = 'none';
            formpage2.style.display = 'none';
            formpage3.style.display = 'block';
            formpage4.style.display = 'none';
            progressBar.value=70;
            break;

        case 4:
            formpage1.style.display = 'none';
            formpage2.style.display = 'none';
            formpage3.style.display = 'none';
            formpage4.style.display = 'block';
            progressBar.value=100;
            updateSummary();
            break;

        default:
            break;
    }
}

function getFormData() {
    const fName = document.getElementById("name-first").value;
    const lName = document.getElementById("name-last").value;
    const emailAddress = document.getElementById("email").value;
    const stayFrom = document.getElementById("stay-start").value;
    const stayTo = document.getElementById("stay-end").value;
    const numPeople = document.getElementById("peopleNum").value;

    const cookingNeed = document.querySelector('select').value;
    const equipNeed = document.querySelector('input[checkbox]:checked').value;

    return data = {
        name: fName + "" + lName,
        email: emailAddress,
        stay: stayFrom + "" + stayTo,
        people: numPeople,
        cooking: cookingNeed,
        equip: equipNeed,
    };
}

function updateSummary() {
    const data = getFormData();
    console.log(data);
    summaryName.innerHTML = data.name;
    summaryEmail.innerHTML = data.email;
    summaryStay.innerHTML = data.stay;
    summaryPeopleNum.innerHTML = data.people;
    summaryCooking.innerHTML = data.cooking;
    summaryEquip.innerHTML = data.equip;
}

//not being used rn
function submitData() {
    const dataRow = document.createElement("tr");
    const cellName = document.createElement("td");
    const cellVehicle = document.createElement("td");

    dataRow.appendChild(cellName);
    dataRow.appendChild(cellVehicle);

    const data = getFormData();

    cellName.innerHTML = data.name;
    cellVehicle.innerHTML = data.vehicle;

    formData.appendChild(dataRow);
}