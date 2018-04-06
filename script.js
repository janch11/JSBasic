var age = prompt()
var ageInteger = parseInt(age)

switch (ageInteger) {
    case 1:
        console.log(1)
        break;
    case "1":
        console.log(2)
        break;
    case 2:
        console.log(3)
        break;
    default:
        console.log(0)
}