
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



// const nom1 = Number( document.querySelector("#number1").value);
// const operat = document.querySelector("#operators");
// const nom2 =  Number( document.querySelector("#number2").value);
// const submiit = document.querySelector("#submit");
// const head1 = document.querySelector("#result");

// // const nom1 =  document.querySelector("#number1");
// // const operat =  document.querySelector("#operators");
// // const nom2 =   document.querySelector("#number2");
// // const submiit = document.querySelector("#submit");
// // const head1 = document.querySelector("#result");



// function calculated() {
//       switch (operat.value) {
//             case ("+"):
//                   let  sum = nom1 + nom2
//                   head1.innerHTML = "Answer this-----" + sum;
//                   break;

//             case ("-"):
//                   const  sub = nom1 + nom2
//                   head1.innerHTML = "Answer this-----" + sub;
//                   break;
//             case ("/"):
//                   const  div = nom1 + nom2
//                   head1.innerHTML = "Answer this-----" + din;
//                   break;
//             case ("*"):
//                   const  multi = nom1 + nom2
//                   head1.innerHTML = "Answer this-----" + multi;
//                   break;

//             default:
//                   console.log ("undefine operator")
//                   break;
//       }
// }




const submiit = document.querySelector("#submit");
const head1 = document.querySelector("#result");



function calculated() {
      const nom1 = Number(document.querySelector("#number1").value);
      const operat = document.querySelector("#operators").value;
      const nom2 = Number(document.querySelector("#number2").value);
      let calculatedValue;
      switch (operat) {
            case ("+"):
                  calculatedValue = nom1 + nom2;
                  break;

            case ("-"):
                  calculatedValue = nom1 - nom2;
                  break;
            case ("/"):
                  calculatedValue = nom1 / nom2;
                  break;
            case ("*"):
                  calculatedValue = nom1 * nom2;
                  break;

            default:
                  console.log("undefine operator")
                  break;
      }
      head1.innerHTML = "Result  " + calculatedValue
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



// const singin = document.querySelector("#sendto")
// const head2 = document.querySelector("#heading")

// function winter() {
//       const month = document.querySelector("#season");
//       const singin = document.querySelector("#sendto");
//       const head2 = document.querySelector("#heading");
//       // let saesons;
//       switch (month) {
//             case 'December':
//                   season = 'Winter';
//                   console.log(month)
//             break;
//             case 'January':
//                   season = 'Winter';
//                   console.log(month)
//             break;
//             case 'February':
//                   season = 'Winter';
//                console.log( month)
//             break;
//             case 'june':
//             case 'July':
//             case 'Agust':
//                   season = 'summer';

//             break;


//             default:
//                  console.log("spring") 
//                   break;
//       }
//       // head2.innerHTML = "Result  " + saesons
// }




function determineSeason() {
      const month = document.querySelector("#season").value.toLowerCase();
      const seasonDisplay = document.querySelector("#heading");
      
      let season;
  
      switch (month) {
          case 'december':
          case 'january':
          case 'february':
              season = 'Winter';
              break;
          case 'june':
          case 'july':
          case 'august':
              season = 'Summer';
              break;
          default:
              season = 'Spring';
              break;
      }
  
      seasonDisplay.innerHTML = "Result: " + season;
      const names = "Muhammad ABDULLAH";
      // console.log(season.toLowerCase());

  }
  








