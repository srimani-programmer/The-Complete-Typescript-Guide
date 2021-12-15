function add(num1, num2) {
    return num1 + num2;
}
document.addEventListener('DOMContentLoaded', function () {
    var value1 = document.getElementById("num1");
    var value2 = document.getElementById("num2");
    var button = document.querySelector("button");
    button.addEventListener("click", function () {
        console.log(add(parseInt(value1.value), parseInt(value2.value)));
    });
});
// if (button) {
//     button.addEventListener("click", function () {
//       console.log(add(parseInt(value1.value), parseInt(value2.value)));
//     });
// }
