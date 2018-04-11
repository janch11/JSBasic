function addElement(content) {

    content = content === undefined ? "Ala ma kota": content

    var bodyElement = document.querySelector("body")
    var newDiv = document.createElement("div")
    var textNode = document.createTextNode(content)
    newDiv.appendChild(textNode)
    bodyElement.appendChild(newDiv)

} addElement()
