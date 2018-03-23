(function() {
    /*
     *  add event listener menu to sidebar
     */
    const caret = document.createElement("span")
    caret.id = "sidebar-toggle-caret"
    caret.style.padding = "5px"
    caret.style.color = "gray"
    caret.style.fontWeight = "800"
    caret.style.fontSize = "20px"
    caret.style.userSelect = "none"
    caret.innerText = "<"
    
    const listenerContainer = document.createElement("div")
    listenerContainer.id = "listener-container"
    listenerContainer.style.display = "none"
    listenerContainer.style.padding = "10px"
    
    // because offsetWidth can return 0 if element (caret) was recently modified
    setTimeout(() => listenerContainer.style.marginRight = `${caret.offsetWidth}px`, 500)
    
    listenerContainer.style.alignSelf = "flex-start"

    const header = document.createElement("h2")
    header.innerText = "Event Listeners"
    listenerContainer.appendChild(header)

    const listeners = document.createElement("div")
    listeners.id = "event-listeners"
    listenerContainer.appendChild(listeners)

    const toggle = document.createElement("div")
    toggle.id = "sidebar-toggle"
    toggle.style.cursor = "pointer"
    
    toggle.onclick = e => {
        if (listenerContainer.style.display === "none") {
            listenerContainer.style.display = "inline-block"
            caret.innerText = ">"
        } else {
            listenerContainer.style.display = "none"
            caret.innerText = "<"
        }
    }

    toggle.appendChild(caret)

    const sidebar = document.createElement("div")
    sidebar.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
    sidebar.id = "sidebar"
    sidebar.style.display = "flex"
    sidebar.style.alignItems = "center"
    sidebar.style.justifyContent = "center"
    sidebar.style.background = "rgb(245, 245, 245)"
    sidebar.style.position = "fixed"
    sidebar.style.right = 0
    sidebar.style.height = "100%"
    sidebar.style.borderLeft = "1px solid lightgray"
    sidebar.style.zIndex = 999
    sidebar.style.overflowY = "auto"
    sidebar.appendChild(toggle)
    sidebar.appendChild(listenerContainer)

    const body = document.getElementsByTagName("body")[0]
    body.insertBefore(sidebar, body.firstChild)

    const highlightStyle = document.createElement("link")
    highlightStyle.rel = "stylesheet"
    highlightStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css"
    
    const highlightScript = document.createElement("script")
    highlightScript.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"
    highlightScript.onload = () => {
        Array
            .from(document.getElementsByTagName("code"))
            .forEach(e => hljs.highlightBlock(e))
            
            const listener = Element.prototype.addEventListener
            Element.prototype.addEventListener = function(eventType, callback) {
                listener.bind(this)(eventType, callback)
                                
                Array
                    .from(document.getElementsByTagName("code"))
                    .slice(-2)
                    .forEach(e => hljs.highlightBlock(e))
            }
    }

    const head = document.getElementsByTagName("head")[0]
    head.appendChild(highlightStyle)
    head.appendChild(highlightScript)

    /*
    *  set up hacked addEventListener method
    */
    const addEventListenerDefault = Element.prototype.addEventListener
   
    function addEventListener(eventType, callback) {
        const label = text => {
            const element = document.createElement("div")
            element.className = "label"
            element.style.color = "gray"
            element.style.fontSize = "14px"
            element.innerText = text

            return element
        }

        const htmlLabel = label("Source")
        const html = document.createElement("code")
        html.innerText = this.innerHTML
            ? this.outerHTML.replace(this.innerHTML, "...")
            : this.outerHTML

        const sourceBackground = html.style.backgroundColor
        const targetBackground = this.style.backgroundColor

        html.onmouseover = e => {
            html.style.backgroundColor = "rgba(0, 0, 255, 0.15)"
            this.style.backgroundColor = "rgba(0, 0, 255, 0.25)"
        }
        html.onmouseout = e => {
            html.style.backgroundColor = sourceBackground
            this.style.backgroundColor = targetBackground
        }
        
        const codeLabel = label(`On ${eventType}`)
        const code = document.createElement("code")
        code.innerText = callback
        
        const pre = document.createElement("pre")
        pre.id = callback.toString()
        
        pre.appendChild(htmlLabel)
        pre.appendChild(html)
        pre.appendChild(codeLabel)
        pre.appendChild(code)
        
        const listeners = document.getElementById("event-listeners")
        listeners.appendChild(pre)
        
        const wrapper = (...args) => {
            pre.style.background = "lightsalmon"
            setTimeout(() => pre.style.background = "none", 50)
            callback(...args)
            }
            
        addEventListenerDefault.bind(this)(eventType, wrapper)
    }

    Element.prototype.addEventListener = addEventListener
})()
