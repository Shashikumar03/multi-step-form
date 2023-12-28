let nextButton = document.getElementById("1");
// console.log(nextButton.id);
nextButton.addEventListener("click", nextPage);

function nextPage(e) {
  let buttonId = parseInt(e.target.id);
  console.log(buttonId);
  buttonId += 1;
  nextButton.id = buttonId.toString();
  if (buttonId == 2) {
    const mainFormDiv = document.getElementById("main-form-div");
    mainFormDiv.style.paddingBottom = "1.2rem";
    const infoDiv = document.getElementById("info");
    infoDiv.children[0].textContent = "Select your plan";
    infoDiv.children[1].textContent =
      "You have the option of monthly or yearly billing.";
    const formFirstDivHtmlCol = document.getElementsByClassName("mb-3");
    Array.from(formFirstDivHtmlCol).forEach((item) => {
      item.innerHTML = "";
    });

    //    arcadePortion
    const arcadeDiv = document.createElement("div");
    arcadeDiv.id = "arcade-id";
    arcadeDiv.className = "arcade";

    const arcadePicDiv = document.createElement("div");
    arcadePicDiv.className = "arcade-pic";

    const arcadeImg = document.createElement("img");
    arcadeImg.setAttribute("src", "./assets/images/icon-arcade.svg");
    arcadePicDiv.appendChild(arcadeImg);

    const arcadeText = document.createElement("div");
    arcadeText.className = "arcade-text";

    let upperBoldText = document.createElement("p");
    upperBoldText.textContent = "Arcade";
    upperBoldText.className = "text-bold";

    let lowerText = document.createElement("p");
    lowerText.textContent = "$9/mo";
    lowerText.className = "text-smaller";

    arcadeText.append(upperBoldText, lowerText);
    arcadeDiv.append(arcadePicDiv, arcadeText);
    formFirstDivHtmlCol[0].appendChild(arcadeDiv);

    //advance portion
    const advancedDiv = document.createElement("div");
    advancedDiv.id = "advanced-id";
    advancedDiv.className = "advanced";

    const advancedPicDiv = document.createElement("div");
    advancedPicDiv.className = "advanced-pic";

    const advancedImg = document.createElement("img");
    advancedImg.setAttribute("src", "./assets/images/icon-advanced.svg");
    advancedPicDiv.appendChild(advancedImg);

    const advancedText = document.createElement("div");
    advancedText.className = "advanced-text";

    upperBoldText = document.createElement("p");
    upperBoldText.className = "text-bold";
    upperBoldText.textContent = "Advanced";

    lowerText = document.createElement("p");
    lowerText.className = "text-smaller";
    lowerText.textContent = "$12/mo";

    advancedText.append(upperBoldText, lowerText);
    advancedDiv.append(advancedPicDiv, advancedText);
    formFirstDivHtmlCol[1].appendChild(advancedDiv);

    //   pro portion is doing
    const proDiv = document.createElement("div");
    proDiv.id = "pro-id";
    proDiv.className = "pro";

    const proPicDiv = document.createElement("div");
    proPicDiv.className = "pro-pic";

    const proImg = document.createElement("img");
    proImg.setAttribute("src", "./assets/images/icon-pro.svg");
    proPicDiv.appendChild(proImg);

    const proText = document.createElement("div");
    proText.className = "pro-text";

    upperBoldText = document.createElement("p");
    upperBoldText.className = "text-bold";
    upperBoldText.textContent = "pro";

    lowerText = document.createElement("p");
    lowerText.textContent = "$15/mo";
    lowerText.className = "text-smaller";

    proText.append(upperBoldText, lowerText);
    proDiv.append(proPicDiv, proText);
    formFirstDivHtmlCol[2].appendChild(proDiv);
    //    toglebutton
    const toggleDiv = document.createElement("div");
    toggleDiv.className = "toggle-div";
    for (let i = 0; i < 3; i++) {
      const toggleChild = document.createElement("div");
      if (i == 0) {
        toggleChild.setAttribute("class", "toggle-child monthly");
      } else if (i == 2) {
        toggleChild.setAttribute("class", "toggle-child yearly");
      } else {
        toggleChild.className = "toggle-child";
      }

      toggleDiv.appendChild(toggleChild);
    }

    let togglerButtonDiv = document.createElement("div");
    togglerButtonDiv.className = "toggler-button-div";
    togglerButtonDiv.setAttribute("class", "form-check form-switch");

    // Create the input element with class "form-check-input"
    var inputTogglerElement = document.createElement("input");
    inputTogglerElement.setAttribute("class", "form-check-input");
    inputTogglerElement.setAttribute("type", "checkbox");
    inputTogglerElement.setAttribute("role", "switch");
    inputTogglerElement.setAttribute("id", "flexSwitchCheckDefault");

    togglerButtonDiv.appendChild(inputTogglerElement);

    toggleDiv.children[0].textContent = "Monthly";
    toggleDiv.children[1].appendChild(togglerButtonDiv);
    toggleDiv.children[2].textContent = "Yearly";
    console.log(toggleDiv);
    console.log("togleDiv");
    const formStep2 = document.querySelector("form");
    console.log(formStep2);
    formStep2.appendChild(toggleDiv);
  } else {
    console.log("next");
  }
}

const formDiv = document.createElement("div");
formDiv.className = "form-div";
const infoDiv = document.createElement("div");
infoDiv.className = "info";
infoDiv.id = "info";
const infoH2 = document.createElement("h2");
const infoParagraph = document.createElement("p");
infoH2.textContent = "Personal info";
infoParagraph.textContent =
  "Please provide your name, email address, and phone number.";

infoDiv.append(infoH2, infoParagraph);

// form portion
const form = document.createElement("form");
// name input
const divName = document.createElement("div");
divName.className = "mb-3";
//   creating label for class input name
const labelNameElement = document.createElement("label");
labelNameElement.setAttribute("for", "inputName");
labelNameElement.setAttribute("class", "form-label label");
labelNameElement.textContent = "Name";
// Create input element for name
const inputNameElement = document.createElement("input");
inputNameElement.setAttribute("type", "text");
inputNameElement.setAttribute("class", "form-control");
inputNameElement.setAttribute("id", "inputName");
inputNameElement.setAttribute("placeholder", "e.g. Stephen King");
divName.append(labelNameElement, inputNameElement);
form.appendChild(divName);

// email input
const emailDiv = document.createElement("div");
emailDiv.className = "mb-3";
// Create label element
const labelEmailElement = document.createElement("label");
labelEmailElement.setAttribute("for", "inputEmail");
labelEmailElement.setAttribute("class", "form-label label");
labelEmailElement.textContent = "Email Address";
// Create input element
const inputEmailElement = document.createElement("input");
inputEmailElement.setAttribute("type", "email");
inputEmailElement.setAttribute("class", "form-control");
inputEmailElement.setAttribute("id", "inputEmail");
inputEmailElement.setAttribute("placeholder", "e.g. stephenking@lorem.com");
emailDiv.append(labelEmailElement, inputEmailElement);
form.appendChild(emailDiv);

//  phone potion is staring
const phoneDiv = document.createElement("div");
phoneDiv.className = "mb-3";
// Create label phone
const labelPhoneElement = document.createElement("label");
labelPhoneElement.setAttribute("for", "inputNumber");
labelPhoneElement.setAttribute("class", "form-label label");
labelPhoneElement.textContent = "Phone Number";

// creating input  for phone number
const inputPhoneElement = document.createElement("input");
inputPhoneElement.setAttribute("type", "number");
inputPhoneElement.setAttribute("class", "form-control");
inputPhoneElement.setAttribute("id", "inputNumber");
inputPhoneElement.setAttribute("placeholder", "e.g. +1 234 567 890");

phoneDiv.append(labelPhoneElement, inputPhoneElement);
form.appendChild(phoneDiv);
formDiv.append(infoDiv, form);
console.log(form);
const a = document.getElementById("main-form-div");
console.log(a);
a.appendChild(formDiv);
// form.addEventListener("input", formSubmit);
// function formSubmit(e) {
//   const inputName = document.getElementById("inputName").value;
//   const inputEmail = document.getElementById("inputEmail").value;
//   const inputPhone = document.getElementById("inputNumber").value;
// }
