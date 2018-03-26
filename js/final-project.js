/* ----INHOUDSOPGAVE ---- */
      //\\ Categorie A// VARIABELEN, ARRAYS, OBJECTEN //
          // A-I \\ // Variabelen

      //\\ Categorie B// FUNCITES //
          // B-I \\ // Generieke knop-klikker functie
          // B-II \\ // Creert knoppen

      //\\ Categorie C // EVENT LISTENERS //
          // C-I \\ // Informatie-knoppen




//\\ Categorie A// VARIABELEN, ARRAYS, OBJECTEN //

// A-I \\ 
// Variabelen
const btnAbout = document.getElementById("btnAbout")

const textAbout = document.getElementById("textAbout")

let btnList = ["About", "Experience", "Core Qualities", "Education", "Certificates", "Skills", "Interests", "Profiles", "Contact"]

let objectAbout = {
  visibility: false,
  text: "Daan Onderstal lijkt soms een eikel, maar is eigenlijk een hele lieve jongen. Hij houdt van knuffelen en broodjes kroket. De legende gaat dat hij soms wat zinnigs te melden heeft, maar hier is nog geen onafhankelijk onderzoek naar gedaan.",

}

//\\ Categorie B// FUNCITES //

// B-I \\ 
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

// B-II \\ 
// Creert divs adhv btnList
function divCreater(btnList) {
  for (i = 0; i < btnList.length; i++) {
    let nwDiv = document.createElement('div')
    nwDiv.id = "div"
    let Lctn = document.getElementsByClassName('main-container')[0]
    Lctn.appendChild(nwDiv)
  }
}

divCreater(btnList)

// B-III \\ 
// Creert knoppen adhv btnList
function btnCreater(btnList) {
  for (i = 0; i < btnList.length; i++) {
    let nwBtn = document.createElement('button')
    nwBtn.id = "btn"
    nwBtn.className = "btn btn-dark"
    nwBtn.innerHTML = "Werkt dit?"
    let Lctn = document.getElementsByClassName('main-container')[0]
    Lctn.appendChild(nwBtn)
  }
}

btnCreater(btnList)

// B-IV \\ 
// Creert divs adhv btnList
function txtDivCreater(btnList) {
  for (i = 0; i < btnList.length; i++) {
    let nwTxtDiv = document.createElement('div')
    nwTxtDiv.id = 'text-' + btnList[i]
    nwTxtDiv.className = "container"
    nwTxtDiv.innerHTML = "Werkt dit?"
    let Lctn = document.getElementsByClassName('main-container')[0]
    Lctn.appendChild(nwTxtDiv)
  }
}

txtDivCreater(btnList)

//\\ Categorie C // EVENT LISTENERS //

// C-I \\ 
// Informatie-knoppen
btnAbout.addEventListener("click", function() {
  btnClicker(objectAbout, textAbout)
})
