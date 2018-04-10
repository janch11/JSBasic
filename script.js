

var myCar =
    {
        year:  2004,
        make: "Opel",
        model: "Vectra",
        engine: 1.9,
        color: "blue",
    }

function carService(car) {

    car.color = prompt('Wpisz kolor na  jaki chcesz przemalowac auto :) ')
    return myCar

}

var newCar = carService(myCar)

alert("Hello you car color is" + " " + myCar.color)

console.log(myCar)