let nextButton = document.getElementById("1");
// console.log(nextButton.id);
nextButton.addEventListener("click", nextPage);
let switchValue = false;
function nextPage(e) {
  let buttonId = parseInt(e.target.id);
  console.log(buttonId);
  buttonId += 1;
  nextButton.id = buttonId.toString();
  const box1 = document.getElementById("box-1");
  box1.style.backgroundColor = "transparent";
  box1.style.color = "var(--white)";
  box1.style.fontWeight = "none";
  nextButton.style.color = "var(--alabaster)";
  nextButton.style.backgroundColor = "var(--marine-blue)";
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

    const formStep2 = document.querySelector("form");
    formStep2.appendChild(toggleDiv);

    // if toggle swith is pressed or not;
    const toggleSwitchCol = document.getElementsByClassName("toggle-child");
    toggleSwitchCol[0].style.color = "var(--cool-gray)";
    toggleSwitchCol[2].style.color = "var(--marine-blue)";

    //  toggle effect is applied
    const toggleSwitch = document.getElementById("flexSwitchCheckDefault");
    toggleSwitch.addEventListener("change", function () {
      switchValue = this.checked;
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
  } else if (buttonId === 3) {
    console.log(switchValue);

    const mainFormDiv = document.getElementById("main-form-div");
    mainFormDiv.style.paddingBottom = "7rem";
    console.log("nhi btaunga");
    const box2 = document.getElementById("box-2");
    box2.style.backgroundColor = "transparent";
    box2.style.color = "var(--white)";
    box2.style.fontWeight = "none";

    const box3 = document.getElementById("box-3");
    box3.style.backgroundColor = "var(--light-blue)";
    box3.style.color = "var(--marine-blue)";
    box3.style.fontWeight = "bold";
    const infoDiv = document.getElementById("info");
    infoDiv.children[0].textContent = " Pick add-ons";
    infoDiv.children[1].textContent =
      "Add-ons help enhance your gaming experience.";

    const formTree = document.getElementsByClassName("mb-3");
    formTree[0].innerHTML = "";
    formTree[1].innerHTML = "";
    formTree[2].innerHTML = "";
    // const toggleSwitchDiv = document.getElementsByClassName("toggle-div");
    const parentDiv = formTree[0].parentNode;
    parentDiv.removeChild(parentDiv.children[3]);
    //   <div class="form-check">
    // <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
    // <label class="form-check-label" for="flexCheckChecked">
    //   Checked checkbox
    // </label>
    // </div>
    for (let i = 0; i < 3; i++) {
      const formCheck = document.createElement("div");
      formCheck.className = "form-check1 checkbox";
      const formCheckFirstChild = document.createElement("div");
      formCheckFirstChild.className = "checkbox-1-child";
      const inputCheck = document.createElement("input");
      inputCheck.className = "form-check"; // -input
      inputCheck.type = "checkbox";
      inputCheck.checked = "true";
      const checkboxDiv = document.createElement("div");
      checkboxDiv.className = "checkbox-div";
      checkboxDiv.appendChild(inputCheck);

      const step3TextDiv = document.createElement("div");
      step3TextDiv.className = "step3-text";
      const step3BoldText = document.createElement("p");
      const step3SmallText = document.createElement("p");
      step3BoldText.className = "step3-bold-text text-bold";
      step3SmallText.className = "step3-small-text text-smaller ";

      const monthyChargeDiv = document.createElement("div");
      monthyChargeDiv.className = "monthly-charge";
      if (i == 0) {
        inputCheck.id = "checkbox-1";
        step3BoldText.textContent = "Online service";
        step3SmallText.textContent = "Access to multiplayer games";
        monthyChargeDiv.textContent = "+$1/mo ";
      } else if (i == 1) {
        inputCheck.id = "checkbox-2";

        step3BoldText.textContent = "Large storage";
        step3SmallText.textContent = "Extra 1TB of cloud save";
        monthyChargeDiv.textContent = "+$2/mo ";
      } else {
        inputCheck.id = "checkbox-3";
        step3BoldText.textContent = "Customizable profile";
        step3SmallText.textContent = "Custom theme on your profile";
        monthyChargeDiv.textContent = "+$3/mo ";
      }
      step3TextDiv.append(step3BoldText, step3SmallText);
      formCheckFirstChild.append(checkboxDiv, step3TextDiv, monthyChargeDiv);
      formCheck.appendChild(formCheckFirstChild);
      formTree[i].appendChild(formCheck);
      // formTree[1].innerHTML = "";
      // formTree[2].innerHTML = "";
    }
    console.log(formTree[0]);
    if (switchValue) {
      const yearlyCharge = document.getElementsByClassName("monthly-charge");
      yearlyCharge[0].textContent = "$10/yr";
      yearlyCharge[1].textContent = "$20/yr";
      yearlyCharge[2].textContent = "$20/yr";
    }
  } else if (buttonId === 4) {
    console.log("bbb", nextButton);
    nextButton.textContent = "Confirm";
    nextButton.style.color = "var(--alabaster)";
    nextButton.style.backgroundColor = "var(--purplish-blue)";
    console.log("buttonId :", buttonId);
    const box3 = document.getElementById("box-3");
    box3.style.backgroundColor = "transparent";
    box3.style.color = "var(--white)";
    box3.style.fontWeight = "none";

    const box4 = document.getElementById("box-4");
    box4.style.backgroundColor = "var(--light-blue)";
    box4.style.color = "var(--marine-blue";
    box4.style.fontWeight = "bold";

    const infoDiv = document.getElementById("info");
    infoDiv.children[0].textContent = "Finishing up";
    infoDiv.children[1].textContent =
      "Double-check everything looks OK before confirming.";
    let formDiv = infoDiv.parentNode.children[1];
    formDiv.innerHTML = "";
    const billMonthly = document.createElement("div");
    billMonthly.className = "billing-monthly";
    const billingUpper = document.createElement("div");
    billingUpper.className = "billing-upper";
    const upperLeft = document.createElement("div");
    upperLeft.className = "upper-left";
    const upperRight = document.createElement("div");
    upperRight.className = "upper-right price";

    // upperLeft;
    const leftUpperText = document.createElement("p");
    leftUpperText.className = "upper-bold-text";
    leftUpperText.textContent = "Arcade (Monthly)";
    const leftLowerText = document.createElement("p");
    leftLowerText.className = "upper-small-text";
    leftLowerText.innerHTML = "<u>Change<u/>";
    upperLeft.append(leftUpperText, leftLowerText);

    // upperRight;
    const upperRightText = document.createElement("p");
    upperRightText.className = "uppert-right-text";
    upperRightText.textContent = "$9/mo";
    upperRight.appendChild(upperRightText);

    billingUpper.append(upperLeft, upperRight);
    const hr = document.createElement("hr");
    hr.className = "hr";

    const billingLower = document.createElement("div");
    billingLower.className = "billing-lower";
    const lowerFirstDiv = document.createElement("div");
    lowerFirstDiv.className = "lower-first";
    const lowerSecondDiv = document.createElement("div");
    lowerSecondDiv.className = "lower-second";
    // lowerFirstDiv
    const lowerLeftText = document.createElement("p");
    lowerLeftText.className = "lower-left-text";
    lowerLeftText.textContent = "Online service";

    const lowerRightText = document.createElement("p");
    lowerRightText.className = "lower-right-text price";
    lowerRightText.textContent = "+$1/mo";
    lowerFirstDiv.append(lowerLeftText, lowerRightText);

    // lowerSecondDiv
    const lowerSecLeftText = document.createElement("p");
    lowerSecLeftText.className = "lower-left-text";
    lowerSecLeftText.textContent = "Larger storage";

    const lowerSecRightText = document.createElement("p");
    lowerSecRightText.className = "lower-right-text price";
    lowerSecRightText.textContent = "+$2/mo";
    lowerSecondDiv.append(lowerSecLeftText, lowerSecRightText);

    billingLower.append(lowerFirstDiv, lowerSecondDiv);
    billMonthly.append(billingUpper, hr, billingLower);
    formDiv.appendChild(billMonthly);
    console.log(formDiv);
    const totalBillingDiv = document.createElement("div");
    totalBillingDiv.className = "total-billing";
    const totalBillDiv = document.createElement("div");
    totalBillDiv.className = "total-bill-div";
    const totalSumText = document.createElement("p");
    totalSumText.className = "total-sum-text";
    totalSumText.textContent = "Total (per month)";
    const totalSum = document.createElement("p");
    totalSum.className = "total-sum price";
    totalSum.textContent = "+$12/mo";

    // Appending the elements to build the structure
    totalBillDiv.append(totalSumText, totalSum);

    totalBillingDiv.appendChild(totalBillDiv);
    formDiv.appendChild(totalBillingDiv);
    if (switchValue) {
      const priceHtmlCol = document.getElementsByClassName("price");
      console.log(priceHtmlCol);
      priceHtmlCol[0].children[0].textContent = "$90/yr";
      priceHtmlCol[1].textContent = "$10/yr";
      priceHtmlCol[2].textContent = "$20/yr";
      priceHtmlCol[3].textContent = "$120/yr";
    }
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
const parentDiv = document.getElementById("main-form-div");

parentDiv.appendChild(formDiv);
// form.addEventListener("input", formSubmit);
// function formSubmit(e) {
//   const inputName = document.getElementById("inputName").value;
//   const inputEmail = document.getElementById("inputEmail").value;
//   const inputPhone = document.getElementById("inputNumber").value;
// }
