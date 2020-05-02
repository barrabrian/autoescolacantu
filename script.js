//DOM elements
const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next' };


//remove class from a set of items
const removeClasses = (elemSet, className) => {

  elemSet.forEach(elem => {

    elem.classList.remove(className);

  });

};

//return exect parent node of the element
const findParent = (elem, parentClass) => {

  let currentNode = elem;

  while (!currentNode.classList.contains(parentClass)) {
    currentNode = currentNode.parentNode;
  }

  return currentNode;

};

//get active button step number
const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};

//set all steps before clicked (and clicked too) to active
const setActiveStep = activeStepNum => {

  //remove active state from all the state
  removeClasses(DOMstrings.stepsBtns, 'js-active');

  //set picked items to active
  DOMstrings.stepsBtns.forEach((elem, index) => {

    if (index <= activeStepNum) {
      elem.classList.add('js-active');
    }

  });
};

//get active panel
const getActivePanel = () => {

  let activePanel;

  DOMstrings.stepFormPanels.forEach(elem => {

    if (elem.classList.contains('js-active')) {

      activePanel = elem;

    }

  });

  return activePanel;

};

//open active panel (and close unactive panels)
const setActivePanel = activePanelNum => {

  //remove active class from all the panels
  removeClasses(DOMstrings.stepFormPanels, 'js-active');

  //show active panel
  DOMstrings.stepFormPanels.forEach((elem, index) => {
    if (index === activePanelNum) {

      elem.classList.add('js-active');

      setFormHeight(elem);

    }
  });

};

//set form height equal to current panel height
const formHeight = activePanel => {

  const activePanelHeight = activePanel.offsetHeight;

  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;

};

const setFormHeight = () => {
  const activePanel = getActivePanel();

  formHeight(activePanel);
};

//STEPS BAR CLICK FUNCTION

var activeStep=0;
//PREV/NEXT BTNS CLICK
DOMstrings.stepsForm.addEventListener('click', e => {

  const eventTarget = e.target;
  var ok = true;

  //check if we clicked on `PREV` or NEXT` buttons
  if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)))
  {
    return;
  }

  //find active panel
  const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);

  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);

  let nextPanel = 0;

  if (activePanelNum == 0) {
    nextPanel = parseInt(document.getElementById('prod').value, 10);
  }else if (activePanelNum == 1) {
    nextPanel = 2;
    var radios = document.getElementsByName('cnh');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        document.getElementById('cnh_title').innerHTML = "CNH tipo " + radios[i].value;
        if (radios[i].value == "A") {
          document.getElementById('cnh_price').innerHTML = "R$1.800,00";
          document.getElementById('cnh_tax_price').innerHTML = "R$186,00";
          document.getElementById('cnh_total_price').innerHTML = "R$1.986,00";
          document.getElementById('cnh_cartao').innerHTML = "R$180,00";
          document.getElementById('cnh_balcao').innerHTML = "R$400,00 + 4x de R$350,00";
          document.getElementById('cnh_a_show').classList.remove("d-none");
          document.getElementById('cnh_b_show').classList.add("d-none");
          document.getElementById('cnh_link').href = "https://api.whatsapp.com/send?phone=5545998628681&text=Bom%20dia!%20Quero%20desconto%20na%20CNH%20tipo%20A%20%3A)";
        }
        if (radios[i].value == "B") {
          document.getElementById('cnh_price').innerHTML = "R$1.900,00";
          document.getElementById('cnh_tax_price').innerHTML = "R$186,00";
          document.getElementById('cnh_total_price').innerHTML = "R$2.086,00";
          document.getElementById('cnh_cartao').innerHTML = "R$190,00";
          document.getElementById('cnh_balcao').innerHTML = "R$400,00 + 5x de R$300,00";
          document.getElementById('cnh_a_show').classList.add("d-none");
          document.getElementById('cnh_b_show').classList.remove("d-none");
          document.getElementById('cnh_link').href = "https://api.whatsapp.com/send?phone=5545998628681&text=Bom%20dia!%20Quero%20desconto%20na%20CNH%20tipo%20B%20%3A)";

        }
        if (radios[i].value == "AB") {
          document.getElementById('cnh_price').innerHTML = "R$2.800,00";
          document.getElementById('cnh_tax_price').innerHTML = "R$236,00";
          document.getElementById('cnh_total_price').innerHTML = "R$3.036,00";
          document.getElementById('cnh_cartao').innerHTML = "R$280,00";
          document.getElementById('cnh_balcao').innerHTML = "R$500,00 + 4x de R$460,00";
          document.getElementById('cnh_a_show').classList.remove("d-none");
          document.getElementById('cnh_b_show').classList.remove("d-none");
          document.getElementById('cnh_link').href = "https://api.whatsapp.com/send?phone=5545998628681&text=Bom%20dia!%20Quero%20desconto%20na%20CNH%20tipo%20AB%20%3A)";
        }
        break;
      }
    }
  } else if (activePanelNum == 3) {
    nextPanel = 4;
    var radios = document.getElementsByName('add');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        document.getElementById('inc_title').innerHTML = "CNH tipo " + radios[i].value;
        if (radios[i].value == "A") {
          document.getElementById('inc_price').innerHTML = "R$1.000,00";
          document.getElementById('inc_cartao').innerHTML = "R$250,00";
          document.getElementById('inc_a_show').classList.remove("d-none");
          document.getElementById('inc_b_show').classList.add("d-none");
          document.getElementById('inc_link').href = "https://api.whatsapp.com/send?phone=5545998628681&text=Bom%20dia!%20Gostaria%20de%20incluir%20o%20tipo%20A%20na%20minha%20CNH";
        }
        if (radios[i].value == "B") {
          document.getElementById('inc_price').innerHTML = "R$1.200,00";
          document.getElementById('inc_cartao').innerHTML = "R$300,00";
          document.getElementById('inc_a_show').classList.add("d-none");
          document.getElementById('inc_b_show').classList.remove("d-none");
          document.getElementById('inc_link').href = "https://api.whatsapp.com/send?phone=5545998628681&text=Bom%20dia!%20Gostaria%20de%20incluir%20o%20tipo%20B%20na%20minha%20CNH";

        }
        break;
      }
    }
  }

  if (ok) {

    //set active step and active panel onclick
    if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
      if(activeStep == 1){
        activePanelNum = 0;
      }else {
        activePanelNum--;
      }
      activeStep--;
    } else {

      activeStep++;
      activePanelNum = nextPanel;

    }

    setActiveStep(activeStep);
    setActivePanel(activePanelNum);

  }

});

//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight, false);

//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight, false);

//changing animation via animation select !!!YOU DON'T NEED THIS CODE (if you want to change animation type, just change form panels data-attr)

const setAnimationType = newType => {
  DOMstrings.stepFormPanels.forEach(elem => {
    elem.dataset.animation = newType;
  });
};

//selector onchange - changing animation
const animationSelect = document.querySelector('.pick-animation__select');

animationSelect.addEventListener('change', () => {
  const newAnimationType = animationSelect.value;

  setAnimationType(newAnimationType);
});
