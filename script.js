(function askMe() {

    var a = confirm("Czy chcesz podac swoje imie")

    if (a === true) // You can use only a becouse a is true of false
    {
        var imie = prompt("Podaj imie!")
        alert("Twoje imie to " + imie)
    }
    else
        alert("No to nie")
})()







