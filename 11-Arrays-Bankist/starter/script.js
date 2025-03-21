'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(`----------MAP METHOD----------`);

// map method returns a new array
// const eurToUsd = 1.1;
// const movementsTousd = movements.map (function (value) {
//    return value * eurToUsd;
// });
// console.log(movements);
// console.log(movementsTousd);
// SAME BUT USING ARROW FUNCTION
// const eurToUsd = 1.1;
// const movementsTousd = movements.map(value => value * eurToUsd);
// console.log(movements);
// console.log(movementsTousd);
const diplayMovements = movements.map(
  (value, index, array) =>
    `Movement ${index + 1} you ${value > 0 ? 'deposited' : 'witdrew'}${Math.abs(
      value
    )}`
);
console.log(diplayMovements);

// const value = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for each method does not return a new array
// console.log(`------FOR EACH METHOD------`);
// value.forEach(function (value, index, array) {
//   if (value > 0) {
//     console.log(`Movement ${index + 1} you deposited ${value}`);
//   } else {
//     console.log(`Movement ${index + 1} you witdrawed ${Math.abs(value)}`);
//   }
//   console.log(array);
// });
/////////////////////////////////////////////////

// SLice and Splice methods
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['a', 'b', 'c', 'd', 'e'];
// // slice returns new Array leaving original untouched, splice returns new array altering existing array
// // console.log(arr);
// // console.log('array before splice');
// // console.log(arr2);
// // console.log('array before slice');
// // console.log('---------------');
// // console.log(arr.splice(2, 4));
// // console.log('new array returned by splice');
// // console.log(arr2.slice(2, 4));
// // console.log('new array returned by slice');
// // console.log('---------------');
// // console.log(arr);
// // console.log('original array after splice is modified');
// // console.log(arr2);
// // console.log('original array after slice is the same array');
// ----------------------------------------------------------------
// for loop

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(` you deposited ${movement}`);
//   } else {
//     console.log(` you witdrawed ${Math.abs(movement)}`);
//   }
// }
