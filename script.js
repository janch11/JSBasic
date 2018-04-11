function addDiv (content) {

    if(content===undefined){
        content="Hello"}

    var newDiv = document.createElement("div")
    var newDiv2 = document.createElement("div")
    var textNode = document.createTextNode(content)


    newDiv2.appendChild(textNode)
    newDiv.appendChild(newDiv2)
    document.body.appendChild(newDiv)
}



function addDivByInnerHtml() {
    document.body .innerHTML = "<div><div>Hello it's me </div></div>"

}
addDiv()

addDivByInnerHtml()





