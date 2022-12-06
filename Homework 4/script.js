//task 1

// function calcRectangleArea(widght, height) {
//   let res = 0;

//   if (isNaN(widght) || isNaN(height)) {
//     throw new Error("Wrong type");
//   }
//   res = widght * height;
//   return res;
// }
// try {
//   calcRectangleArea("txt", 21);
// } catch (error) {
//   console.log(error.message);
// }

//task 2
// let age = prompt("Enter your age");
// function checkAge(age) {
//   if (age == "") {
//     throw new Error("The field is empty");
//   } else if (isNaN(age)) {
//     throw new Error("Wrong value");
//   } else if (age < 14) {
//     throw new Error("You are not old enough");
//   }
//   console.log("access allowed");
// }

// try {
//   checkAge(age);
// } catch (error) {
//   alert(error.message);
// }

//task 3
// function showNameMonth(month) {
//   month -= 1;
//   const monthList = [
//     "january",
//     "february",
//     "march",
//     "april",
//     "may",
//     "june",
//     "july",
//     "august",
//     "september",
//     "october",
//     "november",
//     "december",
//   ];
//   if (month == "") {
//     throw new Error("The field is empty");
//   } else if (isNaN(month)) {
//     throw new Error("Wrong value");
//   } else if (month > 12 || month < 0) {
//     throw new Error("Wrong number");
//   }
//   for (let i = 0; i < 12; i++) {
//     if (month == i) {
//       console.log(
//         monthException.message + " " + monthList[i] + " " + (month + 1)
//       );
//     }
//   }
// }

// class monthException {
//   constructor(message) {
//     this.name = monthException;
//   }
// }

// try {
//   showNameMonth(14);
// } catch (error) {
//   console.log(error.message);
// }

//task 4
// const ids = [21, 4, 33, -6, 5];
// function showUserId(id) {
//   if (id < 0) {
//     throw new Error("Id must not be negative: " + id);
//   }
//   id = new Object();
//   return id;
// }

// function showUsersId(ids) {
//   let result = [];
//   for (let i = 0; i < ids.length; i++) {
//     if (showUserId(ids[i]) > 0) {
//       ids.length -= 1;
//       result.push(showUserId(ids[i]));
//     }
//     console.log(result[i]);
//   }
// }

// try {
//   showUsersId(ids);
// } catch (error) {
//   console.log(error.message);
// }
