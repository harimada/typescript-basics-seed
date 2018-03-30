const pizzas = [
    {
        name : 'Pepporini',
        toppings: ['pepporini']
    },
    {
        name : 'Dominos',
        toppings: ['pepporini']
    },
    {
        name : 'PizzaHut Pizzas',
        toppings: ['pepporini']
    }
    
];

const pizzas2 = [
    {
        name : 'Pepporini-2',
        toppings: ['pepporini-2']
    },
    {
        name : 'Dominos-2',
        toppings: ['pepporini']
    },
    {
        name : 'PizzaHut Pizzas-2',
        toppings: ['pepporini']
    }
    
];

const mappedPizzas = pizzas.map(pizza =>
     pizza.name.toUpperCase()
);

const mappedPizzas1 = pizzas.map(function(pizza){
return pizza.name.toUpperCase();
}
    
);



console.log(mappedPizzas);



const pizza = {
    name: 'Blazzing Inferno',
    getName: function(){
        setTimeout(() => {
            console.log(this.name);
        },1000);
    }
};

console.log(pizza.getName());




