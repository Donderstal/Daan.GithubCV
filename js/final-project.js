/* ----INHOUDSOPGAVE ---- */
      //\\A// ARRAYS EN OBJECTEN //

      //\\B// FUNCITES //
          // B-I \\    // Creert knoppen
          // B-II \\   // Creert knoppen adhv btnList
          // B-III \\  // Creert divs adhv btnList
          // B-IV \\   // Generieke knop-klikker functie
          // B-V \\    // Github API functie
          // B-VI \\   // Functie/event listener voor Kheper

      //\\C// EVENT LISTENERS //
          // C-I \\   // Informatie-knoppen


//\\A// ARRAYS & OBJECTEN //

let btnList = ["About", "Experience", "Core Qualities", "Education", "Certificates", "Skills", "Interests", "Profiles", "Contact", "Github Repositories"]

let objectAbout = {
  visibility: false,
  text: "<br>Greetings internet traveller, and welcome to my online resume. My name is Daan Onderstal and I could be your next front end developer. ",
}

let objectExperience = {
  visibility: false,
  text: "<br>IT Traineeship at Embrace IT<br> <br> <p align='right'> in Gouda (2018)</p> <br> <br> Communications intern at the Shared Cultural Heritage Programme of the Cultural Heritage Agency <br> <br> <p align='right'> in Amersfoort (2017)</p> <br> Guide and Segway instructor at Bestdam Segway Tours & iGo Segway Events <br> <br> <p align='right'> in Amsterdam (2015 - 2017)</p> <br> Online Editor at Nederlands Genootschap at Nieuwsgriekse Studies <br> <br> <p align='right'> in Amsterdam (2015)</p> <br> History teacher internship at Walterbosch College  <br> <br> <p align='right'> in Apeldoorn (2012)</p> <br> Hygiëne-coordinator at Van Otten AGF  <br> <br> <p align='right'> in Apeldoorn (2011 - 2013)</p>"
}

let objectCoreQualities= {
  visibility: false,
  text: "<br><p align=center>Enthousiastic<br><br>Hard working<br><br>Enjoys a challenge<br><br>VERY modest.<p>",
}

let objectEducation= {
  visibility: false,
  text: "<br>IT Traineeship at Embrace IT<br> <br> <p align='right'> in Gouda (2018)</p> <br>Masters in Public History at the University of Amsterdam <br> <br> <p align='right'>in Amsterdam (2016 - 2018)</p><br>Bachelors in History at the University of Amsterdam <br> <br> <p align='right'> in Amsterdam (2013 - 2016)</p><br> History Teacher at Windesheim University of Applied Sciences <br> <br> <p align='right'> in Zwolle (2011 - 2012)</p><br> Journalism at Windesheim University of Applied Sciences <br> <br> <p align='right'> in Zwolle (2010 - 2011)</p><br> HAVO at Koninklijke Scholengemeenschap<br> <br> <p align='right'> in Apeldoorn (2008 - 2010)</p><br> Gymnasium at Gymnasium Apeldoorn<br> <br> <p align='right'> in Apeldoorn (2004 - 2008)</p>"
}

let objectCertificates= {
  visibility: false,
  text: "<div align='center'><br> <b><em>Programming</em></b> <br>  <br> <div> <img src= ../img/icons/HTMLlogo.png class='logo'> <br> W3Schools HTML Certificate </div> <br> <div> <img src= ../img/icons/CSSlogo.png class='logo'> <br>W3Schools CSS Certificate </div> <br> <div> <img src= ../img/icons/JSlogo.png class='logo'> <br> W3Schools Javascript Certificate  </div> <br> <div> <img src= ../img/icons/JSlogo.png class='logo'> <br> W3Schools jQuery Certificate  </div> <br><br><b><em>Other</em></b>  <br> <div> <img src= ../img/icons/JSlogo.png class='logo'> <br> SCRUM Certificate  </div>  <br> <div> <img src= ../img/icons/JSlogo.png class='logo'> <br> TMAP Certificate  </div> </div>",
}

let objectSkills= {
  visibility: false,
  text: "<div align='center'><br> <b><em>Languages</em></b> <br> <br> <div> <img src= ../img/icons/if_flag-the-netherlands_748017.png> <br> Native speaker </div> <br> <div><img src= ../img/icons/if_flag-united-kingdom_748024.png> <br>Excellent </div> <br> <div> <img src= ../img/icons/if_flag-germany_748067.png> <br>Intermediate </div> <br> <div> <img src= ../img/icons/if_flag-russia2x_748044.png> <br>Beginner <br> (Это трудно!) </div> <div align='center'><br> <b><em>Programming</em></b> <br>  <br> <div> <img src= ../img/icons/HTMLlogo.png class='logo'> <br>Intermediate </div> <br> <div> <img src= ../img/icons/CSSlogo.png class='logo'> <br>Intermediate </div> <br> <div> <img src= ../img/icons/JSlogo.png class='logo'> <br>Beginner </div> </div>" ,
}

let objectInterests= {
  visibility: false,
  text: "<br>I've always had a strong interest in ancient religions and cultures. I'm especially enthousiastic about Phoenician, Egyptian and Roman history. To add to the list, I also have a penchant for medieval Netherlandish history, as well as the Byzantine Empire. Oh, and let's not forget World War 1, the Soviet Union and Communist China! <br> </br> Apart from history and politics, I'm also quite passionate about music and enjoy playing bass-guitar in my band, Juicepack. Soon performing in a sleazy bar near YOU! In the sparse free time I have left, I like playing strategic video games and reading books.",
}

let objectProfiles= {
  visibility: false,
  text: "<br><p><a href='https://www.linkedin.com/in/daan-onderstal-37364a15b/'><img src=../img/linkedin-logo.png class='center' id='LinkedInLogo'></p>",
}

let objectContact= {
  visibility: false,
  text: "<br><p align=center>Telephone:<br> 06-10546688 <br> <br>Email: <br>daanonderstal@hotmail.com<p>",
}

let objectGithubRepositories= {
  visibility: false,
  text: "",
}

//\\B// FUNCITES //

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

// Variabelen voor B-IV \\// Mogelijk allemaal in één functie douwen?
const btnAbout = document.getElementById("btnAbout")
const divAbout = document.getElementById("divAbout")

const btnExperience = document.getElementById("btnExperience")
const divExperience = document.getElementById("divExperience")

const btnCoreQualities = document.getElementById("btnCore Qualities")
const divCoreQualities = document.getElementById("divCore Qualities")

const btnEducation = document.getElementById("btnEducation")
const divEducation = document.getElementById("divEducation")

const btnCertificates = document.getElementById("btnCertificates")
const divCertificates = document.getElementById("divCertificates")

const btnSkills = document.getElementById("btnSkills")
const divSkills = document.getElementById("divSkills")

const btnInterests = document.getElementById("btnInterests")
const divInterests = document.getElementById("divInterests")

const btnProfiles = document.getElementById("btnProfiles")
const divProfiles = document.getElementById("divProfiles")

const btnContact = document.getElementById("btnContact")
const divContact = document.getElementById("divContact")

const btnGithubRepositories = document.getElementById("btnGithub Repositories")
const divGithubRepositories = document.getElementById("divGithub Repositories")

// B-IV \\ 
// Generieke knop-klikker functie
function btnClicker(object, button, relocation) {
  if (object.visibility === false) {
    textAbout.innerHTML = object.text
    object.visibility = true
    textAbout.appendChild(button)
    raLinks.classList.add("KlikRaLinks")
    raRechts.classList.add("KlikRaRechts")
    let btns = document.getElementsByClassName("btn btn-dark")
      for (i = 0; i < btns.length; ++i) {
        btns[i].style.display = "none"
        button.style.display = "block"
    }
  }
  else {
    textAbout.innerHTML =  ""
    object.visibility = false
    relocation.appendChild(button)
    relocation.insertBefore(button, relocation.childNodes[0])
    let btns = document.getElementsByClassName("btn btn-dark")
    raLinks.classList.remove("KlikRaLinks")
    raRechts.classList.remove("KlikRaRechts")
    for (i = 0; i < btns.length; ++i) {
      btns[i].style.display = "block"
    }
  }
}

// B-V \\ 
// Github API functie
fetch("https://api.github.com/users/Donderstal/repos")
    .then(response => response.json())
    .then(repositories => {
      const repoDiv = document.getElementById("textGithub Repositories")
      
      for (let repo of repositories) {
        const p = document.createElement("p")
        p.className = "GitHub"
        p.innerHTML = '<b>Repo name:</b> <a href=' + repo.html_url + '>' + repo.name + '<br>'
        p.innerHTML += ' <b>Description:</b> ' + repo.description + '<br>' 
        p.innerHTML += ' <b>Language(s):</b> ' + repo.language + '<br> <br>'
        repoDiv.appendChild(p)
      }
      repoDiv.style.display = "none"        
    })

function btnClickerGit(object, button, relocation) {
    if (object.visibility === false) {
      object.visibility = true
      textGithubRepositories = document.getElementById("textGithub Repositories")
      textGithubRepositories.style.display = "block"
      textGithubRepositories.appendChild(button)
      raLinks.classList.add("KlikRaLinks")
      raRechts.classList.add("KlikRaRechts")
      let btns = document.getElementsByClassName("btn btn-dark")
        for (i = 0; i < btns.length; ++i) {
          btns[i].style.display = "none"
          button.style.display = "block"
      }
    }
    else {
      textGithubRepositories.style.display = "none"
      object.visibility = false
      relocation.appendChild(button)
      relocation.insertBefore(button, relocation.childNodes[0])
      let btns = document.getElementsByClassName("btn btn-dark")
      raLinks.classList.remove("KlikRaLinks")
      raRechts.classList.remove("KlikRaRechts")
      for (i = 0; i < btns.length; ++i) {
        btns[i].style.display = "block"
      }
    }
  }

// Variabelen voor B-VI \\
const Kheper = document.getElementById("Kheper")
const raRechts = document.getElementById("RaRechts")
const raLinks = document.getElementById("RaLinks")
const logoLinks = document.getElementById("LeftLogo2")
const logoRechts = document.getElementById("RightLogo2")

// B-VI \\
// Functie/event listener voor Kheper
Kheper.addEventListener("click", function() {
  const mainContainer = document.getElementsByClassName("main-container")[0]
  const raColumn = document.getElementsByClassName("column")[0]
    mainContainer.style.visibility = "visible"
    raColumn.style.visibility = "visible"
      raLinks.classList.add("AniRaLinks")
      raRechts.classList.add("AniRaRechts")
      logoLinks.classList.add("AniLeftLogo")
      logoRechts.classList.add("AniRightLogo")
})


//\\C// EVENT LISTENERS //

// C-I \\ 
// Informatie-knoppen \\// Mogelijk allemaal in één functie douwen?
btnAbout.addEventListener("click", function() {
  btnClicker(objectAbout, btnAbout, divAbout)
})

btnExperience.addEventListener("click", function() {
  btnClicker(objectExperience, btnExperience, divExperience)
})

btnCoreQualities.addEventListener("click", function() {
  btnClicker(objectCoreQualities, btnCoreQualities, divCoreQualities)
})

btnEducation.addEventListener("click", function() {
  btnClicker(objectEducation, btnEducation, divEducation)
})

btnCertificates.addEventListener("click", function() {
  btnClicker(objectCertificates, btnCertificates, divCertificates)
})

btnSkills.addEventListener("click", function() {
  btnClicker(objectSkills, btnSkills, divSkills)
})

btnInterests.addEventListener("click", function() {
  btnClicker(objectInterests, btnInterests, divInterests)
})

btnProfiles.addEventListener("click", function() {
  btnClicker(objectProfiles, btnProfiles, divProfiles)
})

btnContact.addEventListener("click", function() {
  btnClicker(objectContact, btnContact, divContact)
})

btnGithubRepositories.addEventListener("click", function() {
  btnClickerGit(objectGithubRepositories, btnGithubRepositories, divGithubRepositories)
})
