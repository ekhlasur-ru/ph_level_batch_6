//Role Base Access COntrol using array some and includes method

// const currentUserRole = ["user", "editor"];
// const featureUserRole = ["admin", "manager"];
// const canAccess = currentUserRole.some((rule) =>
//   featureUserRole.includes(rule)
// );
// console.log(canAccess);  //false

const currentUserRole = ["user", "editor", "admin"];
const featureUserRole = ["admin", "manager"];
const canAccess = currentUserRole.some((rule) =>
  featureUserRole.includes(rule)
);
console.log(canAccess); //true

//array.from()

// const arr = Array.from({ length: 10 });
// console.log(arr);  //

const arr = Array.from({ length: 10 }).fill(null);
//   .map((_, index) => index + 1);
console.log(arr);

const Arr = Array.from(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  (value, i) => value * value
);
console.log(Arr);

const rang = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) + 1 },
    (_, i) => start + i * step
  );
console.log(rang(10, 100, 5));


