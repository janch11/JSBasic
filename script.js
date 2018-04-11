var newInput



function addAttribute () {

    newInput = document.querySelector("input")

    newInput.setAttribute("disabled", "")
    newInput.setAttribute('name', 'email')

    newInput.removeAttribute("disabled")


}

addAttribute()

function toggleAttribute () {

    if( newInput.getAttribute("disabled")===null)
        newInput.setAttribute("disabled", "")
    else
        newInput.removeAttribute("disabled")

} toggleAttribute()
