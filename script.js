function addDiv () {

    var newDiv = document.createElement("div")
    var newDiv2 = document.createElement("div")
    var textNode = document.createTextNode("Hello")
    newDiv.appendChild(newDiv2)
    newDiv2.appendChild(textNode)

    document.body.appendChild(newDiv)
}
addDiv()











