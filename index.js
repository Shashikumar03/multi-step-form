function step1() {
  const box1 = document.getElementById("box-1");
  box1.style.backgroundColor = "var(--light-blue)";
  box1.style.color = "var(--marine-blue)";
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
  let form = document.createElement("form");
  let contentDiv = document.createElement("div");
  contentDiv.className = "content-div";
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
  contentDiv.appendChild(divName);

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
  contentDiv.appendChild(emailDiv);

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
  contentDiv.appendChild(phoneDiv);
  form.append(contentDiv);
  formDiv.append(infoDiv, form);
  console.log(form);
  const parentDiv = document.getElementById("main-form-div");

  parentDiv.appendChild(formDiv);
}
step1();

/////////////////////////////event is applied//////////////////////////

let nextButton = document.getElementById("1");
let formDataObj = {};
let data = {};
let planData = [];
let selectAddOnforBilling = [];
nextButton.addEventListener("click", nevigatePage);
const backButton = document.getElementById("decrement-1");
backButton.style.visibility = "hidden";

backButton.addEventListener("click", nevigatePage);
console.log(backButton);
let switchValue = false;

let resolveForm;
const confirmBtn = document.getElementById("confirm");
confirmBtn.style.display = "none";
let buttonId;
function nevigatePage(e) {
  if (e.target === backButton) {
    buttonId = parseInt(e.target.value);
    buttonId -= 1;
  } else {
    buttonId = parseInt(e.target.id);
    buttonId += 1;
  }
  console.log("button id", buttonId);

  backButton.value = buttonId;
  if (buttonId === 4) {
    confirmBtn.style.display = "block";
    nextButton.style.display = "none";

    confirmBtn.textContent = "Confirm";
    confirmBtn.style.color = "var(--alabaster)";
    confirmBtn.style.backgroundColor = "var(--purplish-blue)";
  } else {
    nextButton.style.display = "block";
    confirmBtn.style.display = "none";
  }

  if (buttonId > 1 && buttonId < 5) {
    backButton.style.visibility = "visible";
  } else {
    backButton.style.visibility = "hidden";
  }
  const numberBox = document.getElementsByClassName("num-box");
  Array.from(numberBox).forEach((item) => {
    const selectedStep = parseInt(item.textContent);
    const box = document.getElementById(item.id);
    if (selectedStep === buttonId) {
      box.style.backgroundColor = "var(--light-blue)";
      box.style.color = "var(--marine-blue";
      box.style.fontWeight = "bold";
    } else {
      box.style.backgroundColor = "transparent";
      box.style.color = "var(--white)";
      box.style.fontWeight = "none";
    }
  });

  nextButton.id = buttonId.toString();

  nextButton.style.color = "var(--alabaster)";
  nextButton.style.backgroundColor = "var(--marine-blue)";
  if (buttonId == 2) {
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
    upperBoldText.textContent = "Pro";

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
        if (planData.length > 0) {
          const searchId = Object.keys(planData[0])[0].toLowerCase();
          const DeColorDiv = document.getElementById(`${searchId}-id`);

          planData.length = 0;
          DeColorDiv.style.border = "1px solid var(--light-gray)";
          DeColorDiv.style.backgroundColor = "transparent";
        }

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
          console.log(subscription[0]);
          subscription[0].children[1].textContent = "$9/mo";
        }
        if (document.getElementById("month-advanced")) {
          subscription[1].removeChild(
            document.getElementById("month-advanced")
          );
          subscription[1].children[1].textContent = "$15/mo";
        }
        if (document.getElementById("month-pro")) {
          subscription[2].removeChild(document.getElementById("month-pro"));
          subscription[2].children[1].textContent = "$15/mo";
        }
        if (planData.length > 0) {
          const searchId = Object.keys(planData[0])[0].toLowerCase();
          const DeColorDiv = document.getElementById(`${searchId}-id`);
          planData.length = 0;
          DeColorDiv.style.border = "1px solid var(--light-gray)";
          DeColorDiv.style.backgroundColor = "transparent";
        }
      }
    });
    const aaa = document.querySelector("form");
    console.log("aaaa", aaa);
    if (e.target === nextButton) {
      formDataObj["form"] = aaa.cloneNode(true);
      console.log(formDataObj["form"]);
      console.log("form is stored");
    }
    if (e.target === backButton) {
      data = {};
      const toggleSwitch = document.getElementById("flexSwitchCheckDefault");
      if (toggleSwitch && switchValue) {
        toggleSwitch.checked = true;
        const contentDiv = document.getElementsByClassName("content-div")[0];
        if (contentDiv) {
          contentDiv.addEventListener("click", selectPlan);

          const selectYearPlan =
            Object.keys(planData[0])[0].toLowerCase() + "-id";

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

          const selectSubcription = document.getElementById(selectYearPlan);
          selectSubcription.style.border = "1px solid var(--purplish-blue)";
          selectSubcription.style.backgroundColor = "var(--pastel-blue)";
        }
      } else {
        const selectMonthPlan =
          Object.keys(planData[0])[0].toLowerCase() + "-id";
        console.log(selectMonthPlan);
        const monthItemPlan = document.getElementById(selectMonthPlan);
        monthItemPlan.style.border = "1px solid var(--purplish-blue)";
        monthItemPlan.style.backgroundColor = "var(--pastel-blue)";
      }
    }
  } else if (buttonId === 3) {
    if (e.target === backButton) {
      // console.log(formDataObj["form"], "yahi hai");
      const formQ = document.querySelector("form");
      formQ.innerHTML = "";
      console.log(formDataObj["form"].children);

      const contentDiv1 = document.createElement("div");
      contentDiv1.className = "content-div";
      for (let i = 0; i < 3; i++) {
        const divName = document.createElement("div");
        divName.className = "mb-3";
        contentDiv1.appendChild(divName);
      }
      formQ.appendChild(contentDiv1);

      const contentDiv = document.getElementsByClassName("content-div")[0];
      if (contentDiv) {
        contentDiv.addEventListener("click", selectPlan);
      }
    }
    const mainFormDiv = document.getElementById("main-form-div");
    console.log(mainFormDiv, "ggggggggggggggggggggggggg");
    mainFormDiv.style.paddingBottom = "7rem";

    const box2 = document.getElementById("box-2");
    box2.style.backgroundColor = "transparent";
    box2.style.color = "var(--white)";
    box2.style.fontWeight = "none";

    // const box3 = document.getElementById("box-3");
    // box3.style.backgroundColor = "var(--light-blue)";
    // box3.style.color = "var(--marine-blue)";
    // box3.style.fontWeight = "bold";
    const infoDiv = document.getElementById("info");
    infoDiv.children[0].textContent = " Pick add-ons";
    infoDiv.children[1].textContent =
      "Add-ons help enhance your gaming experience.";

    const formTree = document.getElementsByClassName("mb-3");
    console.log(formTree);
    if (formTree[0]) {
      formTree[0].innerHTML = "";
      formTree[1].innerHTML = "";
      formTree[2].innerHTML = "";
      const parentDiv = formTree[0].parentNode.parentNode;
      console.log(parentDiv, "parent");
      if (parentDiv.children[1]) parentDiv.removeChild(parentDiv.children[1]);
    }
    // const toggleSwitchDiv = document.getElementsByClassName("toggle-div");

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
      // inputCheck.checked = "";
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
        formCheck.id = "service";
        inputCheck.id = "checkbox-1";
        inputCheck.value = "$1/mo";
        if (switchValue) {
          inputCheck.value = "$10/yr";
        }
        step3BoldText.textContent = "Online service";
        step3SmallText.textContent = "Access to multiplayer games";
        monthyChargeDiv.textContent = "+$1/mo ";
      } else if (i == 1) {
        formCheck.id = "storage";
        inputCheck.id = "checkbox-2";
        inputCheck.value = "$2/mo";
        if (switchValue) {
          inputCheck.value = "$20/yr";
        }
        step3BoldText.textContent = "Large storage";
        step3SmallText.textContent = "Extra 1TB of cloud save";
        monthyChargeDiv.textContent = "+$2/mo ";
      } else {
        formCheck.id = "profile";
        inputCheck.id = "checkbox-3";
        inputCheck.value = "$3/mo";
        if (switchValue) {
          inputCheck.value = "$20/yr";
        }
        step3BoldText.textContent = "Customizable profile";
        step3SmallText.textContent = "Custom theme on your profile";
        monthyChargeDiv.textContent = "+$3/mo ";
      }
      step3TextDiv.append(step3BoldText, step3SmallText);
      formCheckFirstChild.append(checkboxDiv, step3TextDiv, monthyChargeDiv);
      formCheck.appendChild(formCheckFirstChild);
      if (formTree[i]) formTree[i].appendChild(formCheck);
      // formTree[1].innerHTML = "";
      // formTree[2].innerHTML = "";
    }

    if (switchValue) {
      const yearlyCharge = document.getElementsByClassName("monthly-charge");
      yearlyCharge[0].textContent = "$10/yr";
      yearlyCharge[1].textContent = "$20/yr";
      yearlyCharge[2].textContent = "$20/yr";
    }
  } else if (buttonId === 4) {
    // const box3 = document.getElementById("box-3");
    // box3.style.backgroundColor = "transparent";
    // box3.style.color = "var(--white)";
    // box3.style.fontWeight = "none";

    // const box4 = document.getElementById("box-4");
    // box4.style.backgroundColor = "var(--light-blue)";
    // box4.style.color = "var(--marine-blue";
    // box4.style.fontWeight = "bold";

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

    // for (let key of planData) {
    // upperLeft;

    let totalBillingSum = 0;
    for (let key in planData[planData.length - 1]) {
      const leftUpperText = document.createElement("p");
      leftUpperText.className = "upper-bold-text";
      leftUpperText.textContent = `${key} (Monthly)`;
      const leftLowerText = document.createElement("p");
      leftLowerText.className = "upper-small-text";
      leftLowerText.innerHTML = "<u>Change<u/>";
      upperLeft.append(leftUpperText, leftLowerText);

      // upperRight;
      const upperRightText = document.createElement("p");
      upperRightText.className = "uppert-right-text";
      upperRightText.textContent = `${planData[planData.length - 1][key]}`;
      let sum = planData[planData.length - 1][key].split("/")[0].split("$");
      totalBillingSum += parseInt(sum[1]);
      upperRight.appendChild(upperRightText);

      billingUpper.append(upperLeft, upperRight);
      // }
    }

    ////yaha se
    const hr = document.createElement("hr");
    hr.className = "hr";

    const billingLower = document.createElement("div");
    billingLower.className = "billing-lower";
    const lowerFirstDiv = document.createElement("div");
    console.log(data, "-------------");
    const timeAndDate1 = Object.values(planData[0]);
    const timeAndDate = timeAndDate1[0].split("/")[1];
    for (let key in data) {
      lowerFirstDiv.className = "lower-first";

      // lowerFirstDiv
      const lowerLeftText = document.createElement("p");
      lowerLeftText.className = "lower-left-text";
      lowerLeftText.textContent = key;

      const lowerRightText = document.createElement("p");
      lowerRightText.className = "lower-right-text price";
      lowerRightText.textContent = data[key];
      sum = data[key].split("/")[0].split("$")[1];

      totalBillingSum += parseInt(sum);

      // console.log(data);
      const pickOnDiv = document.createElement("div");
      pickOnDiv.className = "pick-on";
      pickOnDiv.append(lowerLeftText, lowerRightText);
      lowerFirstDiv.append(pickOnDiv);
    }

    billingLower.append(lowerFirstDiv);
    billMonthly.append(billingUpper, hr, billingLower);
    formDiv.appendChild(billMonthly);
    console.log(formDiv);
    const totalBillingDiv = document.createElement("div");
    totalBillingDiv.className = "total-billing";
    const totalBillDiv = document.createElement("div");
    totalBillDiv.className = "total-bill-div";
    const totalSumText = document.createElement("p");
    totalSumText.className = "total-sum-text";
    if (timeAndDate === "yr") {
      totalSumText.textContent = `Total (per year)`;
    } else {
      totalSumText.textContent = "Total (per month)";
    }
    const totalSum = document.createElement("p");
    totalSum.className = "total-sum price";
    totalSum.textContent = `+$${totalBillingSum}/${timeAndDate}`;

    // Appending the elements to build the structure
    totalBillDiv.append(totalSumText, totalSum);

    totalBillingDiv.appendChild(totalBillDiv);
    formDiv.appendChild(totalBillingDiv);
    if (confirmBtn) {
      confirmBtn.addEventListener("dblclick", confirmPayment);
    }
  } else if (buttonId === 1) {
    const parentDiv = document.getElementById("main-form-div");
    parentDiv.innerHTML = "";
    step1();
    const contentDiv = document.getElementsByClassName("content-div")[0];
    if (contentDiv) {
      contentDiv.addEventListener("click", selectPlan);
    }
  }
  if (e.target === backButton && Object.keys(data).length > 0) {
    if (Object.keys(data).length > 0) {
      const addedPlanKeyArr = Object.keys(data);
      for (let i = 0; i < addedPlanKeyArr.length; i++) {
        const idOfAddOn = addedPlanKeyArr[i].split(" ")[1];
        if (idOfAddOn === "service") {
          let checkboxFirst = document.getElementById("checkbox-1");
          if (checkboxFirst) checkboxFirst.checked = true;
        } else if (idOfAddOn === "storage") {
          let checkboxSecond = document.getElementById("checkbox-2");
          if (checkboxSecond) checkboxSecond.checked = true;
        } else {
          let checkboxThird = document.getElementById("checkbox-3");
          if (checkboxThird) checkboxThird.checked = true;
        }
        const selectAddOn = document.getElementById(idOfAddOn).children[0];

        if (selectAddOn) {
          selectAddOn.style.border = "1px solid var(--purplish-blue)";
          selectAddOn.style.backgroundColor = "var(--pastel-blue)";
        }
      }
    }
    // console.log(addedPlanKey);
  }
}

let buttonValue = backButton.value;

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const contentDiv = document.getElementsByClassName("content-div");
  contentDiv[0].addEventListener("click", selectPlan);

  if (form) {
    form.addEventListener("input", formSubmit);
    // form.addEventListener("click", selectPlan);
  }

  function formSubmit(e) {
    e.preventDefault();
  }
});
function selectPlan(e) {
  buttonValue = backButton.value;
  console.log(buttonValue, "========", buttonId);

  if (buttonValue > 1 && buttonValue <= 3) {
    const planSelection = e.target.children[1];

    // return;

    if (buttonValue == 2) {
      if (planSelection.children.length > 0) {
        const planName = planSelection.children[0].textContent;

        let planObj = {};
        planObj[planName] = planSelection.children[1].textContent;
        planData.push(planObj);
        if (planData.length > 1) {
          planData.shift();
        }

        const content = document.getElementsByClassName("content-div");

        Array.from(content[0].children).forEach((item) => {
          const id = item.children[0].id.toLowerCase();
          const checkId = planData[0];
          const idOfSelectedItem = Object.keys(checkId)[0].toLowerCase();

          if (id.includes(idOfSelectedItem)) {
            item.children[0].style.border = "1px solid var(--purplish-blue)";
            item.children[0].style.backgroundColor = "var(--pastel-blue)";
          } else {
            item.children[0].style.border = "1px solid var(--light-gray)";
            item.children[0].style.backgroundColor = "transparent";
          }
        });
      }
    } else {
      const aa = document.querySelectorAll(".form-check");
      const checkboxFirst = document.getElementById("checkbox-1");
      const checkboxSecond = document.getElementById("checkbox-2");
      const checkboxThird = document.getElementById("checkbox-3");

      console.log(
        checkboxFirst.checked,
        checkboxSecond.checked,
        checkboxThird.checked
      );
      const selectedBox1 = checkboxFirst.parentNode.parentNode;
      const selectedBox2 = checkboxSecond.parentNode.parentNode;
      const selectedBox3 = checkboxThird.parentNode.parentNode;
      if (!switchValue) {
        if (checkboxFirst.checked) {
          const value1 = checkboxFirst.value;

          let obj = {};
          data["Online service"] = value1;
          selectedBox1.style.border = "1px solid var(--purplish-blue)";
          selectedBox1.style.backgroundColor = "var(--pastel-blue)";
        } else {
          selectedBox1.style.border = "1px solid var(--light-gray)";
          selectedBox1.style.backgroundColor = "transparent";
          delete data["Online service"];
        }

        if (checkboxSecond.checked) {
          const value2 = checkboxSecond.value;
          console.log(value2);
          let obj = {};
          data["Large storage"] = value2;
          selectedBox2.style.border = "1px solid var(--purplish-blue)";
          selectedBox2.style.backgroundColor = "var(--pastel-blue)";
        } else {
          selectedBox2.style.border = "1px solid var(--light-gray)";
          selectedBox2.style.backgroundColor = "transparent";
          delete data["Large storage"];
        }
        if (checkboxThird.checked) {
          const value3 = checkboxThird.value;
          data["Customizable profile"] = value3;
          selectedBox3.style.border = "1px solid var(--purplish-blue)";
          selectedBox3.style.backgroundColor = "var(--pastel-blue)";
        } else {
          selectedBox3.style.border = "1px solid var(--light-gray)";
          selectedBox3.style.backgroundColor = "transparent";
          delete data["Customizable profile"];
        }
      } else {
        if (checkboxFirst.checked) {
          const value1 = checkboxFirst.value;

          let obj = {};
          data["Online service"] = value1;
          selectedBox1.style.border = "1px solid var(--purplish-blue)";
          selectedBox1.style.backgroundColor = "var(--pastel-blue)";
        } else {
          selectedBox1.style.border = "1px solid var(--light-gray)";
          selectedBox1.style.backgroundColor = "transparent";
          delete data["Online service"];
        }

        if (checkboxSecond.checked) {
          const value2 = checkboxSecond.value;
          console.log(value2);
          let obj = {};
          data["Large storage"] = value2;
          selectedBox2.style.border = "1px solid var(--purplish-blue)";
          selectedBox2.style.backgroundColor = "var(--pastel-blue)";
        } else {
          selectedBox2.style.border = "1px solid var(--light-gray)";
          selectedBox2.style.backgroundColor = "transparent";
          delete data["Large storage"];
        }
        if (checkboxThird.checked) {
          const value3 = checkboxThird.value;
          data["Customizable profile"] = value3;
          selectedBox3.style.border = "1px solid var(--purplish-blue)";
          selectedBox3.style.backgroundColor = "var(--pastel-blue)";
        } else {
          selectedBox3.style.border = "1px solid var(--light-gray)";
          selectedBox3.style.backgroundColor = "transparent";
          delete data["Customizable profile"];
        }
      }

      console.log(data);
    }
  }
}

function confirmPayment(e) {
  console.log("doubleClick");
  const formDiv = document.getElementsByClassName("form-div");
  console.log(formDiv);
  formDiv[0].innerHTML = "";
  const confirmMainDiv = document.createElement("div");
  confirmMainDiv.className = "confirm-main-div";
  for (let i = 0; i < 3; i++) {
    const itemDiv = document.createElement("div");
    itemDiv.classList = "items-confirm";
    if (i === 0) {
      imgDiv = document.createElement("div");
      imgDiv.className = "confirm-img";
      const imgTag = document.createElement("img");
      imgTag.src = "./assets/images/icon-thank-you.svg";
      imgDiv.appendChild(imgTag);
      itemDiv.appendChild(imgDiv);
    } else if (i === 1) {
      const pTag = document.createElement("p");
      pTag.className = "thank-you";
      pTag.textContent = "Thank you!";
      itemDiv.appendChild(pTag);
    } else {
      const pTag = document.createElement("p");
      pTag.textContent = `Thanks for confirming your subscription! We hope you have fun
    using our platform. If you ever need support, please feel free to email us
    at support@loremgaming.com.`;
      pTag.className = "confirm-text";
      itemDiv.appendChild(pTag);
    }
    confirmMainDiv.appendChild(itemDiv);
    const footer = document.getElementsByTagName("footer");
    footer[0].style.display = "none";
  }
  formDiv[0].appendChild(confirmMainDiv);
}
