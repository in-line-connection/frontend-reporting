import Html from "../Html/Html";
import Api from "../Api/Api";
import testSpeech from "../Speech/Talktool";
import { Array } from "core-js";

export default () => new Components();
class Components {
  getAppContext() {
    return Html().select("#app");
  }

  getWrapperDiv() {
    return Html()
      .create("div")
      .addClass("wrapper");
  }
  renderHeader() {
    const mainHeader = Html()
      .create("header")
      .addClass("header");
    const mainHeaderTitle = Html()
      .create("h1")
      .addClass("header__title")
      .text("In-Line Connect");
    mainHeader.addChild(mainHeaderTitle);
    return mainHeader;
  }
  renderLoginFields() {
    const homepageContentBlock = Html()
      .create("div")
      .addClass("homePageContent");
    const backgroundImage = Html()
      .create("div")
      .addClass("backgroundImage");
    const loginContentBlock = Html()
      .create("div")
      .addClass("Login");
    const loginPageTitle = Html()
      .create("h2")
      .addClass("Login__title");
    const loginForm = Html()
      .create("form")
      .addClass("login__form")
      .addAttribute("action", "");
    const MedicNumLabel = Html()
      .create("label")
      .addClass("login__form-label")
      .text("Medic #:");
    const medicNumInputForm = Html()
      .create("input")
      .addAttribute("type", "text");
    const companyNameLabel = Html()
      .create("label")
      .addClass("login__form-label")
      .text("Company Name:");
    const companyInputForm = Html()
      .create("input")
      .addAttribute("type", "text");
    const submitButton = Html()
      .create("input")
      .addAttribute("type", "submit")
      .addClass("login__form-button")
      .text("Login")
      .click(event => {
        event.preventDefault();
        this.renderPageOptions();
      });

    loginContentBlock.addChild(loginPageTitle);

    loginContentBlock.addChild(loginForm);
    loginForm.addChild(MedicNumLabel);
    loginForm.addChild(medicNumInputForm);
    loginForm.addChild(companyNameLabel);
    loginForm.addChild(companyInputForm);
    loginForm.addChild(submitButton);
    homepageContentBlock.addChild(loginContentBlock);
    backgroundImage.addChild(homepageContentBlock);
    return backgroundImage;

  }
  renderMainFooter() {
    const footer = Html()
      .create("footer")
      .addClass("footer");
    const footerContent = Html()
      .create("small")
      .addClass("footer__copy")
      .html("&copy 2019 In-Line Connect");
    footer.addChild(footerContent);
    return footer;
  }

  renderMVCQuestions() {
    const container = Html().select(".container");
    const contentBlock = Html()
      .create("Form")
      .addClass("Form_Block");
    const backToOptionsLink = Html()
      .create("a")
      .addClass("back__options__link")
      .text("Return to Options")
      .click(event => {
        event.preventDefault();
        this.renderPageOptions();
      });
    const traumaFormTitle = Html()
      .create("h1")
      .addClass("header__trauma")
      .text("TRAUMA");
    const mvcBlock = Html().create("section").addClass("MVC__block");
    const mvcContentBlock = Html()
      .create("section")
      .addClass("MVC__block");
    const seatSection = Html().create("Section")
    const seatPositionLabel = Html()
      .create("label")
      .text("Seat Position: ");
    const seatPositionInput = Html()
      .create("input")
      .addClass("MVC__block-item")
      .addClass("seatInput")
      .addClass("Required-Field")
      .addAttribute("id", "seatPosition")
      .addAttribute("type", "text")
      .addAttribute("name", "seat-position");
    const speechButton13 = Html()
      .create("input")
      .addClass("speechButton")
      .addAttribute("type", "button")
      .click(event => {
        event.preventDefault();

        testSpeech(".seatInput");
      })
    const speedSection = Html().create("Section")
    const speedLabel = Html()
      .create("label")
      .text("Speed: ");
    const speedInput = Html()
      .create("input")
      .addClass("MVC__block-item")
      .addClass("speedInput")
      .addClass("Required-Field")
      .addAttribute("id", "speed")
      .addAttribute("type", "text")
      .addAttribute("name", "speed");
    const speechButton12 = Html()
      .create("input")
      .addClass("speechButton")
      .addAttribute("type", "button")
      .click(event => {
        event.preventDefault();

        testSpeech(".speedInput");
      })


    const ambulatoryContentDiv = Html().create("div");
    const extricationContentDiv = Html().create("div");
    const immobilizationContentDiv = Html().create("div");


    const ambulatoryLabel = Html()
      .create("label")
      .text("Ambulatory: ");

    const ambulatoryInputCheckBox = Html()
      .create("input")
      .addClass("MVC__block-item")
      .addAttribute("id", "ambulatory-box")
      .addAttribute("type", "checkbox")
      .addAttribute("name", "ambulatory");


    const immobilizedInputcheckBoxText = Html()
      .create("label")
      .text("(Check Box if True)");

    const ambulatoryInputCheckBoxText = Html()
      .create("label")
      .text("(Check box if True)");


    const prolongedExtricationInputText = Html()
      .create("label")
      .text("(Check Box if true)");

    const prolongedExtricationLabel = Html()
      .create("label")
      .text("Prolonged Extrication: ");

    const prolongedExtricationInputTrue = Html()
      .create("input")
      .addClass("MVC__block-item")
      .addAttribute("id", "prolonged-extrication-box")
      .addAttribute("type", "checkbox")
      .addAttribute("name", "prolonged extrication");


    const immobilizedLabel = Html()
      .create("label")
      .text("Immobilized: ");

    const immobilizedInputCheckBox = Html()
      .create("input")
      .addClass("MVC__block-item")
      .addAttribute("id", "immobilized-box")
      .addAttribute("type", "checkbox")
      .addAttribute("name", "immobilized");

    mvcBlock.addChild(seatPositionLabel);
    seatSection.addChild(seatPositionInput);
    seatSection.addChild(speechButton13)
    mvcBlock.addChild(seatSection);

    mvcBlock.addChild(speedLabel);
    speedSection.addChild(speedInput);
    speedSection.addChild(speechButton12)
    mvcBlock.addChild(speedSection);

    mvcContentBlock.addChild(mvcBlock)

    mvcContentBlock.addChild(ambulatoryContentDiv);
    ambulatoryContentDiv.addChild(ambulatoryLabel);
    ambulatoryContentDiv.addChild(ambulatoryInputCheckBox);
    ambulatoryContentDiv.addChild(ambulatoryInputCheckBoxText);

    mvcContentBlock.addChild(extricationContentDiv);
    extricationContentDiv.addChild(prolongedExtricationLabel);
    extricationContentDiv.addChild(prolongedExtricationInputTrue);
    extricationContentDiv.addChild(prolongedExtricationInputText);

    mvcContentBlock.addChild(immobilizationContentDiv);
    immobilizationContentDiv.addChild(immobilizedLabel);
    immobilizationContentDiv.addChild(immobilizedInputCheckBox);
    immobilizationContentDiv.addChild(immobilizedInputcheckBoxText);

    contentBlock.addChild(backToOptionsLink);
    contentBlock.addChild(traumaFormTitle);
    contentBlock.addChild(mvcContentBlock);

    const traumaFormContent = this.renderTraumaFormContent();
    contentBlock.addChild(traumaFormContent);
    container.replace(contentBlock);
  }

  renderPageChiefComplaint() {
    const container = Html().select(".container");
    const backToOptionsLink = Html()
      .create("a")
      .addClass("back__options__link")
      .text("Return to Options")
      .click(event => {
        event.preventDefault();
        this.renderPageOptions();
      });
    const chiefComplaintBlock = Html()
      .create("div")
      .addClass("chiefComplaintBlock");
    const chiefComplaintTitle = Html()
      .create("h1")
      .addClass("chiefComplaintBlock__title")
      .text("Chief Complaint");
    const cheifComplaintButtons = Html()
      .create("div")
      .addClass("chiefComplaintBlock__list");
    const mvcButton = Html()
      .create("button")
      .addAttribute("id", "MVC")
      .addClass("chiefComplaintBlock__list-button")
      .text("MVC")
      .click(event => {
        event.preventDefault();
        this.renderMVCQuestions();
      });
    const gswButton = Html()
      .create("button")
      .addAttribute("id", "GSW")
      .addClass("chiefComplaintBlock__list-button")
      .text("GSW");
    const fallButton = Html()
      .create("button")
      .addAttribute("id", "fall")
      .addClass("chiefComplaintBlock__list-button")
      .text("Fall");
    const bluntForceButton = Html()
      .create("button")
      .addAttribute("id", "bluntForce")
      .addClass("chiefComplaintBlock__list-button")
      .text("Blunt-Force Trauma");
    const penetratingTraumaButton = Html()
      .create("button")
      .addAttribute("id", "penetratingTrauma")
      .addClass("chiefComplaintBlock__list-button")
      .text("Penetrating Trauma");
    const compartmentSyndromeButton = Html()
      .create("button")
      .addAttribute("id", "compartmentSyndrome")
      .addClass("chiefComplaintBlock__list-button")
      .text("Compartment Syndrome");

    chiefComplaintBlock.addChild(backToOptionsLink);
    cheifComplaintButtons.addChild(mvcButton);
    cheifComplaintButtons.addChild(gswButton);
    cheifComplaintButtons.addChild(fallButton);
    cheifComplaintButtons.addChild(bluntForceButton);
    cheifComplaintButtons.addChild(penetratingTraumaButton);
    cheifComplaintButtons.addChild(compartmentSyndromeButton);

    chiefComplaintBlock.addChild(chiefComplaintTitle);
    chiefComplaintBlock.addChild(cheifComplaintButtons);
    container.replace(chiefComplaintBlock);
    return container;
  }

  renderPageHome() {
    const app = this.getAppContext();
    const wrapperDiv = this.getWrapperDiv();
    const mainHeader = this.renderHeader();
    const loginContent = this.renderLoginFields();
    const mainFooter = this.renderMainFooter();
    wrapperDiv.addChild(mainHeader);
    wrapperDiv.addChild(loginContent);
    wrapperDiv.addChild(mainFooter);
    app.replace(wrapperDiv);
  }

  renderPageOptions() {
    const app = this.getAppContext();
    const wrapperDiv = this.getWrapperDiv();
    const mainHeader = this.renderHeader();
    const optionsPageContent = this.renderPageOptionsContent();
    const mainFooter = this.renderMainFooter();
    wrapperDiv.addChild(mainHeader);
    wrapperDiv.addChild(optionsPageContent);
    wrapperDiv.addChild(mainFooter);
    app.replace(wrapperDiv);
  }

  renderPageOptionsContent() {
    const mainOptionsContent = Html().create("main");
    const optionsPagePrompt = Html().create("h2").addClass("Options-Prompt").text("Choose Report Type")
    const optionsContainer = Html()
      .create("div")
      .addClass("container");
    const optionsCardiacButton = Html()
      .create("button")
      .addClass("buttons");
    const optionsCardiacLabel = Html()
      .create("p")
      .addAttribute("id", "cardiac__label")
      .addClass("options__labels")
      .text("Cardiac");
    const optionsTraumaButton = Html()
      .create("button")
      .addClass("buttons")
      .click(event => {
        event.preventDefault();
        this.renderPageChiefComplaint();
      });

    const optionsTraumaLabel = Html()
      .create("p")
      .addAttribute("id", "trauma__label")
      .addClass("options__labels")
      .text("Trauma");
    const optionsMedicalButton = Html()
      .create("button")
      .addClass("buttons");
    const optionsMedicalLabel = Html()
      .create("p")
      .addAttribute("id", "medical__label")
      .addClass("options__labels")
      .text("Medical");
    optionsContainer.addChild(optionsPagePrompt)
    mainOptionsContent.addChild(optionsContainer);
    optionsContainer.addChild(optionsCardiacButton);
    optionsCardiacButton.addChild(optionsCardiacLabel);
    optionsContainer.addChild(optionsTraumaButton);
    optionsTraumaButton.addChild(optionsTraumaLabel);
    optionsContainer.addChild(optionsMedicalButton);
    optionsMedicalButton.addChild(optionsMedicalLabel);

    return mainOptionsContent;
  }

  renderTraumaFormContent() {
    const traumaFormContentBlock = Html()
      .create("div")
      .addClass("traumaForm");

    const traumaFormContainer = Html()
      .create("div")
      .addClass("container");

    // this is the general info section, could be recfactored into sperate section later
    const generalSectionBlock = Html()
      .create("section")
      .addClass("GeneralInfo__section");

    const generalSectionTitle = Html()
      .create("h2")
      .text("General Information: ");


    const dateSection = Html().create("Section")
    const dateEntryLabel = Html()
      .create("label")
      .text("Date:");
    const dateInputField = Html()
      .create("input")
      .addClass("generalInfo__section-field")
      .addClass("dateInput")
      .addClass("Required-Field")
      .addAttribute("id", "dateField")
      .addAttribute("type", "text")
      .addAttribute("name", "Date");
    const speechButton11 = Html()
      .create("input")
      .addClass("speechButton")
      .addAttribute("type", "button")
      .click(event => {
        event.preventDefault();

        testSpeech(".dateInput");
      })
    const timeSection = Html().create("Section")
    const timeOfDayEntryLabel = Html()
      .create("label")
      .text("Time of Day:");
    const timeOFDayInputField = Html()
      .create("input")
      .addClass("generalInfo__section-field")
      .addClass("timeInput")
      .addClass("Required-Field")
      .addAttribute("id", "timeOfDayField")
      .addAttribute("type", "text")
      .addAttribute("name", "Time of Day");

    const speechButton10 = Html()
      .create("input")
      .addClass("speechButton")
      .addAttribute("type", "button")
      .click(event => {
        event.preventDefault();

        testSpeech(".timeInput");
      })

    const sexSection = Html().create("Section")
    const sexEntryLabel = Html()
      .create("label")
      .text("Sex:");
    const sexInputField = Html()
      .create("input")
      .addClass("generalInfo__section-field")
      .addClass("sexInput")
      .addClass("Required-Field")
      .addAttribute("id", "sexField")
      .addAttribute("type", "text")
      .addAttribute("name", "Sex");

    const speechButton9 = Html()
      .create("input")
      .addClass("speechButton")
      .addAttribute("type", "button")
      .click(event => {
        event.preventDefault();

        testSpeech(".sexInput");
      })

    const ageSection = Html().create("Section")
    const ageEntryLabel = Html()
      .create("label")
      .text("Age:");
    const ageInputField = Html()
      .create("input")
      .addClass("generalInfo__section-field")
      .addClass("ageInput")
      .addClass("Required-Field")
      .addAttribute("id", "ageField")
      .addAttribute("type", "text")
      .addAttribute("name", "Age");
    const speechButton8 = Html()
      .create("input")
      .addClass("speechButton")
      .addAttribute("type", "button")
      .click(event => {
        event.preventDefault();

        testSpeech(".ageInput");
      })
    generalSectionBlock.addChild(generalSectionTitle);
    generalSectionBlock.addChild(dateEntryLabel);
    dateSection.addChild(dateInputField);
    dateSection.addChild(speechButton11)
    generalSectionBlock.addChild(dateSection);

    generalSectionBlock.addChild(timeOfDayEntryLabel);
    timeSection.addChild(timeOFDayInputField);
    timeSection.addChild(speechButton10)
    generalSectionBlock.addChild(timeSection);

    // generalSectionBlock.addChild(Html().create("br"))
    generalSectionBlock.addChild(sexEntryLabel);
    sexSection.addChild(sexInputField);
    sexSection.addChild(speechButton9)
    generalSectionBlock.addChild(sexSection);

    generalSectionBlock.addChild(ageEntryLabel);
    ageSection.addChild(ageInputField);
    ageSection.addChild(speechButton8)
    generalSectionBlock.addChild(ageSection);

    traumaFormContentBlock.addChild(generalSectionBlock);
    // this is the vitals section, can refactor into method later
    const vitalsSectionBlock = Html()
      .create("section")
      .addClass("vitals__section");

    const vitalsSectionTitle = Html()
      .create("h2")
      .text("Vital Signs: ");

    const bpSection = Html().create("Section")
    const bpEntryLabel = Html()
      .create("label")
      .text("B/P");
    const bpInputField = Html()
      .create("input")
      .addClass("vitals__section-field")
      .addClass("bpInput")
      .addClass("Required-Field")
      .addAttribute("id", "bpField")
      .addAttribute("type", "text")
      .addAttribute("name", "B/P:");
    const speechButton7 = Html()
      .create("input")
      .addClass("speechButton")
      .addAttribute("type", "button")
      .click(event => {
        event.preventDefault();

        testSpeech(".bpInput");
      })

    const hrSection = Html().create("Section")
    const hrEntryLabel = Html()
      .create("label")
      .text("H/R:");
    const hrInputField = Html()
      .create("input")
      .addClass("vitals__section-field")
      .addClass("hrInput")
      .addClass("Required-Field")
      .addAttribute("id", "hrField")
      .addAttribute("type", "text")
      .addAttribute("name", "H/R");
    const speechButton6 = Html()
      .create("input")
      .addClass("speechButton")
      .addAttribute("type", "button")
      .click(event => {
        event.preventDefault();

        testSpeech(".hrInput");
      })
    const spo2Section = Html().create("Section")
    const spo2EntryLabel = Html()
      .create("label")
      .text("SPO2: ");
    const spo2InputField = Html()
      .create("input")
      .addClass("vitals__section-field")
      .addClass("spo2Input")
      .addClass("Required-Field")
      .addAttribute("id", "spO2Field")
      .addAttribute("type", "text")
      .addAttribute("name", "Spo2");

    const speechButton5 = Html()
      .create("input")
      .addClass("speechButton")
      .addAttribute("type", "button")
      .click(event => {
        event.preventDefault();

        testSpeech(".spo2Input");
      })
    const rSection = Html().create("Section")
    const rEntryLabel = Html()
      .create("label")
      .text("R: ");
    const rInputField = Html()
      .create("input")
      .addClass("vitals__section-field")
      .addClass("Required-Field")
      .addClass("rInput")
      .addAttribute("id", "rField")
      .addAttribute("type", "text")
      .addAttribute("name", "R");

    const speechButton4 = Html()
      .create("input")
      .addClass("speechButton")
      .addAttribute("type", "button")
      .click(event => {
        event.preventDefault();

        testSpeech(".rInput");
      })

    const gcsSection = Html().create("Section")
    const gcsEntryLabel = Html()
      .create("label")
      .text("GCS: ");
    const gcsInputField = Html()
      .create("input")
      .addClass("vitals__section-field")
      .addClass("gcsInput")
      .addClass("Required-Field")
      .addAttribute("id", "gcsField")
      .addAttribute("type", "text")
      .addAttribute("name", "GCS");

    const speechButton3 = Html()
      .create("input")
      .addClass("speechButton")
      .addAttribute("type", "button")
      .click(event => {
        event.preventDefault();

        testSpeech(".gcsInput");
      })

    const gluSection = Html().create("Section")
    const gluEntryLabel = Html()
      .create("label")
      .text("GLU: ");
    const gluInputField = Html()
      .create("input")
      .addClass("vitals__section-field")
      .addClass("gluInput")
      .addClass("Required-Field")
      .addAttribute("id", "gluField")
      .addAttribute("type", "text")
      .addAttribute("name", "GLU");

    const speechButton2 = Html()
      .create("input")
      .addClass("speechButton")
      .addAttribute("type", "button")
      .click(event => {
        event.preventDefault();

        testSpeech(".gluInput");
      })

    const narrativeSection = Html().create("Section").addClass("vitals__section")

    const narrativeEntryLabel = Html()
      .create("label")
      .addClass("Narrative_Title")
      .text("Narrative: ");

    const narrativeButtonSection = Html().create("Section")
    const narrativeInputField = Html()
      .create("textarea")
      .addClass("narrative__section-field")
      .addClass("vitals__section-fieldNar")
      .addClass("Required-Field")
      .addAttribute("id", "narrativeField")
      .addAttribute("type", "text")
      .addAttribute("name", "narrative")
      .addAttribute("value", "");

    const speechButton = Html()
      .create("input")
      .addClass("speechButton")
      .addAttribute("type", "button")
      .click(event => {
        event.preventDefault();

        testSpeech(".vitals__section-fieldNar");
        // <img src="./image/microphone.png"></img>
      }
      );


    const traumaSubmitButton = Html()
      .create("button")
      .addClass("trauma__submit-button")
      .text("Submit")
      .click(event => {
        this.inputChecker(event);
      });

    // traumaFormContentBlock.addChild(traumaFormTitle);
    // traumaFormContentBlock.addChild(traumaFormContainer);

    vitalsSectionBlock.addChild(vitalsSectionTitle);
    vitalsSectionBlock.addChild(hrEntryLabel);
    hrSection.addChild(hrInputField);
    hrSection.addChild(speechButton6)
    vitalsSectionBlock.addChild(hrSection);

    vitalsSectionBlock.addChild(bpEntryLabel);
    bpSection.addChild(bpInputField);
    bpSection.addChild(speechButton7)
    vitalsSectionBlock.addChild(bpSection);

    vitalsSectionBlock.addChild(spo2EntryLabel);
    spo2Section.addChild(spo2InputField);
    spo2Section.addChild(speechButton5)
    vitalsSectionBlock.addChild(spo2Section);

    vitalsSectionBlock.addChild(rEntryLabel);
    rSection.addChild(rInputField);
    rSection.addChild(speechButton4)
    vitalsSectionBlock.addChild(rSection);

    vitalsSectionBlock.addChild(gcsEntryLabel);
    gcsSection.addChild(gcsInputField);
    gcsSection.addChild(speechButton3)
    vitalsSectionBlock.addChild(gcsSection);

    vitalsSectionBlock.addChild(gluEntryLabel);
    gluSection.addChild(gluInputField);
    gluSection.addChild(speechButton2)
    vitalsSectionBlock.addChild(gluSection);

    traumaFormContentBlock.addChild(vitalsSectionBlock);
    narrativeSection.addChild(narrativeEntryLabel);
    narrativeButtonSection.addChild(narrativeInputField);
    narrativeButtonSection.addChild(speechButton);
    narrativeSection.addChild(narrativeButtonSection);

    narrativeSection.addChild(traumaSubmitButton);
    traumaFormContentBlock.addChild(narrativeSection)

    return traumaFormContentBlock;
  }

  inputChecker(event) {
    const requiredItems = document.querySelectorAll(".Required-Field");
    console.log("test");
    if (this.chceckForEmptyValues(requiredItems)) {
      alert("Value is required..");
      event.preventDefault();
    } else {
      console.log("Report Sent");
      this.mvcClick(event);
    }
  }
  chceckForEmptyValues(nodeList) {
    let hasEmptyField = false;
    nodeList.forEach(node => {
      if (node.value === undefined || node.value === "") {
        hasEmptyField = true;
      }
    });
    return hasEmptyField;
  }
  mvcClick(event) {
    event.preventDefault();
    const newMedicNum = "1234";
    const newComplaint = "MVC";
    const newDate = document.querySelector("#dateField").value;
    const newSex = document.querySelector("#sexField").value;
    const newAge = document.querySelector("#ageField").value;
    const newtimeOfIncident = document.querySelector("#timeOfDayField").value;
    const bpEntryInputFieldValue = document.querySelector("#bpField").value;
    const hrEntryInputFieldValue = document.querySelector("#hrField").value;
    const spo2EntryInputFieldValue = document.querySelector("#spO2Field").value;
    const rEntryInputFieldValue = document.querySelector("#rField").value;
    const gcsEntryInputFieldValue = document.querySelector("#gcsField").value;
    const gluEntryInputFieldValue = document.querySelector("#gluField").value;
    const narrativeEntryInputFieldValue = document.querySelector(
      "#narrativeField"
    ).value;
    const seatPositionInputFieldValue = document.querySelector("#seatPosition")
      .value;
    const speedInputFieldValue = document.querySelector("#speed").value;

    let ambulatoryBoxValue = document.querySelector("#ambulatory-box");
    if (ambulatoryBoxValue.checked) {
      ambulatoryBoxValue = true;
    } else ambulatoryBoxValue = false;
    console.log(ambulatoryBoxValue);
    let prolongedExtricationBoxValue = document.querySelector(
      "#prolonged-extrication-box"
    );
    if (prolongedExtricationBoxValue.checked) {
      prolongedExtricationBoxValue = true;
    } else prolongedExtricationBoxValue = false;
    let immobilizedBoxValue = document.querySelector("#immobilized-box");
    if (immobilizedBoxValue.checked) {
      immobilizedBoxValue = true;
    } else immobilizedBoxValue = false;

    Api().postRequest("http://localhost:8080/api/motor-vehicle-crash-reports", {
      medicNum: newMedicNum,
      chiefComplaint: newComplaint,
      date: newDate,
      timeOfIncident: newtimeOfIncident,
      narrative: narrativeEntryInputFieldValue,
      sex: newSex,
      age: newAge,
      bloodPressure: bpEntryInputFieldValue,
      heartRate: hrEntryInputFieldValue,
      spO2: spo2EntryInputFieldValue,
      respiratoryRate: rEntryInputFieldValue,
      gcs: gcsEntryInputFieldValue,
      bloodSugar: gluEntryInputFieldValue,
      seatPosition: seatPositionInputFieldValue,
      speed: speedInputFieldValue,
      ambulatory: ambulatoryBoxValue,
      prolongedExtrication: prolongedExtricationBoxValue,

      immobilized: immobilizedBoxValue
    });
    this.renderPageOptions();
  }
}

// mvcReport => {
//   this.renderPageOptions();
// }
