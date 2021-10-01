
function add(num1, num2) {
    return num1 + num1;
}

function multiply(num1, num2) {
    return num1 * num2;
}

// reduce 
const numbs = [32, 34, 33, 46, 66];
let sum = 0;
for (const num of numbs) {
    sum = sum + num;
}

const reducer = (previous, current) => previous + current;
numbs.reduce(reducer, 0)

const jinish = [
    { id: 1, name: 'Alta', price: 25 },
    { id: 2, name: 'nail polish', price: 300 },
    { id: 3, name: 'Powder', price: 250 },
    { id: 4, name: 'snow', price: 200 }
]

let total = 0;
for (const jini of jinish) {
    total = total + jini.price;
}

const jinishReducer = (previous, current) => previous + current.price;
const jinishTotal = jinish.reduce(jinishReducer, 0)

export { add, multiply }