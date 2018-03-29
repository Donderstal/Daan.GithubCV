/* ----INHOUDSOPGAVE ---- */
      //\\A// ARRAYS EN OBJECTEN //

      //\\B// FUNCITES //
          // B-I \\    // Creert knoppen
          // B-II \\   // Creert knoppen adhv btnList
          // B-III \\  // Creert divs adhv btnList
          // B-IV \\   // Generieke knop-klikker functie
          // B-V \\    // Github API functie
          // B-VI \\   // Github knop functie
          // B-VII \\  // Functie/event listener voor Kheper

      //\\C// EVENT LISTENERS //
          // C-I \\   // Informatie-knoppen


//\\A// ARRAYS & OBJECTEN //

const btnList = ["About", "Experience", "Core Qualities", "Education", "Certificates", "Skills", "Interests", "Profiles", "Contact", "Github Repositories", "Credits"]

const objectAbout = {
  visibility: false,
  text: "<br>Greetings internet traveller, and welcome to my online resume. My name is Daan Onderstal and I could be your next front end developer. ",
}

const objectExperience = {
  visibility: false,
  text: "<br>IT Traineeship at <b>Embrace IT</b><br> <br> <p align='right'> <i>in Gouda (2018)</i></p> <br> <br> Communications intern at the Shared Cultural Heritage Programme of the <b>Cultural Heritage Agency</b> <br> <br> <p align='right'> <i>in Amersfoort (2017)</i></p> <br> Guide and Segway instructor at <b>Bestdam Segway Tours & iGo Segway Events </b><br> <br> <p align='right'> <i>in Amsterdam (2015 - 2017)</i></p> <br> Online Editor at <b>Nederlands Genootschap van Nieuwsgriekse Studies </b><br> <br> <p align='right'> <i>in Amsterdam (2015)</i></p> <br> History teacher internship at <b>Walterbosch College </b> <br> <br> <p align='right'><i> in Apeldoorn (2012)</i></p> <br> Hygiëne-coordinator at <b>Van Otten AGF</b>  <br> <br> <p align='right'> <i>in Apeldoorn (2011 - 2013)</i></p>"
}

const objectCoreQualities= {
  visibility: false,
  text: "<br><p align=center>Enthousiastic<br><br>Hard working<br><br>Enjoys a challenge<br><br>Helpful<br><p>",
}

const objectEducation= {
  visibility: false,
  text: "<br>IT Traineeship at <b>Embrace IT</b><br> <br> <p align='right'><i> in Gouda (2018)</i></p> <br>Masters in Public History at the <b>University of Amsterdam</b> <br> <br> <p align='right'><i>in Amsterdam (2016 - 2018)</i></p><br>Bachelors in History at the <b>University of Amsterdam </b><br> <br> <p align='right'> <i>in Amsterdam (2013 - 2016)</i></p><br> History Teacher at <b>Windesheim University of Applied Sciences</b> <br> <br> <p align='right'><i> in Zwolle (2011 - 2012)</i></p><br> Journalism at <b>Windesheim University of Applied Sciences</b> <br> <br> <p align='right'><i> in Zwolle (2010 - 2011)</i></p><br> HAVO at <b>Koninklijke Scholengemeenschap</b><br> <br> <p align='right'><i> in Apeldoorn (2008 - 2010)</i></p><br> Gymnasium at <b>Gymnasium Apeldoorn</b><br> <br> <p align='right'><i> in Apeldoorn (2004 - 2008)</i></p>"
}

const objectCertificates= {
  visibility: false,
  text: "<div align='center'><br> <b><em>Programming</em></b> <br>  <br> <div> <img src= ./img/icons/HTMLlogo.png class='logo'> <br> W3Schools HTML Certificate </div> <br> <div> <img src= ./img/icons/CSSlogo.png class='logo'> <br>W3Schools CSS Certificate </div> <br> <div> <img src= ./img/icons/JSlogo.png class='logo'> <br> W3Schools Javascript Certificate  </div> <br> <div> <img src= ./img/icons/JSlogo.png class='logo'> <br> W3Schools jQuery Certificate  </div> <br><br><b><em>Other</em></b>  <br> <div><br> SCRUM Certificate  </div>  <br> <div><br> TMAP Certificate  </div> </div>",
}

const objectSkills= {
  visibility: false,
  text: "<div align='center'><br> <b><em>Languages</em></b> <br> <br> <div> <img src= ./img/icons/if_flag-the-netherlands_748017.png> <br> Native speaker </div> <br> <div><img src= ./img/icons/if_flag-united-kingdom_748024.png> <br>Excellent </div> <br> <div> <img src= ./img/icons/if_flag-germany_748067.png> <br>Intermediate </div> <br> <div> <img src= ./img/icons/if_flag-russia2x_748044.png> <br>Beginner <br> (Это трудно!) </div> <div align='center'><br> <b><em>Programming</em></b> <br>  <br> <div> <img src= ./img/icons/HTMLlogo.png class='logo'> <br>Intermediate </div> <br> <div> <img src= ./img/icons/CSSlogo.png class='logo'> <br>Intermediate </div> <br> <div> <img src= ./img/icons/JSlogo.png class='logo'> <br>Beginner </div> </div>" ,
}

const objectInterests= {
  visibility: false,
  text: "<br>I've always had a strong interest in ancient religions and cultures. I'm especially enthousiastic about Phoenician, Egyptian and Roman history. To add to the list, I also have a penchant for medieval Netherlandish history, as well as the Byzantine Empire. Oh, and let's not forget World War 1, the Soviet Union and Communist China! <br> </br> Apart from history and politics, I'm also quite passionate about music and enjoy playing bass-guitar in my band, Juicepack. Soon performing in a sleazy bar near YOU! In the sparse free time I have left, I like playing strategic video games and reading books.",
}

const objectProfiles= {
  visibility: false,
  text: "<br><p><a href='https://www.linkedin.com/in/daan-onderstal-37364a15b/'><img src=./img/linkedin-logo.png class='center' id='LinkedInLogo'></p>",
}

const objectContact= {
  visibility: false,
  text: "<br><p align=center>Telephone:<br> 06-10546688 <br> <br>Email: <br>daanonderstal@hotmail.com<p>",
}

const objectGithubRepositories= {
  visibility: false,
  text: "",
}

const objectCredits= {
  visibility: false,
  text: "<br>Embrace IT logo as designed by <b>hummandc</b> <br> <br> Egyptian symbols made by <a href='https://en.wikipedia.org/wiki/User:Jeff_Dahl?rdfrom=commons:User:Jeff_Dahl'><b> Jeff Dahl </b></a> <br> <br> Background image retrieved from <a href='https://www.fluentin3months.com/siwa/'><b>fluentin3months.com</b><a>",
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
    mainContainer.classList.add("AniFadeIn")
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
    mainContainer.classList.remove("AniFadeIn")
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
        p.innerHTML = '<br><b>Repo name:</b> <a href=' + repo.html_url + '>' + repo.name + '<br>'
        p.innerHTML += ' <b>Description:</b> ' + repo.description + '<br>' 
        p.innerHTML += ' <b>Language(s):</b> ' + repo.language + '<br>'
        repoDiv.appendChild(p)
      }
      repoDiv.style.display = "none"        
    })


// B-VI \\ 
// Github knop functie
function btnClickerGit(object, button, relocation) {
    if (object.visibility === false) {
      object.visibility = true
      textGithubRepositories = document.getElementById("textGithub Repositories")
      textGithubRepositories.style.display = "block"
      textGithubRepositories.appendChild(button)
      mainContainer.classList.add("AniFadeIn")
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
      mainContainer.classList.remove("AniFadeIn")
      for (i = 0; i < btns.length; ++i) {
        btns[i].style.display = "block"
      }
    }
  }

// Variabelen voor B-VII \\
const Kheper = document.getElementById("Kheper")
const raRechts = document.getElementById("RaRechts")
const raLinks = document.getElementById("RaLinks")
const logoLinks = document.getElementById("LeftLogo2")
const logoRechts = document.getElementById("RightLogo2")
const mainContainer = document.getElementsByClassName("main-container")[0]
const raColumn = document.getElementsByClassName("column")[0]

// B-VII \\
// Functie/event listener voor Kheper
Kheper.addEventListener("click", function() {
      mainContainer.style.visibility = "visible"
      mainContainer.classList.add("AniButtonIn")
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

btnCredits.addEventListener("click", function() {
  btnClicker(objectCredits, btnCredits, divCredits)
})

btnGithubRepositories.addEventListener("click", function() {
  btnClickerGit(objectGithubRepositories, btnGithubRepositories, divGithubRepositories)
})
