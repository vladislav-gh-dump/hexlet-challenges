// BEGIN (write your solution here)
// 1 вариант решения
const fib = (num) => {
  if (num === 0) {
    return 0;
  }
  if (num === 1 || num === 2) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
};

// 2 вариант решения
// const fib = (num) => {
//   if (num === 0) {
//     return 0;
//   }
//   if (num === 1 || num === 2) {
//     return 1;
//   }
//
//   let first = 1,
//       second = 1,
//       result = 0;
//
//   for (let i = 3; i <= num; i++) {
//     result = first + second;
//     first = second;
//     second = result;
//   }
//
//   return result;
// };

export default fib;
// END
