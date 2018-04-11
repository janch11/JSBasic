function addDiv (content) {

    if(content===undefined){
        content="Hello"}

    var newDiv = document.createElement("div")
    var newDiv2 = document.createElement("div")
    var textNode = document.createTextNode(content)
    newDiv.appendChild(newDiv2)
    newDiv2.appendChild(textNode)

    document.body.appendChild(newDiv)
}
addDiv()











