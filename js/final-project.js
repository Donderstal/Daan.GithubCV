/* ----INHOUDSOPGAVE ---- */
      //\\ Categorie A// ARRAYS EN OBJECTEN //

      //\\ Categorie B// FUNCITES //
          // B-I \\  // Creert knoppen
          // B-II \\ // Creert knoppen adhv btnList
          // B-III \\  // Creert divs adhv btnList
          // B-IV \\   // Generieke knop-klikker functie

      //\\ Categorie C // EVENT LISTENERS //
          // C-I \\   // Informatie-knoppen

      //\\ Categorie D // IMAGE EVENTS //

//\\ Categorie A// ARRAYS & OBJECTEN //
let btnList = ["About", "Experience", "Core Qualities", "Education", "Certificates", "Skills", "Interests", "Profiles", "Contact"]

let objectAbout = {
  visibility: false,
  text: "Daan Onderstal lijkt soms een eikel, maar is eigenlijk een hele lieve jongen. Hij houdt van knuffelen en broodjes kroket. De legende gaat dat hij soms wat zinnigs te melden heeft, maar hier is nog geen onafhankelijk onderzoek naar gedaan.",
}

let objectExperience = {
  visibility: false,
  text: "IT Traineeship at Embrace IT<br> <br> <p align='right'> in Gouda (2018)</p> <br> <br> Communications intern at the Shared Cultural Heritage Programme of the Cultural Heritage Agency <br> <br> <p align='right'> in Amersfoort (2017)</p> <br> Guide and Segway instructor at Bestdam Segway Tours & iGo Segway Events <br> <br> <p align='right'> in Amsterdam (2015 - 2017)</p> <br> Online Editor at Nederlands Genootschap at Nieuwsgriekse Studies <br> <br> <p align='right'> in Amsterdam (2015)</p> <br> History teacher internship at Walterbosch College  <br> <br> <p align='right'> in Apeldoorn (2012)</p> <br> Hygiëne-coordinator at Van Otten AGF  <br> <br> <p align='right'> in Apeldoorn (2011 - 2013)</p>"
}

let objectCoreQualities= {
  visibility: false,
  text: "<p align=center>Sexy <br> Funny <br> Intelligent <br> VERY modest.<p>",
}

let objectEducation= {
  visibility: false,
  text: "IT Traineeship at Embrace IT<br> <br> <p align='right'> in Gouda (2018)</p> <br>Masters in Public History at the University of Amsterdam <br> <br> <p align='right'>in Amsterdam (2016 - 2018)</p><br>Bachelors in History at the University of Amsterdam <br> <br> <p align='right'> in Amsterdam (2013 - 2016)</p><br> History Teacher at Windesheim University of Applied Sciences <br> <br> <p align='right'> in Zwolle (2011 - 2012)</p><br> Journalism at Windesheim University of Applied Sciences <br> <br> <p align='right'> in Zwolle (2010 - 2011)</p><br> HAVO at Koninklijke Scholengemeenschap<br> <br> <p align='right'> in Apeldoorn (2008 - 2010)</p><br> Gymnasium at Gymnasium Apeldoorn<br> <br> <p align='right'> in Apeldoorn (2004 - 2008)</p>"
}

let objectCertificates= {
  visibility: false,
  text: "Daan Onderstal lijkt soms een eikel, maar is eigenlijk een hele lieve jongen. Hij houdt van knuffelen en broodjes kroket. De legende gaat dat hij soms wat zinnigs te melden heeft, maar hier is nog geen onafhankelijk onderzoek naar gedaan.",
}

let objectSkills= {
  visibility: false,
  text: "Daan Onderstal lijkt soms een eikel, maar is eigenlijk een hele lieve jongen. Hij houdt van knuffelen en broodjes kroket. De legende gaat dat hij soms wat zinnigs te melden heeft, maar hier is nog geen onafhankelijk onderzoek naar gedaan.",
}

let objectInterests= {
  visibility: false,
  text: "I've always had a strong interest in ancient religions and cultures. I'm especially enthousiastic about Phoenician, Egyptian and Roman history. To add to the list, I also have a penchant for medieval Netherlandish history, as well as the Byzantine Empire. Oh, and let's not forget World War 1, the Soviet Union and Communist China! <br> Apart from history, I'm also quite passionate about music and enjoy playing bass-guitar in my band, Juicepack. Soon performing in a sleazy bar near YOU! In the sparse free time I have left, I like playing strategic video games and reading books.",
}

let objectProfiles= {
  visibility: false,
  text: "https://www.linkedin.com/in/daan-onderstal-37364a15b/",
}

let objectContact= {
  visibility: false,
  text: "<p align=center>Telephone: 06-10546688 <br> Email: daanonderstal@hotmail.com<p>",
}


//\\ Categorie B// FUNCITES //

// B-I \\ 
// Creert divs voor knoppen en text adhv btnList
function divCreater(btnList) {
  for (i = 0; i < btnList.length; i++) {
    let nwDiv = document.createElement('div')
    nwDiv.id = "div" + btnList[i]
    nwDiv.className = "bigdiv"
    let Lctn = document.getElementsByClassName('main-container')[0]
    Lctn.appendChild(nwDiv)
  }
}

divCreater(btnList)

// B-II \\ 
// Creert knoppen adhv btnList
function btnCreater(btnList) {
  for (i = 0; i < btnList.length; i++) {
    let nwBtn = document.createElement('button')
    nwBtn.id = "btn" + btnList[i]
    nwBtn.className = "btn btn-dark"
    nwBtn.innerHTML = btnList[i]
    let Lctn = document.getElementById("div" + btnList[i])
    Lctn.appendChild(nwBtn)
  }
}

btnCreater(btnList)

// B-III \\ 
// Creert divs adhv btnList
function txtDivCreater(btnList) {
  for (i = 0; i < btnList.length; i++) {
    let nwTxtDiv = document.createElement('div')
    nwTxtDiv.id = 'text' + btnList[i]
    nwTxtDiv.className = "container"
    let Lctn = document.getElementById("div" + btnList[i])
    Lctn.appendChild(nwTxtDiv)
  }
}

txtDivCreater(btnList)

// Variabelen voor B-IV
const btnAbout = document.getElementById("btnAbout")
const textAbout = document.getElementById("textAbout")
const divAbout = document.getElementById("divAbout")

const btnExperience = document.getElementById("btnExperience")
const textExperience = document.getElementById("textExperience")
const divExperience = document.getElementById("divExperience")

const btnCoreQualities = document.getElementById("btnCore Qualities")
const textCoreQualities = document.getElementById("textCore Qualities")
const divCoreQualities = document.getElementById("divCore Qualities")

const btnEducation = document.getElementById("btnEducation")
const textEducation = document.getElementById("textEducation")
const divEducation = document.getElementById("divEducation")

const btnCertificates = document.getElementById("btnCertificates")
const textCertificates = document.getElementById("textCertificates")
const divCertificates = document.getElementById("divCertificates")

const btnSkills = document.getElementById("btnSkills")
const textSkills = document.getElementById("textSkills")
const divSkills = document.getElementById("divSkills")

const btnInterests = document.getElementById("btnInterests")
const textInterests = document.getElementById("textInterests")
const divInterests = document.getElementById("divInterests")

const btnProfiles = document.getElementById("btnProfiles")
const textProfiles = document.getElementById("textProfiles")
const divProfiles = document.getElementById("divProfiles")

const btnContact = document.getElementById("btnContact")
const textContact = document.getElementById("textContact")
const divContact = document.getElementById("divContact")

// B-IV \\ 
// Generieke knop-klikker functie
function btnClicker(object, location, button, relocation) {
  if (object.visibility === false) {
    location.innerHTML = object.text
    object.visibility = true
    location.appendChild(button)
    let btns = document.getElementsByClassName("btn btn-dark")
      for (i = 0; i < btns.length; ++i) {
        btns[i].style.display = "none"
        button.style.display = "block"
    }
  }
  else {
    location.innerHTML =  ""
    object.visibility = false
    relocation.appendChild(button)
    relocation.insertBefore(button, relocation.childNodes[0])
    let btns = document.getElementsByClassName("btn btn-dark")
    for (i = 0; i < btns.length; ++i) {
      btns[i].style.display = "block"
    }
  }
}

//\\ Categorie C // EVENT LISTENERS //

// C-I \\ 
// Informatie-knoppen
btnAbout.addEventListener("click", function() {
  btnClicker(objectAbout, textAbout, btnAbout, divAbout)
})

btnExperience.addEventListener("click", function() {
  btnClicker(objectExperience, textExperience, btnExperience, divExperience)
})

btnCoreQualities.addEventListener("click", function() {
  btnClicker(objectCoreQualities, textCoreQualities, btnCoreQualities, divCoreQualities)
})

btnEducation.addEventListener("click", function() {
  btnClicker(objectEducation, textEducation, btnEducation, divEducation)
})

btnCertificates.addEventListener("click", function() {
  btnClicker(objectCertificates, textCertificates, btnCertificates, divCertificates)
})

btnSkills.addEventListener("click", function() {
  btnClicker(objectSkills, textSkills, btnSkills, divSkills)
})

btnInterests.addEventListener("click", function() {
  btnClicker(objectInterests, textInterests, btnInterests, divInterests)
})

btnProfiles.addEventListener("click", function() {
  btnClicker(objectProfiles, textProfiles, btnProfiles, divProfiles)
})

btnContact.addEventListener("click", function() {
  btnClicker(objectContact, textContact, btnContact, divContact)
})

//\\ Categorie D // IMAGE EVENTS //

const Kheper = document.getElementById("Kheper")

Kheper.addEventListener("click", function() {
  const mainContainer = document.getElementsByClassName("main-container")[0]
  const raColumn = document.getElementsByClassName("column")[0]
    mainContainer.style.visibility = "visible"
    raColumn.style.visibility = "visible"
})