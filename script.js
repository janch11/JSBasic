function addClass () {

    var newDiv = document.querySelector("div")

    newDiv.className = "new2"

    newDiv.classList.add("new")
    newDiv.classList.add("new1")
    newDiv.classList.remove("new1")

}addClass()