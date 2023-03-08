// Переписать эту функцию используя оператор "?", "||";
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     };
// };

// Вариант 1
function checkAge(age) {
    return age >= 18 ? true : confirm('Родители разрешили?');
}
const access = checkAge(20);
console.log(access);

// Вариант 2
function checkAge(age) {
    return age >= 18 || confirm('Родители разрешили');
}
const access = checkAge(10);
console.log(access);
