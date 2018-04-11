function askMe() {

    var a = confirm("Czy chcesz podac swoje imie")

    if (a === true) {
        var imie = prompt("Podaj imie!")
        alert("Twoje imie to " + imie)
    }
    else
        alert("No to nie")
}

askMe()