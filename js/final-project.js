/* ----INHOUDSOPGAVE ---- */
      //\\ Categorie A// ARRAYS EN OBJECTEN //

      //\\ Categorie B// FUNCITES //
          // B-I \\  // Creert knoppen
          // B-II \\ // Creert knoppen adhv btnList
          // B-III \\  // Creert divs adhv btnList
          // B-IV \\   // Generieke knop-klikker functie

      //\\ Categorie C // EVENT LISTENERS //
          // C-I \\   // Informatie-knoppen

//\\ Categorie A// ARRAYS & OBJECTEN //
let btnList = ["About", "Experience", "Core Qualities", "Education", "Certificates", "Skills", "Interests", "Profiles", "Contact"]

let objectAbout = {
  visibility: false,
  text: "Daan Onderstal lijkt soms een eikel, maar is eigenlijk een hele lieve jongen. Hij houdt van knuffelen en broodjes kroket. De legende gaat dat hij soms wat zinnigs te melden heeft, maar hier is nog geen onafhankelijk onderzoek naar gedaan.",
}

let objectExperience = {
  visibility: false,
  text: "Guide and Segway instructor at Bestdam Segway Tours & iGo Segway Events <br> Communications intern at the Shared Cultural Heritage Programme of the Cultural Heritage Agency <br> Online Editor at Nederlands Genootschap at Nieuwsgriekse Studies (volunteer basis) <br> Hygiëne-coordinatore at Van Otten AGF <br> History teacher internship at Walterbosch college"
}

let objectCoreQualities= {
  visibility: false,
  text: "Sexy <br> Funny <br> Intelligent <br> VERY modest.",
}

let objectEducation= {
  visibility: false,
  text: "Gymnasium at Gymnasium Apeldoorn<br> <br> <p align='right'> in Apeldoorn (2004 - 2008)</p><br> Havo at Koninklijke Scholengemeenschap<br> <br> <p align='right'> in Apeldoorn (2008 - 2010)</p><br> Journalism at Windesheim University of Applied Sciences <br> <br> <p align='right'> in Zwolle (2010 - 2011)</p><br> History Teacher at Windesheim University of Applied Sciences <br> <br> <p align='right'> in Zwolle (2011 - 2012)</p><br> Bachelors in History at the University of Amsterdam <br> <br> <p align='right'> in Amsterdam (2013 - 2016)</p><br> Masters in Public History at the University of Amsterdam <br> <br> <p align='right'>in Amsterdam (2016 - 2018)</p>IT Traineeship at Embrace IT<br> <br> <p align='right'> in Gouda (2018)</p>"
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
  text: "I've always had a strong interest in ancient religions and cultures. I'm especially enthousiastic about Phoenician, Egyptian and Roman history. To add to the list, I also have a penchant for medieval Netherlandish history, as well as the Byzantine Empire. Oh, and let's not forget World War 1, the Soviet Union and Communist China! <br> Apart from history, I'm also quite passionate about music and enjoy playing bass-guitar in my band, Juicepack. Soons performing in a sleazy bar near YOU! In the sparse free time I have left, I like playing strategic video games and reading books.",
}

let objectProfiles= {
  visibility: false,
  text: "https://www.linkedin.com/in/daan-onderstal-37364a15b/",
}

let objectContact= {
  visibility: false,
  text: "Telephone: 06-10546688 <br> Email: daanonderstal@hotmail.com",
}


//\\ Categorie B// FUNCITES //

// B-I \\ 
// Creert divs voor knoppen en text
function divCreater(btnList) {
  for (i = 0; i < btnList.length; i++) {
    let nwDiv = document.createElement('div')
    nwDiv.id = "div" + btnList[i]
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

const btnExperience = document.getElementById("btnExperience")
const textExperience = document.getElementById("textExperience")

const btnCoreQualities = document.getElementById("btnCore Qualities")
const textCoreQualities = document.getElementById("textCore Qualities")

const btnEducation = document.getElementById("btnEducation")
const textEducation = document.getElementById("textEducation")

const btnCertificates = document.getElementById("btnCertificates")
const textCertificates = document.getElementById("textCertificates")

const btnSkills = document.getElementById("btnSkills")
const textSkills = document.getElementById("textSkills")

const btnInterests = document.getElementById("btnInterests")
const textInterests = document.getElementById("textInterests")

const btnProfiles = document.getElementById("btnProfiles")
const textProfiles = document.getElementById("textProfiles")

const btnContact = document.getElementById("btnContact")
const textContact = document.getElementById("textContact")

// B-IV \\ 
// Generieke knop-klikker functie
function btnClicker(object, location) {
  if (object.visibility === false) {
    location.innerHTML = object.text
    object.visibility = true
  }
  else {
    location.innerHTML =  ""
    object.visibility = false
  }
}

//\\ Categorie C // EVENT LISTENERS //

// C-I \\ 
// Informatie-knoppen
btnAbout.addEventListener("click", function() {
  btnClicker(objectAbout, textAbout)
})

btnExperience.addEventListener("click", function() {
  btnClicker(objectExperience, textExperience)
})

btnCoreQualities.addEventListener("click", function() {
  btnClicker(objectCoreQualities, textCoreQualities)
})

btnEducation.addEventListener("click", function() {
  btnClicker(objectEducation, textEducation)
})

btnCertificates.addEventListener("click", function() {
  btnClicker(objectCertificates, textCertificates)
})

btnSkills.addEventListener("click", function() {
  btnClicker(objectSkills, textSkills)
})

btnInterests.addEventListener("click", function() {
  btnClicker(objectInterests, textInterests)
})

btnProfiles.addEventListener("click", function() {
  btnClicker(objectProfiles, textProfiles)
})

btnContact.addEventListener("click", function() {
  btnClicker(objectContact, textContact)
})