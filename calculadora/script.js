let result = document.getElementById("result");
let query = document.getElementById("query");
result.innerHTML = 1000;
query.innerHTML = 10;

let AC = document.getElementById("ac");
AC.addEventListener('click', () => {
  result.innerHTML = "";
  query.innerHTML = "";
})

let numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', () => {
    query.innerHTML += numbers[i].innerHTML;
  })
}

let operators = document.getElementsByClassName("operator");
let operatorsArr = ["*", "/", "-", "+"];
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', () => {
    for (let j = 0; j < operatorsArr.length; j++) {
      if (query.innerHTML.substring(query.innerHTML.length - 1) === operatorsArr[j]) {
        return;
      }
    }
    query.innerHTML += operators[i].innerHTML;
  })
}

let equal = document.getElementById("equal");
equal.addEventListener("click", () => {
  console.log(eval(query.innerHTML));
  result.innerHTML = "";
  result.innerHTML = eval(query.innerHTML);
})
