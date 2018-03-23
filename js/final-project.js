(function() {
  // TODO: load CV tab

  // TODO: load portfolio tab

  // EVENT LISTENERS
  const tabSwitchAnimationDuration = 750
  document.addEventListener("DOMContentLoaded", function() {
    $("[data-toggle='tooltip']").tooltip()

    // scrollspy
    $("body").scrollspy({target: "#spy"})

    $(".cv").show(tabSwitchAnimationDuration, function() {
      $(this).animate({opacity: 1.0})
    })
  })

  const cvTab = document.getElementById("tab-cv")
  const portfolioTab = document.getElementById("tab-portfolio")

  const tabListener = event => {
    const toShowClass = event.target.id === "tab-cv"
      ? "cv"
      : "portfolio"

    const toHideClass = event.target.id === "tab-cv"
      ? "portfolio"
      : "cv"

    $(`.${toHideClass}`)
      .animate({opacity: 0.0})
      .hide(tabSwitchAnimationDuration, function() {
        $(`.${toShowClass}`).show(tabSwitchAnimationDuration, function() {
          $(this).animate({opacity: 1.0})
      })
    })
  }

  cvTab.addEventListener("click", tabListener)
  portfolioTab.addEventListener("click", tabListener)

  for (let tab of document.getElementsByClassName("tab")) {
    tab.addEventListener("click", event => {
      const element = event.target
  
      if (!element.classList.contains("active")) {
        Array
          .from(document.getElementsByClassName("tab active"))
          .forEach(t => t.classList.remove("active"))
        
  
      element.classList.add("active")
      }
    })
  }
})()
