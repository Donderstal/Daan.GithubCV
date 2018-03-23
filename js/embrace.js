const embrace = (function() {
  function DOMify(htmlString) {
    const template = document.createElement("template")
    template.innerHTML = htmlString

    return template.content.firstElementChild
  }

  return {
    DOMify: DOMify
  }
})()
