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

//Replay Button Function (NOT WORKING)
const scene1 = document.getElementById("ad2Scene1");
const scene2 = document.getElementById("ad2Scene2");
const scene3 = document.getElementById("ad2Scene3");
const scene4 = document.getElementById("ad2Scene4");
const replaybtn = document.getElementById("replay");

replaybtn.addEventListener("click", function(e) {
  e.preventDefault;
  
  scene1.classList.remove("ad2scene1ani");
  scene2.classList.remove("ad2scene2ani");
  scene3.classList.remove("ad2scene2ani");
  scene4.classList.remove("ad2scene4ani");
  
  void scene1.offsetWidth;
  void scene2.offsetWidth;
  void scene3.offsetWidth;
  void scene4.offsetWidth;
  
  scene1.classList.add("ad2scene1ani");
  scene2.classList.add("ad2scene2ani");
  scene3.classList.add("ad2scene2ani");
  scene4.classList.add("ad2scene4ani");
}, false);

//Booking page navigation
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

//Getting user input data for summary tab
function getFormData() {
    const fName = document.getElementById("name-first").value;
    const lName = document.getElementById("name-last").value;
    const emailAddress = document.getElementById("email").value;
    const stayFrom = document.getElementById("stay-start").value;
    const stayTo = document.getElementById("stay-end").value;
    const numPeople = document.getElementById("peopleNum").value;

    const cookingNeed = document.querySelector('select').value;
    const equipKayak = document.getElementById('equipment1').value;
    const equipSurfboard = document.getElementById('equipment2').value;
    const equipPaddleboard = document.getElementById('equipment3').value;
    const equipFishingrod = document.getElementById('equipment4').value;
    const equipLifejacket = document.getElementById('equipment5').value;

    return data = {
        name: fName + " " + lName,
        email: emailAddress,
        stay: stayFrom + " to " + stayTo,
        people: numPeople,
        cooking: cookingNeed,
        equip: equipKayak + ", " + equipSurfboard + ", " + equipPaddleboard + ", " + equipFishingrod + ", " + equipLifejacket,
    };
}

//Displaying user input data in summary tab
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