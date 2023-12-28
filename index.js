let nextButton = document.getElementById("1");
// console.log(nextButton.id);
nextButton.addEventListener("click", nextPage);

function nextPage(e) {
  let firstTime = true;
  let buttonId = parseInt(e.target.id);
  console.log(buttonId);
  buttonId += 1;
  nextButton.id = buttonId.toString();
  const box1 = document.getElementById("box-1");
  box1.style.backgroundColor = "transparent";
  box1.style.color = "var(--white)";
  box1.style.fontWeight = "none";
  if (buttonId == 2) {
    const box2 = document.getElementById("box-2");
    box2.style.backgroundColor = "var(--light-blue)";
    box2.style.color = "var(--marine-blue";
    box2.style.fontWeight = "bold";

    const mainFormDiv = document.getElementById("main-form-div");
    mainFormDiv.style.paddingBottom = "1.4rem";
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
    arcadeText.className = "arcade-text subscription";

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
    advancedText.className = "advanced-text subscription";

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
    proText.className = "pro-text subscription";

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

    // if toggle swith is pressed or not;
    const toggleSwitchCol = document.getElementsByClassName("toggle-child");
    toggleSwitchCol[0].style.color = "var(--cool-gray)";
    toggleSwitchCol[2].style.color = "var(--marine-blue)";

    //  toggle effect is applied
    const toggleSwitch = document.getElementById("flexSwitchCheckDefault");
    toggleSwitch.addEventListener("change", function () {
      const switchValue = this.checked;
      console.log("Toggle Switch Value:", switchValue);

      toggleSwitchCol[0].style.color = "var(--cool-gray)";
      toggleSwitchCol[2].style.color = "var(--marine-blue)";

      if (switchValue) {
        toggleSwitchCol[0].style.color = "var(--marine-blue)";
        toggleSwitchCol[2].style.color = "var(--cool-gray)";
        const subscription = document.getElementsByClassName("subscription");

        const monthFreeArcade = document.createElement("p");
        monthFreeArcade.id = "month-arcade";
        monthFreeArcade.textContent = "2 months free";
        monthFreeArcade.style.color = "var(--marine-blue)";
        subscription[0].children[1].textContent = "$90/yr";

        const monthFreeAdvanced = document.createElement("p");
        monthFreeAdvanced.id = "month-advanced";
        monthFreeAdvanced.style.color = "var(--marine-blue)";
        monthFreeAdvanced.textContent = "2 months free";
        subscription[1].children[1].textContent = "$120/yr";

        const monthFreePro = document.createElement("p");
        monthFreePro.id = "month-pro";
        monthFreePro.textContent = "2 months free";
        monthFreePro.style.color = "var(--marine-blue)";
        subscription[2].children[1].textContent = "$150/yr";

        // if (firstTime) {
        subscription[1].appendChild(monthFreeAdvanced);
        subscription[0].appendChild(monthFreeArcade);
        subscription[2].appendChild(monthFreePro);
        firstTime = false;
        // }
      } else {
        const subscription = document.getElementsByClassName("subscription");
        if (document.getElementById("month-arcade")) {
          subscription[0].removeChild(document.getElementById("month-arcade"));
        }
        if (document.getElementById("month-advanced")) {
          subscription[1].removeChild(
            document.getElementById("month-advanced")
          );
        }
        if (document.getElementById("month-pro")) {
          subscription[2].removeChild(document.getElementById("month-pro"));
        }
      }
    });
  }
}

const box1 = document.getElementById("box-1");
box1.style.backgroundColor = "var(--light-blue)";
box1.style.color = "var(--marine-blue";
box1.style.fontWeight = "bold";

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
