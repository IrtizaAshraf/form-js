
// const names = document.getElementByID('fristname')
// const name2 = document.getElementByID('lastname')
// const emails = document.getElementByID('maild')
// const submit = document.getElementByID('send')
// const h3 = document.getElementByID('head') 

// console.log( "hello " + names + name2 + emails)
// function user() {
//       console.log("Hello " + names + name2 + emails)
//       h3.innerHTML = "Hello " + names + name2

      
//Question num 1
// }

// const names = document.querySelector("#fristname")
// const namez = document.querySelector("#lastname")
// const emails = document.querySelector("#maild")
// const submit = document.querySelector("#send")
// const h3 = document.querySelector("#head")

// //Example
// function user(){
//     console.log("Hello " + names.value   )
//     console.log("Hello " + namez.value   )
//     console.log("Hello " +  emails.value )
// //     h3.innerHTML = "Hellos " + names + namez + emails 
// }


// const num1 = Number( document.querySelector("#number1").value);
// const operator = operator ( document.querySelector("#operators").value);
// const num2 =  Number( document.querySelector("#number2").value);
// const submint = document.querySelector("#submit");
// const head = document.querySelector("#result");

// function calculate() {
//       let result;

//       switch (operator) {
//             case "+":
//                   result = num1 + num2;
//                   head.innerHTML = "your ansewr is" + result
//                   break;
//             case "-":
//                   result = num1 - num2;
//                   head.innerHTML = "your ansewr is" + result
//                   break;
//             case "*":
//                   result = num1 * num2;
//                   head.innerHTML = "your ansewr is" + result
//                   break;
//             case "/":
//                   if (num2 !== 0) {
//                         result = num1 / num2;
//                         head.innerHTML = "your ansewr is" + result
//                   } else {
//                         return "Cannot divide by zero.";
//                   }
//                   break;
//             default:
//                   return "Invalid operator.";
//       }
//  head.innerHTML =  result

// }


const nom1 =  document.querySelector("#number1");
const operat =  document.querySelector("#operators");
const nom2 =   document.querySelector("#number2");
const submiit = document.querySelector("#submit");
const head1 = document.querySelector("#result");



function calculated() {
      switch (operat.value) {
            case ("+"):
                  const  sum = nom1.value + nom2.value
                  head1.innerHTML = "Answer this-----" + sum;
                  break;

            case ("-"):
                  const  sub = nom1.value + nom2.value
                  head1.innerHTML = "Answer this-----" + sub;
                  break;
            case ("/"):
                  const  div = nom1.value + nom2.value
                  head1.innerHTML = "Answer this-----" + din;
                  break;
            case ("*"):
                  const  multi = nom1.value + nom2.value
                  head1.innerHTML = "Answer this-----" + multi;
                  break;
      
            default:
                  console.log ("undefine operator")
                  break;
      }
}


// console.log(num1 +  operator + num2 + result )
// head.innerHTML ="Results" + result.value




// let result = calculate(num1, num2, operator);
// document.write(result);



// function calculate(num1, num2, operator) {
//       let result;

//       switch (operator) {
//             case "+":
//                   result = num1 + num2;
//                   break;
//             case "-":
//                   result = num1 - num2;
//                   break;
//             case "*":
//                   result = num1 * num2;
//                   break;
//             case "/":
//                   if (num2 !== 0) {
//                         result = num1 / num2;
//                   } else {
//                         return "Cannot divide by zero.";
//                   }
//                   break;
//             default:
//                   return "Invalid operator.";
//       }

//       return `Result: ${result}`;
// }

// // Example usage
// let num1 = parseFloat(prompt("Enter the first number:"));
// let operator = prompt("Enter the operator (+, -, *, /):");
// let num2 = parseFloat(prompt("Enter the second number:"));


// let result = calculate(num1, num2, operator);
// document.write(result);



// const names = document.querySelector("#fristname");
// const name2 = document.querySelector('#lastname');
// const email = document.querySelector('#email');
// const login = document.querySelector('#sbmit');



// console.log(names.value);
// console.log(name2.value);
// console.log(email.value);
// console.log(login.value);

// function user() {
//       console.log ("hello " + names )
      
// }


// function User( ) {
//    console.log("hello user");
// //     console.log(email.value);
// //     console.log(names.value);
// //     console.log(name2.value);
// // //     console.log(login);
// }