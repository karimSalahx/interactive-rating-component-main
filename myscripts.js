const mainCard = document.querySelector(".main-card");
const successCard = document.querySelector(".success-card");
var numberSelected = 0;
if (mainCard && successCard) {
    successCard.style.display = "none";
    mainCard.style.display = "block";
}

const invoke = (element) => {
    var allCircleItems = document.querySelectorAll(".circle-item");
    allCircleItems.forEach(element => element.classList.remove('active-button'))
    const id = element.innerText;
    numberSelected = id;
    const itemClicked = document.getElementById(id);
    itemClicked.classList.add('active-button');
}

function submitClickHandler() {
    successCard.style.display = "block";
    mainCard.style.display = "none";
    const youSelectedItem = document.querySelector(".you-selected-text");
    youSelectedItem.innerHTML = `You selected ${numberSelected} out of 5`;
}