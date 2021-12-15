function add(num1: number, num2: number){
    return num1 + num2;
}

document.addEventListener('DOMContentLoaded', function(){
    const value1 = document.getElementById("num1")! as  HTMLInputElement;
    const value2 = document.getElementById("num2")! as HTMLInputElement;
    const button = document.querySelector("button");
    button.addEventListener("click", function () {
        console.log(add(parseInt(value1.value), parseInt(value2.value)));
      })
  });
// if (button) {
//     button.addEventListener("click", function () {
//       console.log(add(parseInt(value1.value), parseInt(value2.value)));
//     });
// }