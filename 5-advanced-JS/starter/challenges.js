// const Person = function(name, yearOfBirth, job){
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   this.calculateAge = function(){
//     console.log(2019 - this.yearOfBirth);
//   }
// }

//
// let john = new Person('John', 1990, 'teacher')
//
// john.calculateAge()
//
//
// let jane = new Person('Jane', 1969, 'designer')
//
// let mark = new Person('Mark', 1948, 'retired');
//
// jane.calculateAge();
// mark.calculateAge();
//
// let personProto = {
//   calculateAge: function(){
//     console.log(2019 - this.yearOfBirth);
//   }
// };
//
// let john = Object.create(personProto);
// john.name = "John";
// john.yearOfBirth = 1985;
// john.job = "teacher";
//
// let jane = Object.create(personProto, {
//   name: {value: "Jane"},
//   yearOfBirth: {value: 1985},
//   job: {value: "Police Woman"}
// })
//
// function ageQuestion(age){
//   if (age >= 18){
//     return function(name){
//       console.log(name + ' you are old enough to buy alcohol')
//     }
//   }
//   else if ( age < 18){
//     return function(name){
//       console.log(name + ' you are not old enough to buy alcohol')
//     }
//   }
// }
//
// let underage = ageQuestion('17')
// let overage = ageQuestion('21')
//
// underage('Amy')
// overage('John')
//
// ageQuestion('15')("Tom")
//
//
//
// function interviewQuestion(job){
//   if (job === 'designer'){
//     return function(name){
//       console.log(name + ", can you please explain what UX design is?")
//     }
//   }
//     else if (job === 'teacher'){
//       return function(name){
//         console.log('What subject do you teach, ' + name + '?')
//       }
//     }
//       else  {
//         return function(name){
//           console.log('Hello ' + name + ', what do you do?');
//         }
//       }
//     }
//
//
// let teacherQuestion = interviewQuestion('teacher');
//
// let designerQuestion = interviewQuestion('designer');
//
// let generalQuestion = interviewQuestion('nurse');
//
// teacherQuestion('John');
//
// designerQuestion('Jane')
//
// generalQuestion("Amy")
//
// (function(){
//   let score = Math.random() * 10;
//
//   console.log(score, score >=5);
//
// })();
//
// (function(goodLuck){
//   let score = Math.random() * 10;
//   console.log(score, score >= 5 + goodLuck)
// })(5);
//
//
// let years = [1990, 1965, 1937, 2005, 2000];
//
// function arrayCalc(arr, fn){
//   let arrRes = [];
//   for (let i = 0; i< arr.length; i++){
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }
//
// function calculateAge(el){
//   return 2019 - el;
// }
//
// // function isFullAge(el){
// //   return el >= 18;
// // }
//
// function isFullAge(limit, el){
//   return el >= limit;
// }
//
// let ages = arrayCalc(years, calculateAge);
//
// let fullAges = arrayCalc(ages, isFullAge);
//
// let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan)

//
// function retirement(retirementAge){
//   let a = ' years left until retirement.';
//   return function(yearOfBirth){
//     let age = 2019 - yearOfBirth;
//     console.log((retirementAge - age) + a);
//   }
// }
//
// let retirementUS = retirement(66);
// let retirementGermany = retirement(65);
// let retirementIceland = retirement(67);
//
// retirementUS(1985);
// retirementGermany(1985);
// retirementIceland(1985);
//
//
// function interviewQuestion(job){
//   let a = ' can you please explain what UX design is?';
//   let b = ' What subject do you teach?'
//   let c = ' Hello what do you do?'
//   return function(name){
//     if(job === 'designer'){
//       console.log(name + a);
//     }
//     else if (job === 'teacher'){
//       console.log(name + b);
//     }
//     else {
//       console.log(name + c)
//     }
//   }
// }
//
// let askDriver = interviewQuestion('driver')
// let askTeacher = interviewQuestion('teacher')
//
// askDriver("John")
// askTeacher('Jane')
//
// interviewQuestion('designer')('Amy')
//
// let john = {
//   name: 'John',
//   age: 26,
//   job: 'teacher',
//   presentation: function(style, timeOfDay){
//     if (style === 'formal'){
//       console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.' );
//     } else if (style === 'friendly'){
//       console.log('Hey! What\'s up? I\'m ' + this.name + ' I\'m a '+ this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//     }
//   }
// }
//
// let emily = {
//   name: 'Emily',
//   age: 35,
//   job: 'designer'
// };
//
// john.presentation('formal', 'morning');
// john.presentation('friendly', 'afternoon');
//
// john.presentation.call(emily, 'friendly', 'morning');
//
// let johnFriendly = john.presentation.bind(john, 'friendly');
//
// johnFriendly('morning');
// johnFriendly('afternoon');
//
// let emilyFormal = john.presentation.bind(emily, 'formal');
//
// emilyFormal('afternoon');
// emilyFormal('morning');
// function interviewQuestion(job){
//   if (job === 'designer'){
//     return function(name){
//       console.log(name + ", can you please explain what UX design is?")
//     }
//   }
//     else if (job === 'teacher'){
//       return function(name){
//         console.log('What subject do you teach, ' + name + '?')
//       }
//     }
//       else  {
//         return function(name){
//           console.log('Hello ' + name + ', what do you do?');
//         }
//       }
//     }
//
// let questions = ["What is the closest planet to Earth?", "What is the capital of the UK?", "What Month is Christmas Day?"]
//
// let answers = [["1. Mars", "2. Venus", "3. Mercury"], ["1. London", "2. Belfast", "3. Manchester"], ["1. June", "2. March", "3. December"]];
//
// let correctAnswers = [j]
//
// function Question(question, answers, correctAns){
//   this.question = question;
//   this.answers = answers;
//   this.correctAns = correctAns;
// }
//
// let question1Ans = ["Mars", "Venus", "Mercury"]
// let question1 = new Question("What is the closest planet to Earth?", question1Ans, question1Ans[1]);
//
// let question2Ans = ["London", "Belfast", "Manchester"]
//
// let question2 = new Question("What is the capital of UK?", question2Ans, question2Ans[0]);
//
// prompt(question2.question)
