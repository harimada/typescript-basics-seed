// const pizzas = [
//     {
//         name : 'Pepporini',
//         toppings: ['pepporini']
//     },
//     {
//         name : 'Dominos',
//         toppings: ['pepporini']
//     },
//     {
//         name : 'PizzaHut Pizzas',
//         toppings: ['pepporini']
//     }

// ];

// const pizzas2 = [
//     {
//         name : 'Pepporini-2',
//         toppings: ['pepporini-2']
//     },
//     {
//         name : 'Dominos-2',
//         toppings: ['pepporini']
//     },
//     {
//         name : 'PizzaHut Pizzas-2',
//         toppings: ['pepporini']
//     }

// ];

// const mappedPizzas = pizzas.map(pizza =>
//      pizza.name.toUpperCase()
// );

// const mappedPizzas1 = pizzas.map(function(pizza){
// return pizza.name.toUpperCase();
// }

// );

//console.log(mappedPizzas);

// const pizza = {
//     name: 'Blazzing Inferno',
//     getName: function(){
//         setTimeout(() => {
//             console.log(this.name);
//         },1000);
//     }
// };

//console.log(pizza.getName());

function multiply(a: number, b: number = 25) {
  return a * b;
}

//console.log(multiply(2,5));

// const pizza = {
//     name: 'Pepperoni',
//     price: 15,
//     getName(){
//     return this.name;
//     }
// };

// const pizza = {
//     name: 'pepperoni',
//     price:15,
//     getName: function(){
//         return this.name;
//     }
// }

// console.log(pizza.getName());

// const toppings = ['pepperoni'];

// const order = {
//     pizza: pizza,
//     toppings: toppings
// }

// function createOrder(pizza:any, toppings:any){
//     return {pizza,toppings};
// }

// console.log("order-->",createOrder(pizza,toppings));

// () =>{
//     console.log('arrow function');
// }

// function sumAll(message:any){
//     console.log(message);

// }

// const toppings = ['bacon', 'chilli'];

// const newToppings =  ['pepperoni'];

// const allToppings = [...toppings, ...newToppings];

// console.log(allToppings);

// const pizza = {
//   name: "Pepperoni",
//   toppings: ["Pepperoni"]
// };

// function order({ name:pizzaName, toppings: pizzaToppings }) {
// console.log(pizzaName,pizzaToppings);
// return {pizzaName,pizzaToppings};
// }



// const {pizzaName, pizzaToppings} = order(pizza);



// const toppings = ['pepperoni','bacon','chilli'];

// const [first, second, third] = toppings;

// function logToppings([first, second, third]:any){
//     console.log(first,second,third);
// }

// logToppings(toppings);


parseInt('15',10);