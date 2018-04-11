function addElement() {
    var bodyElement = document.querySelector("body")
    var newDiv = document.createElement("div")
    var textNode = document.createTextNode("Ala ma kota")
    newDiv.appendChild(textNode)
    bodyElement.appendChild(newDiv)

} addElement()
